import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import DeviceContextProvider from './providers/DeviceContextProvider';
import HomeRoute from './routes/HomeRoute';
import GalleryRoute from './routes/GalleryRoute';
import ContactRoute from './routes/ContactRoute';
import ScrollToTop from './utils/ScrollToTop';

/**
 * App component.
 *
 * @component
 * @return {React.ReactNode}
 */
const App = () => (
  <DeviceContextProvider>
    <ScrollToTop>
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
    </ScrollToTop>
  </DeviceContextProvider>
);

export default App;
