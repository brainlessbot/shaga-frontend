import React from 'react';
import classNames from 'classnames';
import styles from './AlbumViewer.module.scss';
import { Album } from '../../common/types';

type AlbumViewerProps = {
  albumData: Album,
  isVisible: boolean,
  closeAlbumViewer: () => void,
};

/**
 * Album Viewer component.
 *
 * @component
 * @param {Album} albumData
 * @param {boolean} isVisible
 * @param {Function} closeAlbumViewer
 * @return {React.ReactNode}
 */
const AlbumViewer = ({ albumData, isVisible, closeAlbumViewer }: AlbumViewerProps) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  /**
   * Update relevant state after the image was loaded.
   *
   * @return {void}
   */
  const handleImageLoad = (): void => setIsLoading(false);

  /**
   * Handle click on the next button.
   *
   * @return {void}
   */
  const handleNextClick = (): void => {
    if (albumData.photos[currentIndex + 1]) {
      setIsLoading(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  /**
   * Handle click on the next button.
   *
   * @return {void}
   */
  const handlePreviousClick = (): void => {
    if (albumData.photos[currentIndex - 1]) {
      setIsLoading(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  /**
   * Hide the component when the user clicks on "Escape" button.
   *
   * @param {KeyboardEvent} event
   * @return {void}
   */
  const handleKeydownEvent = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      closeAlbumViewer();
    }
  };

  /**
   * Hide the component when the user clicks outside it.
   *
   * @param {MouseEvent} event
   * @return {void}
   */
  const handleClickEvent = (event: MouseEvent): void => {
    if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
      closeAlbumViewer();
    }
  };

  React.useEffect(() => {
    if (isVisible) {
      setCurrentIndex(0);
      window.addEventListener('keydown', handleKeydownEvent);
      document.addEventListener('click', handleClickEvent);
    }

    return () => {
      window.removeEventListener('keydown', handleKeydownEvent);
      document.removeEventListener('click', handleClickEvent);
    };
  }, [isVisible]);

  React.useEffect(() => setIsLoading(true), [albumData]);

  return (
    <div
      className={classNames(
        styles['container'],
        isVisible && styles['container_visible'],
      )}
    >
      <div
        role="dialog"
        className={styles['content']}
        ref={contentRef}
      >
        <button
          type="button"
          onClick={closeAlbumViewer}
          className={styles['close-button']}
          title="סגירת אלבום"
          aria-label="סגירת אלבום"
        />

        <div className={styles['information']}>
          <h2 className={styles['title']}>
            {`אלבום: ${albumData.name}`}
          </h2>

          <p className={styles['subtitle']}>
            {`קטגוריה: ${albumData.category}`}
          </p>
        </div>

        <img
          src={albumData.photos[currentIndex]}
          alt={albumData.name}
          onLoad={handleImageLoad}
          className={styles['image']}
        />

        <div
          className={classNames(
            styles['loading-overlay'],
            isVisible && isLoading && styles['loading-overlay_visible'],
          )}
        />

        <button
          type="button"
          onClick={handleNextClick}
          className={classNames(
            styles['navigation-button'],
            styles['navigation-button_type_next'],
          )}
          disabled={currentIndex + 1 === albumData.photos.length}
          title="תמונה הבאה"
          aria-label="תמונה הבאה"
        />

        <button
          type="button"
          onClick={handlePreviousClick}
          className={classNames(
            styles['navigation-button'],
            styles['navigation-button_type_previous'],
          )}
          disabled={currentIndex === 0}
          title="תמונה קודמת"
          aria-label="תמונה קודמת"
        />

        <p className={styles['location']}>
          {`תמונה ${currentIndex + 1} מתוך ${albumData.photos.length}`}
        </p>
      </div>
    </div>
  );
};

export default AlbumViewer;
