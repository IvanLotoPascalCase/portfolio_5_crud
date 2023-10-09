import Navbar from "./Navbar";
import Ofertas from "../components/bigComps/Ofertas";
import Footer from "./Footer";
import BackgroundCard from "../components/dataDisplay/BackgroundCard";
import Container from "../components/dataDisplay/Container";


const Home = () => {
  return (
    <>
      <Navbar />
      <Ofertas />
      <Container>
        <div className="grid grid-cols-4 gap-4">
          <BackgroundCard value="Camisas"/>
          <BackgroundCard value="Chaquetas" />
          <BackgroundCard value="Zapatillas" />
          <BackgroundCard value="PantalonesW" />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
