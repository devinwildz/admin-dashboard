import React from 'react'
import UserCard from '../Components/UserCard'
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import ProductAdd from '../Components/ProductAdd';

const Products = () => {
    return (
        <>
            <div className="bg-white pt-4 pb-6  px-4 md:p-6 dark:bg-[#1e2640] ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl m-auto">
                    <UserCard
                        icon={<FaRegEnvelopeOpen className="text-violet-500 text-2xl" />}
                        title="In-store Sales"
                        subtitle="57k orders"
                        value="$5,345.43"
                        change="(+5.7%)"
                        changeColor="text-green-400"
                        iconBgColor="dark:bg-[#1e2640]"
                    />
                    <UserCard
                        icon={<FaLaptop className="text-violet-500 text-2xl" />}
                        title="In-store Sales"
                        subtitle="9k orders"
                        value="$5,345.43"
                        change="(+5.7%)"
                        changeColor="text-green-400"
                        iconBgColor="dark:bg-[#1e2640]"
                    />
                    <UserCard
                        icon={<FiGift className="text-violet-500 text-2xl" />}
                        title="In-store Sales"
                        subtitle="5k orders"
                        value="$5,345.43"
                        change="(+5.7%)"
                        changeColor="text-green-400"
                        iconBgColor="dark:bg-[#1e2640]"
                    />
                    <UserCard
                        icon={<LuWallet className="text-violet-500 text-2xl" />}
                        title="In-store Sales"
                        subtitle="15k orders"
                        value="$5,345.43"
                        change="(+5.7%)"
                        changeColor="text-green-400"
                        iconBgColor="dark:bg-[#1e2640]"
                    />

                </div>
                <ProductAdd />
            </div>
        </>
    )
}

export default Products