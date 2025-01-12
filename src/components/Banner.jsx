import React from "react";

function App() {
  return (
    <div
      className="h-[700px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/YbPHkNx/scandinavian-interior-mockup-wall-decal-background-1-1.png')",
      }}
    >
      <div className="w-[634px] p-12  bg-[#FFF3E3] transform translate-x-80 translate-y-4 shadow-lg rounded-lg">
        <div className="space-y-4">
          <p className="text-base font-medium">New Arrival</p>
          <h1 className="text-[#B88E2F] text-6xl font-bold">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-gray-800">
            Furniro brings you the finest furniture crafted with precision and
            care. Explore our wide range of stylish, durable, and affordable
            furniture pieces designed to elevate your space.
          </p>
          <button className="text-white bg-[#B88E2F] px-6 py-2 rounded shadow">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
