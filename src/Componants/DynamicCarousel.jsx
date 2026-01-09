import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DynamicCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  return (
    <div className="w-full h-[400px] overflow-hidden rounded-xl">
      <Slider {...settings} className="h-full">
        {items.map((item, index) => (
          <div key={index} className="relative h-[400px]">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-fill transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-wide">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DynamicCarousel;
