import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Content1 from "../assets/3-content/content-001.png";
import Content2 from "../assets/3-content/content-002.png";
import { Title, SpaceBar } from '../components';

function ContentBox() {
  return (
    <div className="content-box">
      <Row className="content-row">
        <Col xs={12} md={6} className="content-wrapper">
          <Image src={Content1} alt="content-1" fluid />
        </Col>
        <Col xs={12} md={6} className="content-wrapper">
          <Title>
            {" "}
            We can give you best user experience to your system{" "}
          </Title>
          <div className="content-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </Col>
      </Row>
      <Row className="content-row">
        <Col xs={12} md={6} className="content-wrapper">
          <SpaceBar />
          <Title > Easy access. </Title>
          <Title> Whenever, wherever you want </Title>
          <div className="content-body">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </Col>
        <Col xs={12} md={6} className="content-wrapper">
          <Image src={Content2} alt="content-2" fluid />
        </Col>
      </Row>
    </div>
  );
}

export default ContentBox;
