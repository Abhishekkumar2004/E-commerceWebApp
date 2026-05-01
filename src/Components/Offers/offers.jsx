import React from "react";
import ExclusiveImage from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="py-10 md:py-16 px-4 bg-white flex justify-center">

      {/* Gradient Box */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6 md:px-12 py-8 md:py-12 rounded-3xl
      bg-[linear-gradient(180deg,#ede9fe,#dbeafe_60%)] shadow-lg gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
            Exclusive
          </h1>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
            Offer For You
          </h1>

          <p className="text-gray-700 text-sm sm:text-md py-4 md:py-5">
            ONLY ON BEST SELLER PRODUCTS
          </p>

          <button className="rounded-full bg-red-600 hover:bg-red-700 transition text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold">
            Check Now
          </button>
        </div>

        {/* RIGHT (IMAGE) */}
        <div className="flex justify-center">
          <img
            className="w-[220px] sm:w-[280px] md:w-auto md:h-[350px] object-contain"
            src={ExclusiveImage}
            alt="offer"
          />
        </div>

      </div>
    </div>
  );
};

export default Offers;