import { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";
import { CarouselIndicator } from "./CarouselIndicator";
import carouselItems from "./json/carousel-items.json";
import "./styles.scss";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const updateIndex = (currentIndex: number) => {
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    }
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    // ReturnType is needed because the return type of the setTimeout method
    // is NodeJS.Timeout in Node and number in the browser.
    // reference: https://bobbyhadz.com/blog/typescript-settimeout-type
    let timer: ReturnType<typeof setTimeout>;

    if (isAutoPlay) {
      timer = setTimeout(() => {
        updateIndex(currentIndex + 1);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, isAutoPlay]);

  return (
    <div className="carousel">
      <div
        className="carousel__content-panel"
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </div>
      <div className="carousel__indicators-panel">
        <button
          className="carousel__arrow-button"
          onClick={() => {
            updateIndex(currentIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="carousel__indicators-panel">
          {carouselItems.map((_, index) => (
            <CarouselIndicator
              index={index}
              currentIndex={currentIndex}
              updateIndex={updateIndex}
            />
          ))}
          <button className="autoplay-toggle carousel__indicator">
            {isAutoPlay ? (
              <span
                className="material-symbols-outlined pause-icon"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
              >
                pause_circle_filled
              </span>
            ) : (
              <span
                className="material-symbols-outlined play-icon"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
              >
                play_circle
              </span>
            )}
          </button>
        </div>

        <button
          className="carousel__arrow-button"
          onClick={() => {
            updateIndex(currentIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
