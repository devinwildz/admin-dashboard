import React from 'react';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <nav className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-2 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex items-center justify-center px-4 py-2 rounded-md transition-all text-base
            ${activeTab === tab.key
              ? 'bg-purple-500 text-white'
              : 'group hover:bg-gray-100 dark:hover:bg-purple-500 shadow-md dark:shadow-none inset-0 hover:text-purple-500 dark:text-gray-300'
            }`}
        >
          <span className={`mr-2 ${activeTab === tab.key ? ' text-white' : 'group-dark:hover:text-purple-500 dark:text-gray-300'}`}>
            {tab.icon}
          </span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
