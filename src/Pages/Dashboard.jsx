import {
    RiBarChartBoxLine,
    RiMoneyDollarCircleLine,
    RiShoppingCartLine,
    RiShoppingBag3Line,
} from "react-icons/ri";
import StatCard from "../Components/StatCard";
import SalesCard from "../Components/SalesCard";
import TransactionCard from "../Components/TransactionCard";
import EarningReports from "../Components/EarningReports";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts";

const barData = [
    { name: "Mon", uv: 30 },
    { name: "Tue", uv: 80 },
    { name: "Wed", uv: 45 },
    { name: "Thu", uv: 60 },
    { name: "Fri", uv: 50 },
    { name: "Sat", uv: 70 },
    { name: "Sun", uv: 90 },
];

const lineData = [
    { name: "Jan", pv: 60 },
    { name: "Feb", pv: 100 },
    { name: "Mar", pv: 80 },
    { name: "Apr", pv: 130 },
];

const Dashboard = () => {
    return (
        <div className="bg-white min-h-screen p-4 md:p-6 dark:bg-[#1e2640] ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl m-auto">
                {/* Orders */}
                <StatCard
                    icon={<RiShoppingCartLine />}
                    title="Orders"
                    subtitle="Last week"
                    value="124k"
                    change="+12.6%"
                    changeColor="text-green-400"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                            <Bar dataKey="uv" fill="#8884d8" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </StatCard>

                {/* Sales */}
                <StatCard
                    icon={<RiBarChartBoxLine />}
                    title="Sales"
                    subtitle="Last Year"
                    value="175k"
                    change="-16.2%"
                    changeColor="text-red-400"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                            <Line type="monotone" dataKey="pv" stroke="#00ff99" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </StatCard>


                {/* Total Sales */}
                <StatCard
                    icon={<RiShoppingBag3Line />}
                    title="Total Income"
                    subtitle="Last week"
                    value="24.67k"
                    change="+24.5%"
                    changeColor="text-green-400"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                            <Bar dataKey="uv" fill="#8884d8" radius={[2, 2, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </StatCard>

                {/* Total Profit */}
                <StatCard
                    icon={<RiMoneyDollarCircleLine />}
                    title="Total Profit"
                    subtitle="Last week"
                    value="1.28k"
                    change="-12.2%"
                    changeColor="text-red-400"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                            <Line type="monotone" dataKey="pv" stroke="#00ff99" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </StatCard>


            </div>
            <EarningReports />
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
                <SalesCard />
                <TransactionCard />
            </div>
        </div>
    );
};

export default Dashboard;
