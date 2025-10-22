import HeroProductImage1 from '../assets/HeroProductImage1.png'
import HeroProductImageg from "../assets/HeroProductImageee.png";
import HeroProductImagegg from "../assets/HeroProductImageeee.png";
import HeroProductImageegg from "../assets/HeroProductImage5.png";
import HeroProductImage6 from "../assets/HeroProductImage6.png";
import HeroProductImage7 from "../assets/HeroProductImage7.png";

import React from "react";

const ProductCard = () => {
  return (
    <>
      <section className="container">
        <div className="card">
          <div className="text-content">
            <h2>Cloe</h2>
            <p>Modular Storage System</p>
            <p>From $1.176</p>
            <p className="p-3">
              An expansive way to furnish your space exactly how you need it and
              like it. Transform it in exactly what you need like a bookshelf,
              tv stand or show rack, you pick.
            </p>
            <a href="">Shop now</a>
          </div>
          <img src={HeroProductImage6} alt="" />
        </div>

        <div className="card-2">
          <img src={HeroProductImage1} alt="" />
          <div className="text ">
            <h2>Pelican</h2>
            <p>Shelves with hidden hooks</p>
            <p>From $ 89</p>
            <p>
              {" "}
              Store or exhibit your favorite objects in the <br />
              entrance hall, modern hallways, living rooms and <br />
              bedrooms with a decorative and minimalist touch..
            </p>
            <p>+ 3 sizes, + 5 color finishes</p>
            <a href="">Shop now</a>
          </div>
        </div>

        <div className="card">
          <div className="text-content">
            <h2>Alada</h2>
            <p>Floating folding desk</p>
            <p>From $ 534</p>
            <p>
              A timeless and discreet folding desk that seamlessly transforms
              into a decorative shelf in seconds.
            </p>
            <p>+ 4 color finishes</p>
            <a href="">Shop now</a>
          </div>
          <img src={HeroProductImageg} alt="" />
        </div>

        <div className="card-2">
          <img src={HeroProductImagegg} alt="" />
          <div className="text">
            <h2>Alba Collection</h2>
            <p>Modular bedside table & shelf</p>
            <p>From $272</p>
            <p>
              A versatile and modular piece with a sculptural <br />
              touch that can be used as a wall shelf or as a <br /> bedside
              table with concealed storage.
            </p>
            <p>+ 6 color finishes, infinite combinations</p>
            <a href="">Shop now</a>
            <img src={HeroProductImage7} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="text-content">
            <h2>Batea Collection</h2>
            <p>Tables with storage & tray tables</p>
            <p>From $272</p>
            <p>
              Composed of clean and rounded lines, the Batea Collection includes
              unique tables with extra functionality like a removable tray, and
              hidden storage.
            </p>
            <p>+ 3 sizes, + 6 color finishes</p>
            <a href="">Shop now</a>
          </div>
          <img src={HeroProductImageegg} alt="" />
        </div>
      </section>
    </>
  );
};

export default ProductCard;
