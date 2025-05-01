import React from 'react'
import { FiUsers } from 'react-icons/fi';
import {
    FaUser,
    FaCheck,
    FaCrown,
    FaFlag,
    FaPhone,
    FaSkype,
    FaEnvelope,
} from 'react-icons/fa';
import { RiApps2Line } from 'react-icons/ri';
import { MdTranslate } from 'react-icons/md';

const DetailsCard = () => {
    return (
        <div className=" w-full md:w-[33%] mt-5 space-y-5 md:space-y-6">
            <div className="w-full bg-gray-100 dark:bg-[#2e3655] rounded-lg p-6 text-sm space-y-6">
                {/* About */}
                <div>
                    <h2 className="text-md font-medium dark:text-gray-400 uppercase mb-3">
                        About
                    </h2>
                    <div className="space-y-3 ">
                        <p className="flex text-md dark:text-gray-400 items-center gap-2">
                            <FaUser className="dark:text-gray-400 " />{' '}
                            <span>Full Name: John Doe</span>
                        </p>
                        <p className="flex text-md items-center dark:text-gray-400 gap-2">
                            <FaCheck className="dark:text-gray-400" />{' '}
                            <span>Status: Active</span>
                        </p>
                        <p className="flex text-md items-center dark:text-gray-400 gap-2">
                            <FaCrown className="dark:text-gray-400" />{' '}
                            <span>Role: Developer</span>
                        </p>
                        <p className="flex text-md dark:text-gray-400 items-center gap-2">
                            <FaFlag className="dark:text-gray-400" /> <span>Country: USA</span>
                        </p>
                        <p className="flex text-md dark:text-gray-400 items-center gap-2">
                            <MdTranslate className="dark:text-gray-400" />{' '}
                            <span>Languages: English</span>
                        </p>
                    </div>
                </div>

                {/* Contacts */}
                <div>
                    <h2 className="text-md font-medium dark:text-gray-400 uppercase mb-3">
                        Contacts
                    </h2>
                    <div className="space-y-3 ">
                        <p className="flex text-md dark:text-gray-400 items-center gap-2">
                            <FaPhone className="dark:text-gray-400" />{' '}
                            <span>Contact: (123) 456-7890</span>
                        </p>
                        <p className="flex text-md dark:text-gray-400 items-center gap-2">
                            <FaSkype className="dark:text-gray-400" />{' '}
                            <span>Skype: john.doe</span>
                        </p>
                        <p className="flex text-md dark:text-gray-400 items-center gap-2">
                            <FaEnvelope className="dark:text-gray-400" />{' '}
                            <span>Email: john.doe@example.com</span>
                        </p>
                    </div>
                </div>

                {/* Teams */}
                <div>
                    <h2 className="text-md font-medium dark:text-gray-400 uppercase mb-3">
                        Teams
                    </h2>
                    <div className="space-y-3 text-md dark:text-gray-400">
                        <p>Backend Developer (126 Members)</p>
                        <p>React Developer (98 Members)</p>
                    </div>
                </div>
            </div>
            {/* Overview */}
            <div className="w-full bg-gray-100  dark:bg-[#2e3655] rounded-lg p-6 text-sm ">
                <h2 className="text-md font-medium dark:text-gray-400 uppercase mb-3">
                    Overview
                </h2>
                <div className="space-y-3 text-md dark:text-gray-400">
                    <p className="flex text-md dark:text-gray-400 items-center gap-2">
                        <FaCheck />
                        <span>Task Compiled: 13.5k </span>
                    </p>

                    <p className="flex text-md dark:text-gray-400 items-center gap-2">
                        <RiApps2Line />
                        Projects Compiled: 146
                    </p>

                    <p className="flex text-md dark:text-gray-400 items-center gap-2">
                        <FiUsers />
                        Connections: 897
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard;