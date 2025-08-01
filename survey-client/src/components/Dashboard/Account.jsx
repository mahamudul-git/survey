import React, { useState } from "react";
import { FaTrophy, FaGift, FaClipboardList, FaGamepad, FaCalendarAlt, FaLock, FaCog, FaSignOutAlt, FaChevronRight, FaClock, FaRocket } from "react-icons/fa";

import LevelPopup from "./LevelPopup";

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
  const [showLevelPopup, setShowLevelPopup] = useState(false);
  return (
    <div className="px-2 py-4 sm:px-3 sm:py-6 md:px-2 md:px-[20px] md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl">
      {/* Header */}
      <div className="bg-white rounded-2xl flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 mb-6 sm:mb-8 border border-[#eaf7f3]" style={{ boxShadow: '0px 2px 8px 0px #0000000A' }}>
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
          <div className="bg-[#eaf7f3] rounded-full p-2 sm:p-3 flex items-center justify-center">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="3" fill="#fff" stroke="#347433" strokeWidth="1.5" /><circle cx="12" cy="12" r="2" fill="#347433" /></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#347433] font-medium">Balance:</span>
            <span className="text-base sm:text-lg font-bold text-[#0a5c4c]">
              <img src="/token.svg" alt="token" className="w-4 h-4 inline-block" />100
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
          
          <button className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-1 text-white font-semibold text-xs sm:text-sm shadow-lg" style={{ background: 'rgba(29, 79, 216, 0.54)', backdropFilter: 'blur(5px) saturate(180%)', WebkitBackdropFilter: 'blur(5px) saturate(180%)' }} onClick={() => setShowLevelPopup(true)}>
            <img src="/lavel.svg" alt="Level" className="w-5 h-5" />
            1 Level
          </button>
        </div>
      </div>
      {/* Profile Info */}
      <div className="bg-white rounded-2xl px-4 sm:px-8 pt-4 sm:pt-6 pb-3 sm:pb-4 mb-6 sm:mb-8 border border-[#eaf7f3] flex flex-col gap-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <span className="text-[#222] text-xs sm:text-sm mb-2 md:mb-0">thesystemboyz@gmail.com</span>
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1 text-[#222] text-xs sm:text-sm bg-[#f7f7f7] rounded-full px-2 sm:px-3 py-1 font-semibold">
              <img src="https://flagcdn.com/bd.svg" alt="BAN" className="w-5 h-5 rounded mr-1" /> Bangladesh
            </span>
            <span className="flex items-center gap-1 text-[#8B8B8B] text-xs sm:text-sm">
              <FaCalendarAlt className="text-[#8B8B8B]" /> Joined July 2025
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-[#f4f4f4] my-4 sm:my-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="flex flex-row gap-2 sm:gap-4 mb-3 sm:mb-0">
            <button className="flex items-center gap-2 border border-[#e5e7eb] rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-base text-[#222] bg-white hover:bg-[#f7f7f7] transition">
              <FaCog className="text-[#222] text-lg" /> Account Settings
            </button>
          </div>
          <button className="flex items-center gap-2 text-[#222] font-semibold text-xs sm:text-base ml-auto px-0 py-0 bg-transparent border-none shadow-none hover:bg-transparent">
            <FaSignOutAlt className="text-[#222] text-lg" /> Logout
          </button>
        </div>
      </div>
      {/* Dashboard Cards */}
      <div className="bg-white rounded-2xl px-4 sm:px-8 py-6 sm:py-8 mb-6 sm:mb-8 border border-[#eaf7f3]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
          {/* Row 1: Only Earned */}
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-4 sm:px-6 py-4 sm:py-5">
            <span className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex items-center justify-center border border-[#eaf7f3]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#347433" />
                <path d="M14 9V19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 14H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#0a5c4c]">
                <img src="/token.svg" alt="SSC" className="w-4 h-4 inline-block" />
                {100}
                <span className="text-xs text-gray-500 font-semibold">SSC</span>
              </span>
              <span className="text-[#347433] text-xs sm:text-sm">Earned</span>
            </div>
          </div>
          <div className="bg-white hover:bg-[#eaf7f3] cursor-pointer border border-[#eaf7f3] rounded-full flex items-center px-4 sm:px-6 py-4 sm:py-5">
            <span className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex items-center justify-center border border-[#eaf7f3]">{iconMap.clipboard}</span>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#0a5c4c]">0</span>
              <span className="text-[#347433] text-xs sm:text-sm">Surveys Completed</span>
            </div>
            <span className="ml-auto text-[#347433]"><FaChevronRight /></span>
          </div>
        </div>
      </div>
      {/* Theme Selector */}
      <div className="bg-white rounded-2xl px-4 sm:px-8 py-4 sm:py-6 border border-[#eaf7f3]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-base text-[#0a5c4c]">Select Theme</span>
            <div className="text-[#347433] text-xs mt-1">Please note that survey pages will not be available in dark mode.</div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-0">
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
                <span className={`text-xs sm:text-sm ${theme === opt ? 'text-[#347433] font-semibold' : 'text-[#0a5c4c]'}`}>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Level Popup */}
      {showLevelPopup && (
        <LevelPopup onClose={() => setShowLevelPopup(false)} />
      )}
    </div>
  );
};

export default Account;
