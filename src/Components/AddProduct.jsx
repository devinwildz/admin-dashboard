import React, { useRef, useState } from 'react'
import Switch from '@mui/material/Switch';
import { IoIosAdd } from "react-icons/io";
import Tabs from '../Components/Tabs'


const AddProduct = () => {
    const vendor = ["Men's Clothing", "Women's Clothing", "Kid's Clothing"];
    const category = ["Household", "Management", "Electronics", "Office", "Automotive"]
    const collections = ["Men's Clothing", "Women's Clothing", "Kid's Clothing"];
    const status = ["Publish", "Inactive", "Schduled"];
    const [activeTab, setActiveTab] = useState('profile');

    const content = {
        profile: <div>h1</div>,
        teams: <div>h1</div>,
        projects: <div>h1</div>,
        connections: <div>h1</div>,
    };

    const tabItems = [
        { key: 'profile', label: 'Profile',  },
        { key: 'teams', label: 'Teams',  },
        { key: 'projects', label: 'Projects',},
        { key: 'connections', label: 'Connections', },
    ];

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Selected file:", file);
    };
    return (
        <>
            <div className="bg-white min-h-screen p-4 md:p-6 dark:bg-[#1e2640]">
                <div className='flex justify-between flex-col md:flex-row items-start md:items-center'>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 dark:text-white">Add a new Product </h2>
                        <p className='dark:text-white'>Orders placed across your store</p>
                    </div>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                        <button className='px-2 md:px-4 py-2 text-white rounded text-base font-medium  bg-gray-400'>Discard</button>
                        <button className='text-white bg-purple-400 hover:bg-purple-500 transition px-2 md:px-4 py-2 rounded text-base font-medium'>Save draft</button>
                        <button className=' text-white bg-purple-600 hover:bg-purple-700 transition px-2 md:px-4 py-2 rounded text-base font-medium'>Publish product</button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex w-full md:w-[63%] flex-col'>
                        <div className='bg-gray-100 dark:bg-[#2e3655] shadow-md  rounded-md p-5 my-6'>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">
                                    Product information
                                </h2>
                                <form>
                                    <div className="flex flex-col mb-6 space-y-1">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Name
                                        </label>
                                        <input

                                            type="text"
                                            placeholder="Product title"
                                            className="w-full rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className='w-[48%]'>
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                SKU
                                            </label>
                                            <input

                                                type="text"
                                                placeholder="SKU"
                                                className=" w-full rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                            />
                                        </div>
                                        <div className='w-[48%]'>
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Barcode
                                            </label>
                                            <input

                                                type="text"
                                                placeholder="0123-4567"
                                                className="w-full rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                            />
                                        </div>

                                    </div>
                                    <div className='mt-5'>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Description (Optional)
                                        </label>
                                        <textarea
                                            placeholder="Product Description"
                                            className="w-full h-40 rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        ></textarea>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="bg-gray-100 dark:bg-[#2e3655] shadow-md rounded-md p-5 mb-6">
                            {/* Header Section */}
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-base font-medium text-gray-400">Product Image</label>
                                <a href="#" className="text-base text-purple-500 hover:underline">
                                    Add media from URL
                                </a>
                            </div>

                            {/* Drag and Drop Area */}
                            <div className="border-2 border-dashed border-gray-500 rounded-md flex flex-col items-center justify-center h-48">
                                {/* Upload Icon */}
                                <svg
                                    className="w-8 h-8 text-gray-400 mb-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>

                                {/* Text */}
                                <p className="text-gray-300 text-center">
                                    Drag and drop your image here
                                    <br />
                                    or
                                </p>

                                {/* Hidden File Input */}
                                <input
                                    type="file"

                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                {/* Button */}
                                <button
                                    type="button"
                                    onClick={handleButtonClick}
                                    className="mt-2 px-4 py-2 bg-purple-500 text-white text-sm rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    Browse image
                                </button>
                            </div>

                        </div>
                        <div className="bg-gray-100 dark:bg-[#2e3655] shadow-md rounded-md p-5 mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">
                                Variants
                            </h2>
                            <form>
                                <div className="flex flex-col mb-6">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Options
                                    </label>
                                    <div className="flex gap-4">
                                        {/* Dropdown */}
                                        <select
                                            className="w-1/3 rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        >
                                            <option>Size</option>
                                            <option>Color</option>
                                            <option>Weight</option>
                                            <option>Smell</option>
                                        </select>

                                        {/* Input */}
                                        <input
                                            type="number"
                                            placeholder="Enter size"
                                            className="flex-1 rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Add another option button */}
                                <button
                                    type="button"
                                    className="mt-4 flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-md"
                                >
                                    <IoIosAdd size={25} />Add another option
                                </button>
                            </form>
                        </div>

                    </div>
                    <div className='flex w-full md:w-[35%] flex-col'>
                        <div className='bg-gray-100 dark:bg-[#2e3655] shadow-md rounded-md p-5 md:mt-6'>
                            <h2 className="text-xl font-semibold mb-4 dark:text-white">Product</h2>
                            <div className='space-y-4'>
                                <div className='mt-1 space-y-4'>
                                    <div >
                                        <label className="block text-sm font-base text-gray-700 dark:text-gray-300">Base Price</label>
                                        <input
                                            type="number"
                                            className="w-full mt-2 block bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                            placeholder='Price'
                                        />
                                    </div>
                                    <div >
                                        <label className="block text-sm font-base text-gray-700 dark:text-gray-300">Discounted Price</label>
                                        <input
                                            type="number"
                                            className="w-full block mt-2 bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                            placeholder='Discounted Price'
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <input
                                            type="checkbox"
                                            className="h-4 accent-purple-500 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                                        />
                                        <label className="ml-2 block text-md text-gray-700 dark:text-gray-300">Charge tax on this product</label>
                                    </div>
                                    <div className='flex items-center border-t mt-2 pt-2 border-gray-400  justify-between'>
                                        <span className='text-black dark:text-white'>In stock</span>
                                        <Switch className='accent-purple-500' />
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className='bg-gray-100 dark:bg-[#2e3655] shadow-md rounded-md p-5 my-6'>
                            <h2 className="text-xl font-semibold mb-4 dark:text-white">Organize</h2>
                            <div className='space-y-4'>
                                <div className='mt-1 space-y-4'>
                                    <div >
                                        <label className="block text-sm font-base text-gray-700 dark:text-gray-300">Vendor</label>
                                        <select className="w-full mt-2 block bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        >
                                            <option value="" >Select Vendor</option>
                                            {vendor.map((v, index) => (
                                                <option key={index} value={v}>
                                                    {v}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div >
                                        <label className="block text-sm font-base text-gray-700 dark:text-gray-300">Category</label>
                                        <select className="w-full mt-2 block bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        >
                                            <option value=""  >Select Category</option>
                                            {category.map((c, index) => (
                                                <option key={index} value={c}>
                                                    {c}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div >
                                        <label className="block text-sm font-base text-gray-700 dark:text-gray-300">Category</label>
                                        <select className="w-full mt-2 block bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        >
                                            <option value="" >Status</option>
                                            {status.map((s, index) => (
                                                <option key={index} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div >
                                        <label className="block text-sm font-base text-gray-700 dark:text-gray-300">Category</label>
                                        <select className="w-full mt-2 block bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                                        >
                                            <option value="" >Collections</option>
                                            {collections.map((collection, index) => (
                                                <option key={index} value={collection}>
                                                    {collection}
                                                </option>
                                            ))}
                                        </select>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default AddProduct