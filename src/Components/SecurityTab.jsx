// securitytab.jsx
import React from 'react';

const SecurityTab = () => {
  return (
    <>
      <div className=" bg-gray-100 dark:bg-[#1e223a] my-5 p-6 md:p-8 rounded-xl shadow-md dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Password - 1 column only */}
          <div className="col-span-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Current Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md bg-transparent dark:bg-[#2c3550] border border-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                {/* Show/hide icon */}
              </span>
            </div>
          </div>

          {/* New Password */}
          <div className="col-span-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">New Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md bg-transparent dark:bg-[#2c3550] border border-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                {/* Show/hide icon */}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="col-span-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Confirm New Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md bg-transparent dark:bg-[#2c3550] border border-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                {/* Show/hide icon */}
              </span>
            </div>
          </div>
        </form>
        <div className="mt-6 text-md space-y-2">
          <p className="font-semibold">Password Requirements:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-400">
            <li>Minimum 8 characters long - the more, the better</li>
            <li>At least one lowercase character</li>
            <li>At least one number, symbol, or whitespace character</li>
          </ul>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md">
            Save changes
          </button>
          <button className="bg-gray-600 text-gray-300 px-6 py-2 rounded-md" disabled>
            Reset
          </button>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-[#1e223a] my-5 p-6 md:p-8 rounded-xl shadow-md dark:text-white">
        <h2 className=" text-xl font-semibold mb-1">Two-steps verification</h2>
        <p className=" text-base mb-1">Two factor authentication is not enabled yet.</p>
        <p className="text-gray-400 text-sm mb-4">
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.{" "}
          <a href="#" className="text-purple-500 font-medium hover:underline">Learn more.</a>
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md transition">
          Enable Two-Factor Authentication
        </button>
      </div>

    </>
  );
};

export default SecurityTab;

