import React from 'react';
import PageHeaders from '../Header/PageHeaders';
import About from './About';
// import Testimonial from '../Testimonial/Testimonial';

function AboutHeader() {
  return (
    <>
        <PageHeaders header="About Us" />
        <About />
        {/* <Testimonial /> */}
    </>
  )
}

export default AboutHeader;