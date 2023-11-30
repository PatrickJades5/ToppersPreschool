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
            <p className="text-white mb-4">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
                Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
                lorem dolore sed stet et est justo dolore.</p>
            <Link to="/About" className="btn btn-secondary mt-1 py-3 px-5">Learn More</Link>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid mt-5" src="assets/img/header.png" alt="" />
        </div>
    </div>
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

