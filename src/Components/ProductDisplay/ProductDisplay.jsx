import React, { useContext, useState } from "react";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import toast from "react-hot-toast";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [size, setSize] = useState("");

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-8 py-8 max-w-6xl mx-auto">

      {/* LEFT (Images) */}
      <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-1/2">

        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 justify-center">
          {[1, 2, 3, 4].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt=""
              className="w-16 h-16 md:w-20 md:h-20 object-contain border cursor-pointer"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-[250px] sm:w-[300px] md:w-[400px] object-contain"
          />
        </div>
      </div>

      {/* RIGHT (Details) */}
      <div className="w-full md:w-1/2">

        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 py-2">
          {[1, 2, 3, 4].map((_, i) => (
            <img key={i} src={starIcon} alt="" className="w-4 sm:w-5" />
          ))}
          <img src={starDullIcon} alt="" className="w-4 sm:w-5" />
          <p className="text-sm">(122)</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 font-bold text-black">
          <p className="line-through text-gray-500 text-sm sm:text-base">
            ₹{product.old_price}
          </p>
          <p className="text-red-600 text-lg sm:text-xl">
            ₹{product.new_price}
          </p>
        </div>

        {/* Description */}
        <p className="py-3 text-gray-600 text-sm sm:text-base leading-relaxed">
          Lightweight striped blouse featuring flutter sleeves, overlap collar,
          and a flattering peplum hem for a chic everyday look.
        </p>

        {/* Sizes */}
        <div>
          <h2 className="text-black font-semibold text-lg py-2">
            Select Size
          </h2>

          <div className="flex flex-wrap gap-3">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-1 sm:px-6 sm:py-2 border rounded-lg text-sm sm:text-base font-medium transition ${
                  size === s
                    ? "bg-black text-white border-black"
                    : "hover:bg-blue-100 hover:border-blue-500"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
  onClick={() => {
    if (!size) {
      toast.error("Please select a size ❗");
      return;
    }

    addToCart(product.id, size);
  }}
  className="w-full sm:w-auto text-white text-base sm:text-lg font-bold rounded-md bg-red-600 py-3 px-6 mt-5 hover:bg-red-500 transition"
>
  Add to Cart
</button>

        {/* Category */}
        <p className="py-2 text-sm sm:text-base">
          <span className="font-semibold">Category:</span> Women, T-Shirt, Crop Top
        </p>

        {/* Tags */}
        <p className="py-2 text-sm sm:text-base">
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;