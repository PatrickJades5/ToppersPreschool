import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="./assets/img/" alt="img" />
                        </div>
                        <div className="col-lg-7">
                            <p className="section-title pr-5"><span className="pr-2">Learn About Us</span></p>
                            <h1 className="mb-4">Best Preschool For Your Kids</h1>
                            <p>Toppers Preschool's focus is on learning through both open-ended play and structured play activities that enable children to develop at their own pace. Whether your child is finger painting, building a block castle, or singing with other children, Toppers Preschool helps your child expand their experiences and develop their abilities and knowledge.</p>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-4">
                                    <img className="img-fluid rounded" src="./assets/img/" alt="img" />
                                </div>
                                <div className="col-6 col-md-8">
                                    <ul className="list-inline m-0">
                                        <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3" /><strong>Respect for Teachers (Guru-Shishya Tradition):</strong> The teacher-student relationship is held in high regard, with teachers often considered as mentors guiding students on a path of enlightenment.</li>
                                        <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3" /><strong>Value of Discipline:</strong> Discipline is seen as essential for success in life and is instilled from an early age.</li>
                                        <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3" /><strong>Importance of Moral Values:</strong> Honesty, integrity, kindness, and compassion are emphasized as core values.</li>
                                        <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3" /><strong>Learning Beyond Academics:</strong> Education is not limited to textbooks; it includes learning from nature, music, art, and life experiences.</li>
                                        <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3" /><strong>Community and Family Involvement:</strong> Education is viewed as a collective effort involving family and community participation.</li>
                                        
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