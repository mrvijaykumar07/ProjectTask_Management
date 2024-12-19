import React, { useState } from 'react';

const Login = ({ LoginHandle }) => {
  const [Gmail, SetGmail] = useState("");
  const [Password, SetPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    LoginHandle(Gmail, Password);
    SetGmail("");
    SetPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[360px] md:w-[400px]">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Task Management</h1>
        <p className="text-center text-gray-600 mb-4">Sign in to manage your tasks</p>

        <form onSubmit={SubmitHandler} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={Gmail}
              onChange={(e) => SetGmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700" // Ensure text is visible
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={Password}
              onChange={(e) => SetPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700" // Ensure text is visible
              required
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Forgot your password?{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
