import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './AlbumsList.module.scss';
import CategoriesSelect from './CategoriesSelect';
import AlbumItem from './AlbumItem';
import AlbumViewer from './AlbumViewer';
import Button from '../common/Button';
import { Album, Category } from '../../common/types';

const ALBUMS_PER_PAGE = 6;

type AlbumsListProps = {
  albumsData: Album[],
  title?: string,
  isFilterable?: boolean,
  hasLinkToGallery?: boolean,
};

/**
 * Albums List component.
 *
 * @component
 * @param {Album[]} albumsData
 * @param {string} [title]
 * @param {boolean} [isFilterable=true]
 * @param {boolean} [hasLinkToGallery=false]
 * @return {React.ReactNode}
 */
const AlbumsList = ({
  albumsData,
  title,
  isFilterable = true,
  hasLinkToGallery = false,
}: AlbumsListProps) => {
  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = React.useState<Category>(
    () => Category[searchParams.get('category') as keyof typeof Category] || Category.All,
  );

  const [filteredAlbums, setFilteredAlbums] = React.useState<Album[]>([]);
  const [shownAlbums, setShownAlbums] = React.useState<Album[]>([]);

  const [viewerData, setViewerData] = React.useState<Album>(albumsData[0]);
  const [isViewerVisible, setIsViewerVisible] = React.useState<boolean>(false);

  /**
   * Update relevant state when the user switches categories.
   *
   * @param {Category} category
   * @return {void}
   */
  const handleCategorySelect = (category: Category): void => {
    setSelectedCategory(category);
  };

  /**
   * Handle loading the initial albums.
   *
   * @return {void}
   */
  const loadInitialAlbums = (): void => {
    const newFilteredAlbums = selectedCategory === Category.All
      ? albumsData
      : albumsData.filter((albumData) => albumData.category === selectedCategory);

    setFilteredAlbums(newFilteredAlbums);
    setShownAlbums(newFilteredAlbums.slice(0, ALBUMS_PER_PAGE));
  };

  /**
   * Handle loading more albums on request.
   *
   * @return {void}
   */
  const handleLoadingMore = (): void => {
    setShownAlbums([
      ...shownAlbums,
      ...filteredAlbums.slice(shownAlbums.length, shownAlbums.length + ALBUMS_PER_PAGE),
    ]);
  };

  /**
   * Open the album viewer.
   *
   * @param {Album} albumData
   * @return {void}
   */
  const handleOpeningViewer = (albumData: Album): void => React.startTransition(() => {
    setViewerData(albumData);
    setIsViewerVisible(true);
  });

  /**
   * Close the album viewer.
   *
   * @return {void}
   */
  const handleClosingViewer = (): void => setIsViewerVisible(false);

  React.useEffect(loadInitialAlbums, [selectedCategory]);

  return (
    <section className={styles['container']}>
      {isFilterable && (
        <CategoriesSelect
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
      )}

      {title && (
        <h2 className={styles['title']}>
          {title}
        </h2>
      )}

      <ul className={styles['list']}>
        {shownAlbums.map((albumData) => (
          <AlbumItem
            key={albumData.id}
            albumData={albumData}
            openAlbumViewer={handleOpeningViewer}
          />
        ))}
      </ul>

      {hasLinkToGallery && (
        <Link to="/gallery" className={styles['link']}>
          לצפייה בכל האלבומים »
        </Link>
      )}

      {shownAlbums.length < filteredAlbums.length && (
        <Button
          type="button"
          onClick={handleLoadingMore}
          className={styles['load-more-button']}
        >
          הצג עוד
        </Button>
      )}

      <AlbumViewer
        albumData={viewerData}
        isVisible={isViewerVisible}
        closeAlbumViewer={handleClosingViewer}
      />
    </section>
  );
};

export default AlbumsList;
