import Navbar from "./Navbar";
import Ofertas from "../components/bigComps/Ofertas";
import Carousel from "../components/bigComps/CarrouselOfertas";
import Footer from "./Footer";
import BackgroundCard from "../components/dataDisplay/BackgroundCard";
import Container from "../components/dataDisplay/Container";
import Banner from "../components/dataDisplay/Banner";
import Divider from "../components/dataDisplay/Divider";


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Carousel />
      <Container>
        <div className="grid grid-cols-4">
          <BackgroundCard value="Hombre"/>
          <BackgroundCard value="Mujer" />
          <BackgroundCard value="Zapatillas" />
          <BackgroundCard value="Pantalones" />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
