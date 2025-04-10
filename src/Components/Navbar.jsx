import React, { useState, useEffect } from "react";
import { X, Menu, Search, Mail, Phone } from "lucide-react";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Social Icons (Mobile Only) */}
      <div className="fixed top-3 left-4 flex gap-3 md:hidden z-50">
        <FaTwitter className="text-pink-500 text-sm" />
        <FaYoutube className="text-pink-500 text-sm" />
        <FaFacebookF className="text-pink-500 text-sm" />
      </div>

      {/* Email & Contact (Tablet Only: Top Left) */}
      <div className="hidden md:flex absolute top-2 left-4 gap-4 text-sm md:visible lg:hidden z-50">
        <div className="flex items-center gap-2">
          <Mail className="text-pink-500 h-4 w-4" />
          <span className="text-gray-700">nanurao051@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-pink-500 h-4 w-4" />
          <span className="text-gray-700">9896176383</span>
        </div>
      </div>

      {/* Social Icons (Tablet Only: Top Right) */}
      <div className="hidden md:flex lg:hidden absolute top-2 right-4 gap-3 z-50">
        <FaTwitter className="text-pink-500 text-sm" />
        <FaYoutube className="text-pink-500 text-sm" />
        <FaFacebookF className="text-pink-500 text-sm" />
      </div>

      {/* Navbar */}
      <div
        className={`navbar mt-7 flex justify-between items-center px-4 sticky top-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-md shadow-sm z-40"
            : "bg-base-200 z-0"
        }`}
      >
        {/* Left: Logo */}
        <div className="navbar-start w-full flex-1 flex justify-center sm:justify-start mt-2">
          <a href="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="FareClubs" className="h-10" />
          </a>
        </div>

        {/* Right: Desktop Menu + Search + Hamburger Icon */}
        <div className="navbar-end flex items-center mt-2">
          {/* Desktop Menu (Large Screens) */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal text-blue-500 px-1 space-x-2 text-sm">
              {["Pilgrimage", "Easy VISA Destinations", "Honeymoon", "Activities", "Blogs"].map((item) => (
                <li key={item} className="hover:bg-transparent">
                  <a className="hover:text-pink-500 hover:underline underline-offset-8 decoration-pink-500 px-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Search Icon (Large Screens) */}
          <button className="btn btn-ghost hidden lg:flex">
            <Search className="h-5 w-5 text-gray-200" />
          </button>

          {/* Hamburger Icon (Mobile/Tablet) */}
          <button
            className="btn border-2 h-9 w-9 border-gray-300 btn-ghost ml-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile/Tablet) */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-gray-800 text-gray-200 shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <ul className="flex flex-col py-4">
          {["Pilgrimage", "Easy VISA Destinations", "Honeymoon", "Activities", "Blogs"].map((item) => (
            <li
              key={item}
              className="hover:text-white px-6 py-3 w-full border-b border-gray-600 cursor-pointer"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
