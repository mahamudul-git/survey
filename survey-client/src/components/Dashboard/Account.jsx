import React, { useState } from "react";
import { FaTrophy, FaGift, FaClipboardList, FaGamepad, FaCalendarAlt, FaLock, FaCog, FaSignOutAlt, FaChevronRight, FaClock, FaRocket } from "react-icons/fa";

const iconMap = {
  trophy: <FaTrophy className="text-[#347433] text-xl" />,
  gift: <FaGift className="text-[#347433] text-xl" />,
  clipboard: <FaClipboardList className="text-[#347433] text-xl" />,
  gamepad: <FaGamepad className="text-[#347433] text-xl" />,
  calendar: <FaCalendarAlt className="text-[#347433] text-xl" />,
  lock: <FaLock className="text-[#347433] text-xl" />,
};

const Account = () => {
  const [theme, setTheme] = useState("Light");
  return (
    <div className="px-5 py-6 md:px-2 md:px-[20px] md:py-8  w-full max-w-full bg-[#f7f7f7] rounded-3xl" >
      {/* Header */}
      <div className="bg-white rounded-2xl flex items-center justify-between px-8 py-4 mb-8 border border-[#eaf7f3]" style={{boxShadow:'0px 2px 8px 0px #0000000A'}}>
        <div className="flex items-center gap-4">
          <div className="bg-[#eaf7f3] rounded-full p-3 flex items-center justify-center">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="3" fill="#fff" stroke="#347433" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" fill="#347433"/></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#347433] font-medium">Balance:</span>
            <span className="text-lg font-bold text-[#0a5c4c]">$ 1.00 USD</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#b2d3c7] font-semibold">
            <FaTrophy className="text-lg" />
            <span className="text-base">0</span>
          </div>
          <div className="flex items-center gap-2 text-[#b2d3c7] font-semibold">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#b2d3c7"/></svg>
            <span className="text-base">0</span>
          </div>
          <button className="bg-[#347433] text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2 text-sm shadow-none">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#fff"/></svg> 1 Level
          </button>
        </div>
      </div>
      {/* Profile Info */}
      <div className="bg-white rounded-2xl px-8 pt-6 pb-4 mb-8 border border-[#eaf7f3] flex flex-col gap-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <span className="text-[#222] text-sm mb-2 md:mb-0">thesystemboyz@gmail.com</span>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="flex items-center gap-1 text-[#222] text-sm bg-[#f7f7f7] rounded-full px-3 py-1 font-semibold">
              <img src="https://flagcdn.com/us.svg" alt="US" className="w-5 h-5 rounded mr-1" /> United States
            </span>
            <span className="flex items-center gap-1 text-[#8B8B8B] text-sm">
              <FaCalendarAlt className="text-[#8B8B8B]" /> Joined July 2025
            </span>
            <span className="flex items-center gap-1 text-[#8B8B8B] text-sm">
              <FaClock className="text-[#8B8B8B]" /> Current time <span className="font-bold text-[#222] ml-1">06:54</span>
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-[#f4f4f4] my-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="flex flex-row gap-4 mb-4 md:mb-0">
            <button className="flex items-center gap-2 border border-[#e5e7eb] rounded-full px-6 py-3 font-semibold text-[#222] bg-white hover:bg-[#f7f7f7] transition text-base">
              <FaCog className="text-[#222] text-lg" /> Account Settings
            </button>
            <button className="flex items-center gap-2 border border-[#e5e7eb] rounded-full px-6 py-3 font-semibold text-[#e91e63] bg-white hover:bg-[#f7f7f7] transition text-base">
              <FaRocket className="text-[#e91e63] text-lg" /> 10% Bonus Day <FaLock className="text-[#222] text-base ml-1" />
            </button>
          </div>
          <button className="flex items-center gap-2 text-[#222] font-semibold text-base ml-auto px-0 py-0 bg-transparent border-none shadow-none hover:bg-transparent">
            <FaSignOutAlt className="text-[#222] text-lg" /> Logout
          </button>
        </div>
      </div>
      {/* Dashboard Cards */}
      <div className="bg-white rounded-2xl px-8 py-8 mb-8 border border-[#eaf7f3]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1: Only Earned */}
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-6 py-5">
            <span className="bg-white rounded-full p-3 mr-4 flex items-center justify-center border border-[#eaf7f3]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#347433"/>
                <path d="M14 9V19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 14H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0a5c4c]">$ 1.00 USD</span>
              <span className="text-[#347433] text-sm">Earned</span>
            </div>
          </div>
          {/* Row 2 */}
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-6 py-5">
            <span className="bg-white rounded-full p-3 mr-4 flex items-center justify-center border border-[#eaf7f3]">{iconMap.trophy}</span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0a5c4c]">0 / 4</span>
              <span className="text-[#347433] text-sm">Achievements earned</span>
            </div>
            <span className="ml-auto text-[#347433]"><FaChevronRight /></span>
          </div>
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-6 py-5">
            <span className="bg-white rounded-full p-3 mr-4 flex items-center justify-center border border-[#eaf7f3]">{iconMap.gift}</span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0a5c4c]">0</span>
              <span className="text-[#347433] text-sm">Rewards Redeemed</span>
            </div>
            <span className="ml-auto text-[#347433]"><FaChevronRight /></span>
          </div>
          {/* Row 3 */}
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-6 py-5">
            <span className="bg-white rounded-full p-3 mr-4 flex items-center justify-center border border-[#eaf7f3]">{iconMap.clipboard}</span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0a5c4c]">0</span>
              <span className="text-[#347433] text-sm">Surveys Completed</span>
            </div>
            <span className="ml-auto text-[#347433]"><FaChevronRight /></span>
          </div>
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-6 py-5">
            <span className="bg-white rounded-full p-3 mr-4 flex items-center justify-center border border-[#eaf7f3]">{iconMap.gamepad}</span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0a5c4c]">0</span>
              <span className="text-[#347433] text-sm">Offers Activities</span>
            </div>
          </div>
          {/* Row 4 */}
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-6 py-5">
            <span className="bg-white rounded-full p-3 mr-4 flex items-center justify-center border border-[#eaf7f3]">{iconMap.calendar}</span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0a5c4c]">0 Days</span>
              <span className="text-[#347433] text-sm">Longest Streak</span>
            </div>
          </div>
        </div>
      </div>
      {/* Theme Selector */}
      <div className="bg-white rounded-2xl px-8 py-6 border border-[#eaf7f3]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-base text-[#0a5c4c]">Select Theme</span>
            <div className="text-[#347433] text-xs mt-1">Please note that survey pages will not be available in dark mode.</div>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {['Light', 'Dark', 'System'].map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value={opt}
                  checked={theme === opt}
                  onChange={() => setTheme(opt)}
                  className="form-radio text-[#347433] focus:ring-0 border-[#b2d3c7]"
                  style={{ accentColor: '#347433' }}
                />
                <span className={`text-sm ${theme === opt ? 'text-[#347433] font-semibold' : 'text-[#0a5c4c]'}`}>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
