import { useState, useEffect, KeyboardEvent } from "react";
import { CarouselItem } from "./CarouselItem";
import { CarouselIndicator } from "./CarouselIndicator";
import { CarouselProps } from './Carousel.types'
import "./styles.scss";


export const Carousel = ({intervalInSeconds = 2, imagePosition = 'right', style = 'light', textSize = 'medium', carouselItems}: CarouselProps) => {
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

  const handlePause = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.code === 'Space') {
      setIsAutoPlay(!isAutoPlay);
    }
  }

  useEffect(() => {
    // ReturnType is needed because the return type of the setTimeout method
    // is NodeJS.Timeout in Node and number in the browser.
    // reference: https://bobbyhadz.com/blog/typescript-settimeout-type
    let timer: ReturnType<typeof setTimeout>;

    if (isAutoPlay) {
      timer = setTimeout(() => {
        updateIndex(currentIndex + 1);
      }, intervalInSeconds * 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAutoPlay]);

  return (
    <div className="carousel" role="listbox" aria-label="Carousel">
      <div
        className="carousel__content-panel"
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} index={index} currentIndex={currentIndex} imagePosition={imagePosition} style={style} isAutoPlay={isAutoPlay} textSize={textSize} item={item} />
        ))}
      </div>
      <div className="carousel__indicators-panel">
        <button
          className="carousel__arrow-button"
          aria-label="back to last slide"
          onClick={() => {
            updateIndex(currentIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div>
          {carouselItems.map((_, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              currentIndex={currentIndex}
              updateIndex={updateIndex}
            />
          ))}
          <button className="autoplay-toggle carousel__indicator" onKeyDown={handlePause}>
            {isAutoPlay ? (
              <span
                className="material-symbols-outlined"
                aria-label="pause auto play"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
              >
                pause_circle_filled
              </span>
            ) : (
              <span
                className="material-symbols-outlined"
                aria-label="enable auto play"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
              >
                play_circle
              </span>
            )}
          </button>
        </div>

        <button
          className="carousel__arrow-button"
          aria-label="go to next slide"
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
