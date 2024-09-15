import React from "react";

const LoginPage = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="max-w-md">
        <label className="block mb-2">
          Username:
          <input
            type="text"
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter your username"
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter your password"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
