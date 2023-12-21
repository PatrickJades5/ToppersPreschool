import React from 'react';
import PageHeaders from '../Header/PageHeaders';
import Contact from './Contact';

// import Testimonial from '../Testimonial/Testimonial';

function ContactHeader() {
  return (
    <>
        <PageHeaders header="Contact Us" />
        <Contact />
        {/* <Testimonial /> */}
    </>
  )
}

export default ContactHeader;