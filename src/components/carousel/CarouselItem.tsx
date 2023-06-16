import { Item } from "./Carousel.types";

interface CarouselItemProps {
  index: number;
  currentIndex: number;
  imagePosition?: string;
  style?: string;
  textSize?: string;
  isAutoPlay: boolean;
  item: Item;
}

const handleButtonClick = () => {
  const url = 'https://www.digital.nsw.gov.au/';
  window.open(url, '_blank');
}

const styleFn = (textSize: string) => {
  if (textSize === 'small') {
    return { fontSize: '14px' };
  }
   else if (textSize === 'large') {
    return { fontSize: '20px' };
  }
};

export const CarouselItem = ({
  index,
  currentIndex,
  imagePosition = 'right',
  style = 'light',
  textSize = 'medium',
  item,
}: CarouselItemProps) => (
  <div
    className={`carousel__item ${
      imagePosition === 'right' ? "carousel__item--row-reverse" : ""
    } ${style === 'light' ? "carousel__item--light" : "carousel__item--dark"}`}
    key={item.id}
    role="option"
    aria-selected={index === currentIndex}
    aria-hidden={index !== currentIndex}
  >
    <img className="carousel__item-img" src={item.img} alt={item.imgAlt} />
    <div className="carousel__item-text-panel">
      <p className={`carousel__item-text ${style === 'light' ? "carousel__item-text--light" : "carousel__item-text--dark"}` } aria-label={item.description} style={styleFn(textSize)}>{item.description}</p>
      <button className="carousel__item-info-button" onClick={handleButtonClick}>{item.buttonLabel}</button>
    </div>
  </div>
);
