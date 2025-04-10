import React from "react";
import { FaGlobeAmericas, FaTag, FaUsers, FaArrowRight } from "react-icons/fa";
import image from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

const images = [
  { src: image, title: "Paris", tours: 5 },
  { src: image2, title: "Greece", tours: 3 },
  { src: image3, title: "Bali", tours: 7 },
  { src: image4, title: "Tokyo", tours: 2 },
  { src: image5, title: "Dubai", tours: 6 },
  { src: image6, title: "Australia", tours: 4 },
  { src: image7, title: "New York", tours: 3 },
  { src: image8, title: "Rome", tours: 8 },
];

const Card = ({ imgSrc, title, tours }) => (
  <div className="relative bg-base-100 shadow-lg rounded-lg overflow-hidden group">
    {/* Top Right Corner Tours Button (Always Visible) */}
    <button className="absolute top-3 right-3 cursor-pointer bg-pink-500 text-white text-xs sm:text-sm px-4 py-2 rounded-md font-semibold shadow-md z-10">
      {tours} Tours
    </button>

    {/* Image */}
    <figure className="relative">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-60 object-cover transition-all duration-500"
      />

      {/* Black Overlay on Hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

      {/* Sliding Text & "View All Tours" (Moves to Center on Hover) */}
      <div className="absolute left-1/2 top-3/4 group-hover:top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center transition-all duration-500 ease-in-out">
        {title}

        {/* "View All Tours" as Text Button (Appears Below Title on Hover) */}
        <p className="mt-2 text-sm text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
          View All Tours
        </p>
      </div>
    </figure>
  </div>
);

const Cards = () => (
  <div className="p-6 sm:mt-0">
    {/* Feature Section */}
    <div className="w-full max-w-8xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 p-6 md:p-10 shadow-lg mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-white gap-6">
        {/* Worldwide Destinations */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <FaGlobeAmericas className="text-4xl" />
          <div>
            <h3 className="font-bold italic uppercase">Worldwide Destinations</h3>
            <p className="text-sm">Our expert team handpicked all destinations in this site</p>
          </div>
        </div>

        {/* Best Price Guarantee */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <FaTag className="text-4xl" />
          <div>
            <h3 className="font-bold italic uppercase">Best Price Guarantee</h3>
            <p className="text-sm">Price match within 48 hours of order confirmation</p>
          </div>
        </div>

        {/* Top Notch Support */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <FaUsers className="text-4xl" />
          <div>
            <h3 className="font-bold italic uppercase">Top Notch Support</h3>
            <p className="text-sm">We are here to help, before, during, and even after your trip.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Header Section */}
    <div className="text-center mt-5">
      <h1 className="text-5xl font-bold mb-3">
        Top <span className="text-pink-600">Destinations</span>
      </h1>
      {/* View All Button with Right Arrow */}
      <button className="relative inline-flex items-center cursor-pointer text-black underline font-semibold underline-offset-9 hover:underline hover:text-blue-600 transition-all duration-300">
        <span className="mr-2 text-gray-500">View All</span>
        <FaArrowRight className="text-gray-500 text-xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-600" />
      </button>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {images.map((img, index) => (
        <Card key={index} imgSrc={img.src} title={img.title} tours={img.tours} />
      ))}
    </div>
  </div>
);

export default Cards;
