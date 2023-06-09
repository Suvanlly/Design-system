export interface CarouselProps {
  intervalInSeconds?: number;
  imagePosition?: string;
  style?: string;
  textSize?: string;
  carouselItems: Item[];
}

export interface Item {
  id: string;
  description: string;
  img: string;
  imgAlt: string;
  buttonLabel: string;
}