import React, { useState, useRef, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const countries = [
    {
        name: "United States",
        flag: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/vendor/fonts/flags/1x1/us.svg",
        amount: "$8,567k",
        change: "+25.8%",
        isPositive: true,
    },
    {
        name: "Brazil",
        flag: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/vendor/fonts/flags/1x1/br.svg",
        amount: "$2,415k",
        change: "-6.2%",
        isPositive: false,
    },
    {
        name: "India",
        flag: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/vendor/fonts/flags/1x1/in.svg",
        amount: "$865K",
        change: "+12.4%",
        isPositive: true,
    },
    {
        name: "Australia",
        flag: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/vendor/fonts/flags/1x1/au.svg",
        amount: "$745k",
        change: "-11.9%",
        isPositive: false,
    },
    {
        name: "France",
        flag: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/vendor/fonts/flags/1x1/fr.svg",
        amount: "$45",
        change: "+16.2%",
        isPositive: true,
    },
    {
        name: "China",
        flag: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/vendor/fonts/flags/1x1/cn.svg",
        amount: "$12k",
        change: "+14.8%",
        isPositive: true,
    },
];

const SalesCard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

    return (
        <div className="dark:bg-[#2e3655] bg-gray-100 rounded-xl p-5 md:p-6 shadow-md w-full md:w-[38%] xl:ml-2">
            <div className="flex items-center justify-between mb-4 relative">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Sales by Countries
                    </h2>
                    <p className="text-md text-gray-500 dark:text-gray-400">
                        Monthly Sales Overview
                    </p>
                </div>

                {/* Dropdown Trigger */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-gray-500 dark:text-gray-400"
                    >
                        <HiDotsVertical size={20} />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#2c3350] rounded-md shadow-lg z-10">
                            <ul className="text-sm py-3 text-gray-700 dark:text-gray-100">
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1f2235] cursor-pointer">
                                    Edit
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1f2235] cursor-pointer">
                                    Download
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1f2235] cursor-pointer">
                                    Share
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-4">
                {countries.map((country, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img src={country.flag} className="rounded-full w-10 h-10" />
                            <div>
                                <p className="text-lg font-normal text-gray-900 dark:text-white">
                                    {country.amount}
                                </p>
                                <p className="text-md text-gray-500 dark:text-gray-400">
                                    {country.name}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`flex items-center text-lg font-medium ${country.isPositive ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {country.isPositive ? (
                                <FaArrowUp className="w-3 h-3 mr-1" />
                            ) : (
                                <FaArrowDown className="w-3 h-3 mr-1" />
                            )}
                            {country.change}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesCard;
