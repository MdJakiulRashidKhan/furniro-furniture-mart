import React from "react";
import Footer from "../components/Footer";
import Quality from "../components/Quality";
import ShopBanner from "../components/Shop/ShopBanner";
import ShopCards from "../components/Shop/ShopCards";

const Shop = () => {
  return (
    <div>
      <ShopBanner />
      <ShopCards />
      <Quality />
      <Footer />
    </div>
  );
};

export default Shop;
