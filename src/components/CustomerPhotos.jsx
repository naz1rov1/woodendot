import pieces from "../assets/pieces.png";
import piecess from "../assets/piecess.png";
import pieces3 from "../assets/pieces3.png";
import React from "react";

function CustomerPhotos() {
  const images = [
    {
      CustomerPhotos: pieces,
    },
    {
      CustomerPhotos: piecess,
    },
    {
      CustomerPhotos: pieces3,
    },
  ];
  return (
    <div className="container">
      <div className="get ">
        <h2>Our pieces inside your home</h2>
        <p>
          Get inspired by our products in real-life. Tag us and be featured!
        </p>
      </div>
      <div className="frame-15">
        {images.map((item) => {
          return (
            <div className="">
              <img src={item.CustomerPhotos} alt="" />
            </div>
          );
        })}
      </div>
      <div className="tochka-2">
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
        <div className="tochka"></div>
      </div>
      <div className="text-team">
        <p>
          "The team from Woodendot has displayed utmost professionalism from
          order to deliver and customer support. We placed an order to the UK
          and would <br />
          definitely recommend friends to order from Woodendot!"
        </p>
        <p> R. Aoun, United Kingdom</p>
      </div>

      <div className="kv">
        <div className="kv0"></div>
        <div className="kv1"></div>
        <div className="kv2"></div>
        <div className="kv2"></div>
        <div className="kv2"></div>
        <div className="kv2"></div>
        <div className="kv2"></div>
      </div>
    </div>
  );
}

export default CustomerPhotos;
