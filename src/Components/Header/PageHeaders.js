import React from 'react';
import { Link } from 'react-router-dom';

const PageHeaders = (props) => {  

    const { header } = props; 
  return (
    <>
    <div className="container-fluid bg-primary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-3 font-weight-bold text-white">{header}</h3>
            <div className="d-inline-flex text-white">
                <p className="m-0"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">{header}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default PageHeaders;