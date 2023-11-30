import React from 'react';
import PageHeaders from '../Header/PageHeaders';
import Gallery from './Gallery';
import GalleryDisplay from './GalleryDisplay';

const GalleryHeader = () => {
  return (
    <>
    <PageHeaders header="Gallery" />
    <Gallery />
    <GalleryDisplay />
    </>
  )
}

export default GalleryHeader;