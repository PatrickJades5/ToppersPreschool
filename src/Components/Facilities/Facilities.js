import React from 'react';
import { facilitesList } from '../constant';


const Card = ({ title, description, icon }) => {
    return (
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: 30, height: '95%' }}>
                <i className={`${icon} h1 font-weight-normal text-primary mb-3`} />
                <div className="pl-4">
                    <h4>{title}</h4>
                    <p className="m-0">{description}</p>
                </div>
            </div>
        </div>
    )
}


function Facilities() {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container pb-3">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Facilities we provide</span></p>
                        <h1 className="mb-4">Best enviornment for Your Kids!</h1>
                    </div>
                    <div className="row">
                        {
                            facilitesList.map(({ icon, title, description }, index) =>
                                <Card icon={icon} title={title} description={description} key={`facility-${index}`} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Facilities;