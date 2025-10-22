import CarImg from '../assets/car.png'
import CircleImg from '../assets/circle.png'
import TreeImg from "../assets/tree.png"
import MapImg from "../assets/map.png"


const Section1 = () => {
  return (
    <>
      <section className="container">
        <div className="images-boxs">
          <div className="images-box">
            <img src={CarImg} alt="" />
            <p>Free Shipping</p>
          </div>
          <div className="images-box">
            <img src={CircleImg} alt="" />
            <p>Awarded Product Design</p>
          </div>
          <div className="images-box">
            <img src={TreeImg} alt="" />
            <p>Ecofriendly Approach</p>
          </div>
          <div className="images-box">
            <img src={MapImg} alt="" />
            <p>Crafted in Spain</p>
          </div>
          <div className="images-box">
            <p>4.8 Star Reviews</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
