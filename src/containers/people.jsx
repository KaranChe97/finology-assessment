import React from "react";
import { Image } from "react-bootstrap";
import { ReactComponent as HeartIcon } from "../assets/7-icons/heart.svg";
import { ReactComponent as ArrowRight } from "../assets/7-icons/arrow-right.svg";
import { Title, SpaceBar } from "../components";
/* cSpell:disable */
import DavidChampion from "../assets/4-people/david-campion.jpg";
import DarleneChabrat from "../assets/4-people/darlene-chabrat.jpg";
import GaetanHoussin from "../assets/4-people/gaetan-houssin.jpg";
import JeromeBoudot from "../assets/4-people/jerome-boudot.jpg";
import JeromeMahuet from "../assets/4-people/jerome-mahuet.jpg";
import ManuelaFaveri from "../assets/4-people/manuela-faveri.jpg";
import NicolasLavarreau from "../assets/4-people/nicolas-lebarreau.jpg";
import RomaneRegad from "../assets/4-people/romane-regad.jpg";
// import SylvianSalomon from "../assets/4-people/sylvain-salomon.jpg";
// import TaniaFerrerira from "../assets/4-people/tania-ferreira.jpg";
import VincentJoignie from "../assets/4-people/vincent-joignie.jpg";
import { useCarousel } from "../hooks/carousel";

function People() {
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
  ];
  const interval = 5000;
  let length = testimonials.length;
  const isMobile = window.innerWidth < 740;
  if (!isMobile) {
    length = Math.ceil(length / 3);
  }
  const [active, setActive, handlers, style] = useCarousel(length, interval);
  const indicator = new Array(length).fill("*");

  return (
    <div className="content-box">
      <div className="people-slider-box">
        <div className="people-slider-title-container">
          <div className="people-opinion-wrapper">
            <HeartIcon className="heartIcon" />
            <Title> What other people say about our services </Title>
          </div>

          <div>
            <ArrowRight className="arrowIcon" />
          </div>
        </div>
        <SpaceBar />
        <SpaceBar />
        <SpaceBar />
        {length > 0 && (
          <div className="carousel testimony-container">
            <ol className="carousel-indicators">
              {indicator.map((_, index) => (
                <div
                  onClick={() => setActive(index)}
                  key={index}
                  className={`${
                    active === index ? "indicator active" : "indicator"
                  }`}
                />
              ))}
            </ol>

            <div className="carousel-content" {...handlers} style={style}>
              <div className="carousel-item">
                {!isMobile ? (
                  <React.Fragment>
                    <TestimonyCard t={testimonials[testimonials.length - 3]} />
                    <TestimonyCard t={testimonials[testimonials.length - 2]} />
                    <TestimonyCard t={testimonials[testimonials.length - 1]} />
                  </React.Fragment>
                ) : (
                  <TestimonyCard t={testimonials[testimonials.length - 1]} />
                )}
              </div>

              {!isMobile
                ? indicator.map((t, index) => (
                    <div
                      className={`carousel-item ${
                        active === index ? "active" : ""
                      }`}
                      key={index}
                    >
                      <TestimonyCard
                        className="testimony-card"
                        t={testimonials[index * length]}
                      />
                      <TestimonyCard
                        className="testimony-card"
                        t={testimonials[index * length + 1]}
                      />
                      <TestimonyCard
                        className="testimony-card"
                        t={testimonials[index * length + 2]}
                      />
                    </div>
                  ))
                : testimonials.map((testimony, index) => (
                    <div
                      className={`carousel-item ${
                        active === index ? "active" : ""
                      }`}
                      key={index}
                    >
                      <TestimonyCard
                        className="testimony-card"
                        key={testimony.name}
                        t={testimony}
                      />
                    </div>
                  ))}

              <div className="carousel-item">
                <TestimonyCard
                  className="testimony-card carousel-item"
                  t={testimonials[0]}
                />
                <TestimonyCard
                  className="testimony-card carousel-item"
                  t={testimonials[1]}
                />
                <TestimonyCard
                  className="testimony-card carousel-item"
                  t={testimonials[2]}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const TestimonyCard = ({ t }) => {
  return (
    <div className="testimony-card">
      <div className="testimony-title">
        <div className="testimony-avatar">
          <Image src={t.src} alt="testimony" roundedCircle height="50px" />
        </div>
        <div>
          <h4> {t.name} </h4>
          <h6>{t.designation}</h6>
        </div>
      </div>
      <SpaceBar />
      <div className="content-font"> {t.testimony} </div>
    </div>
  );
};

export default People;
