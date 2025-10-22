import heart from "../assets/heart.png";
import trees from "../assets/trees.png";
import box from "../assets/box.png";
import vector from "../assets/vector.png";
import iconOffice from '../assets/iconOffice.png'

import React from "react";

const Footprint = () => {
  return (
    <div className="container">
      <div className="slide-7">
        <div className="color">
          <img src={vector} alt="" />
          <h2>DESIGN</h2>
          <p>
            We create furniture pieces with personality,
            <br /> designed to transform your space.
          </p>
          <a href="">Learn More</a>
        </div>
        <div className="color-2">
          <img src={box} alt="" />
          <h2>FOOTPRINT</h2>
          <p>
            We are committed to look after what we love,
            <br /> nature.
          </p>
          <a href="">Learn More</a>
        </div>
        <div className="color">
          <img src={heart} alt="" />
          <h2>MADE</h2>
          <p>
            Our local design, and production in the village of <br />
            Iscar, Spain.
          </p>
          <a href="">Learn More</a>
        </div>
        <div className="color-2">
          <img src={trees} alt="" />
          <h2>WOOD</h2>
          <p>
            Our characteristic and main material, and its <br /> unique and
            timeless attributes.
          </p>
          <a href="">Learn More</a>
        </div>
      </div>

      <div class="about">
        <p>Those who are talking about us...</p>
      </div>

      <marquee behavior="" direction="">
        <img src={iconOffice} alt="" />
      </marquee>
    </div>
  );
};

export default Footprint;
