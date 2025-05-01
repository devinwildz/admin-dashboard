import React, { useState } from 'react';
import ProductTable from './ProductTable';
import { IoIosAdd } from "react-icons/io";
import { GiRunningShoe } from "react-icons/gi";
import { FaTabletAlt } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { Link } from 'react-router-dom';



const categories = ["Electronics", "Shoes", "Game", "Household", "Accessories", "Office"];

const productsData = [
    {
        name: "Air Jordan",
        description: "Air Jordan is a line of basketball shoes produced by Nike",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-9.png",
        category: "Shoes",
        sku: "31063",
        Price: "$123",
        qty: "956",
        stock: false,
        status: "Inactive",
        icon: <GiRunningShoe size={20} className="text-green-500" />,
    },
    {
        name: "Amazon Fire TV",
        description: "4K UHD smart TV, stream live TV without cable",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-13.png",
        category: "Electronics",
        sku: "21463",
        Price: "$123",
        qty: "96",
        stock: false,
        status: "Scheduled",
        icon: <FaTabletAlt size={20} className="text-red-500" />,
    },
    {
        name: "Apple iPad",
        description: "10.2-inch Retina Display, 64GB",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-15.png",
        category: "Electronics",
        sku: 31363,
        Price: "$123",
        stock: true,
        qty: 936,
        status: "Publish",
        icon: <FaTabletAlt size={20} className="text-red-500" />,
    },
    {
        name: "Apple Watch Series 7",
        description: "Starlight Aluminum Case with Starlight Sport Band.",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-5.png",
        category: "Accessories",
        sku: 31222,
        Price: "$123",
        stock: false,
        qty: 962,
        status: "Scheduled",
        icon: <IoWatchOutline size={20} className="text-gray-500" />,
    },
    {
        name: "BANGE Anti Theft Backpack",
        description: "Smart Business Laptop Fits 15.6 Inch Notebook",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-16.png",
        category: "Accessories",
        sku: 31493,
        stock: true,
        Price: "$124",
        qty: 92,
        status: "Inactive",
        icon: <IoWatchOutline size={20} className="text-gray-500" />,
    },
    {
        name: "Dohioue Wall Clock",
        description: "Modern 10 Inch Battery Operated Wall Clocks",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-3.png",
        category: "Household",
        sku: 81493,
        stock: true,
        Price: "$124",
        qty: 92,
        status: "Publish",
        icon: <LuHouse size={20} className="text-gray-500" />,
    },
    {
        name: "Lenevo iPad",
        description: "12.2-inch Retina Display, 64GB",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-15.png",
        category: "Electronics",
        sku: 312263,
        Price: "$123",
        stock: true,
        qty: 93,
        status: "Inactive",
        icon: <FaTabletAlt size={20} className="text-red-500" />,
    },
    {
        name: "Apple Watch Series 3",
        description: "Starlight Aluminum Case with Starlight Sport Band.",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-5.png",
        category: "Accessories",
        sku: 96112,
        Price: "$123",
        stock: false,
        qty: 962,
        status: "Scheduled",
        icon: <IoWatchOutline size={20} className="text-gray-500" />,
    },
    {
        name: "Air Force2",
        description: "Air Force2 is a line of basketball shoes produced by Nike",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-9.png",
        category: "Shoes",
        sku: 31753,
        Price: "$123",
        qty: "958",
        stock: true,
        status: "Scheduled",
        icon: <GiRunningShoe size={20} className="text-green-500" />,
    },
    {
        name: "Rolex watch",
        description: "Starlight Aluminum Case with Rolex Premium Band.",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-5.png",
        category: "Accessories",
        sku: 31211,
        Price: "$2300",
        stock: false,
        qty: 9,
        status: "Publish",
        icon: <IoWatchOutline size={20} className="text-gray-500" />,
    },
    {
        name: "Lenevo iPad",
        description: "12.2-inch Retina Display, 64GB",
        avatar: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/ecommerce-images/product-15.png",
        category: "Electronics",
        sku: 31999,
        Price: "$723",
        stock: true,
        qty: 966,
        status: "Inactive",
        icon: <FaTabletAlt size={20} className="text-red-500" />,
    },

];


export default function UserAdd() {
    const [filter, setFilter] = useState({ category: '', stock: '', status: '' });
    const [products, setProducts] = useState(productsData);

    const [searchTerm, setSearchTerm] = useState("");
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProducts, setSelectedProducts] = useState([]);



    const handleFilter = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filter.category ? product.category === filter.category : true;
        const matchesStock = filter.stock
            ? filter.stock === 'In Stock'
                ? product.stock === true
                : product.stock === false
            : true;

        const matchesStatus = filter.status ? product.status === filter.status : true;
        return matchesSearch && matchesCategory && matchesStock && matchesStatus;
    });



    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

    // Handle select all
    const isAllSelected = filteredProducts.length > 0 && selectedProducts.length === filteredProducts.length;

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedProducts([]);
        } else {
            setSelectedProducts(filteredProducts.map(product => product.sku));
        }
    };

    const handleProductSelect = (sku) => {
        setSelectedProducts(prev =>
            prev.includes(sku) ? prev.filter(e => e !== sku) : [...prev, sku]
        );
    };



    return (
        <div className="bg-gray-100 dark:bg-[#2e3655] shadow-md rounded-xl  xl:mx-2 mt-6">
            <div className='border-b p-5 border-gray-400 dark:border-gray-600 '>
                <h2 className="text-xl mb-5 font-semibold text-gray-900 dark:text-gray-100">
                    Filters
                </h2>
                <div className="flex flex-wrap justify-between mb-4">
                    <select name="category" onChange={handleFilter} className="bg-transparent dark:bg-[#2a2f45]  w-[32%] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                        <option value="">Select Category</option>
                        {categories.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <select name="stock" onChange={handleFilter} className="bg-transparent dark:bg-[#2a2f45] w-[32%] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                        <option value="">Select Stock</option>
                        <option>Out of Stock</option>
                        <option>In Stock</option>
                    </select>
                    <select name="status" onChange={handleFilter} className="bg-transparent dark:bg-[#2a2f45] w-[32%] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                        <option value="">Select Status</option>
                        <option>Scheduled</option>
                        <option>Inactive</option>
                        <option>Publish</option>
                    </select>
                </div>
            </div>
            <div className="flex items-start md:items-center flex-col-reverse md:flex-row  justify-between flex-wrap gap-4 p-5">
                {/* Dropdown (10) */}
                <select value={perPage}
                    onChange={(e) => { setPerPage(Number(e.target.value)); setCurrentPage(1); }} className="bg-transparent  w-[30%] md:w-[12%] xl:w-[8%] dark:bg-[#2a2f45] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>

                {/* Search Input */}
                <div className='flex justify-end flex-col w-full md:flex-row gap-4 md:w-[72%] xl:w-[80%]'>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search User"
                        className="border md:w-[32%] xl:w-[30%] border-gray-300 px-3 py-2 rounded text-base text-gray-700  focus:ring-2 focus:ring-[#6c63ff] focus:outline-none"
                    />

                    {/* Export Button */}
                    <select name="export" className="bg-transparent dark:bg-[#2a2f45] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                        <option value="">Export</option>
                        <option>Pdf</option>
                        <option>Print</option>
                        <option>Copy</option>
                        <option>Csv</option>
                    </select>

                    {/* Add New Record */}
                    <Link to="/add-product">
                        <button
                            className="flex w-full justify-center items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded text-base font-medium"
                        >
                            <IoIosAdd size={25} />
                            Add New Product
                        </button>
                    </Link>
                </div>
            </div>


            <ProductTable products={currentProducts}

                onSelectAll={handleSelectAll}
                onProductSelect={handleProductSelect}
                selectedProducts={selectedProducts}
                isAllSelected={isAllSelected} />

            <div className="flex justify-center p-5 gap-4">
                <button
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-400"
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={indexOfLast >= filteredProducts.length}
                    className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-400"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
