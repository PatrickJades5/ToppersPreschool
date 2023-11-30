import React from 'react';
import PageHeaders from '../Header/PageHeaders';
import Teachers from './Teachers';
import Testimonial from '../Testimonial/Testimonial';

const TeachersHeader = () => {
  return (
    <>
        <PageHeaders header="Teachers" />
        <Teachers />
        <Testimonial />
    </>
  )
}

export default TeachersHeader;