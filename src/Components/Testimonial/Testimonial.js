import React from 'react';

function Testimonial() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container p-0">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Testimonial</span></p>
                        <h1 className="mb-4">What Parents Say!</h1>
                    </div>
                    <div className="react-owl-carousel testimonial-carousel">
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <p className="fas fa-quote-left text-primary mr-3" />
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="./assets/img/testimonial-1.jpg" style={{ width: 70, height: 70 }} alt="testimonial" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3">
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                                </h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="./assets/img/testimonial-2.jpg" style={{ width: 70, height: 70 }} alt="testimonial" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3">
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                                </h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="./assets/img/testimonial-3.jpg" style={{ width: 70, height: 70 }} alt="testimonial" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3">
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                                </h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="./assets/img/testimonial-4.jpg" style={{ width: 70, height: 70 }} alt="testimonial" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;