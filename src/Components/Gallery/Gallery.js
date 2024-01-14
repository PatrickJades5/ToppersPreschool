import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Our Gallery</span></p>
                        <h1 className="mb-4">Our Kids School Gallery</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-2">
                            <ul className="list-inline mb-4" id="portfolio-filters">
                                <li className="btn btn-outline-primary m-1 active" data-filter="*">All</li>
                                <li className="btn btn-outline-primary m-1" data-filter=".first">Playing</li>
                                <li className="btn btn-outline-primary m-1" data-filter=".second">Drawing</li>
                                <li className="btn btn-outline-primary m-1" data-filter=".third">Reading</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" src="./assets/img/IMG_20231116_212902.jpg" alt="IMG_20231116_212902" />
                                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href="./assets/img/IMG_20231116_212902.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" src="./assets/img/IMG20230622095600.jpg" alt="IMG20230622095600" />
                                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href="./assets/img/IMG20230622095600.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" src="./assets/img/" alt="" />
                                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href="./assets/img/" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" src="./assets/img/" alt="" />
                                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href="./assets/img/" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" src="./assets/img/" alt="" />
                                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href="./assets/img/" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" src="./assets/img/" alt="" />
                                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href="./assets/img/" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery;