import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


const ForgotPswd = () => {
    return (
        <div className="h-screen flex md:items-center xl:items-stretch  justify-center bg-white dark:bg-[#1e2640] text-white font-sans">
            <div className="hidden xl:flex items-start justify-center md:w-[50%] xl:w-[65%] p-10">
                <img className='w-full h-full object-contain' src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-reset-password-illustration-dark.png" alt="" />
            </div>

            {/* Right Form Section */}
            <div className="bg-gray-100 flex flex-col justify-center dark:bg-[#2e3655] p-5 md:p-10 w-full md:w-[50%] xl:w-[35%]">
                <h2 className="text-2xl text-black dark:text-white font-bold mb-2">
                    Forgot Password? 🔒
                </h2>
                <p className="text-sm mb-6 text-gray-500 dark:text-gray-400">
                    Enter your email and we'll send you instructions to reset your password
                </p>
                <div>
                    <label className="block text-sm text-black dark:text-white ">Email</label>
                    <input
                        type="email"
                        className="w-full text-black mt-1 dark:text-white px-4 py-2 rounded-md bg-transparent dark:bg-[#2a2f45] border focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#6c63ff]  border-[#3f4563]"
                        placeholder="Enter your email"
                    />
                </div>
                <Link to="/reset-password">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 mt-4 text-white font-semibold py-2 rounded-xl transition duration-300">
                        Send Resend Link
                    </button>
                </Link>
                <Link to="/login">
                    <button className="w-full mt-4 flex items-center justify-center gap-2 text-purple-600 font-semibold py-2 rounded-xl transition duration-300">
                        <IoIosArrowBack size={15} />
                        Back to login
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default ForgotPswd