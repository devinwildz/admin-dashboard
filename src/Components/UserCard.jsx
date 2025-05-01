function UserCard({ icon, title, subtitle, value, change, changeColor,iconBgColor }) {
    return (
        <div className="bg-gray-100 dark:bg-[#2e3655] shadow-md inset-2 p-5 rounded-xl text-black dark:text-white flex flex-col justify-between gap-3 w-full md:w-full">
            {/* Top Section */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-lg font-medium text-black dark:text-gray-400">{title}</p>
                    <h3 className="text-2xl font-semibold mt-1">{value} <span className={`text-sm font-medium ${changeColor}`}>{change}</span></h3>
                    <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
                </div>
                <div className={`w-10 h-10 bg-gray-200 rounded-md flex ${iconBgColor} items-center justify-center text-xl`}>
                    {icon}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
