import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Popular = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold">
          Popular <span className="text-pink-600">Tours</span>
        </h1>
        <button className="relative inline-flex mt-3 items-center cursor-pointer text-black underline font-semibold underline-offset-9 hover:underline hover:text-blue-600 transition-all duration-300">
                <span className="mr-2 text-gray-500">View All</span>
                
                {/* Stylish Arrow */}
                <FaArrowRight className="text-gray-500 text-xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-600" />
                
              </button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[350px] lg:h-[400px] flex items-center justify-start pl-10 lg:pl-20 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoJ6TkuiRtnjDhF5n0DqXXaS7V8uZ_WrF1A&s)",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-20 rounded-2xl"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white max-w-md text-left">
          <h1 className="mb-3 text-4xl lg:text-5xl font-bold">Discover Special Deals!</h1>
          <p className="mb-4 text-lg">Make sure to check out these special promotions.</p>
          <button className="btn btn-primary bg-pink-500 border-none px-6 py-3 text-white rounded-lg shadow-lg">
            See Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
