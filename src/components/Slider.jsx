import React from "react";
import Slider from "react-slick"; // Importing the Slider component from react-slick
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CustomSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Inner Peace",
      subtitle: "Bedroom",
      image: "https://i.ibb.co/xSmPMzJ/Rectangle-24.png", // Replace with your actual image URLs
    },
    {
      id: 2,
      title: "Minimal Dining",
      subtitle: "Dining Room",
      image: "https://i.ibb.co/27Sv4Hz/Rectangle-25.png", // Replace with your actual image URLs
    },
    {
      id: 3,
      title: "Cozy Workspace",
      subtitle: "Home Office",
      image: "https://i.ibb.co/27Sv4Hz/Rectangle-25.png", // Replace with your actual image URLs
    },
    {
      id: 4,
      title: "Relaxing Lounge",
      subtitle: "Living Room",
      image: "https://i.ibb.co/27Sv4Hz/Rectangle-25.png", // Replace with your actual image URLs
    },
  ];

  return (
    <div className="container mx-auto py-20 px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center gap-10">
      {/* Text Content */}
      <div className="lg:w-1/3 space-y-5 text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
          50+ Beautiful Rooms <br /> Inspiration
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Our designer already made a lot of beautiful prototypes of rooms that
          will inspire you.
        </p>
        <button className="px-7 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-yellow-600">
          Explore More
        </button>
      </div>

      {/* Slider */}
      <div className="lg:w-2/3 w-full">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="p-4">
              <div className="relative rounded-lg overflow-hidden">
                {/* Set a fixed size for all images */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
                  <h2 className="text-white text-lg sm:text-xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
