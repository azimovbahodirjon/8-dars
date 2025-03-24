import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="grid h-screen w-full place-items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./signup-bg.jpg")`,
      }}
    >
      <div className="p-8 rounded-lg max-w-md w-full">
        <img src="./logo.svg" className="mx-auto w-16 mb-4" alt="Logo" />

        <h2 className="text-4xl text-center mb-5 font-bold text-white">
          Register
        </h2>
        <div className="flex flex-col gap-4 items-center">
          <label className="text-white w-80">
            Display Name
            <input
              type="text"
              required
              placeholder="Type here"
              className="input w-full mt-1 p-4 rounded-xl border border-gray-300 bg-white text-gray-600"
            />
          </label>
          <label className="text-white w-80">
            Email
            <input
              type="email"
              required
              placeholder="Type here"
              className="input w-full mt-1 p-4 rounded-xl border border-gray-300 bg-white text-gray-600"
            />
          </label>
          <label className="text-white w-80">
            Password
            <input
              type="password"
              required
              placeholder="Type here"
              className="input w-full mt-1 p-4 rounded-xl border border-gray-300 bg-white text-gray-600"
            />
          </label>

          {/* Tugmalarni pastma-past qilib joylashtirish */}
          <div className="flex flex-col gap-3 mt-4 w-80">
            <button className="btn bg-blue-600 text-white py-3 rounded-xl w-full transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
              Register
            </button>
            <button className="btn bg-gray-500 text-white py-3 rounded-xl w-full transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-105">
              Google
            </button>
          </div>
        </div>

        <div className="text-center text-white mt-4">
          <p>
            If you have an account,{" "}
            <Link
              className="text-yellow-400 underline hover:text-yellow-500 transition-all duration-300"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
