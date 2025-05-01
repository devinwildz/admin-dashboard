
import { useState, useEffect, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';


function InfoCard({ title, items = [], type }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="dark:bg-[#2e3655] mb-6 md:mb-0 md:mt-6 bg-gray-100 p-4 rounded-lg shadow-md w-full md:w-[49%]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-black dark:text-white text-lg font-semibold">{title}</h2>
                <div className="relative hover:bg-gray-300 dark:hover:bg-gray-800 p-2 rounded-full" ref={dropdownRef} >
                    <button className="text-gray-400 hover:text-white">
                        <BsThreeDotsVertical
                            className="text-black dark:text-gray-400 cursor-pointer"
                            onClick={() => setShowDropdown(prev => !prev)}
                        />
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-200 dark:bg-[#2c3550] rounded-md shadow-lg z-10">
                                <ul className="text-sm">
                                    <li className="px-4 text-left py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                                        Rename Team
                                    </li>
                                    <li className="px-4 text-left py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                                        View Details
                                    </li>
                                    <li className="px-4 text-left py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                                        Add to favorites
                                    </li>
                                    <li className="px-4 text-left py-2 text-red-500 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                                        Delete Team
                                    </li>
                                </ul>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img src={item.avatar || item.icon} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="text-black dark:text-white font-medium">{item.name}</p>
                                <p className="text-sm text-gray-400">{item.subtitle}</p>
                            </div>
                        </div>

                        {type === "connections" ? (
                            <button className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full text-white">
                                <FaUserPlus size={20} />
                            </button>
                        ) : (
                            <span className={`text-xs px-2 text-white py-1 rounded-full font-semibold ${item.badgeColor}`}>
                                {item.badge}
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            <div className="mt-4 text-center">
                <a href="#" className="text-sm text-violet-500 hover:underline">
                    {type === "connections" ? "View all connections" : "View all teams"}
                </a>
            </div>
        </div>
    );
}

export default InfoCard;
