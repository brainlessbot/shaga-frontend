import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../layout/Navigation';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import ContactForm from '../forms/ContactForm';
import ContactOptions from '../common/ContactOptions';
import { Device } from '../../common/types';
import normalBackground from '../../images/backgrounds/contact-01_normal.jpg';
import minifiedBackground from '../../images/backgrounds/contact-01_minified.jpg';

/**
 * Contact Route component.
 *
 * @component
 * @return {React.ReactNode}
 */
const ContactRoute = () => (
  <>
    <Helmet>
      <title>יצירת קשר | אבישג טויטו - צלמת אומנותית</title>
    </Helmet>

    <Navigation />

    <Header
      title="יצירת קשר"
      images={[
        {
          [Device.Desktop]: normalBackground,
          [Device.Tablet]: normalBackground,
          [Device.Mobile]: minifiedBackground,
        },
      ]}
    />

    <Main>
      <ContactForm />
      <ContactOptions />
    </Main>

    <Footer />
  </>
);

export default ContactRoute;
