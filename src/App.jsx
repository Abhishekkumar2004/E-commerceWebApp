import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shops";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import MenBanner from "../src/Components/Assets/men_banner.png";
import WomenBanner from "../src/Components/Assets/women_banner.png";
import KidsBanner from "../src/Components/Assets/kid_banner.png";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/mens"
          element={<ShopCategory banner={MenBanner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={WomenBanner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={KidsBanner} category="kid" />}
        />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
