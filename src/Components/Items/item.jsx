import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-full max-w-[220px] sm:max-w-[250px] mx-auto p-3 sm:p-4 rounded-xl hover:bg-amber-50 hover:scale-95 transition duration-300 cursor-pointer shadow-sm">

      {/* Image */}
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover rounded-lg"
          src={props.image}
          alt={props.name}
        />
      </Link>

      {/* Name */}
      <p className="text-gray-900 mt-3 text-xs sm:text-sm font-medium line-clamp-2">
        {props.name}
      </p>

      {/* Prices */}
      <div className="flex items-center gap-2 sm:gap-4 mt-2">
        <div className="text-gray-900 font-bold text-base sm:text-lg">
          ₹{props.new_price}
        </div>
        <div className="text-gray-400 text-xs sm:text-sm line-through">
          ₹{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;