import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/popular";
import Offers from "../Components/Offers/offers";
import NewCollections from "../Components/NewCollections/newCollection";
import NewsLetter from "../Components/NewsLetter.jsx/NewsLetter";

const Shops = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shops;
