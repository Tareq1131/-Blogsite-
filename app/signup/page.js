import React from "react";

const Signup = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-100 rounded shadow-md justify-center">
      <h1 className="text-3xl font-bold mb-4">Create Your Account</h1>
      <p className="text-lg text-gray-600 mb-6">
        Get started with our platform today!
      </p>
      <form>
        <label className="block mb-2">
          Email
          <input
            type="email"
            className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
            placeholder="example@email.com"
          />
        </label>
        <label className="block mb-2">
          Password
          <input
            type="password"
            className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
            placeholder="Password"
          />
        </label>
        <label className="block mb-2">
          Confirm Password
          <input
            type="password"
            className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
            placeholder="Confirm Password"
          />
        </label>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          Signup
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-orange-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
