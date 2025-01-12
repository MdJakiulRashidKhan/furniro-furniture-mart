import React from "react";

const Range = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl font-semibold">Browse The Range</h1>
        <p className="text-gray-600">
          Explore a curated selection of timeless designs, all in one place
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-3">
            <img
              className="w-full h-[550px]"
              src="https://i.ibb.co.com/3pt2wv3/Mask-Group-2.png"
              alt=""
            />
            <h6 className="text-xl font-medium">Dining</h6>
          </div>
          <div className="space-y-3">
            <img
              className="w-full h-[550px]"
              src="https://i.ibb.co.com/yg2dJHS/Image-living-room-1.png"
              alt=""
            />
            <h6 className="text-xl font-medium">Living</h6>
          </div>
          <div className="space-y-3">
            <img
              className="w-full h-[550px]"
              src="https://i.ibb.co.com/ZSjK8Fw/Mask-Group-3.png"
              alt=""
            />
            <h6 className="text-xl font-medium">Bedroom</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Range;
