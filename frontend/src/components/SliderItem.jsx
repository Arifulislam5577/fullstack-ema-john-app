import React from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ item }) => {
  return (
    <div className="container mx-auto flex px-0  md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className=" sm:text-4xl text-3xl mb-4 uppercase text-slate-900 font-bold">
          {item.name}
        </h1>
        <p className="mb-8 leading-relaxed font-sm text-gray-500">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>

        <h2 className="py-2  font-bold text-slate-900 text-xl">
          ${item.price}
        </h2>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={item.img}
        />
      </div>
    </div>
  );
};

export default SliderItem;
