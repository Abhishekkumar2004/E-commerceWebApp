import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-white py-12 px-4 flex justify-center">

      {/* Card */}
      <div className="flex flex-col items-center justify-center max-w-3xl w-full px-6 sm:px-10 py-10 sm:py-12 gap-5 
      rounded-3xl bg-[linear-gradient(180deg,#ffe4e6,#ffedd5_60%)] shadow-md">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-4xl text-gray-800 font-semibold text-center">
          Get Exclusive Offers On Your Email
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-sm sm:text-base text-center">
          Subscribe to our newsletter and stay updated
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-3 sm:gap-0">

          <input
            className="w-full sm:flex-1 px-4 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none outline-none text-gray-700 text-sm bg-white"
            type="email"
            placeholder="Your Email"
          />

          <button className="w-full sm:w-auto px-6 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full bg-red-600 hover:bg-red-700 transition text-white text-sm font-medium">
            Subscribe
          </button>

        </div>
      </div>
    </div>
  );
};

export default NewsLetter;