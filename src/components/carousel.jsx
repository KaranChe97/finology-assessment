import React from "react";

export default function Carousel({ items, itemsPerSlide }) {
  const perSlide = new Array(itemsPerSlide).fill("*");
  const length = items.length;
  const slidesCount = Math.ceil(items.length / itemsPerSlide);
  const totalSlides = new Array(slidesCount).fill("#");

  return (
    <React.Fragment>
      {length > 0 && (
        <div className="carousel testimony-container">
          <ol className="carousel-indicators">
            {totalSlides.map((_, index) => (
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
                <TestimonyCard t={items[items.length - i]} />
              ))}
              {!isMobile ? (
                <div className="carousel-item">
                  <TestimonyCard t={testimonials[testimonials.length - 3]} />
                  <TestimonyCard t={testimonials[testimonials.length - 2]} />
                  <TestimonyCard t={testimonials[testimonials.length - 1]} />
                </div>
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
