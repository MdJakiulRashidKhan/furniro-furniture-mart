import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Products from "../components/Products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === id);
        setProduct(selectedProduct);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="container mx-auto py-20 px-24">
      <div className="py-10 bg-[#F9F1E7] mb-4">
        <p className="text-2xl font-bold flex items-center px-3  rounded-3xl">
          Home <FaGreaterThan /> shop <FaGreaterThan /> {product.name}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex gap-8">
          {/* Thumbnail Images */}
          <div className="flex flex-col justify-start space-y-4">
            <img
              className="w-36 h-36 object-cover border cursor-pointer"
              src={product.image}
              alt={product.name}
            />
            <img
              className="w-36 h-36 object-cover border cursor-pointer"
              src={product.image}
              alt={product.name}
            />
            <img
              className="w-36 h-36 object-cover border cursor-pointer"
              src={product.image}
              alt={product.name}
            />
            <img
              className="w-36 h-36 object-cover border cursor-pointer"
              src={product.image}
              alt={product.name}
            />
          </div>
          {/* Main Product Image */}
          <div>
            <img
              className="w-full h-full object-cover border"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-700 font-semibold">{product.price}</p>
          <p className="text-sm text-gray-500">
            {product.review.rating} | {product.review.count} People rated this
          </p>
          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <p>size</p>
            <div className="flex gap-3">
              <p className="p-2 bg-[#B88E3F]">L</p>
              <p className="p-2">XL</p>
              <p className="p-2">XS</p>
            </div>
          </div>
          <div className="space-y-4">
            <p>Color</p>
            <div className="flex gap-3">
              <p className="p-4 bg-[#B88E3F] rounded-full"></p>
              <p className="p-4  bg-black rounded-full"></p>
              <p className="p-4  bg-blue-900 rounded-full"></p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100">
                -
              </button>
              <input
                type="text"
                value="1"
                readOnly
                className="w-12 text-center border-l border-r border-gray-300"
              />
              <button className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100">
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="px-6 py-2 bg-black text-white rounded-md border border-black hover:bg-white hover:text-black transition-all">
              Add To Cart
            </button>

            {/* Compare Button */}
            <button className="px-6 py-2 bg-white text-black rounded-md border border-black hover:bg-black hover:text-white transition-all">
              + Compare
            </button>
          </div>

          <div className=" border-gray-200 pt-4 mt-4 space-y-6">
            <p>
              <strong>SKU</strong>: {product.serialNo}
            </p>
            <p>
              <strong>Category</strong>: {product.category}
            </p>
            <p>
              <strong>Tags</strong>: {product.tags.join(", ")}
            </p>
            <div className="flex items-center gap-4">
              <strong>Share</strong>:
              <a href="#" className="text-gray-500 hover:text-black">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <div className="mt-12">
        <div className="border-b border-gray-200 flex space-x-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 ${
              activeTab === "description"
                ? "border-b-2 border-black font-bold"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("additionalInfo")}
            className={`py-2 px-4 ${
              activeTab === "additionalInfo"
                ? "border-b-2 border-black font-bold"
                : "text-gray-500"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-4 ${
              activeTab === "reviews"
                ? "border-b-2 border-black font-bold"
                : "text-gray-500"
            }`}
          >
            Reviews [{product.review.comments.length}]
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "description" && (
            <div>
              <p>{product.description}</p>
            </div>
          )}
          {activeTab === "additionalInfo" && (
            <div>
              <p>
                <strong>Material:</strong>{" "}
                {product.additionalInformation.material}
              </p>
              <p>
                <strong>Warranty:</strong>{" "}
                {product.additionalInformation.warranty}
              </p>
              <p>
                <strong>Assembly Required:</strong>{" "}
                {product.additionalInformation.assemblyRequired ? "Yes" : "No"}
              </p>
              <p>
                <strong>Care Instructions:</strong>{" "}
                {product.additionalInformation.careInstructions}
              </p>
              <p>
                <strong>Delivery Time:</strong>{" "}
                {product.additionalInformation.deliveryTime}
              </p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              {product.review.comments.map((comment, index) => (
                <p key={index} className="text-gray-600">
                  {comment}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  py-8">
        <img src="https://i.ibb.co.com/L8NNkGX/Group-107.png" alt="" />
        <img src="https://i.ibb.co.com/ggL8N4h/Group-106.png" alt="" />
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default ProductDetails;
