import React from "react";
import bedd from "../assets/bedroom2.png";
import beddd from "../assets/bedroom1.png";
import bedddd from "../assets/bedroom3.png";
import beddddd from "../assets/bedroom4.png";

function InteriorGallery() {
  const images = [
    {
      furnitureImg: bedd,
    },
    {
      furnitureImg: beddd,
    },
    {
      furnitureImg: bedddd,
    },
    {
      furnitureImg: beddddd,
    },
  ];
  return (
    <div className="container">
      <div className="slide">
        {images.map((item, key) => {
          return (
            <div className="" key={key}>
              <img src={item.furnitureImg} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InteriorGallery;
