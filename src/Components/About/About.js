import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="./assets/img/" alt="" />
                        </div>
                        <div className="col-lg-7">
                            <p className="section-title pr-5"><span className="pr-2">Learn About Us</span></p>
                            <h1 className="mb-4">Best Preschool For Your Kids</h1>
                            <p>Toppers Preschool's focus is on learning through both open-ended play and structured play activities that enable children to develop at their own pace. Whether your child is finger painting, building a block castle, or singing with other children, Toppers Preschool helps your child expand their experiences and develop their abilities and knowledge.</p>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-4">
                                    <img className="img-fluid rounded" src="./assets/img/" alt="" />
                                </div>
                                <div className="col-6 col-md-8">
                                    <ul className="list-inline m-0">
                                        <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3" />Labore eos amet dolor amet diam</li>
                                        <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3" />Etsea et sit dolor amet ipsum</li>
                                        <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3" />Diam dolor diam elitripsum vero.</li>
                                    </ul>
                                </div>
                            </div>
                            <Link to="/Activities" className="btn btn-primary mt-2 py-2 px-4">Learn More About Our Work And Our Cultural Activities</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
