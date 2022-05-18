import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

/**
 * Footer component.
 *
 * @component
 * @return {React.ReactNode}
 */
const Footer = () => (
  <footer className={styles['container']}>
    <p className={styles['copyright']}>
      {`כל הזכויות שמורות © ${new Date().getFullYear()}`}
    </p>

    <ul className={styles['links-list']}>
      <li>
        <Link to="/" className={styles['link']}>
          עמוד ראשי
        </Link>
      </li>

      <li>
        <Link to="/gallery" className={styles['link']}>
          גלריה
        </Link>
      </li>

      <li>
        <Link to="/contact-me" className={styles['link']}>
          יצירת קשר
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
