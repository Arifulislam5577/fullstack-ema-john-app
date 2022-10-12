import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem";
const Hero = ({ sliderProducts }) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="text-gray-600">
      <Slider {...settings}>
        {sliderProducts?.map((item) => (
          <SliderItem item={item} key={item._id} />
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
