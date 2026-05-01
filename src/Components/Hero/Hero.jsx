import React from "react";
import HandIcon from "../Assets/hand_icon.png";
import HeroImage from "../Assets/hero_image.png";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-10 md:py-16 gap-10">

      {/* LEFT */}
      <div className="flex flex-col gap-5 max-w-lg text-center md:text-left">

        <h2 className="text-sm md:text-lg font-semibold text-gray-600 tracking-wide">
          NEW ARRIVAL ONLY
        </h2>

        {/* Heading */}
        <div className="space-y-2">
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              New
            </p>
            <img className="h-8 w-8 md:h-12 md:w-12" src={HandIcon} alt="hand icon" />
          </div>

          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Collections
          </p>

          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            For Everyone
          </p>
        </div>

        {/* Button */}
        <div className="pt-3 flex justify-center md:justify-start">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-medium">
            Latest Collections
            <MoveRight size={20} />
          </button>
        </div>
      </div>

      {/* RIGHT (Image) */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <img
          className="w-[250px] sm:w-[300px] md:w-auto md:h-[450px] object-contain"
          src={HeroImage}
          alt="hero"
        />
      </div>

    </div>
  );
};

export default Hero;