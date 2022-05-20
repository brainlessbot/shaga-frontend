import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './CategoriesLinks.module.scss';

/**
 * Categories Links component.
 *
 * @component
 * @return {React.ReactNode}
 */
const CategoriesLinks = () => (
  <section className={styles['container']}>
    <h2 className={styles['title']}>
      קטגוריות צילום
    </h2>

    <ul className={styles['list']}>
      <li className={styles['list-item']}>
        <Link
          to="/gallery?category=Family"
          className={styles['link']}
        >
          <span
            className={classNames(
              styles['icon'],
              styles['icon_type_family'],
            )}
          />
          צילומי משפחה
        </Link>
      </li>

      <li className={styles['list-item']}>
        <Link
          to="/gallery?category=Children"
          className={styles['link']}
        >
          <span
            className={classNames(
              styles['icon'],
              styles['icon_type_children'],
            )}
          />
          צילומי ילדים
        </Link>
      </li>

      <li className={styles['list-item']}>
        <Link
          to="/gallery?category=Concept"
          className={styles['link']}
        >
          <span
            className={classNames(
              styles['icon'],
              styles['icon_type_concept'],
            )}
          />
          צילומי קונספט
        </Link>
      </li>
    </ul>
  </section>
);

export default CategoriesLinks;
