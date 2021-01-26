import React from "react";
import { useCarousel } from "../hooks";
import { Image } from "react-bootstrap";
import SpaceBar from "./spacebar";

export default function Carousel({ items, itemsPerSlide }) {
  const perSlide = new Array(itemsPerSlide).fill("*");
  const slidesCount = Math.ceil(items.length / itemsPerSlide);
  const slides = new Array(slidesCount).fill("#");
  const interval = 6000;
  const [active, setActive, handlers, style] = useCarousel(
    slidesCount,
    interval
  );
  return (
    <React.Fragment>
      {items.length > 0 && (
        <div className="carousel testimony-container">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
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
              {perSlide.map((_, i) => (
                <React.Fragment>
                  {items[items.length - (i + 1)] ? (
                    <TestimonyCard
                      className="testimony-card"
                      t={items[items.length - (i + 1)]}
                    />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ))}
            </div>

            {slides.map((_, index) => (
              <div
                className={`carousel-item ${active === index ? "active" : ""}`}
                key={index}
              >
                {perSlide.map((_, i) => (
                  <React.Fragment>
                    {items[index * itemsPerSlide + i] ? (
                      <TestimonyCard
                        className="testimony-card"
                        t={items[index * itemsPerSlide + i]}
                      />
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </div>
            ))}

            <div className="carousel-item">
              {perSlide.map((_, i) => (
                <React.Fragment>
                  {items[i] ? (
                    <TestimonyCard className="testimony-card" t={items[i]} />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
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
