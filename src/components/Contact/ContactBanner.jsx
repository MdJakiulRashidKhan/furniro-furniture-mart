import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const ContactBanner = () => {
  return (
    <div
      className="h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/SKjwYL2/Rectangle-1.png')",
      }}
    >
      <div className="flex flex-col space-y-6 items-center justify-center h-full bg-black bg-opacity-50">
        <img
          src="https://i.ibb.co.com/42Qx9pq/Meubel-House-Logos-05.png"
          alt=""
        />
        <h2 className="text-black text-3xl font-bold">Contact Us</h2>
        <p className="text-xl text-bold flex items-center text-gray-900">
          Home <FaGreaterThan />
          Contact
        </p>
      </div>
      /
    </div>
  );
};

export default ContactBanner;
