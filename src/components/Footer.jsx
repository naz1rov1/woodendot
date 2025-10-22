import image from "../assets/IMAGE.svg";
import image1 from "../assets/IMAGE (1).svg";
import image2 from "../assets/IMAGE (2).svg";
import image3 from "../assets/IMAGE (3).svg";
import image4 from "../assets/IMAGE (4).svg";
import image5 from "../assets/IMAGE (5).svg";
import image6 from "../assets/IMAGE (6).svg";
import image7 from "../assets/IMAGE (7).svg";

import React from "react";

const Footer = () => {
  return (
    <div className="footer-0">
      <footer className="container">
        <div class="ft ">
          <div>
            <h3>about</h3>
            <div class="table">
              <p>About Us</p>
              <p>design</p>
              <p>Sustainability</p>
              <p>We plant trees</p>
              <p>Our Story</p>
              <p>Awards</p>
            </div>
          </div>
          <div>
            <h3>Help</h3>
            <div class="table">
              <p>Holiday Offers FAQ</p>
              <p>FAQ</p>
              <p>Warranty</p>
              <p>Shipments</p>
              <p>Returns & Claims</p>
              <p>Contact us</p>
            </div>
          </div>
          <div>
            <h3>More</h3>
            <div class="table">
              <p>Where to find us</p>
              <p>Woodendot Family</p>
              <p>Press</p>
              <p>Affiliates</p>
              <p>Video Lifestyle</p>
            </div>
          </div>
          <div class="footer-btn">
            <p>Don’t miss any news and exclusive offers! </p>
            <button>Newsletter subscription</button>
            <div class="footer-icon">
              <img src={image} alt="" />
              <img src={image1}alt="" />
            </div>
            <img src={image2} alt="" />
          </div>
        </div>
        <div class="footer-1">
          <p>© Copyright – WOODENDOT 2025</p>
          <div>
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
          </div>
          <p>Terms & Conditions | Privacy Policy & Cookies</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
