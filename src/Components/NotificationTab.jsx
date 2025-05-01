import React from "react";

const NotificationTab = () => {
    return (
        <div className="bg-gray-100 dark:bg-[#1e223a] my-5 rounded-xl shadow-md dark:text-white">
            <div className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3">Recent Devices</h2>
                <p className="text-md text-gray-400 mb-4">
                    We need permission from your browser to show notifications.{" "}
                    <a href="#" className="text-purple-500 hover:underline">Request Permission</a>
                </p>
            </div>




            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left text-md dark:text-white">
                    <thead>
                        <tr className="border-b border-gray-400 dark:text-gray-400">
                            <th className="py-2 px-6 text-nowrap md:px-8 font-medium">TYPE</th>
                            <th className="py-2 px-6 md:px-8 font-medium text-center">EMAIL</th>
                            <th className="py-2 px-6 md:px-8 font-medium text-center">BROWSER</th>
                            <th className="py-2 px-6 md:px-8 font-medium text-center">APP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            "New for you",
                            "Account activity",
                            "A new browser used to sign in",
                            "A new device is linked",
                        ].map((type, index) => (
                            <tr key={index} className="border-b border-gray-400">

                                <td className="py-3 text-nowrap  px-6 md:px-8">

                                    {type}

                                </td>

                                <td className="py-3 px-6  text-nowrap  md:px-8 text-center">
                                    <input type="checkbox" defaultChecked className="accent-purple-500" />
                                </td>
                                <td className="py-3 px-6  text-nowrap  md:px-8 text-center">
                                    <input
                                        type="checkbox"
                                        defaultChecked={index !== 3}
                                        className="accent-purple-500"
                                    />
                                </td>
                                <td className="py-3  text-nowrap  px-6 md:px-8 text-center">
                                    <input
                                        type="checkbox"
                                        defaultChecked={index < 2}
                                        className="accent-purple-500"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 md:p-8">
                {/* Select Dropdown */}
                <div className="mt-6">
                    <label className="block text-md dark:text-white mb-4">
                        When should we send you notifications?
                    </label>
                    <select className="w-full md:w-1/2 bg-transparent dark:bg-[#2c3550] border border-gray-700 dark:text-white text-md px-4 py-2 rounded-md focus:outline-none">
                        <option>Only when I'm online</option>
                        <option>Always</option>
                        <option>Never</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-4">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold">
                        Save changes
                    </button>
                    <button className="bg-gray-600 text-gray-300 px-6 py-2 rounded-md cursor-not-allowed" disabled>
                        Discard
                    </button>
                </div>
            </div>

        </div>
    );
};

export default NotificationTab;
