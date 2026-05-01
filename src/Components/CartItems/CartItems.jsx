import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import RemoveIcon from "../Assets/cart_cross_icon.png";
import toast from "react-hot-toast"; 

const CartItems = () => {
  const {
    AllProduct,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const subtotal = getTotalCartAmount();

  const hasItems = Object.values(cartItems || {}).some((qty) => qty > 0);

  const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

  return (
    <div className="px-4 md:px-8 py-5 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="hidden md:grid grid-cols-6 items-center font-bold text-lg border-b pb-3">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p className="text-center">Remove</p>
      </div>

      {/* EMPTY CART */}
      {!hasItems && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          Your cart is empty 🛒
        </p>
      )}

      {/* ITEMS */}
      {AllProduct.map((item) => {
        if (cartItems?.[item.id] > 0) {
          return (
            <div key={item.id} className="border-b py-4">
              {/* MOBILE */}
              <div className="flex flex-col gap-3 md:hidden">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />

                  <div className="flex flex-col justify-between">
                    <p className="font-semibold">{item.name}</p>
                    <p>{formatPrice(item.new_price)}</p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 bg-gray-200 rounded"
                      ></button>

                      <span>{cartItems[item.id]}</span>

                      <button
                        onClick={() => addToCart(item.id)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="font-semibold">
                    Total: {formatPrice(item.new_price * cartItems[item.id])}
                  </p>

                  <img
                    onClick={() => removeFromCart(item.id)}
                    src={RemoveIcon}
                    alt="Remove"
                    className="w-5 cursor-pointer"
                  />
                </div>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:grid grid-cols-6 items-center hover:bg-gray-50 transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />

                <p>{item.name}</p>

                <p>{formatPrice(item.new_price)}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    −
                  </button>

                  <span>{cartItems[item.id]}</span>

                  <button
                    onClick={() => addToCart(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <p className="font-semibold">
                  {formatPrice(item.new_price * cartItems[item.id])}
                </p>

                <img
                  onClick={() => removeFromCart(item.id)}
                  src={RemoveIcon}
                  alt="Remove"
                  className="w-5 cursor-pointer mx-auto"
                />
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* FIXED BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 items-stretch">
        {/* CART TOTAL */}
        <div className="flex flex-col justify-between border p-6 rounded-lg shadow-sm h-full">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-5">Cart Total</h1>

            <div className="flex justify-between py-2">
              <p>Subtotal</p>
              <p>{formatPrice(subtotal)}</p>
            </div>

            <hr />

            <div className="flex justify-between py-2">
              <p>Shipping Fee</p>
              <p className="text-green-600 font-semibold">Free</p>
            </div>

            <hr />

            <div className="flex justify-between py-3 font-bold text-lg">
              <h3>Total</h3>
              <h3>{formatPrice(subtotal)}</h3>
            </div>
          </div>

          <button
            disabled={subtotal === 0}
            className={`w-full mt-6 py-3 rounded-md transition ${
              subtotal === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Proceed To Checkout
          </button>
        </div>

        {/* PROMO BOX */}
        <div className="flex flex-col justify-between border p-6 rounded-lg shadow-sm h-full">
          <div>
            <p className="text-gray-600 mb-4">
              If you have a promo code, enter it here
            </p>

            <div className="flex">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 border px-3 py-2 rounded-l-md outline-none"
              />
              <button className="bg-black text-white px-5 rounded-r-md hover:bg-gray-800 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
