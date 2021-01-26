import React, { useState, useEffect } from "react";
import HeartIcon from "../assets/7-icons/heart.svg";
import ArrowRight from "../assets/7-icons/arrow-right.svg";
import { Title, SpaceBar } from "../components";
import { Row, Col } from "react-bootstrap";

/* cSpell:disable */
import DavidChampion from "../assets/4-people/david-campion.jpg";
import DarleneChabrat from "../assets/4-people/darlene-chabrat.jpg";
import GaetanHoussin from "../assets/4-people/gaetan-houssin.jpg";
import JeromeBoudot from "../assets/4-people/jerome-boudot.jpg";
import JeromeMahuet from "../assets/4-people/jerome-mahuet.jpg";
import ManuelaFaveri from "../assets/4-people/manuela-faveri.jpg";
import NicolasLavarreau from "../assets/4-people/nicolas-lebarreau.jpg";
import RomaneRegad from "../assets/4-people/romane-regad.jpg";
import SylvianSalomon from "../assets/4-people/sylvain-salomon.jpg";
import TaniaFerrerira from "../assets/4-people/tania-ferreira.jpg";
import VincentJoignie from "../assets/4-people/vincent-joignie.jpg";
import { Carousel } from "./../components";
import { useWindowSize } from "../hooks";

const testimonials = [
  {
    name: "David Champion",
    designation: "CEO of iCloud",
    testimony:
      "System is excellent. It has made my system user experience to become one of the easiest!",
    src: DavidChampion,
  },
  {
    name: "David Frank Van Hord",
    designation: "CEO of Marks.co",
    testimony:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: VincentJoignie,
  },
  {
    name: "Lucas Bond",
    designation: "BOD of Skyscanner",
    testimony:
      "Now it's almost like having a designer right. I just choose the page, make the changes and save",
    src: JeromeBoudot,
  },

  {
    name: "Darlene Chabrat",
    designation: "CEO of Marks.co",
    testimony:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: DarleneChabrat,
  },
  {
    name: "Gaetan Houssin",
    designation: "BOD of Skyscanner",
    testimony:
      "Now it's almost like having a designer right. I just choose the page, make the changes and save",
    src: GaetanHoussin,
  },

  {
    name: "Jerome Mahuet",
    designation: "CEO of iCloud",
    testimony:
      "System is excellent. It has made my system user experience to become one of the easiest!",
    src: JeromeMahuet,
  },
  {
    name: "Manuela Faveri",
    designation: "BOD of Skyscanner",
    testimony:
      "Now it's almost like having a designer right. I just choose the page, make the changes and save",
    src: ManuelaFaveri,
  },
  {
    name: "Nicolas Lavarreau",
    designation: "CEO of iCloud",
    testimony:
      "System is excellent. It has made my system user experience to become one of the easiest!",
    src: NicolasLavarreau,
  },
  {
    name: "Romane Regad",
    designation: "CEO of Marks.co",
    testimony:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: RomaneRegad,
  },
  {
    name: "Sylvian Salomon",
    designation: "CEO of iCloud",
    testimony:
      "System is excellent. It has made my system user experience to become one of the easiest!",
    src: SylvianSalomon,
  },
  {
    name: "Tania Ferrerira",
    designation: "CEO of Marks.co",
    testimony:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: TaniaFerrerira,
  },
  {
    name: "Darlene Chabrat",
    designation: "CEO of Marks.co",
    testimony:
      "I just want to share a quick note and let you know that you guys do a really good job.",
    src: DarleneChabrat,
  },
];

function Testimonials() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 800 && size.width > 550) {
      setItemsPerSlide(2);
    } else if (size.width <= 550) {
      setItemsPerSlide(1);
    } else {
      setItemsPerSlide(3);
    }
  }, [size.width]);

  return (
    <div className="content-box">
      <div className="people-slider-box">
        <div className="people-slider-title-container">
          <Row style={{ width: "100%" }}>
            <Col sm={12} md={6}>
              <div className="people-opinion-wrapper">
                <div className="heartIcon">
                  <img src={HeartIcon} alt="heartIcon" />
                </div>
                <Title> What other people say about our services </Title>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="people-opinion-wrapper-right">
                <div className="arrowIcon">
                  {" "}
                  <img src={ArrowRight} alt="arrowIcon" />{" "}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <SpaceBar />
        <Carousel items={testimonials} itemsPerSlide={itemsPerSlide} />
      </div>
    </div>
  );
}

export default Testimonials;
