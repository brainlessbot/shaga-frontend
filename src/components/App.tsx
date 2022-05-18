import React from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import DeviceContextProvider from './providers/DeviceContextProvider';
import HomeRoute from './routes/HomeRoute';
import GalleryRoute from './routes/GalleryRoute';
import ContactRoute from './routes/ContactRoute';

/**
 * App component.
 *
 * @component
 * @return {React.ReactNode}
 */
const App = () => {
  const location = useLocation();

  // Scroll to the top of the page when the user goes to another route
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <DeviceContextProvider>
      <Routes>
        <Route
          path="/"
          element={(
            <HomeRoute />
          )}
        />

        <Route
          path="/gallery"
          element={(
            <GalleryRoute />
          )}
        />

        <Route
          path="/contact-me"
          element={(
            <ContactRoute />
          )}
        />

        <Route
          path="*"
          element={(
            <Navigate to="/" />
          )}
        />
      </Routes>
    </DeviceContextProvider>
  );
};

export default App;
