import { Item } from "./Carousel.types";

interface CarouselItemProps {
  index: number;
  currentIndex: number;
  imagePosition?: string;
  style?: string;
  item: Item;
}

export const CarouselItem = ({
  index,
  currentIndex,
  imagePosition = 'right',
  style = 'light',
  item,
}: CarouselItemProps) => (
  <div
    className={`carousel__item ${
      imagePosition === 'right' ? "carousel__item--row-reverse" : ""
    } ${style === 'light' ? "carousel__item--light" : "carousel__item--dark"}`}
    key={item.id}
    role="option"
    aria-selected={index === currentIndex}
  >
    <img className="carousel__item-img" src={item.img} alt={item.description} />
    <div className="carousel__item-text-panel">
      <p className={`carousel__item-text ${style === 'light' ? "carousel__item-text--light" : "carousel__item-text--dark"}`}>{item.description}</p>
      <button className="carousel__item-info-button">{item.buttonLabel}</button>
    </div>
  </div>
);
