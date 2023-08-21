import React from "react";
import CardProject from "../CardProject";
import Slider from "react-slick";
import { cardDataProjects } from "../../data/data";
import "./index.scss";

const CarouselProjects: React.FC = () => {
  const carouselSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...carouselSettings}>
        {cardDataProjects.map((card) => (
          <div key={card.id}>
            <CardProject card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselProjects;
