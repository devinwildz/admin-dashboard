import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'


const AccountTab = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    return (
        <>
            <div className="bg-gray-100 dark:bg-[#1e223a] my-5 p-6 md:p-8 rounded-xl shadow-md">
                <h2 className="text-2xl text-gray-800 dark:text-white font-semibold mb-6">Profile</h2>

                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
                    <img
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover ring-2 ring-primary-500"
                    />
                    <div className="space-y-2 text-center sm:text-left">
                        <div className="relative inline-block">
                            <input
                                type="file"
                                id="upload-photo"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <label
                                htmlFor="upload-photo"
                                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-md cursor-pointer inline-block"
                            >
                                Upload new photo
                            </label>
                        </div>

                        <button className="bg-gray-200 text-gray-600 ml-3 px-4 py-2 rounded-md text-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                            Reset
                        </button>

                        <p className="text-md text-gray-500 dark:text-gray-400">
                            Allowed JPG, GIF or PNG. Max size of 800K
                        </p>
                    </div>

                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                    <Input id="firstName" label="First Name" placeholder="John" />
                    <Input id="lastName" label="Last Name" placeholder="Doe" />

                    <Input id="email" label="E-mail" placeholder="john.doe@example.com" type="email" />
                    <Input id="organization" label="Organization" placeholder="Pixinvent" />

                    <Input id="phone" label="Phone Number" placeholder="US (+1) 202 555 0111" />
                    <Input id="address" label="Address" placeholder="Address" />

                    <Input id="state" label="State" placeholder="California" />
                    <Input id="zipCode" label="Zip Code" placeholder="231465" />

                    <Select id="country" label="Country" options={['Select', 'India', 'USA']} />
                    <Select id="language" label="Language" options={['Select Language', 'English', 'Hindi']} />

                    <Select id="timezone" label="Timezone" options={['Select Timezone', 'GMT +5:30 Alaska', 'GMT -8 Denmark']} />
                    <Select id="currency" label="Currency" options={['Select Currency', 'INR', 'USD']} />
                </form>


                <div className="flex justify-end space-x-4 mt-8">
                    <button className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md">
                        Cancel
                    </button>
                    <button className="px-4 py-2 text-sm bg-purple-500 hover:bg-purple-600 rounded-md text-white">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Delete Account */}
            <div className="bg-gray-100 dark:bg-[#1e223a] mt-6 p-6 md:p-8 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-red-600 dark:text-red-500 mb-2">
                    Delete Account
                </h2>
                <div className='bg-orange-100 dark:bg-[#3a2f35] p-3 rounded-lg mb-3'>
                    <p className="text-xl text-orange-400 mb-2 ">
                        Are you sure you want to delete your account?
                    </p>
                    <p className="text-base text-orange-300">
                        Once you delete your account, there is no going back. Please be certain.
                    </p>
                </div>
                <div className="flex items-center mb-4 space-x-2">
                    <input
                        id="confirmDelete"
                        type="checkbox"
                        className="accent-red-600 w-4 h-4"
                        checked={isConfirmed}
                        onChange={() => setIsConfirmed(!isConfirmed)}
                    />
                    <label htmlFor="confirmDelete" className="text-sm text-gray-800 dark:text-gray-300">
                        I confirm my account deactivation
                    </label>
                </div>
                <button
                    disabled={!isConfirmed}
                    className={`px-4 py-2 rounded-md text-white text-sm transition-all duration-200 ${isConfirmed
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-red-600 opacity-50 cursor-not-allowed'
                        }`}
                >
                    Deactivate Account
                </button>
            </div>


        </>
    )
}

export default AccountTab;