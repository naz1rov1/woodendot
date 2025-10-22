import carImg from "../assets/bed.png";

const Header = () => {
  return (
    <>
      <header className="container">
        <div className="navbar">
          <div className="navbar-in">
            <a href="">Wooden Furniture</a>
            <a href="">About</a>
            <a href="">Stories</a>
          </div>
          <h1>Woodendot</h1>
        </div>
        <hr />
      </header>
      <div className="container">
        <div className="img-1">
          <div className="child">
            <p className="p-1">
              Furniture designed to live in harmony, creating distinctive and{" "}
              <br /> timeless spaces
            </p>
            <button className="btn">Discover now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

