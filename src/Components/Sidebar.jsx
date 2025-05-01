import {
  Close
} from "@mui/icons-material";
import {
  RiDashboardLine,
  RiUserLine,
  RiSettings4Line,
  RiProductHuntLine,
  RiBarChartBoxLine,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom'; // ✅ useLocation imported

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation(); // ✅ useLocation used

  const menuItems = [
    { icon: RiDashboardLine, label: 'Dashboard', path: '/' },
    { icon: RiUserLine, label: 'Users', path: '/users' },
    { icon: RiProductHuntLine, label: 'Products', path: '/products' },
    { icon: RiBarChartBoxLine, label: 'Analytics', path: '/analytics' },
    { icon: RiSettings4Line, label: 'Settings', path: '/setting' },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#1e2640] text-white p-5 z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button onClick={onClose} className="mb-6 text-white">
          <Close className="text-gray-300 dark:text-gray-100" />
        </button>

        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl">
            A
          </div>
          <h1 className="text-xl font-bold">Admin</h1>
        </div>

        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path} onClick={onClose}
                className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-50 hover:bg-[#2e3655]
                  ${location.pathname === item.path
                    ? 'bg-[#2c3550] text-primary-600 dark:text-primary-400'
                    : 'text-gray-300'
                  }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
}














