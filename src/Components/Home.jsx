import React from "react";
import fareclubs from "../assets/fareclubs.jpg";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-base-200 justify-between px-6 lg:px-5 space-y-10 lg:space-y-0 lg:space-x-10 sm:pb-0">
      {/* Left Content */}
      <div className="w-full lg:w-2/4 text-center mt-24 sm:mt-20 lg:mt-0">
        <h1 className="text-5xl sm:text-5xl lg:text-5xl p-1">
          Untangle Your Travel Plans,
        </h1>
        <h1 className="text-5xl sm:text-5xl lg:text-5xl font-sans p-1">
          Enjoy a <span className="text-pink-500 italic">Hassle-Free</span>{" "}
          <span className="italic">Holiday</span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-500 p-1">
          Discover amazing places at exclusive deals.
        </p>
        <p className="text-lg sm:text-2xl text-gray-500">
          Eat, Shop, Visit interesting places around the world.
        </p>

        {/* Search Bar Container */}
        <div className="relative mt-8 md:mt-28 lg:mt-10 xl:mt-28">
          {/* White Background Only on Mobile */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg sm:hidden z-0" />

          {/* Search Bar */}
          <div className="w-full h-auto sm:h-28 lg:w-6/4 xl:w-4xl mx-auto mt-40 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center gap-3 sm:gap-4 relative z-10 text-center px-3 py-4 sm:px-0 sm:py-0">
            {/* Search Input */}
            <div className="flex flex-col flex-1 w-full">
              <label className="text-xs sm:text-sm px-2 font-semibold italic text-gray-700">
                Keywords
              </label>
              <input
                type="text"
                placeholder="Type Your Keywords"
                className="mt-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border-none focus:ring-0 focus:border-pink-500 outline-none w-full"
              />
            </div>

            {/* Destination Select */}
            <div className="flex flex-col flex-1 w-full relative">
              <label className="text-xs sm:text-sm font-semibold italic text-gray-700">
                Destination
              </label>
              <div className="relative">
                <select className="mt-1 px-3 sm:px-4 py-2 sm:py-3 pr-10 text-sm sm:text-base rounded-lg border-none focus:ring-0 focus:border-pink-500 appearance-none outline-none w-full">
                  <option>Any</option>
                  <option>Paris</option>
                  <option>New York</option>
                  <option>London</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Duration Select */}
            <div className="flex flex-col flex-1 w-full relative">
              <label className="text-xs sm:text-sm font-semibold italic text-gray-700">
                Duration
              </label>
              <div className="relative">
                <select className="mt-1 px-3 sm:px-4 py-2 sm:py-3 pr-10 text-sm sm:text-base rounded-lg border-none focus:ring-0 focus:border-pink-500 appearance-none outline-none w-full">
                  <option>Any</option>
                  <option>1 Week</option>
                  <option>2 Weeks</option>
                  <option>1 Month</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full flex-col md:w-auto flex items-center justify-center bg-pink-600 hover:bg-pink-700 transition px-5 sm:px-8 py-4 sm:py-8 text-white text-sm sm:text-lg italic font-medium rounded-r-2xl shadow-md">
              <FaSearch className="text-base sm:text-xl mr-2" /> Search Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center relative">
        <img
          src={fareclubs}
          alt="Travel Destination"
          className="w-[90%] max-w-[350px] rounded-lg sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-150 block z-0"
        />
      </div>
    </div>
  );
};

export default Home;
