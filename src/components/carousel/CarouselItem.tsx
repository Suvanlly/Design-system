interface CarouselItemProps {
  item: item;
}

interface item {
  id: string;
  description: string;
  img: string;
}

export const CarouselItem = ({ item }: CarouselItemProps) => (
  <div className="carousel__item" key={item.id}>
    <img className="carousel__item-img" src={item.img} alt={item.description} />
    <div className="carousel__item-text-panel">
      <p className="carousel__item-text">{item.description}</p>
      <button className="carousel__item-info-button">Find out more</button>
    </div>
  </div>
);
