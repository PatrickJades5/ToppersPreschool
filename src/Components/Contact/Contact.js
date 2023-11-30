import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
<div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-3 font-weight-bold text-white">Contact Us</h3>
            <div className="d-inline-flex text-white">
                <p className="m-0"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Contact Us</p>
            </div>
        </div>
    </div>
    
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">Get In Touch</span></p>
                <h1 className="mb-4">Contact Us For Any Query</h1>
            </div>
            <div className="row">
                <div className="col-lg-5 mb-5">
                    <div className="contact-form">
                        <div id="success" />
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger" />
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger" />
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger" />
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows={6} id="message" placeholder="Message" required data-validation-required-message="Please enter your message" />
                                <p className="help-block text-danger" />
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 mb-5">
                    {/* <p>Labore.</p> */}
                    <div className="d-flex">
                        <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: 45, height: 45 }} />
                        <div className="pl-3">
                            <h5>Address</h5>
                            <p>"Mangalya Niwas", Opp. HP Petrol Pump, Kinara Colony,<br/> Nakhate Vasti, Rahatani,Pune, Maharashtra. 411 017</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: 45, height: 45 }} />
                        <div className="pl-3">
                            <h5>Email</h5>
                            <p>info@topperspreschool.com</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: 45, height: 45 }} />
                        <div className="pl-3">
                            <h5>Phone</h5>
                            {/* <p><a aria-label="+91-832-976-8663" href="https://wa.me/918329768663" />+91-832-976-8663</p> */}
                            <p><a aria-label="+91-832-976-8663" href="https://wa.me/918329768663?"> <img alt="" src="/assets/img/whatsapp.png" width="20px" height="20px" /> +91-832-976-8663</a><br /></p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: 45, height: 45 }} />
                        <div className="pl-3">
                            <h5>Opening Hours</h5>
                            <strong>Monday - Saturday :</strong>
                            <p className="m-0">08:30 AM to 09:30 PM </p>
                            <strong>Sunday :</strong> 
                            <p>09:00 AM to 05:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact