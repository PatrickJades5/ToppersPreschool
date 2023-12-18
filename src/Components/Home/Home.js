import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Activities from '../Activities/Activities';
import Teachers from '../Teachers/Teachers';
import Facilities from '../Facilities/Facilities';
import Gallery from '../Gallery/Gallery';
import Testimonial from '../Testimonial/Testimonial';

function Home() {
  return (
    <>
      <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">Kids Learning Center</h4>
            <h1 className="display-3 font-weight-bold text-white">New Approach to Kids Education</h1>
            <p className="text-white mb-4">We nurture young dreams. With education, we believe in teaching morals and values. 'Toppers Preschool' is a traditional Montessori preschool, pre-k, and kindergarten located in Rahatani. Possessed and worked by nearby guardians since 2023. Our educational cost reflects a genuine desire to serve the network and stay open to families in the area. We are focused on giving brilliant Montessori training at a moderate cost.</p>
            <Link to="/About" className="btn btn-secondary mt-1 py-3 px-5">Learn More</Link>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid mt-5" src="./assets/img/header.png" alt="header" />
          </div>
        </div><br />
      </div>
      <Facilities Component />
      <About Component />
      <Activities Component />
      <Teachers Component />
      <Testimonial Component />
      <Gallery Component />

    </>
  )
}

export default Home;

