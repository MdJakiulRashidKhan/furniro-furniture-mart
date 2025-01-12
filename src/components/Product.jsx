import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";

const Product = ({ product }) => {
  const { image, name, title, previousPrice, price, discount } = product;

  return (
    <div className="relative group">
      <div className="border p-4 space-y-3 transform transition-all hover:scale-105 hover:shadow-xl">
        <img className="w-full h-72 object-cover" src={image} alt={name} />
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-gray-600">{title}</p>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">{price}</p>
          <p className="text-lg font-semibold line-through text-gray-500">
            {previousPrice}
          </p>
        </div>
      </div>

      {/* Discount Tag */}
      {discount && (
        <div className="absolute top-6 right-6 bg-red-500 text-white px-2 py-1 text-sm rounded-full">
          {discount}
        </div>
      )}

      {/* Hover Content (Buttons) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <div className="space-y-4 text-white ">
          <div className="flex justify-around">
            <button className="btn px-7 py-2 bg-white text-[#B88E2F]">
              Add to Cart
            </button>
          </div>

          <div className="flex space-x-3">
            <div className="flex items-center space-x-2">
              <CiShare2 />
              <p className=" text-white">Share</p>
            </div>

            <div className="flex items-center space-x-2">
              <MdCompareArrows />
              <p className="text-white">Compare</p>
            </div>

            <div className="flex items-center space-x-2">
              <BiSolidLike />
              <p className="text-white">Like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
