import React from "react";
import Carousel from "./HomeComponents/Carousel";
import Factors from "./HomeComponents/Factors";
import Footer from "./Footer";
import HeaderLast from "./HomeComponents/HeaderLast";
import ManAccessori from "./HomeComponents/ManAccessori";
import MostSelling from "./HomeComponents/MostSelling";
import Navbar from "./Navbar";

const Home = () => {

 

  return (
    <>
      <Navbar />
      <Carousel />
      <HeaderLast />
      <MostSelling />
      <ManAccessori />
      <Factors />
      <Footer />
      
    </>
  );
};

export default Home;
