import StatCard from "../Components/StatCard";
import { LuTickets } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";



import {
  RiBarChartBoxLine,
  RiMoneyDollarCircleLine,
  RiShoppingCartLine,
  RiShoppingBag3Line,
} from "react-icons/ri";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadialBarChart, RadialBar,
  XAxis,
  Legend,
  ResponsiveContainer
} from 'recharts';

const earningsData = [
  { day: "Mo", value: 120 },
  { day: "Tu", value: 220 },
  { day: "We", value: 180 },
  { day: "Th", value: 140 },
  { day: "Fr", value: 300 },
  { day: "Sa", value: 200 },
  { day: "Su", value: 210 },
];

const radialData = [{ name: "Completed Task", value: 85, fill: "#7C3AED" }];


const barData = [
  { name: 'Mon', uv: 4000 },
  { name: 'Tue', uv: 3000 },
  { name: 'Wed', uv: 2000 },
  { name: 'Thu', uv: 2780 },
  { name: 'Fri', uv: 1890 },
  { name: 'Sat', uv: 2390 },
  { name: 'Sun', uv: 3490 },
];

const lineData = [
  { name: 'Jan', pv: 2400 },
  { name: 'Feb', pv: 1398 },
  { name: 'Mar', pv: 9800 },
  { name: 'Apr', pv: 3908 },
  { name: 'May', pv: 4800 },
  { name: 'Jun', pv: 3800 },
];

const areaData = [
  { name: 'Mon', amt: 2400 },
  { name: 'Tue', amt: 2210 },
  { name: 'Wed', amt: 2290 },
  { name: 'Thu', amt: 2000 },
  { name: 'Fri', amt: 2181 },
  { name: 'Sat', amt: 2500 },
  { name: 'Sun', amt: 2100 },
];

const incomeData = [
  { name: 'Mon', uv: 400, income: 2400, amt: 2400 },
  { name: 'Tue', uv: 300, income: 2210, amt: 2290 },
  { name: 'Wed', uv: 200, income: 2290, amt: 2000 },
  { name: 'Thu', uv: 278, income: 2000, amt: 2181 },
  { name: 'Fri', uv: 189, income: 2181, amt: 2500 },
  { name: 'Sat', uv: 239, income: 2500, amt: 2100 },
  { name: 'Sun', uv: 349, income: 2100, amt: 2400 },
];



function Analytics() {
  return (
    <>
      <div className="bg-white min-h-screen p-4 md:p-6 dark:bg-[#1e2640] ">
        <div className="bg-gray-100 shadow-md mb-5 p-2 flex items-center gap-4 dark:bg-[#2e3655] rounded-lg">
          <button className="border text-black border-gray-400 dark:text-white bg-purple-500  hover:bg-purple-600 hover:text-white focus:text-white rounded-md px-2" >Weekly</button>
          <button className="border text-black border-gray-400 dark:text-white focus:bg-purple-500 focus:text-white rounded-md px-2">Monthly</button>
          <button className="border text-black border-gray-400 dark:text-white focus:bg-purple-500 rounded-md focus:text-white px-2">Yearly</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-8xl">
          {/* Orders */}
          <StatCard
            icon={<RiShoppingCartLine />}
            title="Total Orders"
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
            title="Total Sales"
            subtitle="Last Week"
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
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff7f50" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ff7f50" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="amt"
                  stroke="#ff7f50"
                  fillOpacity={1}
                  fill="url(#colorProfit)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </StatCard>

          {/* Total Income */}
          <StatCard
            icon={<RiShoppingBag3Line />}
            title="Total Income"
            subtitle="Last week"
            value="24.67k"
            change="+24.5%"
            changeColor="text-green-400"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={incomeData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#00C49F"
                  fillOpacity={1}
                  fill="url(#colorIncome)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </StatCard>

        </div>
        <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-6 my-5">
          <div className="dark:bg-[#2e3655] bg-gray-100  rounded-xl p-6 w-full md:w-[49%] shadow-md">
            <div className="mb-4">
              <h3 className="text-xl text-black dark:text-white mb-2 font-semibold">Earning Reports</h3>
              <p className="text-md font-normal dark:text-gray-300 text-gray-500">Weekly Earnings Overview</p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row  items-start md:items-end justify-between mb-4">
              <div className="w-full lg:w-[40%]">
                <h1 className="text-3xl dark:text-white font-medium">$468</h1>
                <span className="text-green-400 text-md">+4.2%</span>
                <p className="text-md font-normal dark:text-gray-300 text-gray-500 mt-1">Compared to last week</p>
              </div>
              <div className="w-full mt-2 md:mt-0 lg:w-2/3 h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={earningsData}>
                    <XAxis dataKey="day" stroke="#ccc" />
                    <Bar dataKey="value" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="bg-[#1F2337] p-4 rounded-md">
                <p className="text-gray-400 md:text-base lg:text-xl mb-2">Earnings</p>
                <h4 className="text-white font-normal text-base lg:text-lg">$545.69</h4>
                <div className="w-full mt-2 rounded-full bg-white">
                  <div className=" w-[30%] h-1 rounded-full bg-purple-600 " />
                </div>
              </div>
              <div className="bg-[#1F2337] p-4 rounded-md">
                <p className="text-gray-400 md:text-base lg:text-xl mb-2">Profit</p>
                <h4 className="text-white font-normal text-base lg:text-lg">$256.34</h4>
                <div className="w-full mt-2 rounded-full bg-white">
                  <div className=" w-[50%] h-1 rounded-full bg-cyan-400 " />
                </div>
              </div>
              <div className="bg-[#1F2337] p-4 rounded-md">
                <p className="text-gray-400 md:text-base lg:text-xl mb-2">Expense</p>
                <h4 className="text-white font-normal text-base lg:text-lg">$74.19</h4>
                <div className="w-full mt-2 rounded-full bg-white">
                  <div className=" w-[80%] h-1 rounded-full bg-red-400 " />
                </div>
              </div>
            </div>
          </div>

          {/* Support Tracker Card */}
          <div className="dark:bg-[#2e3655] bg-gray-100 rounded-xl  p-6 w-full md:w-[49%] shadow-md">
            <div className="mb-4">
              <h3 className="text-xl text-black dark:text-white mb-2 font-semibold">Support Tracker</h3>
              <p className="text-md font-normal dark:text-gray-300 text-gray-500">Last 7 Days</p>
            </div>

            <div className="flex justify-between flex-col-reverse lg:flex-row items-start md:items-center">
              <div className="space-y-4 w-full lg:w-[45%]">
                <h1 className="text-3xl dark:text-white font-medium">164</h1>
                <p className="text-md font-normal dark:text-gray-300 text-gray-500">Total Tickets</p>

                <div className="text-sm space-y-1">
                  <div className="flex text-base dark:text-white items-center gap-2">
                    <div className="flex items-center gap-2 "><LuTickets className="text-purple-500 text-lg" /> New Tickets : 142</div>
                  </div>

                  <div className="flex text-base dark:text-white items-center gap-2">
                    <div className="flex items-center gap-2 "><FaCheckCircle className="text-cyan-500 text-lg" /> Open Tickets : 28</div>
                  </div>

                  <div className="flex text-base dark:text-white items-center gap-2">
                    <div className="flex items-center gap-2 "><IoTimeOutline className="text-orange-500 text-lg" /> Response Time : 1 Day</div>
                  </div>
                </div>
              </div>

              <div className="relative w-full lg:w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="100%"
                    outerRadius="100%"
                    barSize={10}
                    data={radialData}
                    startAngle={250}
                    endAngle={0}
                  >
                    <RadialBar
                      minAngle={15}
                      background
                      clockWise
                      dataKey="value"
                    />
                  </RadialBarChart>
                </ResponsiveContainer>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-md font-normal dark:text-gray-300 text-gray-500">Task Completed</p>
                  <span className="text-xl font-medium text-black dark:text-white">85%</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics;