import React from "react";
import { FaShippingFast, FaTrophy } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";

const Quality = () => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-[#FAF3EA] px-8 py-16 md:px-40 md:py-24">
      <div className="flex items-center gap-4 mb-8 md:mb-0">
        <FaTrophy className="text-3xl text-[#B88E2F]" />
        <div>
          <h6 className="text-xl font-semibold text-[#333]">High Quality</h6>
          <p className="text-gray-600">Crafted from top materials</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8 md:mb-0">
        <IoMdCheckmarkCircleOutline className="text-3xl text-[#B88E2F]" />
        <div>
          <h6 className="text-xl font-semibold text-[#333]">
            Warranty Protection
          </h6>
          <p className="text-gray-600">Over 2 years</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8 md:mb-0">
        <FaShippingFast className="text-3xl text-[#B88E2F]" />
        <div>
          <h6 className="text-xl font-semibold text-[#333]">Fast Shipping</h6>
          <p className="text-gray-600">On all orders</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <MdOutlineSupportAgent className="text-3xl text-[#B88E2F]" />
        <div>
          <h6 className="text-xl font-semibold text-[#333]">24 / 7 Support</h6>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
