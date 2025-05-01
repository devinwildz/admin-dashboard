import React, { useState, useRef, useEffect } from "react";
import BarChartView from "./BarChartView";
import { HiDotsVertical } from "react-icons/hi";
import {
  RiBarChartBoxLine,
  RiMoneyDollarCircleLine,
  RiShoppingCartLine,
  RiShoppingBag3Line,
} from "react-icons/ri";
const tabData = [
  {
    label: "Orders",
    dataKey: "orders",
    icons: <RiShoppingCartLine size={20} />,
    data: [
      { month: "Jan", orders: 5000 },
      { month: "Feb", orders: 9000 },
      { month: "Mar", orders: 12000 },
      { month: "Apr", orders: 5000 },
      { month: "May", orders: 9000 },
      { month: "June", orders: 12000 },
    ],
  },
  {
    label: "Sales",
    dataKey: "sales",
    icons: <RiBarChartBoxLine size={20} />,
    data: [
      { month: "Jan", sales: 10000 },
      { month: "Feb", sales: 15000 },
      { month: "Mar", sales: 18000 },
      { month: "Apr", sales: 12000 },
      { month: "May", sales: 17000 },
      { month: "June", sales: 19000 },
    ],
  },
  {
    label: "Profit",
    dataKey: "profit",
    icons: <RiMoneyDollarCircleLine size={20} />,
    data: [
      { month: "Jan", profit: 2000 },
      { month: "Feb", profit: 3000 },
      { month: "Mar", profit: 2500 },
      { month: "Apr", profit: 2800 },
      { month: "May", profit: 3500 },
      { month: "June", profit: 4000 },
    ],
  },
  {
    label: "Income",
    dataKey: "income",
    icons: <RiShoppingBag3Line size={20} />,
    data: [
      { month: "Jan", income: 8000 },
      { month: "Feb", income: 12000 },
      { month: "Mar", income: 11000 },
      { month: "Apr", income: 10000 },
      { month: "May", income: 11500 },
      { month: "June", income: 13000 },
    ],
  },
];

const EarningReports = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])


  return (
    <div className="bg-gray-100 dark:bg-[#2e3655] shadow-md rounded-xl  xl:mx-2 my-6">
      {/* Header */}
      <div className="p-5 md:p-6 ">
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Earning Reports
            </h2>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Yearly Earnings Overview
            </p>
          </div>
          <div className="relative inline-block text-left" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" text-gray-500 dark:text-gray-400 rounded-full p-2"
            >
              <HiDotsVertical size={20} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#2c3550] shadow-xl rounded-md transition-all duration-200 z-50">
                <ul className="py-3 text-sm text-black dark:text-white ">
                  <li
                    className=" py-2 hover:bg-gray-200 px-4 dark:hover:bg-[#1f2235] cursor-pointer"
                    onClick={() => {
                      alert("View More clicked");
                      setIsOpen(false);
                    }}
                  >
                    View More
                  </li>
                  <li
                    className="py-2 hover:bg-gray-200 px-4 dark:hover:bg-[#1f2235] cursor-pointer"
                    onClick={() => {

                      setIsOpen(false);
                    }}
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-between md:justify-start gap-4 mb-6">
          {tabData.map((tab, idx) => {
            const isActive = tabIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setTabIndex(idx)}
                className={`
          px-3 md:px-4 py-3 flex flex-col items-center justify-center gap-1 rounded-lg border
          transition-all duration-200 min-w-[10px] md:min-w-[100px]
          ${isActive
                    ? "bg-transparent border-0 border-indigo-500  text-white shadow-md ring-1 ring-indigo-500"
                    : " border-gray-600 border border-dashed  text-gray-400 "
                  }
        `}
              >
                <div
                  className={`p-2 rounded-md flex items-center justify-center 
            ${isActive ? "bg-indigo-500 text-white" : "bg-gray-300 dark:bg-gray-600 text-black dark:text-gray-400"}
          `}
                >
                  {tab.icons}
                </div>
                <span className="text-sm hidden md:block text-black dark:text-gray-300 font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>


      {/* Chart */}
      <div className="w-full overflow-x-auto">
        <BarChartView
          data={tabData[tabIndex].data}
          dataKey={tabData[tabIndex].dataKey}
        />
      </div>
    </div>
  );
};

export default EarningReports;
