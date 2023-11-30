import React from 'react'
import { Link } from 'react-router-dom';

function Teachers() {
  return (
    <>
    {/* <div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-3 font-weight-bold text-white">Our Teachers</h3>
            <div className="d-inline-flex text-white">
                <p className="m-0"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Our Teachers</p>
            </div>
        </div>
    </div> */}

   <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">Our Teachers</span></p>
                <h1 className="mb-4">Meet Our Teachers</h1>
            </div>
            <div className="row">
            
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/MonikaBhajibhakare.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Monika Bhajibhakare</h4>
                    <i>Language Teacher</i>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/SuvarnaSalve.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Suvarna Salve</h4>
                    <i>Language Teacher</i>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/ShubhangiDeore.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Shubhangi Deore</h4>
                    <i>Dance Teacher</i>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/VaishaliSalve.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Vaishali Salve</h4>
                    <i>Art Teacher</i>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/AshaShinde.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Asha Shinde</h4>
                    <i>Music Teacher</i>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/ReshmaNikam.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Reshma Nikam</h4>
                    <i>Language Teacher</i>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Mollie Ross</h4>
                    <i>Dance Teacher</i>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                        <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt="" />
                        <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="/"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <h4>Donald John</h4>
                    <i>Art Teacher</i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Teachers;