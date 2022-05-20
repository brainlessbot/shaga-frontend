import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import styles from './CategoriesSelect.module.scss';
import { Category } from '../../common/types';

type CategoriesSelectProps = {
  selectedCategory: Category,
  onCategorySelect: (category: Category) => void,
};

/**
 * Categories Select component.
 *
 * @component
 * @param {Category} selectedCategory
 * @param {Function} onCategorySelect
 * @return {React.ReactNode}
 */
const CategoriesSelect = ({ selectedCategory, onCategorySelect }: CategoriesSelectProps) => {
  const [, setSearchParams] = useSearchParams();

  /**
   * Handle switching to "All" category.
   *
   * @return {void}
   */
  const handleAllClick = (): void => {
    setSearchParams({ category: 'All' });
    onCategorySelect(Category.All);
  };

  /**
   * Handle switching to "Family" category.
   *
   * @return {void}
   */
  const handleFamilyClick = (): void => {
    setSearchParams({ category: 'Family' });
    onCategorySelect(Category.Family);
  };

  /**
   * Handle switching to "Children" category.
   *
   * @return {void}
   */
  const handleChildrenClick = (): void => {
    setSearchParams({ category: 'Children' });
    onCategorySelect(Category.Children);
  };

  /**
   * Handle switching to "Concept" category.
   *
   * @return {void}
   */
  const handleConceptClick = (): void => {
    setSearchParams({ category: 'Concept' });
    onCategorySelect(Category.Concept);
  };

  return (
    <ul className={styles['list']}>
      <li className={styles['list-item']}>
        <button
          type="button"
          onClick={handleAllClick}
          className={classNames(
            styles['button'],
            selectedCategory === Category.All && styles['button_active'],
          )}
          aria-current={selectedCategory === Category.All}
        >
          <span
            className={classNames(
              styles['icon'],
              styles['icon_type_all'],
            )}
          />

          {Category.All}
        </button>
      </li>

      <li className={styles['list-item']}>
        <button
          type="button"
          onClick={handleFamilyClick}
          className={classNames(
            styles['button'],
            selectedCategory === Category.Family && styles['button_active'],
          )}
          aria-current={selectedCategory === Category.Family}
        >
          <span
            className={classNames(
              styles['icon'],
              styles['icon_type_family'],
            )}
          />

          {Category.Family}
        </button>
      </li>

      <li className={styles['list-item']}>
        <button
          type="button"
          onClick={handleChildrenClick}
          className={classNames(
            styles['button'],
            selectedCategory === Category.Children && styles['button_active'],
          )}
          aria-current={selectedCategory === Category.Children}
        >
          <span
            className={classNames(
              styles['icon'],
              styles['icon_type_children'],
            )}
          />

          {Category.Children}
        </button>
      </li>

      <li className={styles['list-item']}>
        <button
          type="button"
          onClick={handleConceptClick}
          className={classNames(
            styles['button'],
            selectedCategory === Category.Concept && styles['button_active'],
          )}
          aria-current={selectedCategory === Category.Concept}
        >
          <span
            className={classNames(
              styles['icon'],
              styles['icon_type_concept'],
            )}
          />

          {Category.Concept}
        </button>
      </li>
    </ul>
  );
};

export default CategoriesSelect;
