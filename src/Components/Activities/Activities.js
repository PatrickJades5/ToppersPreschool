import React from 'react';
import { Link } from 'react-router-dom';


function Activities() {
  return (
    <>

    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">Our Activities</span></p>
                <h1 className="mb-4">Classes for Your Kids</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-5">
                    <div className="card border-0 bg-light shadow-sm pb-2">
                        <img className="card-img-top mb-2" src="assets/img/class-1.jpg" alt="" />
                        <div className="card-body text-center">
                            <h4 className="card-title">Drawing Class</h4>
                            <p className="card-text">Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
                        </div>
                        <div className="card-footer bg-transparent py-4 px-5">
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                <div className="col-6 py-1">3 - 6 Years</div>
                            </div>
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                                <div className="col-6 py-1">40 Seats</div>
                            </div>
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                                <div className="col-6 py-1">08:00 - 10:00</div>
                            </div>
                            <div className="row">
                                <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                <div className="col-6 py-1">$290 / Month</div>
                            </div>
                        </div>
                        <Link to="/Contact" className="btn btn-primary px-4 mx-auto mb-4">Join Now</Link>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className="card border-0 bg-light shadow-sm pb-2">
                        <img className="card-img-top mb-2" src="assets/img/class-2.jpg" alt="" />
                        <div className="card-body text-center">
                            <h4 className="card-title">Language Learning</h4>
                            <p className="card-text">Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
                        </div>
                        <div className="card-footer bg-transparent py-4 px-5">
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                <div className="col-6 py-1">3 - 6 Years</div>
                            </div>
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                                <div className="col-6 py-1">40 Seats</div>
                            </div>
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                                <div className="col-6 py-1">08:00 - 10:00</div>
                            </div>
                            <div className="row">
                                <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                <div className="col-6 py-1">$290 / Month</div>
                            </div>
                        </div>
                        <Link to="/Contact" className="btn btn-primary px-4 mx-auto mb-4">Join Now</Link>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className="card border-0 bg-light shadow-sm pb-2">
                        <img className="card-img-top mb-2" src="assets/img/class-3.jpg" alt="" />
                        <div className="card-body text-center">
                            <h4 className="card-title">Basic Science</h4>
                            <p className="card-text">Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
                        </div>
                        <div className="card-footer bg-transparent py-4 px-5">
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                <div className="col-6 py-1">3 - 6 Years</div>
                            </div>
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                                <div className="col-6 py-1">40 Seats</div>
                            </div>
                            <div className="row border-bottom">
                                <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                                <div className="col-6 py-1">08:00 - 10:00</div>
                            </div>
                            <div className="row">
                                <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                <div className="col-6 py-1">$290 / Month</div>
                            </div>
                        </div>
                        <Link to="/Contact" className="btn btn-primary px-4 mx-auto mb-4">Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Activities;