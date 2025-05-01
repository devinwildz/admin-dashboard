import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const BillingPaymentTab = () => {
    const daysUsed = 12;
    const totalDays = 30;
    const remainingDays = totalDays - daysUsed;
    const progressPercent = (daysUsed / totalDays) * 100;

    return (
        <div className="bg-gray-100 dark:bg-[#1e223a] mt-5 p-6 rounded-xl shadow-md dark:text-white">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Current Plan</h2>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left section */}
                <div className="flex-1 space-y-6">
                    <div>
                        <h3 className="font-semibold mb-1">Your Current Plan is Basic</h3>
                        <p className="text-sm text-gray-400">A simple start for everyone</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Active until Dec 09, 2021</h4>
                        <p className="text-sm text-gray-400">
                            We will send you a notification upon Subscription expiration
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg mb-1">$199 Per Month
                            <span className="ml-2 text-xs bg-purple-600 px-3 py-1 rounded-full text-white">Popular</span>
                        </p>
                        <p className="text-sm text-gray-400">Standard plan for small to medium businesses</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                            Upgrade Plan
                        </button>
                        <button className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg">
                            Cancel Subscription
                        </button>
                    </div>
                </div>

                {/* Right section */}
                <div className="flex-1 space-y-4">
                    <div className="bg-orange-100 dark:bg-[#3a2f35] text-orange-400 p-4 rounded-lg flex items-start gap-3">
                        <FiAlertTriangle size={25} className="mt-1 text-orange-400" />
                        <div>
                            <h4 className="font-semibold text-xl">We need your attention!</h4>
                            <p className="text-base text-orange-300">Your plan requires update</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between font-semibold text-md text-gray-400 mb-1">
                            <span>Days</span>
                            <span>{daysUsed} of {totalDays} Days</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-purple-500 rounded-full transition-all"
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                            {remainingDays} days remaining until your plan requires update
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingPaymentTab;
