import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="container-fluid bg-light position-relative shadow">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                    <Link img className="navbar" src="./assets/img/ToppersPreschoolLogo.png" alt="ToppersPreschoolLogo" style={{ height: '20px', width: '20px' }} to="/"></Link>
                    <Link to="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }} >
                        <span className="text-primary">Toppers Preschool</span>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav font-weight-bold mx-auto py-0">
                            <Link className="nav-item nav-link active" to="/">Home</Link>
                            <Link className="nav-item nav-link active" to="/About">About Us</Link>
                            <Link className="nav-item nav-link active" to="/Activities">Activities</Link>
                            <Link className="nav-item nav-link active" to="/Teachers">Teachers</Link>
                            <Link className="nav-item nav-link active" to="/Gallery">Gallery</Link>
                            {/* <Link className="nav-item nav-link active" to="/Contact">Contact</Link> */}

                            {/* <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="class.html" className="nav-item nav-link">Classes</a>
                    <a href="team.html" className="nav-item nav-link">Teachers</a>
                    <a href="gallery.html" className="nav-item nav-link">Gallery</a> */}
                            {/* <div className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="single.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div> */}
                            {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                        </div>
                        <Link to="/Contact" className="btn btn-primary px-4">Contact Us</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;