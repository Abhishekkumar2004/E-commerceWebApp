import React, { useState, useContext } from "react";
import Logo from "../Assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(ShopContext);

  const totalItems = Object.values(cartItems || {}).reduce(
    (sum, qty) => sum + qty,
    0
  );

  // ✅ reusable active class
  const navClass = ({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
        : "hover:text-blue-500"
    }`;

  return (
    <div className="border-b-2 border-gray-300 px-4 md:px-6 py-3">

      {/* Top Bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img className="h-14 md:h-20 cursor-pointer" src={Logo} alt="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center text-lg font-semibold">
          <NavLink to="/" className={navClass}>Shop</NavLink>
          <NavLink to="/mens" className={navClass}>Men</NavLink>
          <NavLink to="/womens" className={navClass}>Women</NavLink>
          <NavLink to="/kids" className={navClass}>Kids</NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <Link to="/login">
            <button className="hidden md:block rounded-full bg-gray-200 font-bold text-lg px-6 py-2 border-2 hover:bg-gray-300 transition">
              Login
            </button>
          </Link>

          {/* Cart */}
          <NavLink to="/cart">
            <div className="relative flex items-center">
              <ShoppingCart className="w-7 h-7 md:w-8 md:h-8 cursor-pointer" />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[18px] h-5 px-1 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
          </NavLink>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-lg font-semibold">
          <NavLink onClick={() => setMenuOpen(false)} to="/" className={navClass}>
            Shop
          </NavLink>

          <NavLink onClick={() => setMenuOpen(false)} to="/mens" className={navClass}>
            Men
          </NavLink>

          <NavLink onClick={() => setMenuOpen(false)} to="/womens" className={navClass}>
            Women
          </NavLink>

          <NavLink onClick={() => setMenuOpen(false)} to="/kids" className={navClass}>
            Kids
          </NavLink>

          <Link to="/login">
            <button className="w-full bg-gray-200 py-2 rounded-md">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;