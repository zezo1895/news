import React from "react";
import "../footer/Footer.css";
import "boxicons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-12 ">
            <div className="lastlinks">
              <ul className="contacts d-flex justify-content-center">
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
            <div className=" d-flex justify-content-center">
              <a href="/">
                <div className="logoo">
                  <div className="en">
                    <div className="s1">Arab </div>{" "}
                    <div className="s2"> Lionz </div>
                  </div>
                  <div className="ar">
                    <div className="s3">ليونز</div>{" "}
                    <div className="s4">عرب</div>
                  </div>
                </div>
              </a>
            </div>

            <hr className="line" />
            <div className=" d-flex justify-content-center">
              <div className="copy color-#fff">
                <span>
                  by<i class="fa-solid fa-heart"></i>Ziad Adel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
