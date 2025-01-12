import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FurnitureGallery from "../components/FurnitureGallery";
import Products from "../components/Products";
import Range from "../components/Range";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Range />
      <Products />
      <Slider />
      <FurnitureGallery />
      <Footer />
    </div>
  );
};

export default Home;
