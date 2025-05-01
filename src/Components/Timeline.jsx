import { BsBarChartFill } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { RiDownload2Line} from 'react-icons/ri';
function Timeline() {
    return (
        <>
            <div className="bg-gray-100 dark:bg-[#2e3655] w-full md:w-[65%] my-6 md:mb-0 md:mt-5  rounded-lg py-6 px-8 col-span-2 text-white">
                {/* Header */}
                <div className="flex items-center gap-2 mb-6">
                    <BsBarChartFill className="text-lg text-black dark:text-gray-300" />
                    <h2 className="text-lg text-black dark:text-gray-300 font-semibold">
                        Activity Timeline
                    </h2>
                </div>

                {/* Timeline Items */}
                <div className="relative space-y-10 ">
                    {/* 1st Item */}
                    <div className="relative">
                        <span className="absolute -left-[22px] top-[6px]">
                            <FaCircle className="text-purple-500 text-xs" />
                        </span>
                        <div className="flex justify-between flex-col md:flex-row items-start">
                            <div className='mb-3 md:mb-0'>
                                <p className="text-md flex space-y-4 flex-col font-semibold text-black dark:text-gray-300">
                                    <span>12 Invoices have been paid</span>
                                    <span className="text-sm text-gray-400">
                                        Invoices have been paid to the company
                                    </span>
                                </p>

                                <button className="flex items-center bg-gray-200 dark:bg-purple-100 rounded-lg px-4 py-2 mt-3 text-red-400 text-sm ">
                                    <RiDownload2Line className="mr-1" /> invoices.pdf
                                </button>
                            </div>
                            <span className="text-xs text-gray-400">12 min ago</span>
                        </div>
                    </div>

                    {/* 2nd Item */}
                    <div className="relative">
                        <span className="absolute -left-[22px] top-[6px]">
                            <FaCircle className="text-green-500 text-xs" />
                        </span>
                        <div className="flex justify-between flex-col md:flex-row items-start">
                            <div className='mb-3 md:mb-0'>
                                <p className="text-md flex space-y-4 flex-col font-semibold text-black dark:text-gray-400">
                                    <span>Client Meeting</span>
                                    <span className="text-sm  text-gray-400">
                                        Project meeting with John @10:15am
                                    </span>
                                </p>

                                <div className="flex items-center gap-2 mt-3">
                                    <img
                                        src="https://i.pravatar.cc/30?img=11"
                                        alt="client"
                                        className="w-9 h-9 hover:-translate-y-1 transition-transform duration-200 cursor-pointer rounded-full"
                                    />
                                    <p className="text-xs font-medium text-gray-400">
                                        Lester McCarthy (Client), CEO of PixInvent
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">45 min ago</span>
                        </div>
                    </div>

                    {/* 3rd Item */}
                    <div className="relative">
                        <span className="absolute -left-[22px] top-[6px]">
                            <FaCircle className="text-cyan-400 text-xs" />
                        </span>
                        <div className="flex justify-between flex-col md:flex-row items-start">
                            <div className='mb-3 md:mb-0'>
                                <p className="text-md flex space-y-4 flex-col font-semibold text-black dark:text-gray-400">
                                    <span>Create a new project for client</span>
                                    <span className="text-sm  text-gray-400">
                                        6 team members in a project
                                    </span>
                                </p>

                                <div className="flex items-center mt-2">
                                    <img
                                        src="https://i.pravatar.cc/24?img=12"
                                        className="w-9 h-9 rounded-full border-2 hover:-translate-y-1 transition-transform duration-200 border-gray-800 cursor-pointer -ml-0"
                                        alt=""
                                    />
                                    <img
                                        src="https://i.pravatar.cc/24?img=13"
                                        className="w-9 h-9 rounded-full border-2 hover:-translate-y-1 transition-transform duration-200 cursor-pointer border-gray-800 -ml-2"
                                        alt=""
                                    />
                                    <img
                                        src="https://i.pravatar.cc/24?img=14"
                                        className="w-9 h-9 rounded-full border-2 hover:-translate-y-1 transition-transform duration-200 cursor-pointer border-gray-800 -ml-2"
                                        alt=""
                                    />
                                    <div className="w-9 h-9 rounded-full bg-gray-700 text-gray-300 hover:-translate-y-1 transition-transform duration-200 cursor-pointer text-xs flex items-center justify-center -ml-2 border-2 border-gray-800">
                                        +3
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">2 Day Ago</span>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
export default Timeline;