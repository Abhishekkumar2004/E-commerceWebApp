import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };
const handleSubmit = () => {
  if (!form.email || !form.password || (!isLogin && !form.name)) {
    toast.error("Please fill all fields ❗");
    return;
  }

  if (!form.agree && !isLogin) {
    toast.error("Please accept terms ⚠️");
    return;
  }

  console.log("Form Data:", form);

  if (isLogin) {
    toast.success("Logged In Successfully 🎉");
  } else {
    toast.success("Account Created Successfully 🎉");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white rounded-3xl py-6 px-6 sm:px-10 w-full max-w-md shadow-xl">

        <h1 className="text-center text-xl sm:text-2xl font-bold mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4 py-4">

          {!isLogin && (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-blue-50 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              type="text"
              placeholder="Enter Name"
            />
          )}

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-blue-50 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            type="email"
            placeholder="Enter E-mail"
          />

          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className="bg-blue-50 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            type="password"
            placeholder="Enter Password"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white h-10 w-full rounded-xl text-base font-semibold hover:opacity-90 transition"
        >
          {isLogin ? "Login" : "Continue"}
        </button>

        {/* Toggle */}
        <p className="py-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-600 font-semibold cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

        {/* Terms */}
        {!isLogin && (
          <div className="flex items-start gap-2">
            <input
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="h-4 w-4 mt-1"
              type="checkbox"
            />
            <p className="text-xs">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default LoginSignup;