import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Section1 from "./components/Section1";
import CustomerPhotos from "./components/CustomerPhotos";
import Footprint from "./components/Footprint";
import Footer from "./components/footer";
import InteriorGallerys from "./components/InteriorGallerys";

const App = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <InteriorGallerys />
      <ProductCard />
      <CustomerPhotos />
      <Footprint />
      <Footer />
    </div>
  );
};

export default App;
