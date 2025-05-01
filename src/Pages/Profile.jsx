import React, { useState } from 'react'
import { FaPalette, FaMapMarkerAlt, FaCalendarAlt, FaUserCheck } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { RiApps2Line } from 'react-icons/ri';
import { AiOutlineLink } from 'react-icons/ai';
import Tabs from '../Components/Tabs'
import ProfileTab from '../Components/ProfileTab'
import TeamTab from '../Components/TeamTab'
import ProjectTab from '../Components/ProjectTab'
import ConnectionTab from '../Components/ConnectionTab'


const Profile = () => {

    const tabItems = [
        { key: 'profile', label: 'Profile', icon: <FaUserCheck /> },
        { key: 'teams', label: 'Teams', icon: <FiUsers /> },
        { key: 'projects', label: 'Projects', icon: <RiApps2Line /> },
        { key: 'connections', label: 'Connections', icon: <AiOutlineLink /> },
    ];


    const content = {
        profile: <ProfileTab />,
        teams: <TeamTab />,
        projects: <ProjectTab />,
        connections: <ConnectionTab />,
    };

    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="bg-white min-h-screen p-4 md:p-6 dark:bg-[#1e2640]">
            <header className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center bg-gray-100 dark:bg-[#2e3655] shadow-md inset-2 p-4 md:p-5 rounded-md">
                {/* Left side: Avatar + Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                    <img
                        src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
                        alt="User Avatar"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-purple-500"
                    />
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold dark:text-white text-black">John Doe</h2>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
                            <span className="flex items-center space-x-1">
                                <FaPalette />
                                <span>UX Designer</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <FaMapMarkerAlt />
                                <span>Vatican City</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <FaCalendarAlt />
                                <span>Joined April 2021</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right side: Connected button */}
                <div className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-purple-500 hover:bg-purple-600 active:scale-95 transition-transform text-white text-sm font-medium px-4 py-2 rounded-md flex justify-center items-center space-x-2 shadow-md">
                        <FaUserCheck />
                        <span>Connected</span>
                    </button>
                </div>
            </header>

            <Tabs tabs={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            {content[activeTab]}

        </div>
    )
}

export default Profile;