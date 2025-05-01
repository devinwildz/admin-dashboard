import { FiTrash2, FiEye, FiMoreVertical } from "react-icons/fi";

export default function UserTable({ users,
    onDelete,
    onSelectAll,
    onUserSelect,
    selectedUsers,
    isAllSelected }) {

    return (
        <div className="overflow-x-auto ">
            <table className="table-auto w-full ">
                <thead className="text-left ">
                    <tr className="border-gray-400 border-y">
                        <th className="px-6 py-4 text-left">
                            <input checked={isAllSelected}
                                onChange={onSelectAll} type="checkbox" className="accent-purple-500 transform scale-100 cursor-pointer" />
                        </th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">User</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Role</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Plan</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Billing</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Status</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.email} className="border-b border-gray-400">
                            <td className="px-6 py-4">
                                <input type="checkbox" checked={selectedUsers.includes(user.email)}
                                    onChange={() => onUserSelect(user.email)} className="accent-purple-500 transform scale-100 cursor-pointer" />
                            </td>
                            <td className="px-6 min-w-[250px] sm:min-w-[280px] md:min-w-[320px] py-4 flex items-center gap-2">
                                <img src={user.avatar} alt="" className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-black dark:text-white text-base hover:text-purple-600 cursor-pointer">{user.name}</p>
                                    <p className="text-base text-gray-400">{user.email}</p>
                                </div>
                            </td>

                            <td className="text-base ">
                                <div className="flex items-center gap-3 p-5">
                                    <span>{user.icon}</span>
                                    <span className="text-black dark:text-white">{user.role}</span>
                                </div>
                            </td>
                            <td className="text-base">
                                <div className="p-5 text-black dark:text-white">
                                    {user.plan}
                                </div>
                            </td>

                            <td className="text-base ">
                                <div className="p-5 text-black dark:text-white">
                                    {user.billing}
                                </div>
                            </td>
                            <td className="text-base text-white">
                                <div className="p-5">
                                    <span
                                        className={`px-2 py-1 text-md rounded text-white ${user.status === "Active"
                                                ? "bg-green-600"
                                                : user.status === "Pending"
                                                    ? "bg-yellow-500"
                                                    : "bg-red-600"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="p-5 flex gap-3">
                                    <button onClick={() => onDelete(user.email)}><FiTrash2 size={35} className="text-black dark:text-white cursor-pointer p-2 rounded-full hover:bg-slate-300 dark:hover:bg-[#1e223a]" /></button>
                                    <FiEye size={35} className="text-black dark:text-white p-2 hover:bg-slate-300 dark:hover:bg-[#1e223a] rounded-full cursor-pointer" />
                                    <FiMoreVertical size={35} className="text-black dark:text-white p-2 hover:bg-slate-300 dark:hover:bg-[#1e223a] cursor-pointer rounded-full" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
