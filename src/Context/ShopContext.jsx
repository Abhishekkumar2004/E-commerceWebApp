import React, { createContext, useState, useEffect } from "react";
import AllProduct from "../Components/Assets/Data/all_product";
import toast from "react-hot-toast";

export const ShopContext = createContext(null);

// Initialize cart
const getCart = () => {
  let cart = {};
  for (let i = 0; i < AllProduct.length; i++) {
    cart[AllProduct[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : getCart();
  });

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD Item to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newQty = (prev[itemId] || 0) + 1;

      toast.success("Item added to cart 🛒");

      return {
        ...prev,
        [itemId]: newQty,
      };
    });
  };

  //  REMOVE Item from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId] || prev[itemId] === 0) return prev;

      const newQty = prev[itemId] - 1;

      toast("Item removed 🗑️");

      return {
        ...prev,
        [itemId]: newQty,
      };
    });
  };

  // TOTAL AMOUNT
  const getTotalCartAmount = () => {
    return AllProduct.reduce((total, product) => {
      return total + product.new_price * (cartItems[product.id] || 0);
    }, 0);
  };

  // TOTAL ITEMS
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const contextValue = {
    AllProduct,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;