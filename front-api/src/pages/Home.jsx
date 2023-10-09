import React from "react";
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
      <Footer/>
    </>
  );
};

export default Home;
