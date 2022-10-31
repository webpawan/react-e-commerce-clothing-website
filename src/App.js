import React from "react";
import Carousel from "./components/Carousel";
import ManAccessori from "./components/ManAccessori";
import Footer from "./components/Footer";
import Factors from "./components/Factors";
import HeaderLast from "./components/HeaderLast";
import MostSelling from "./components/MostSelling";
import Navbar from "./components/Navbar";
import ShopeUi from "./components/ShopeUi";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HeaderLast />
      <MostSelling />
      <ManAccessori />
      <Factors />
      <Footer />
      <ShopeUi />
      <AboutUs/>
    </>
  );
}

export default App;
