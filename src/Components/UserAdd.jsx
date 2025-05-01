import React, { useState } from 'react';
import UserTable from './UserTable';
import SidebarForm from './SidebarForm';
import { IoIosAdd } from "react-icons/io";
import { FaCrown } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { FaChartPie, FaUser } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
const roles = ["Maintainer", "Editor", "Subscriber", "Author"];

const usersData = [
    {
        name: "Zsasza McCleverty",
        email: "zsasza@soundcloud.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        role: "Maintainer",
        plan: "Enterprise",
        billing: "Auto Debit",
        status: "Active",
        icon: <FaUser size={20} className="text-green-500" />,
    },
    {
        name: "Oko Pottie",
        email: "oko@privacy.gov.au",
        avatar: "https://i.pravatar.cc/150?img=2",
        role: "Subscriber",
        plan: "Basic",
        billing: "Auto Debit",
        status: "Inactive",
        icon: <FaCrown size={20} className="text-purple-500" />,
    },
    {
        name: "Yokonama",
        email: "yokonama@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=3",
        role: "Editor",
        plan: "Basic",
        billing: "Auto Debit",
        status: "Pending",
        icon: <FaChartPie size={20} className="text-blue-400" />,
    },
    {
        name: "Devin Wildz",
        email: "devin@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=4",
        role: "Author",
        plan: "Standard",
        billing: "Manual",
        status: "Inactive",
        icon: <FiEdit size={20} className="text-orange-500" />,
    },
    {
        name: "Kevin Stark",
        email: "kevin@agency.com",
        avatar: "https://i.pravatar.cc/150?img=5",
        role: "Admin",
        plan: "Premium",
        billing: "Auto Debit",
        status: "Active",
        icon: <LuMonitor size={20} className="text-red-500" />,
    },
    {
        name: "Kell Norris",
        email: "kell@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=6",
        role: "Admin",
        plan: "Basic",
        billing: "Manual",
        status: "Inactive",
        icon: <LuMonitor size={20} className="text-red-500" />,
    },
    {
        name: "Alexa Trent",
        email: "alexa@company.com",
        avatar: "https://i.pravatar.cc/150?img=7",
        role: "Editor",
        plan: "Standard",
        billing: "Auto Debit",
        status: "Active",
        icon: <FaChartPie size={20} className="text-blue-300" />,
    },
    {
        name: "Marcus Finn",
        email: "marcus@startup.io",
        avatar: "https://i.pravatar.cc/150?img=8",
        role: "Maintainer",
        plan: "Enterprise",
        billing: "Manual",
        status: "Active",
        icon: <FaUser size={20} className="text-green-500" />,
    },
    {
        name: "Sophia West",
        email: "sophia@design.com",
        avatar: "https://i.pravatar.cc/150?img=9",
        role: "Author",
        plan: "Basic",
        billing: "Auto Debit",
        status: "Pending",
        icon: <FiEdit size={20} className="text-orange-400" />,
    },
    {
        name: "Daniel Craig",
        email: "daniel@spy.org",
        avatar: "https://i.pravatar.cc/150?img=10",
        role: "Admin",
        plan: "Premium",
        billing: "Auto Debit",
        status: "Active",
        icon: <LuMonitor size={20} className="text-red-400" />,
    },
    {
        name: "Lara Boyd",
        email: "lara@photohub.com",
        avatar: "https://i.pravatar.cc/150?img=11",
        role: "Subscriber",
        plan: "Basic",
        billing: "Manual",
        status: "Inactive",
        icon: <FaCrown size={20} className="text-purple-400" />,
    },
    {
        name: "Ethan Hill",
        email: "ethan@hillmail.com",
        avatar: "https://i.pravatar.cc/150?img=12",
        role: "Maintainer",
        plan: "Enterprise",
        billing: "Auto Debit",
        status: "Active",
        icon: <FaUser size={20} className="text-green-400" />,
    },
    {
        name: "Natalie Chase",
        email: "natalie@bookstack.com",
        avatar: "https://i.pravatar.cc/150?img=13",
        role: "Editor",
        plan: "Standard",
        billing: "Manual",
        status: "Pending",
        icon: <FaChartPie size={20} className="text-blue-500" />,
    },
    {
        name: "Victor Stone",
        email: "victor@techlabs.io",
        avatar: "https://i.pravatar.cc/150?img=14",
        role: "Author",
        plan: "Basic",
        billing: "Auto Debit",
        status: "Active",
        icon: <FiEdit size={20} className="text-orange-600" />,
    },
    {
        name: "Zane Riley",
        email: "zane@cyber.com",
        avatar: "https://i.pravatar.cc/150?img=15",
        role: "Admin",
        plan: "Premium",
        billing: "Manual",
        status: "Inactive",
        icon: <LuMonitor size={20} className="text-red-600" />,
    },
];


export default function UserAdd() {
    const [filter, setFilter] = useState({ role: '', plan: '', status: '' });
    const [users, setUsers] = useState(usersData);
    const [showSidebar, setShowSidebar] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleDelete = (email) => {
        setUsers(users.filter((user) => user.email !== email));
    };

    const handleFilter = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filter.role ? user.role === filter.role : true;
        const matchesPlan = filter.plan ? user.plan === filter.plan : true;
        const matchesStatus = filter.status ? user.status === filter.status : true;
        return matchesSearch && matchesRole && matchesPlan && matchesStatus;
    });



    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

    // Handle select all
    const isAllSelected = filteredUsers.length > 0 && selectedUsers.length === filteredUsers.length;

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(filteredUsers.map(user => user.email));
        }
    };

    const handleUserSelect = (email) => {
        setSelectedUsers(prev =>
            prev.includes(email) ? prev.filter(e => e !== email) : [...prev, email]
        );
    };



    return (
        <div className="bg-gray-100 dark:bg-[#2e3655] shadow-md rounded-xl  xl:mx-2 mt-6">
            <div className='border-b p-5 border-gray-400 dark:border-gray-600 '>
                <h2 className="text-xl mb-5 font-semibold text-gray-900 dark:text-gray-100">
                    Filters
                </h2>
                <div className="flex flex-wrap justify-between mb-4">
                    <select name="role" onChange={handleFilter} className="bg-transparent dark:bg-[#2a2f45]  w-[32%] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                        <option value="">Select Role</option>
                        {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <select name="plan" onChange={handleFilter} className="bg-transparent dark:bg-[#2a2f45] w-[32%] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                        <option value="">Select Plan</option>
                        <option>Enterprise</option>
                        <option>Basic</option>
                        <option>Team</option>
                    </select>
                    <select name="status" onChange={handleFilter} className="bg-transparent dark:bg-[#2a2f45] w-[32%] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                        <option value="">Select Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>
            <div className="flex items-start md:items-center flex-col-reverse md:flex-row  justify-between flex-wrap gap-4 p-5">
                {/* Dropdown (10) */}
                <select value={perPage}
                    onChange={(e) => { setPerPage(Number(e.target.value)); setCurrentPage(1); }} className="bg-transparent w-[30%] md:w-[12%] xl:w-[8%] dark:bg-[#2a2f45] border border-[#3f4563] text-base text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 cursor-pointer focus:ring-[#6c63ff]">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>

                {/* Search Input */}
                <div className='flex justify-end flex-col w-full md:flex-row gap-4 md:w-[70%] xl:w-[80%]'>
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
                    <button
                        onClick={() => setShowSidebar(true)}
                        className="flex justify-center items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded text-base font-medium"
                    >
                        <IoIosAdd size={25} />
                        Add New Record
                    </button>
                </div>
            </div>


            <UserTable users={currentUsers}
                onDelete={handleDelete}
                onSelectAll={handleSelectAll}
                onUserSelect={handleUserSelect}
                selectedUsers={selectedUsers}
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
                    disabled={indexOfLast >= filteredUsers.length}
                    className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-400"
                >
                    Next
                </button>
            </div>

            {showSidebar && (


                <SidebarForm
                    title="Add User"
                    show={showSidebar}
                    onClose={() => setShowSidebar(false)}
                    onAdd={(user) => setUsers([...users, user])}
                    fields={[
                        { name: 'name', label: 'Full Name', placeholder: 'Your Name' },
                        { name: 'email', label: 'Email', placeholder: 'Your Email', type: 'email' },
                        { name: 'number', label: 'Contact', placeholder: 'Contact Number' },
                        { name: 'company', label: 'Company', placeholder: 'Company Name' },
                        { name: 'country', label: 'Country', type: 'select', options: ['India', 'USA', 'UK', 'Germany', 'Australia'] },
                        { name: 'role', label: 'Role', type: 'select', options: ['Company', 'Enterprise', 'Team'] },
                    ]}
                />

            )}
        </div>
    );
}
