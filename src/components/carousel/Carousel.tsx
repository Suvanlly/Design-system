import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import './styles.css';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Connect",
      description:
        "Building a stronger and safer digital society",
      icon: require("../../assets/images/carousal-img-connect.jpg"),
    },
    {
      title: "Digital",
      description:
        "Building a stronger and safer digital society",
      icon: require("../../assets/images/carousal-img-digital.jpg"),
    },
    {
      title: "Simple",
      description:
        "Building a stronger and safer digital society",
      icon: require("../../assets/images/carousal-img-simple.jpg"),
    },
  ];
  const updateIndex = (newIndex:any) => {
    if (newIndex < 0 || newIndex >= items.length ) {
      newIndex = 0;
    } 
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};