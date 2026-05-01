import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "../Assets/instagram.svg";
import PintesterIcon from "../Assets/pintrest.svg";
import WhatsappIcon from "../Assets/whatsapp.svg";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-stone-400 text-black py-10 px-4 md:px-8">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="h-10 md:h-12" src={Logo} alt="logo" />
          <p className="text-xl md:text-2xl font-bold">Apna Store</p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-lg font-semibold text-center md:text-left">
          <li>
            <Link to="/" className="hover:text-red-500 transition">
              Company
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-red-500 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/offices" className="hover:text-red-500 transition">
              Offices
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5">
          <img
            className="h-5 md:h-6 cursor-pointer hover:scale-110 transition"
            src={InstagramIcon}
            alt="instagram"
          />
          <img
            className="h-5 md:h-6 cursor-pointer hover:scale-110 transition"
            src={PintesterIcon}
            alt="pinterest"
          />
          <img
            className="h-5 md:h-6 cursor-pointer hover:scale-110 transition"
            src={WhatsappIcon}
            alt="whatsapp"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-xs md:text-sm">
        © 2026 Apna Store. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
