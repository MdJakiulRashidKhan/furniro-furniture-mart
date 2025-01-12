import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const ShopBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center text-Black"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/GxdZtvw/Rectangle-1-1.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Shop</h1>
        <p className="text-lg md:text-xl flex items-center">
          Home <FaGreaterThan /> Shop
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;
