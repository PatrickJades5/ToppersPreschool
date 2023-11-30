import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Gallery() {

//         const [items, setItems] = useState();
//         const [active, setActive] = useState(false);
//         const filterItem = (categItem) => {
//         const updateItems = ((curElem) => {
//       return curElem.category === categItem;
//     });

//     setItems(updateItems);
//     setActive(true);
//   };

  return (
    <>
{/* 
<div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-3 font-weight-bold text-white">Gallery</h3>
            <div className="d-inline-flex text-white">
                <p className="m-0"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Gallery</p>
            </div>
        </div>
    </div> */}

    <div className="container-fluid pt-5 pb-3">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">Our Gallery</span></p>
                <h1 className="mb-4">Our Kids School Gallery</h1>
            </div>
            <div className="row">
                <div className="col-12 text-center mb-2">
                    <ul className="list-inline mb-4" id="portfolio-filters">
                       
                        {/* <li className="nav-item">
                        <a
                             className= {active ? "nav-link" : "nav-link active"}
                             href="javascrip:0;"
                             onClick={() => filterItem("All")}
                        >   
                             All
                         </a>
                         </li>
                         <li className="nav-item">
                        <a
                             className= {active ? "nav-link" : "nav-link active"}
                             href="javascrip:0;"
                             onClick={() => filterItem("Playing")}
                        >   
                             Playing
                         </a>
                         </li> */}
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
                        <img className="img-fluid w-100" src="assets/img/IMG_20231116_212902.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/IMG_20231116_212902.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="assets/img/IMG20230622095600.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/IMG20230622095600.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="assets/img/portfolio-3.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/portfolio-3.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="assets/img/portfolio-4.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/portfolio-4.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="assets/img/portfolio-5.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/portfolio-5.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{ fontSize: 60 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="assets/img/portfolio-6.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="assets/img/portfolio-6.jpg" data-lightbox="portfolio">
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