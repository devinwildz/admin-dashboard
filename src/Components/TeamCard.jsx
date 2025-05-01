import { useState, useEffect, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';

function TeamCard({ title, description, avatars = [], tagList = [], icon }) {
  const [showDropdown, setShowDropdown] = useState(false);
   const dropdownRef = useRef();

   useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <div className="dark:bg-[#2e3655] bg-gray-100 text-gray-300 p-6 rounded-lg shadow-md">
      {/* Top Section: Title + Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={icon} alt="icon" className="w-10 h-10 rounded-full" />
          <h2 className="text-lg font-medium text-black dark:text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-2" ref={dropdownRef}>
          <button className="text-xl text-black dark:text-gray-400 hover:text-gray-400 dark:hover:text-white">
            <FaRegStar />
          </button>
          <div className="relative hover:bg-gray-300 dark:hover:bg-gray-800 p-3 rounded-full" >
            <BsThreeDotsVertical
              className="text-black dark:text-gray-400 cursor-pointer"
              onClick={() => setShowDropdown(prev => !prev)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-200 dark:bg-[#2c3550] rounded-md shadow-lg z-10">
                <ul className="text-sm">
                  <li className="px-4 py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                    Rename Team
                  </li>
                  <li className="px-4 py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                    View Details
                  </li>
                  <li className="px-4 py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                    Add to favorites
                  </li>
                  <li className="px-4 py-2 text-red-500 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                    Delete Team
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-4">{description}</p>

      {/* Avatars + Tags */}
      <div className="flex justify-between items-center mt-3">
        {/* Avatars */}
        <div className="flex items-center">
          {(avatars || []).slice(0, 3).map((avatar, idx) => (
            <img
              key={idx}
              src={avatar}
              alt={`avatar-${idx}`}
              className={`w-8 h-8 hover:-translate-y-1 transition-transform duration-200 cursor-pointer rounded-full border-2 border-gray-800 ${
                idx > 0 ? '-ml-2' : ''
              }`}
            />
          ))}
          {avatars.length > 3 && (
            <span className="-ml-2 w-8 h-8 flex items-center justify-center hover:-translate-y-1 transition-transform duration-200 cursor-pointer text-xs rounded-full bg-gray-700 border-2 border-gray-800 text-gray-300">
              +{avatars.length - 3}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap justify-end">
          {(tagList || []).map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 cursor-pointer rounded text-xs font-medium ${
                tag === 'React' ? 'bg-violet-600' : 'bg-cyan-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
