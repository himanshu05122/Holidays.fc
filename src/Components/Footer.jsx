import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 md:px-12">
      <div className="max-w-4xl mx-auto ml-0 lg:ml-4">
        {/* Contact Info */}
        <h2 className="text-lg font-bold p-3 mb-3">CONTACT INFO</h2>

        <div className="space-y-3 p-3">
          {/* Phone */}
          <div className="flex items-center space-x-2 flex-wrap md:flex-nowrap">
            <span className="text-pink-600 font-semibold whitespace-nowrap">India</span>
            <Phone size={18} />
            <span className="whitespace-nowrap">+91-9565 989898</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail size={18} className="text-pink-600" />
            <span className="break-words italic">planners@fareclubs.com</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-gray-400 text-sm text-center md:text-left">
          <p>© 2023-24 RNR TRAVELTECH PVT LTD</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
