import React, { useState } from "react";
import {
    FaGoogle,
    FaSlack,
    FaGithub,
    FaMailchimp,
    FaTasks,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaDribbble,
    FaBehance,
} from "react-icons/fa";
import { FiTrash2, FiLink } from "react-icons/fi";
import { Switch } from "@mui/material"; // Fix: proper import

const connectedAccounts = [
    { icon: <FaGoogle className="text-xl text-[#DB4437]" />, name: "Google", desc: "Calendar and contacts", toggle: true },
    { icon: <FaSlack className="text-xl text-[#4A159B]" />, name: "Slack", desc: "Communication", toggle: false },
    { icon: <FaGithub className="text-xl text-black dark:text-white" />, name: "Github", desc: "Manage your Git repositories", toggle: true },
    { icon: <FaMailchimp className="text-xl text-yellow-500" />, name: "Mailchimp", desc: "Email marketing service", toggle: true },
    { icon: <FaTasks className="text-xl text-orange-500" />, name: "Tasks", desc: "Communication", toggle: false },
];

const socialAccounts = [
    { icon: <FaFacebookF className="text-xl text-[#1877F2]" />, name: "Facebook", connected: false },
    { icon: <FaTwitter className="text-xl text-[#1DA1F2]" />, name: "Twitter", connected: true, handle: "@Pixinvent" },
    { icon: <FaInstagram className="text-xl text-[#E4405F]" />, name: "Instagram", connected: true, handle: "@Pixinvent" },
    { icon: <FaDribbble className="text-xl text-[#EA4C89]" />, name: "Dribbble", connected: false },
    { icon: <FaBehance className="text-xl text-[#1769FF]" />, name: "Behance", connected: false },
];

const AccountConnectionTab = () => {
    const [connections, setConnections] = useState(connectedAccounts);

    const handleToggle = (index) => {
        const updated = [...connections];
        updated[index].toggle = !updated[index].toggle;
        setConnections(updated);
    };

    return (
        <div className="bg-gray-100 dark:bg-[#1e223a] mt-5 p-6 rounded-xl shadow-md dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Connected Accounts */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Connected Accounts</h3>
                    <p className="text-md text-gray-400 mb-4">Display content from your connected accounts on your site</p>
                    <ul className="space-y-5">
                        {connections.map((acc, idx) => (
                            <li key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span>{acc.icon}</span>
                                    <div>
                                        <h4 className="text-md font-medium">{acc.name}</h4>
                                        <p className="text-sm text-gray-400">{acc.desc}</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={acc.toggle}
                                    onChange={() => handleToggle(idx)}
                                    sx={{
                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                            color: '#8b5cf6',
                                        },
                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                            backgroundColor: '#8b5cf6',
                                        },
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Accounts */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Social Accounts</h3>
                    <p className="text-md text-gray-400 mb-4">Display content from social accounts on your site</p>
                    <ul className="space-y-5">
                        {socialAccounts.map((acc, idx) => (
                            <li key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span>{acc.icon}</span>
                                    <div>
                                        <h4 className="text-md font-medium">{acc.name}</h4>
                                        <p className="text-sm text-gray-400">
                                            {acc.connected ? acc.handle : "Not Connected"}
                                        </p>
                                    </div>
                                </div>

                                {acc.connected ? (
                                    <button className="text-red-400 p-2 bg-red-100 rounded-md hover:text-red-600">
                                        <FiTrash2 className="text-lg" />
                                    </button>
                                ) : (
                                    <button className="text-gray-400 bg-gray-200 dark:bg-[#2c3550] p-2 rounded-md hover:text-black dark:hover:text-white">
                                        <FiLink className="text-lg" />
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AccountConnectionTab;
