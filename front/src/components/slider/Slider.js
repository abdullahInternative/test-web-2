import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Slider.scss";
import { sliderData } from "./slider-data";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlider = () => {
    setCurrentSlide(
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
  };
  const prevSlider = () => {
    setCurrentSlide(
      currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlider, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, intervalTime, autoScroll]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlider} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlider} />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="content" />
                <div className="content">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <h2> {heading} </h2>
                  <p> {desc} </p>
                  <hr />
                  <button
                    onClick={() => navigate("/shop")}
                    className="--btn --btn-primary"
                  >
                    Shop Now
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
