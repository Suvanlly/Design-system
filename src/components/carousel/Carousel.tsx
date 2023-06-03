import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./styles.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayOn, setIsAutoplayOn] = useState(true);
  const items = [
    {
      title: "Connect",
      description: "Building a stronger and safer digital society",
      icon: require("../../assets/images/carousal-img-connect.jpg"),
    },
    {
      title: "Digital",
      description: "Digital NSW",
      icon: require("../../assets/images/carousal-img-digital.jpg"),
    },
    {
      title: "Simple",
      description: "Bringing your digital identity to life",
      icon: require("../../assets/images/carousal-img-simple.jpg"),
    },
  ];

  const updateIndex = (newIndex: number) => {
    if (newIndex >= items.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const handleAutoplayToggle = () => {
    setIsAutoplayOn(!isAutoplayOn);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isAutoplayOn) {
      timer = setTimeout(() => {
        updateIndex(activeIndex + 1);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, isAutoplayOn]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner-panel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} item={item} width={"100%"} />;
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
                key={index}
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
          <button className="autoplay-toggle indicator-buttons">
            {isAutoplayOn ? (
              <span
                className="material-symbols-outlined pause-icon"
                onClick={handleAutoplayToggle}
              >
                pause_circle_filled
              </span>
            ) : (
              <span
                className="material-symbols-outlined play-icon"
                onClick={handleAutoplayToggle}
              >
                play_circle
              </span>
            )}
          </button>
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
