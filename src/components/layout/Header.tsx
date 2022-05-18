import React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { ResponsiveImage } from '../../common/types';
import DeviceContext from '../../contexts/DeviceContext';

const SWITCH_DELAY = 4000;

const DEFAULT_IMAGE_STATE: HeaderImageState = {
  index: 0,
  isLoading: true,
  isSwitching: false,
  appearedAt: undefined,
};

type HeaderProps = {
  title: string,
  subtitle?: string,
  description?: string,
  images: ResponsiveImage[],
};

type HeaderImageState = {
  index: number,
  isLoading: boolean,
  isSwitching: boolean,
  appearedAt: number | undefined,
};

/**
 * Header component.
 *
 * @component
 * @param {string} title
 * @param {string} [subtitle]
 * @param {string} [description]
 * @param {Array} images
 * @return {React.ReactNode}
 */
const Header = ({
  title,
  subtitle,
  description,
  images,
}: HeaderProps) => {
  const deviceType = React.useContext(DeviceContext);

  const [currentImage, setCurrentImage] = React.useState<HeaderImageState | undefined>(undefined);
  const [preloadImage, setPreloadImage] = React.useState<HeaderImageState | undefined>(undefined);

  const [lastTimeout, setLastTimeout] = React.useState<NodeJS.Timeout | undefined>(undefined);

  /**
   * Clear scheduled image switching.
   *
   * @return {void}
   */
  const clearSwitching = (): void => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
  };

  /**
   * Schedule image switching.
   *
   * @return {void}
   */
  const scheduleSwitching = (): void => {
    if (currentImage?.appearedAt) {
      clearSwitching();

      const scheduledTimeout = setTimeout(
        () => {
          setCurrentImage({
            ...currentImage as HeaderImageState,
            isSwitching: true,
          });
        },
        currentImage.appearedAt + SWITCH_DELAY - Date.now(),
      );

      setLastTimeout(scheduledTimeout);
    }
  };

  /**
   * Initialize image states.
   *
   * @return {void}
   */
  const initializeImages = (): void => {
    setCurrentImage(DEFAULT_IMAGE_STATE);
    setPreloadImage(undefined);

    clearSwitching();
  };

  /**
   * Handle the loading of the current image.
   *
   * @return {void}
   */
  const handleCurrentImageLoad = (): void => {
    if (currentImage?.isLoading) {
      setCurrentImage({
        ...currentImage as HeaderImageState,
        isLoading: false,
        appearedAt: Date.now(),
      });

      if (images.length > 1) {
        setPreloadImage({
          ...DEFAULT_IMAGE_STATE,
          index: 1,
        });
      }
    }
  };

  /**
   * Handle the loading of the preload image.
   *
   * @return {void}
   */
  const handlePreloadImageLoad = (): void => {
    setPreloadImage({
      ...preloadImage as HeaderImageState,
      isLoading: false,
    });

    scheduleSwitching();
  };

  /**
   * Handle image switching after the animation ends.
   *
   * @return {void}
   */
  const handleSwitchingImages = (): void => {
    if (!currentImage || !preloadImage) return;

    setCurrentImage({
      ...preloadImage as HeaderImageState,
      appearedAt: Date.now(),
    });

    let nextIndex = 0;
    if (images[preloadImage.index + 1]) {
      nextIndex = preloadImage.index + 1;
    }

    setPreloadImage({
      ...DEFAULT_IMAGE_STATE,
      index: nextIndex,
    });

    setLastTimeout(undefined);
  };

  React.useEffect(initializeImages, [images]);

  return (
    <header className={styles['container']}>
      {preloadImage && (
        <img
          src={images[preloadImage.index][deviceType]}
          alt="תמונת הרקע הבאה"
          onLoad={handlePreloadImageLoad}
          className={styles['image']}
          aria-hidden
        />
      )}

      {currentImage && (
        <img
          src={images[currentImage.index][deviceType]}
          alt="תמונת הרקע הנוכחית"
          onLoad={handleCurrentImageLoad}
          onAnimationEnd={handleSwitchingImages}
          className={classNames(
            styles['image'],
            currentImage.isSwitching && styles['image_fade-out'],
          )}
          aria-hidden
        />
      )}

      <div className={styles['inner-container']}>
        <h1 className={styles['title']}>
          {title}

          {subtitle && (
            <span className={styles['subtitle']}>
              {subtitle}
            </span>
          )}
        </h1>

        {description && (
          <p className={styles['description']}>
            {description}
          </p>
        )}
      </div>

      <div
        className={classNames(
          styles['loading-overlay'],
          (!currentImage || currentImage.isLoading) && styles['loading-overlay_visible'],
        )}
      />
    </header>
  );
};

export default Header;
