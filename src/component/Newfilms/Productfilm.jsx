import React from "react";

import "../Newfilms/Productfilm.css";

const Productfilm = (props) => {
  const urlim = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className=" col-lg-2 col-md-6 colums">
      <div className="boxfilm">
        <div className="show">
          <div className="imagefilm">
            <img className="imgfilm" src={urlim + props.url} alt="" />
          </div>
          <div className="namefilm">{props.name}</div>
        </div>
        <div className="willshow">
          <div className="info">
            <div className="namefilm">{props.name}</div>
            <div className="rate">
              {" "}
              <box-icon type="solid" name="star" color="#FDCC0D"></box-icon>
              {props.rate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Productfilm;
