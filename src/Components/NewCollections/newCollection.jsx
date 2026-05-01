import React from "react";
import NewCollection from "../Assets/Data/new_collections";
import Item from "../Items/item";

const NewCollectionSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 bg-[linear-gradient(180deg,#fde1ff,#dbeafe_60%)] py-10 px-4 md:px-6">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-700 text-center">
        NEW COLLECTIONS
      </h1>

      {/* Divider */}
      <hr className="w-24 sm:w-40 md:w-60 h-[3px] bg-gray-400 border-none rounded-full" />

      {/* Grid */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">

        {NewCollection.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}

      </div>
    </div>
  );
};

export default NewCollectionSection;