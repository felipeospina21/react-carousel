import React, { useState } from "react";
import Image from "./Image";

import "./Slider.scss";

const Slider = () => {
  let sliderArr = [
    <Image src="https://source.unsplash.com/random" />,
    <Image src="https://source.unsplash.com/user/erondu/daily" />,
    <Image src="https://source.unsplash.com/user/erondu/" />,
    <Image src="https://source.unsplash.com/weekly?water" />
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    console.log(x);

    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    console.log(x);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            className="slide "
            key={index}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        left
      </button>
      <button id="goRight" onClick={goRight}>
        right
      </button>
    </div>
  );
};

export default Slider;
