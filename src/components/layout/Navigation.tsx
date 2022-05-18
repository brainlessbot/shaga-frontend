import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Navigation.module.scss';
import logoPath from '../../images/navigation-logo.png';

/**
 * Navigation component.
 *
 * @component
 * @return {React.ReactNode}
 */
const Navigation = () => {
  const id = React.useId();

  const innerContainerRef = React.useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  /**
   * Toggle links visibility (on mobile-resolutions).
   *
   * @return {void}
   */
  const toggleVisibility = (): void => setIsVisible(!isVisible);

  /**
   * Update relevant state when the window is scrolled.
   *
   * @return {void}
   */
  const handleScrollEvent = (): void => setIsScrolled(window.scrollY > 0);

  /**
   * Hide the links when the window is resized.
   *
   * @return {void}
   */
  const handleResizeEvent = (): void => setIsVisible(false);

  /**
   * Hide the links when the user clicks outside it.
   *
   * @param {MouseEvent} event
   * @return {void}
   */
  const handleClickEvent = (event: MouseEvent): void => {
    if (innerContainerRef.current && !innerContainerRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      window.addEventListener('resize', handleResizeEvent);
      document.addEventListener('click', handleClickEvent);
    }

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      document.removeEventListener('click', handleClickEvent);
    };
  }, [isVisible]);

  return (
    <nav
      className={classNames(
        styles['container'],
        isVisible && styles['container_dark-overlay'],
        (isVisible || isScrolled) && styles['container_filled'],
      )}
    >
      <div
        className={classNames(
          styles['inner-container'],
          (isVisible || isScrolled) && styles['inner-container_filled'],
          !isScrolled && styles['inner-container_expanded'],
        )}
        ref={innerContainerRef}
      >
        <button
          type="button"
          onClick={toggleVisibility}
          className={classNames(
            styles['links-button'],
            isVisible && styles['links-button_active'],
          )}
          title="תפריט"
          aria-label="תפריט"
          aria-controls={`${id}-list`}
          aria-expanded={isVisible}
        />

        <ul
          id={`${id}-list`}
          className={classNames(
            styles['links-list'],
            isVisible && styles['links-list_visible'],
          )}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => classNames(
                styles['link'],
                isActive && styles['link_active'],
              )}
            >
              עמוד ראשי
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => classNames(
                styles['link'],
                isActive && styles['link_active'],
              )}
            >
              גלריה
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-me"
              className={({ isActive }) => classNames(
                styles['link'],
                isActive && styles['link_active'],
              )}
            >
              יצירת קשר
            </NavLink>
          </li>
        </ul>

        <Link to="/" className={styles['logo-wrapper']}>
          <img
            src={logoPath}
            alt="Shaga לוגו"
            className={classNames(
              styles['logo'],
              !isScrolled && styles['logo_expanded'],
            )}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
