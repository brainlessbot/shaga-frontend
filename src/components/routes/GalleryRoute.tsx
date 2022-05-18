import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../layout/Navigation';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import AlbumsList from '../gallery/AlbumsList';
import { albumsData } from '../../common/data';
import { Device } from '../../common/types';
import normalBackground from '../../images/backgrounds/gallery-01_normal.jpg';
import minifiedBackground from '../../images/backgrounds/gallery-01_minified.jpg';

/**
 * Gallery Route component.
 *
 * @component
 * @return {React.ReactNode}
 */
const GalleryRoute = () => (
  <>
    <Helmet>
      <title>גלריה | אבישג טויטו - צלמת אומנותית</title>
    </Helmet>

    <Navigation />

    <Header
      title="גלריה"
      images={[
        {
          [Device.Desktop]: normalBackground,
          [Device.Tablet]: normalBackground,
          [Device.Mobile]: minifiedBackground,
        },
      ]}
    />

    <Main>
      <AlbumsList
        albumsData={albumsData}
      />
    </Main>

    <Footer />
  </>
);

export default GalleryRoute;
