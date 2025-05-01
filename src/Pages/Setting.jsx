import { useState } from 'react';
import Tabs from '../Components/Tabs';
import { FaRegBell, FaLock, FaRegBookmark } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { AiOutlineLink } from 'react-icons/ai';
import AccountTab from '../Components/AccountTab';
import SecurityTab from '../Components/SecurityTab';
import NotificationTab from '../Components/NotificationTab';
import AccountConnectionTab from '../Components/AccountConnectionTab';
import BillingPaymentTab from '../Components/BillingPaymentTab';



const Setting = () => {
    const tabItems = [
        { key: 'account', label: 'Account', icon: <LuUsers /> },
        { key: 'security', label: 'Security', icon: <FaLock /> },
        { key: 'billing_plans', label: 'Billing & Plans', icon: <FaRegBookmark /> },
        { key: 'notifications', label: 'Notifications', icon: <FaRegBell /> },
        { key: 'connections', label: 'Connections', icon: <AiOutlineLink /> },
    ];


    const content = {
        account: <AccountTab />,
        security: <SecurityTab />,
        billing_plans: <BillingPaymentTab />,
        notifications:<NotificationTab />,
        connections: <AccountConnectionTab />
    };

    const [activeTab, setActiveTab] = useState('account');

    return (
        <>
            <div className="bg-white min-h-screen p-4 md:p-6 dark:bg-[#1e2640] ">
                <Tabs tabs={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
                {content[activeTab]}
            </div>
        </>
    );
};

export default Setting;
