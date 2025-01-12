import React from "react";

const FurnitureGallery = () => {
  return (
    <div className="bg-gray-50 py-8 px-5 container mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Share your setup with</h1>
        <h2 className="text-4xl font-extrabold text-gray-800">
          #FuniroFurniture
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="https://i.ibb.co/KXqnSNW/Rectangle-36.png"
              alt="Furniture 1"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "274px", height: "325px" }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/1ff3LQf/Rectangle-38.png"
              alt="Furniture 2"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "451px", height: "312px" }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/WsWHhFr/Rectangle-37.png"
              alt="Furniture 3"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "381px", height: "323px" }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/rsXtpJ6/Rectangle-39-1.png"
              alt="Furniture 4"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "344px", height: "242px" }}
            />
          </div>
        </div>

        <div>
          <img
            src="https://i.ibb.co/b1Z2kBv/Rectangle-40.png"
            alt="Furniture 5"
            className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
            style={{ width: "295px", height: "292px" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="https://i.ibb.co/xDb07TM/Rectangle-43.png"
              alt="Furniture 6"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "290px", height: "348px" }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/2qN2VLY/Rectangle-45.png"
              alt="Furniture 7"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "425px", height: "433px" }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/kJfcnTy/Rectangle-41.png"
              alt="Furniture 8"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "178px", height: "242px" }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/k4zxFc5/Rectangle-44.png"
              alt="Furniture 9"
              className="w-full h-auto rounded-lg shadow-md sm:h-[350px]"
              style={{ width: "258px", height: "196px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
