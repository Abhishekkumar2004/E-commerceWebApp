import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../Assets/breadcrum_arrow.png";

const BreadCram = ({ product }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-600 px-4 md:px-8 py-3">

      <Link to="/" className="hover:text-black">Home</Link>

      <img className="h-3" src={ArrowIcon} alt="" />

      <Link to="/" className="hover:text-black">Shop</Link>

      <img className="h-3" src={ArrowIcon} alt="" />

      <Link
        to={`/${product.category}`}
        className="capitalize hover:text-black"
      >
        {product.category}
      </Link>

      <img className="h-3" src={ArrowIcon} alt="" />

      <span className="text-black font-medium truncate max-w-[120px] sm:max-w-[200px]">
        {product.name}
      </span>
    </div>
  );
};

export default BreadCram;