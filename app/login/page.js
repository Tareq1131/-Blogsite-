// import React from "react";

// const LoginPage = () => {
//   return (
//     <div className="container p-4 pt-6 mx-auto md:p-6 lg:p-12">
//       <h1 className="mb-4 text-3xl font-bold">Login</h1>
//       <form className="max-w-md">
//         <label className="block mb-2">
//           Username:
//           <input
//             type="text"
//             className="w-full p-2 pl-10 text-sm text-gray-700"
//             placeholder="Enter your username"
//           />
//         </label>
//         <label className="block mb-2">
//           Password:
//           <input
//             type="password"
//             className="w-full p-2 pl-10 text-sm text-gray-700"
//             placeholder="Enter your password"
//           />
//         </label>
//         <button
//           type="submit"
//           className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Login
        </h1>
        <form>
          <label className="block mb-4">
            <span className="text-gray-700">Username:</span>
            <input
              type="text"
              className="block w-full p-3 mt-1 text-gray-700 border border-gray-300 rounded focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter your username"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              className="block w-full p-3 mt-1 text-gray-700 border border-gray-300 rounded focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter your password"
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 mt-6 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
