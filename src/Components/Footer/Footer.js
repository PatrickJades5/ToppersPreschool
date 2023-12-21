import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoToTop from '../GoToTop/GoToTop';


function Footer() {

    // const handleSubmit = async (event: React.FormEvent) => {
    //     // TODO
    //   }
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { value } = event.target
    //     setText (value)
    //   }
    function handleInput(event) {
        setEmail(event.target.value);
    }
    function handleNameChange(event) {
        setText(event.target.value);
        event.preventDefault();
        // setText("");
    }
    function handleSubmit(event) {
        event.preventDefault();

        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
            alert(`Thank you! for subscribing with ${email}.`);
            setEmail("");
        }
    }

    return (
        <>
            <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        {/* <a href="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: 40, lineHeight: 0 }}>
                    <i className="flaticon-043-teddy-bear" />
                    <span className="text-white">Toppers</span>
                </a> */}
                        <h3 className="text-primary mb-4"><Link to="/Home" >Toppers Preschool</Link></h3>
                        <div className="d-flex">

                            <h4 className="fa fa-map-marker-alt text-primary" />
                            {/* <p className="fa fa-map-marker-alt text-primary" /> */}
                            <div className="pl-3">
                                <h5 className="text-white">Address</h5>
                                <p>"Mangalya Niwas", Opp. HP Petrol Pump, Kinara Colony, Nakhate Vasti, Rahatani, Pune, Maharashtra. 411 017</p>
                            </div>
                        </div>

                        {/* <p>.</p> */}
                        <div className="d-flex justify-content-start mt-4">
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} to="https://twitter.com/@topperspre"><i className="fab fa-twitter" /></Link>
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} to="https://facebook.com/topperspreschool"><i className="fab fa-facebook-f" /></Link>
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} to="https://www.linkedin.com/company/topperspreschool"><i className="fab fa-linkedin-in" /></Link>
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} to="https://Instagram.com/topperspreschool"><i className="fab fa-instagram" /></Link>
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} to="https://youtube.com/@topperspreschooldaycare9821?si=UDfLIks0vxj9n8v2"><i className="fab fa-youtube" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Get In Touch</h3>
                        {/* <div className="d-flex">
                    <p className="fa fa-map-marker-alt text-primary" />
                    <div className="pl-3">
                        <h5 className="text-white">Address</h5>
                        <p>"Mangalya Niwas", Opp. HP Petrol Pump, Kinara Colony, Nakhate Vasti, Rahatani, Pune, Maharashtra. 411 017</p>
                    </div>
                </div> */}
                        <div className="d-flex">
                            <h4 className="fa fa-envelope text-primary" />
                            {/* <p className="fa fa-envelope text-primary" /> */}
                            <div className="pl-3">
                                <h5 className="text-white">Email</h5>
                                <p>info@topperspreschool.com</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <h4 className="fa fa-phone-alt text-primary" />
                            {/* <p className="fa fa-phone-alt text-primary" /> */}
                            <div className="pl-3">
                                <h5 className="text-white">Phone</h5>
                                <p>+91-982-359-0240 <br /> +91-797-267-5657</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" to="/"><i className="fa fa-angle-right mr-2" />Home</Link>
                            <Link className="text-white mb-2" to="/About"><i className="fa fa-angle-right mr-2" />About Us</Link>
                            <Link className="text-white mb-2" to="/Activities"><i className="fa fa-angle-right mr-2" />Our Activities</Link>
                            <Link className="text-white mb-2" to="/Teachers"><i className="fa fa-angle-right mr-2" />Our Teachers</Link>
                            <Link className="text-white mb-2" to="/Contact"><i className="fa fa-angle-right mr-2" />Contact Us</Link>
                            {/* <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2" />Home</a>
                    <a className="text-white mb-2" href="/About"><i className="fa fa-angle-right mr-2" />About Us</a>
                    <a className="text-white mb-2" href="/Activities"><i className="fa fa-angle-right mr-2" />Our Activities</a>
                    <a className="text-white mb-2" href="/Teachers"><i className="fa fa-angle-right mr-2" />Our Teachers</a>
                    <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2" />Our Blog</a>
                    <a className="text-white" href="/Contact"><i className="fa fa-angle-right mr-2" />Contact Us</a> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Newsletter</h3>
                        {!isEmailValid ? <p>Please enter a valid email address!</p> : null}
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required onChange={handleNameChange} value={text} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 py-4" placeholder="Your Email" required value={email} onChange={handleInput} />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container-fluid pt-5" style={{ borderTop: "1px solid rgba(23, 162, 184, .2)" }}>
                    <p className="m-0 text-center text-white">
                        © <Link className="text-primary font-weight-bold" to="https://www.topperspreschool.com">Toppers Preschool</Link>. All Rights Reserved.
                        Designed by <Link className="text-primary font-weight-bold" to="/">Pratik Jade</Link>
                    </p>
                </div>
            </div>

            <GoToTop />

            {/* <Link to="" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up"/></Link> */}
            {/* <a href="/" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up" /></a> */}
        </>

    )
}

export default Footer;