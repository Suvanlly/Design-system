export interface CarouselProps {
  intervalInSeconds?: number;
  imagePosition?: string;
  style?: string;
  carouselItems: Item[];
}

export interface Item {
  id: string;
  description: string;
  img: string;
  buttonLabel: string;
}