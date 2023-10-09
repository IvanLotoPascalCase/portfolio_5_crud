import Navbar from "./Navbar";
import Ofertas from "../components/bigComps/Ofertas";
import Footer from "./Footer";
import BackgroundCard from "../components/dataDisplay/BackgroundCard";


const Home = () => {
  return (
    <>
      <Navbar />
      <Ofertas />
      <BackgroundCard />
      <BackgroundCard value ={2} />
      <BackgroundCard value = {3}/>
      <BackgroundCard value = {4} />
      <Footer/>
    </>
  );
};

export default Home;
