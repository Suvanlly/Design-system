interface CarouselIndicatorProps {
  index: number;
  currentIndex: number;
  updateIndex: (index: number) => void;
}

export const CarouselIndicator = ({
  index,
  currentIndex,
  updateIndex,
}: CarouselIndicatorProps) => (
  <button
    key={index}
    className="carousel__indicator"
    onClick={() => {
      updateIndex(index);
    }}
  >
    <span
      className={`material-symbols-outlined ${
        index === currentIndex ? "carousel__indicator--active" : "carousel__indicator"
      }`}
    >
      radio_button_checked
    </span>
  </button>
);
