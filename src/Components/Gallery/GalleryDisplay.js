import React, { useState } from "react";
import GalleryImages from "./GalleryImages";

const GalleryDisplay = () => {
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
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("AnnualFunction")}
            >
              Annual Function
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("FestivalCelebration")}
            >
              Festival Celebration
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("DaysCelebration")}
            >
              Days Celebration
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("FunandGames")}
            >
              Fun and Games
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("PicnicandTrip")}
            >
              Picnic and Educational Trip
            </a>
          </li>
          <li className="nav-item">
            <a

              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"

              onClick={() => setItems(GalleryImages)}
            >
              All
            </a>
          </li>
        </ul>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, imageurl, description } = elem;

            return (
              <div className="col-sm-4" id={id}>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-5">
                      <img class="img-fluid" src={imageurl} alt={name} />

                    </div>

                    <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title mb-0">{name}</h5>
                        <p class="card-text">{description}</p>
                        <div class="d-flex justify-content-between">
                        </div>
                      </div>
                    </div>


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
