import React from 'react';
import classNames from 'classnames';
import styles from './AlbumItem.module.scss';
import { Album } from '../../common/types';

type AlbumItemProps = {
  albumData: Album,
  openAlbumViewer: (albumData: Album) => void,
};

/**
 * Album Item component.
 *
 * @component
 * @param {Album} albumData
 * @param {Function} openAlbumViewer
 * @return {React.ReactNode}
 */
const AlbumItem = ({ albumData, openAlbumViewer }: AlbumItemProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  /**
   * Handle opening the album when its clicked.
   *
   * @return {void}
   */
  const handleAlbumClick = (): void => {
    if (!isLoading) {
      openAlbumViewer(albumData);
    }
  };

  /**
   * Handle opening the album when the user presses on "Enter" button.
   *
   * @param {React.KeyboardEvent} event
   * @return {void}
   */
  const handleAlbumKeydown = (event: React.KeyboardEvent): void => {
    if (!isLoading && event.key === 'Enter') {
      openAlbumViewer(albumData);
    }
  };

  /**
   * Handle album image load.
   *
   * @return {void}
   */
  const handleImageLoad = (): void => setIsLoading(false);

  return (
    <li>
      <div
        role="button"
        onClick={handleAlbumClick}
        onKeyDown={handleAlbumKeydown}
        className={styles['container']}
        title="הצג אלבום"
        aria-label="הצג אלבום"
        tabIndex={0}
      >
        <div
          className={classNames(
            styles['image-container'],
            isLoading && styles['image-container_loading'],
          )}
        >
          <img
            src={albumData.photos[0]}
            alt={albumData.name}
            onLoad={handleImageLoad}
            className={styles['image']}
          />
        </div>

        <div className={styles['content']}>
          <h2 className={styles['name']}>
            {albumData.name}
          </h2>

          <p className={styles['description']}>
            {`${albumData.category} · ${albumData.photos.length} תמונות`}
          </p>
        </div>
      </div>
    </li>
  );
};

export default AlbumItem;
