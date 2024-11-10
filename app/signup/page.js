import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Create Your Account</h1>
        <p className="mb-8 text-lg text-center text-gray-600">
          Get started with our platform today!
        </p>
        <form>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="block w-full p-3 mt-1 text-gray-700 border border-gray-300 rounded focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="example@email.com"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              className="block w-full p-3 mt-1 text-gray-700 border border-gray-300 rounded focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Password"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Confirm Password</span>
            <input
              type="password"
              className="block w-full p-3 mt-1 text-gray-700 border border-gray-300 rounded focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Confirm Password"
            />
          </label>
          <button
            className="w-full py-3 mt-6 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
            type="submit"
          >
            Signup
          </button>
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 hover:text-orange-700">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
