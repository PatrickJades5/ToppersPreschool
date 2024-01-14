import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    // const [formStatus, setFormStatus] = React.useState('Send')
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     setFormStatus('Submitting...')
    //     const { name, email, subject, message } = e.target.elements
    //     let conFom = {
    //         name: name.value,
    //         email: email.value,
    //         subject: subject.value,
    //         message: message.value,
    //     }
    //     console.log(conFom)
    // }
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Get In Touch</span></p>
                        <h1 className="mb-4">Contact Us For Any Query</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <iframe className="position-relative rounded w-100 h-100" title="Toppers Preschool" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.336093346654!2d73.7858423086308!3d18.603946866553304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b940e632d6e3%3A0xc22031f19074175f!2sToppers%20Preschool%20and%20Daycare!5e0!3m2!1smr!2sin!4v1702292929655!5m2!1smr!2sin" style={{ minHeight: '400px', minWidth: '400px', border: '1px' }} allowFullScreen="true" loading="lazy" ariaHidden="false" referrerPolicy="no-referrer-when-downgrade" tabIndex={0} />
                        </div>
                        {/* <div className="col-lg-5 mb-5">
                            <div className="contact-form">
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate onSubmit={onSubmit}>
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
                                        <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton"> {formStatus} Message </button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                        <div className="col-lg-6 mb-5">
                            <div className="d-flex">
                                <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: 45, height: 45 }} />
                                <div className="pl-3">
                                    <h5>Address</h5>
                                    <p>"Mangalya Niwas", Kinara Colony,<br /> Opp. HP Petrol Pump, Nakhate Vasti,<br /> Rahatani, Pune, Maharashtra. 411 017</p>
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
                                    <p><Link aria-label="+918329768663" to="https://wa.me/918329768663?"> <img alt="" src="/assets/img/whatsapp.png" width="20px" height="20px" /> +91-8329 768 663</Link><br /></p>
                                    <p><Link aria-label="+919823590240" to="https://wa.me/919823590240?"> <img alt="" src="/assets/img/whatsapp.png" width="20px" height="20px" /> +91-9823 590 240</Link><br /></p>
                                    
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
export default Contact;