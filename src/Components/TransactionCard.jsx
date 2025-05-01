import React, { useState, useRef, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";

const transactions = [
  {
    cardType: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/visa-img.png",
    last4: "4230",
    label: "Credit",
    date: "17 Mar 2022",
    status: "Verified",
    amount: "+$1,678",
  },
  {
    cardType: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/master-card-img.png",
    last4: "5578",
    label: "Credit",
    date: "12 Feb 2022",
    status: "Rejected",
    amount: "-$839",
  },
  {
    cardType: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/american-express-img.png",
    last4: "4567",
    label: "ATM",
    date: "28 Feb 2022",
    status: "Verified",
    amount: "+$435",
  },
  {
    cardType: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/visa-img.png",
    last4: "5699",
    label: "Credit",
    date: "8 Jan 2022",
    status: "Pending",
    amount: "+$2,345",
  },
  {
    cardType: "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/visa-img.png",
    last4: "5699",
    label: "Credit",
    date: "8 Jan 2022",
    status: "Rejected",
    amount: "-$234",
  },
];

const getIcon = (type) => {
  if (typeof type === "string" && type.startsWith("http")) {
    return (
      <img
        src={type}
        alt="card"
        className="w-10 h-7 rounded-lg object-contain bg-white p-1"
      />
    );
  }

  switch (type) {
    case "visa":
      return (
        <SiVisa className="text-blue-600 text-base p-3 rounded-lg bg-gray-200" />
      );
    case "mastercard":
      return <SiMastercard className="text-red-600 text-xl" />;
    case "amex":
      return <SiAmericanexpress className="text-blue-400 text-xl" />;
    default:
      return null;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "Verified":
      return "bg-green-100 text-green-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    case "Pending":
      return "bg-gray-100 text-gray-700";
    default:
      return "";
  }
};


const TransactionCard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-[#2e3655] p-5 md:p-6 rounded-xl shadow-md xl:mr-2 w-full md:w-[59%]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Last Transaction
        </h2>
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-500 rounded-full p-2 dark:text-gray-400">
            <HiDotsVertical size={20} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#2c3550] shadow-xl rounded-md transition-all duration-200 z-50">
              <ul className="text-sm text-gray-700 dark:text-gray-100 py-3">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1f2235] cursor-pointer">
                  Edit
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1f2235] cursor-pointer">
                  Download
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#1f2235] cursor-pointer">
                  Share
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-[350px] md:w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
              <th className="py-2 text-base font-medium">CARD</th>
              <th className="py-2 text-base font-medium">DATE</th>
              <th className="py-2 text-base font-medium">STATUS</th>
              <th className="py-2 text-base font-medium">TREND</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr
                key={idx}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a2e45]"
              >
                
                  <td className="py-3 min-w-[120px] md:w-full flex items-center gap-4">
                    {getIcon(txn.cardType)}
                    <div>
                      <p className="text-gray-800 dark:text-white text-base font-medium">
                        *{txn.last4}
                      </p>
                      <p className="text-md text-gray-500 dark:text-gray-400">
                        {txn.label}
                      </p>
                    </div>
                  </td>
                
                <td className="py-3">
                  <p className="text-gray-800 dark:text-white text-base">Sent</p>
                  <p className="text-md text-gray-500 dark:text-gray-400">
                    {txn.date}
                  </p>
                </td>
                <td className="py-3">
                  <span
                    className={`text-md font-medium px-2 py-1 rounded-full ${getStatusColor(
                      txn.status
                    )}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="py-3 text-base font-medium text-gray-800 dark:text-white">
                  {txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="overflow-x-auto w-full">
        <table className="min-w-[600px] w-full text-sm text-left">
          <thead>
            <tr className="text-left text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
              <th className="py-2 px-4 text-base font-medium">CARD</th>
              <th className="py-2 px-4 text-base font-medium">DATE</th>
              <th className="py-2 px-4 text-base font-medium">STATUS</th>
              <th className="py-2 px-4 text-base font-medium">TREND</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr
                key={idx}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a2e45]"
              >
                <td className="py-3 px-4 min-w-[180px] flex items-center gap-4">
                  {getIcon(txn.cardType)}
                  <div>
                    <p className="text-gray-800 dark:text-white text-base font-medium">
                      *{txn.last4}
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-400">
                      {txn.label}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <p className="text-gray-800 dark:text-white text-base">Sent</p>
                  <p className="text-md text-gray-500 dark:text-gray-400">
                    {txn.date}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-md font-medium px-2 py-1 rounded-full ${getStatusColor(
                      txn.status
                    )}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-base font-medium text-gray-800 dark:text-white">
                  {txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      

    </div>
  );
};

export default TransactionCard;
