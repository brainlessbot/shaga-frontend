import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../layout/Navigation';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import CategoriesLinks from '../gallery/CategoriesLinks';
import AlbumsList from '../gallery/AlbumsList';
import About from '../common/About';
import ContactOptions from '../common/ContactOptions';
import { albumsData } from '../../common/data';
import { Device } from '../../common/types';
import normalBackground01 from '../../images/backgrounds/home-01_normal.jpg';
import minifiedBackground01 from '../../images/backgrounds/home-01_minified.jpg';
import normalBackground02 from '../../images/backgrounds/home-02_normal.jpg';
import minifiedBackground02 from '../../images/backgrounds/home-02_minified.jpg';
import normalBackground03 from '../../images/backgrounds/home-03_normal.jpg';
import minifiedBackground03 from '../../images/backgrounds/home-03_minified.jpg';
import normalBackground04 from '../../images/backgrounds/home-04_normal.jpg';
import minifiedBackground04 from '../../images/backgrounds/home-04_minified.jpg';
import normalBackground05 from '../../images/backgrounds/home-05_normal.jpg';
import minifiedBackground05 from '../../images/backgrounds/home-05_minified.jpg';

/**
 * Home Route component.
 *
 * @component
 * @return {React.ReactNode}
 */
const HomeRoute = () => {
  const featuredAlbums = albumsData.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>אבישג טויטו - צלמת אומנותית</title>
      </Helmet>

      <Navigation />

      <Header
        title="אבישג טויטו"
        subtitle="צלמת אומנותית"
        description="בואו לתפוס רגעים שלא ישובו, בתמונה שאומרת הכל"
        images={[
          {
            [Device.Desktop]: normalBackground01,
            [Device.Tablet]: normalBackground01,
            [Device.Mobile]: minifiedBackground01,
          },
          {
            [Device.Desktop]: normalBackground02,
            [Device.Tablet]: normalBackground02,
            [Device.Mobile]: minifiedBackground02,
          },
          {
            [Device.Desktop]: normalBackground03,
            [Device.Tablet]: normalBackground03,
            [Device.Mobile]: minifiedBackground03,
          },
          {
            [Device.Desktop]: normalBackground04,
            [Device.Tablet]: normalBackground04,
            [Device.Mobile]: minifiedBackground04,
          },
          {
            [Device.Desktop]: normalBackground05,
            [Device.Tablet]: normalBackground05,
            [Device.Mobile]: minifiedBackground05,
          },
        ]}
      />

      <Main>
        <CategoriesLinks />

        <AlbumsList
          albumsData={featuredAlbums}
          title="אלבומים שלי"
          isFilterable={false}
          hasLinkToGallery
        />

        <About />

        <ContactOptions />
      </Main>

      <Footer />
    </>
  );
};

export default HomeRoute;
