import React, { useState } from "react";
import GalleryImages from "./GalleryImages";
import { Link } from "react-router-dom";
import ImageZoom from "react-image-zooom";

const GalleryDisplay = (props) => {
  // const { ImageZoom } = props;
  const [items, setItems] = useState(GalleryImages);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = GalleryImages.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems([...updateItems]);
    setActive(true);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light shadow-sm">
        <span className="navbar-brand mb-0 m-auto h1 text-center">
          Events at Toppers Preschool
        </span>
      </nav>
      <br />
      <div className="container">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item" style={{marginRight: '5px'}}>
            <Link
              className={active ? "nav-link" : "nav-link active"}
              to="javascrip:0;"
              onClick={() => filterItem("AnnualFunction")}
            >
              Annual Function
            </Link>
          </li>
          <li className="nav-item" style={{marginRight: '5px'}}>
            <Link
              className={active ? "nav-link" : "nav-link active"}
              to="javascrip:0;"
              onClick={() => filterItem("FestivalCelebration")}
            >
              Festival Celebration
            </Link>
          </li>
          <li className="nav-item" style={{marginRight: '5px'}}>
            <Link
              className={active ? "nav-link" : "nav-link active"}
              to="javascrip:0;"
              onClick={() => filterItem("DaysCelebration")}
            >
              Days Celebration
            </Link>
          </li>
          <li className="nav-item" style={{marginRight: '5px'}}>
            <Link
              className={active ? "nav-link" : "nav-link active"}
              to="javascrip:0;"
              onClick={() => filterItem("FunandGames")}
            >
              Fun and Games
            </Link>
          </li>
          <li className="nav-item" style={{marginRight: '5px'}}>
            <Link
              className={active ? "nav-link" : "nav-link active"}
              to="javascrip:0;"
              onClick={() => filterItem("PicnicandTrip")}
            >
              Picnic and Educational Trip
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={active ? "nav-link" : "nav-link active"}
              to="javascrip:0;"
              onClick={() => setItems(GalleryImages)}
            >
              All
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, imageurl } = elem;
            return (
              <div className="col-sm-4" id={id}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-12">
                      <ImageZoom src={imageurl} alt="Zoom-images" zoom="500" width="420" height="220" />
                    </div>
                    {/* <div className="col-md-0">
                      <div className="card-body">
                        <h5 className="card-title mb-0">{id}</h5>
                        <p className="card-text">{name}</p>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between">
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default GalleryDisplay;