import Header from './components/Header'
import InteriorGallery from './components/InteriorGallery.JSX'
import ProductCard from './components/ProductCard'
import Section1 from './components/Section1'
import CustomerPhotos from './components/CustomerPhotos'
import Footprint from './components/Footprint'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <InteriorGallery/>
      <ProductCard />
      <CustomerPhotos/>
     <Footprint />
     <Footer />
    </div>
  )
}

export default App