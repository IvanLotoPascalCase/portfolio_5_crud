import Navbar from "./Navbar";
import Ofertas from "../components/bigComps/Ofertas";
import Footer from "./Footer";
import BackgroundCard from "../components/dataDisplay/BackgroundCard";
import Container from "../components/dataDisplay/Container";
import Banner from "../components/dataDisplay/Banner";


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Ofertas />
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
