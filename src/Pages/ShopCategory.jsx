import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import DropDownIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/item";

const ShopCategory = (props) => {
  const { AllProduct } = useContext(ShopContext);

  // Filter products first (clean + efficient)
  const filteredProducts = AllProduct.filter(
    (item) => item.category === props.category,
  );

  return (
    <div>
      {/* Banner */}
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[400px] object-cover bg-gray-100 overflow-hidden"
        src={props.banner}
        alt="banner"
      />

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 md:px-8 py-4 gap-3">
        <p className="text-black text-sm sm:text-lg">
          <span className="font-bold">Showing {filteredProducts.length}</span>{" "}
          products
        </p>

        {/* Sort */}
        <div className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 cursor-pointer hover:bg-gray-300 transition">
          <span className="text-sm sm:text-base font-semibold">Sort by</span>
          <img className="h-3 w-3" src={DropDownIcon} alt="" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 md:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Explore More */}
      <div className="flex justify-center mt-8 mb-10">
        <button className="rounded-full text-sm sm:text-lg font-semibold bg-gray-200 px-6 sm:px-8 py-2 sm:py-3 hover:bg-gray-300 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
