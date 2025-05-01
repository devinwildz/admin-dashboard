import { LuUsers, LuUserSearch, LuUserPlus, LuUserCheck } from "react-icons/lu";
import UserCard from "../Components/UserCard"
import UserAdd from "../Components/UserAdd"

function Users() {
    return (
        <>
            <div className="bg-white pt-4 pb-6  px-4 md:p-6 dark:bg-[#1e2640] ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl m-auto">
                    <UserCard
                        icon={<LuUsers className="text-violet-500 text-2xl" />}
                        title="Session"
                        subtitle="Total Users"
                        value="21,459"
                        change="(+29%)"
                        changeColor="text-green-400"
                        iconBgColor="dark:bg-[#1e2640]"
                    >
                    </UserCard>
                    <UserCard
                        icon={<LuUserPlus className="text-red-500 text-2xl" />}
                        title="Paid Users"
                        subtitle="Last week analytics"
                        value="4,567"
                        change="(+19%)"
                        changeColor="text-green-400"
                        iconBgColor="dark:bg-[#1e2640]"
                    >
                    </UserCard>
                    <UserCard
                        icon={<LuUserCheck className="text-green-500 text-2xl" />}
                        title="Active Users"
                        subtitle="Last week analytics"
                        value="19,859"
                        change="(-19%)"
                        changeColor="text-red-500"
                        iconBgColor="dark:bg-[#1e2640]"
                    >
                    </UserCard>
                    <UserCard
                        icon={<LuUserSearch className="text-yellow-500 text-2xl" />}
                        title="Pending Users"
                        subtitle="Last week analytics"
                        value="259"
                        change="(+49%)"
                        changeColor="text-green-400"
                        iconBgColor="dark:bg-[#1e2640]"
                    >
                    </UserCard>
                </div>
                <UserAdd />
            </div>
        </>
    )
}

export default Users;