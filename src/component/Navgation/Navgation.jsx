import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "../Navgation/nav.css";
import "boxicons";
import Side from "../side/Side";

const Navgation = (props) => {
  return (
    <Fragment>
      <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="left">
                <ul className="icon">
                  <li>
                    <a href="">
                      {" "}
                      <box-icon name="search-alt-2" color="#fff"></box-icon>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      {" "}
                      <box-icon
                        type="logo"
                        name="facebook-square"
                        color="#fff"
                      ></box-icon>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      {" "}
                      <box-icon
                        name="twitter"
                        type="logo"
                        color="#fff"
                      ></box-icon>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      {" "}
                      <box-icon
                        name="telegram"
                        type="logo"
                        color="#fff"
                      ></box-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 text-end">
              <div className="right">
                <button onClick={props.handleClick} className="menu border-0 ">
                  <box-icon name="menu" color="#fff"></box-icon>
                </button>
                <ul className="Links">
                  <li>
                    <span>Download a series with one click</span>
                  </li>
                  <li>
                    {" "}
                    <box-icon name="chevron-left" color="#dadada"></box-icon>
                    <span>Others</span>
                  </li>
                  <li className="series">
                    {" "}
                    <box-icon name="chevron-left" color="#dadada"></box-icon>
                    <span>Series</span>
                    <ul className="typefilms">
                      <li>Arabic Series</li>
                      <li>Asian Series</li>
                      <li>English Series</li>
                    </ul>
                  </li>
                  <li className="film">
                    <box-icon name="chevron-left" color="#dadada"></box-icon>
                    <span>Films</span>
                    <ul className="typefilms">
                      <li>Arabic Films</li>
                      <li>Asian Films</li>
                      <li>English Films</li>
                    </ul>
                  </li>
                </ul>
                <div className="logo">
                  <div className="en">
                    <div className="s1">Arab </div>{" "}
                    <div className="s2"> Lionz </div>
                  </div>
                  <div className="ar">
                    <div className="s3">ليونز</div>{" "}
                    <div className="s4">عرب</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Side change={props.isActive} />
    </Fragment>
  );
};
export default Navgation;
