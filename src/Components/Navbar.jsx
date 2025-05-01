import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import {
    LightMode,
    DarkMode,
    Notifications,
    Menu,
} from "@mui/icons-material";
import { RiMailOpenLine, RiUserLine, RiSettings3Line, RiLogoutBoxLine } from 'react-icons/ri';
import { useTheme } from "../Context/ThemeContext";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null); // ✅ Added ref

    const initialNotifications = [
        {
            id: 1,
            user: 'Lettie',
            message: 'Won the monthly best seller gold badge 🏆',
            time: '1h ago',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        },
        {
            id: 2,
            user: 'Charles Franklin',
            message: 'Accepted your connection',
            time: '12h ago',
            avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
        },
        {
            id: 3,
            user: 'Natalie',
            message: 'You have a new message ✉️',
            time: '1h ago',
            avatar: 'https://i.pravatar.cc/150?img=4',
        },
        {
            id: 4,
            user: 'ACME Inc.',
            message: 'Made a new order of $1,154 🛒',
            time: '1 day ago',
            avatar: 'https://i.pravatar.cc/150?img=8',
        },
        {
            id: 5,
            user: 'Charles Franklin',
            message: 'Accepted your connection',
            time: '12h ago',
            avatar: 'https://i.pravatar.cc/150?img=2',
        },
    ];

    const [notifications, setNotifications] = useState(initialNotifications);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);
    const closeSidebar = () => setSidebarOpen(false);

    // ✅ Close on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const [avatarOpen, setAvatarOpen] = useState(false);
    const avatarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (avatarRef.current && !avatarRef.current.contains(event.target)) {
                setAvatarOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>
            {/* Navbar */}
            <nav className="flex justify-between items-center px-4 md:px-6 py-4 bg-white dark:bg-[#1e2640] shadow-md text-black dark:text-white">
                {/* Sidebar toggle */}
                <button onClick={toggleSidebar}>
                    <Menu className="text-gray-700 dark:text-gray-200" />
                </button>

                {/* Search Bar */}
                <div className="hidden md:block flex-grow mx-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 dark:text-gray-400">
                            <CiSearch size={20} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search (Ctrl + K)"
                            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-[#2c3550] text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-[#1e223a]"
                        />
                    </div>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button className="hover:bg-gray-200 dark:hover:bg-[#2c3550] p-2 rounded-lg" onClick={toggleDarkMode}>
                        {darkMode ? <LightMode className="text-gray-300" /> : <DarkMode className="text-gray-700" />}
                    </button>

                    {/* Notifications */}
                    <div className="relative" ref={dropdownRef}>
                        <div
                            onClick={() => setOpen(!open)}
                            className="hover:bg-gray-200 dark:hover:bg-[#2c3550] cursor-pointer p-2 rounded-lg relative"
                        >
                            <Notifications className="text-gray-700 dark:text-gray-200" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </div>

                        {open && (
                            <div className="absolute -right-10 md:right-0 mt-2 w-80 xl:w-96 bg-white dark:bg-[#2c3550] text-black dark:text-white shadow-xl rounded-md transition-all duration-200 origin-top-right z-50">
                                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                    <h4 className="font-semibold">Notification</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs px-2 py-1 bg-purple-500 text-white rounded-full">{notifications.length} New</span>
                                        <RiMailOpenLine
                                            className="text-gray-500 dark:text-gray-300"
                                            size={20}
                                        />
                                    </div>
                                </div>

                                <ul className="max-h-72 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
                                    {notifications.map((notif, index) => (
                                        <li key={notif.id} className="flex items-start gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1e223a]">
                                            <img
                                                src={notif.avatar}
                                                alt={notif.user}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div className="text-sm">
                                                <p className="font-medium">
                                                    {index === 0 ? "🎉 " : ""}{notif.user}
                                                </p>
                                                <p className="text-gray-600 dark:text-gray-400">{notif.message}</p>

                                                <div className="flex items-center mt-1 gap-2">
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 ">
                                                        {notif.time}
                                                    </p>
                                                    <div
                                                        className={`w-2 h-2 rounded-full  ${notif.id % 2 === 0
                                                            ? 'bg-purple-500'
                                                            : 'group-hover:bg-gray-400'
                                                            }`}
                                                    ></div>
                                                </div>


                                            </div>

                                        </li>
                                    ))}
                                </ul>

                                <div className="p-3">
                                    <button className="w-full py-2 px-3 rounded-md text-sm font-medium bg-purple-500 hover:bg-purple-600 text-white">
                                        View all notifications
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Avatar */}
                    {/* Avatar Dropdown */}
                    <div className="relative" ref={avatarRef}>
                        <div className="relative">
                            <div
                                className="w-10 h-10  rounded-full cursor-pointer overflow-hidden border-2 border-[#2c3550]"
                                onClick={() => setAvatarOpen(!avatarOpen)}
                            >
                                <img
                                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
                                    alt="profile"
                                    className="w-full h-full object-cover"
                                />

                            </div>
                            <span className="absolute bottom-1 right-0  w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>

                        {avatarOpen && (
                            <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-[#2c3550] text-black dark:text-white rounded-md shadow-xl z-50 overflow-hidden">
                                <Link to="/profile">
                                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1e223a]">
                                        <RiUserLine className="mr-2" size={18} />
                                        Profile
                                    </button>
                                </Link>
                                <Link to="/setting">
                                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1e223a]">
                                        <RiSettings3Line className="mr-2" size={18} />
                                        Settings
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1e223a] text-red-500">

                                        <RiLogoutBoxLine className="mr-2" size={18} />
                                        Logout
                                    </button>
                                </Link>

                            </div>
                        )}
                    </div>

                </div>
            </nav >

            {/* Sidebar */}
            < Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        </>
    );
}
