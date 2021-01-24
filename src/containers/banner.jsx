import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import BannerImage from "../assets/2-banner/banner.png";

function Banner({}) {
  return (
    <div className="banner">
      <Row className="banner-wrapper">
        <Col xs={12} md={6} className="banner-left">
          <div className="banner-container">
            <div className="banner-title">Make development easy with us.</div>
            <div className="banner-subtitle">
              {" "}
              Doing development can never be easy, and it takes time and
              resources.{" "}
            </div>
            <div className="banner-subtitle">
              {" "}
              We at EasyWork has the solution{" "}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="banner-right">
          <div className="banner-container">

          <Image src={BannerImage} alt="banner"  className="banner-image"/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;

  /* <div className="banner-container">
        <Row>
          <Col xs={12} md={6} className="banner-left">
            <div className="banner-title">Make development easy with us.</div>
            <div className="banner-subtitle">
              {" "}
              Doing development can never be easy, and it takes time and
              resources.{" "}
            </div>
            <div className="banner-subtitle">
              {" "}
              We at EasyWork has the solution{" "}
            </div>
          </Col>
          <Col xs={12} md={6} className="banner-right">
              <img src={BannerImage} alt="banner" className="banner-image" />
          </Col>
        </Row>
      </div> */

