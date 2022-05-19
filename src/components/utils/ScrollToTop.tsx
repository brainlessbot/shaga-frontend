import React from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: JSX.Element,
};

/**
 * Scroll To Top component.
 *
 * @component
 * @param {JSX.Element} children
 * @return {React.ReactNode}
 */
const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation();

  // Scroll to the top of the page when the user goes to another route
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
