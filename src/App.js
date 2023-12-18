import React from 'react';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutHeader from './Components/About/AboutHeader';
import ActivitiesHeader from './Components/Activities/ActivitiesHeader';
//import ContactHeader from './Components/Contact/Contact';
import Facilities from './Components/Facilities/Facilities';
import Testimonial from './Components/Testimonial/Testimonial';
import TeachersHeader from './Components/Teachers/TeachersHeader';
import GalleryHeader from './Components/Gallery/GalleryHeader';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GoToTop from './Components/GoToTop/GoToTop';
// import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ContactHeader from './Components/Contact/ContactHeader';
//import Loader from './Components/Loader/Loader';
//import Testimonial2 from './Components/Testimonial/Testimonial2';
//import {MDBCarouselInner} from 'mdb-react-ui-kit';
//import ImageZoom from "react-image-zooom";

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}

        <BrowserRouter>
          <div className="App">
            {/* <Loader /> */}
            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<AboutHeader />} />
              <Route path='/Activities' element={<ActivitiesHeader />} />
              <Route path='/Facilities' element={<Facilities />} />
              <Route path='/Teachers' element={<TeachersHeader />} />
              <Route path='/Testimonial' element={<Testimonial />} />
              <Route path='/Gallery' element={<GalleryHeader />} />
              <Route path='/Contact' element={<ContactHeader />} />
            </Routes>
            {/* <GalleryReact /> */}
            {/* <Testimonial2 /> */}
            <Footer />
            <GoToTop />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
