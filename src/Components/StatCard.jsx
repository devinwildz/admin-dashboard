import React from "react";

const StatCard = ({ icon, title, subtitle, value, change, changeColor, children }) => {
  return (
    <div className="bg-gray-100 dark:bg-[#2e3655] shadow-md inset-2 p-5 rounded-xl text-black dark:text-white flex flex-col justify-between gap-3 w-full md:w-full">
      {/* Top */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 dark:bg-[#1e2640] rounded-md flex items-center justify-center text-xl">
          {icon}
        </div>
        <div>
          <p className="text-lg font-medium text-black dark:text-gray-400">{title}</p>
          <p className="text-md text-gray-400">{subtitle}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-20">
        {children}
      </div>

      {/* Bottom Stats */}
      <div className="flex items-end justify-between">
        <h3 className="text-xl font-semibold">{value}</h3>
        <span className={`text-xl font-semibold ${changeColor}`}>{change}</span>
      </div>
    </div>
  );
};

export default StatCard;
