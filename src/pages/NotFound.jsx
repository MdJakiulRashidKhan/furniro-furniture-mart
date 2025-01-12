import React from "react";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10">
      <img
        src="https://i.ibb.co.com/gD2VvGY/images.png"
        alt="Page Not Found"
        className="w-full max-w-3xl mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Footer />
    </div>
  );
};

export default NotFound;
