import React from "react";
import "../footer/Footer.css";
import "boxicons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="lastlinks">
              <ul className="contact d-flex justify-content-center">
                <li>
                  <a className="linkfooter1" href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkfooter2" href="">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="linkfooter3" href="">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="dev">
              by <span><i class="fa-sharp fa-solid fa-heart heart"></i>  ZIAD ADEL</span>
            </div>{" "}
          </div>
          <div className="col-lg-4 justify-content-center">
            <div className="thanks"> <i class="fa-sharp fa-solid fa-heart heart"></i>ENG/Mohamed Elrafey</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
