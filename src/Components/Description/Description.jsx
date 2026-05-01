import React, { useState } from "react";

const Description = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="px-4 md:px-8 py-6 max-w-5xl mx-auto">

      {/* Tabs */}
      <div className="flex border-b gap-6 overflow-x-auto">

        <button
          onClick={() => setActiveTab("description")}
          className={`pb-2 text-sm sm:text-base font-semibold whitespace-nowrap transition ${
            activeTab === "description"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 text-sm sm:text-base font-semibold whitespace-nowrap transition ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Reviews (122)
        </button>
      </div>

      {/* Content Box */}
      <div className="mt-6 bg-white border rounded-lg shadow-sm p-4 sm:p-6 transition-all duration-300">

        {activeTab === "description" && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Upgrade your everyday style with this beautifully designed piece
              that blends comfort and elegance effortlessly. Made from
              high-quality, breathable fabric, it offers a perfect fit for
              all-day wear.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Whether you're heading out for a casual day or a special occasion,
              this versatile product adds a modern touch to your wardrobe while
              keeping you comfortable and confident.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-3 text-gray-700 text-sm sm:text-base animate-fadeIn">
            <p className="font-semibold text-base">⭐ 4.5 / 5</p>

            <div className="border-b pb-2">
              <p>“Great quality product!”</p>
            </div>

            <div className="border-b pb-2">
              <p>“Very comfortable and stylish.”</p>
            </div>

            <div>
              <p>“Worth the price.”</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Description;