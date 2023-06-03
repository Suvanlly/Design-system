import React from "react";

const CarouselItem: React.FC<{ item: any, width: string }> = (props) => {
  return (
    <div className="carousel-item" key={props.item.id} style={{ width: props.width}}>
      <img className="carousel-img" src={props.item.icon} alt={props.item.desc}/>
      <div className="carousel-item-text-panel">
        <p className="carousel-item-text">{props.item.description}</p>
        <button className="carousel-info-button">Find out more</button>
      </div>
    </div>
  );
};

export default CarouselItem;