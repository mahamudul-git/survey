import React, { useState } from "react";
import { FaTrophy, FaGift, FaClipboardList, FaGamepad, FaCalendarAlt, FaLock, FaCog, FaSignOutAlt, FaChevronRight, FaClock, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import LevelPopup from "./LevelPopup";

const iconMap = {
  trophy: <FaTrophy className="text-[#9767E4] text-xl" />,
  gift: <FaGift className="text-[#26B2F2] text-xl" />,
  clipboard: <FaClipboardList className="text-[#C084FC] text-xl" />,
  gamepad: <FaGamepad className="text-[#9767E4] text-xl" />,
  calendar: <FaCalendarAlt className="text-[#26B2F2] text-xl" />,
  lock: <FaLock className="text-[#C084FC] text-xl" />,
};

const Account = () => {
  const [theme, setTheme] = useState("Light");
  const [showLevelPopup, setShowLevelPopup] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      {/* Header */}
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl flex flex-row items-center justify-between px-4 pt-6 pb-6 sm:px-8 sm:py-6 border border-[#9767E4]/20">
        <div className="flex items-center gap-2 sm:gap-4 w-auto">
          <div className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 sm:p-3 flex items-center justify-center border border-[#9767E4]/30">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="3" fill="none" stroke="#9767E4" strokeWidth="1.5" /><circle cx="12" cy="12" r="2" fill="#9767E4" /></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#26B2F2] font-medium">Balance:</span>
            <span className="text-base sm:text-lg font-bold text-[#F8FAFC] flex items-center">
              <img src="/tokenwhite.svg" alt="token" className="w-4 h-4 mr-1" />100
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-6 w-auto justify-end">
          <button className="flex items-center gap-2 rounded-full px-3 sm:px-6 py-2 sm:py-3 text-white font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#9767E4]/80 to-[#26B2F2]/80 border border-[#9767E4]/30 hover:from-[#9767E4] hover:to-[#26B2F2] transition-all duration-300" onClick={() => setShowLevelPopup(true)}>
            <img src="/lavel.svg" alt="Level" className="w-5 h-5" />
            1 Level
          </button>
        </div>
      </div>
      {/* Profile Info */}
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl px-4 pt-4 pb-3 sm:px-8 sm:pt-6 sm:pb-4 border border-[#9767E4]/20 flex flex-col gap-0">
        <div className="flex flex-row flex-wrap items-center justify-between w-full gap-2">
          <span className="text-[#F8FAFC] text-xs sm:text-sm break-all min-w-0">thesystemboyz@gmail.com</span>
          <div className="flex items-center gap-2 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1 text-[#F8FAFC] text-xs sm:text-sm bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full px-2 sm:px-3 py-1 font-semibold border border-[#9767E4]/30">
              <img src="https://flagcdn.com/bd.svg" alt="BAN" className="w-5 h-5 rounded mr-1" /> Bangladesh
            </span>
            <span className="flex items-center gap-1 text-[#F8FAFC]/60 text-xs sm:text-sm">
              <FaCalendarAlt className="text-[#26B2F2]" /> Joined July 2025
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 my-3 sm:my-6" />
        <div className="flex flex-row flex-wrap items-center justify-between w-full gap-2">
          <div className="flex flex-row gap-2 sm:gap-4">
            <button className="flex items-center gap-2 border border-[#9767E4]/30 rounded-full px-3 sm:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-base text-[#F8FAFC] bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" onClick={() => navigate('/dashboard/account-settings')}>
              <FaCog className="text-[#9767E4] text-lg" /> Account Settings
            </button>
          </div>
          <button className="flex items-center gap-2 text-[#F8FAFC]/80 font-semibold text-xs sm:text-base px-0 py-0 bg-transparent border-none shadow-none hover:text-[#26B2F2] transition-all duration-300">
            <FaSignOutAlt className="text-[#26B2F2] text-lg" /> Logout
          </button>
        </div>
      </div>
      {/* Dashboard Cards */}
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl px-4 py-5 sm:px-8 sm:py-8 border border-[#9767E4]/20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
          {/* Row 1: Only Earned */}
          <div className="bg-gradient-to-r from-[#9767E4]/10 to-[#26B2F2]/10 hover:from-[#9767E4]/20 hover:to-[#26B2F2]/20 cursor-pointer border border-[#9767E4]/20 rounded-2xl flex items-center px-3 sm:px-6 py-3 sm:py-5 transition-all duration-300">
            <span className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 sm:p-3 mr-2 sm:mr-4 flex items-center justify-center border border-[#9767E4]/30">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#9767E4" />
                <path d="M14 9V19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 14H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#26B2F2]">
                <img src="/tokenwhite.svg" alt="SSC" className="w-4 h-4 inline-block" />
                {100}
              </span>
              <span className="text-[#9767E4] text-xs sm:text-sm">Earned</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#C084FC]/10 to-[#9767E4]/10 hover:from-[#C084FC]/20 hover:to-[#9767E4]/20 cursor-pointer border border-[#C084FC]/20 rounded-2xl flex items-center px-3 sm:px-6 py-3 sm:py-5 transition-all duration-300" onClick={() => navigate('/dashboard/surveys-completed')}>
            <span className="bg-gradient-to-r from-[#C084FC]/20 to-[#9767E4]/20 rounded-full p-2 sm:p-3 mr-2 sm:mr-4 flex items-center justify-center border border-[#C084FC]/30">{iconMap.clipboard}</span>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#26B2F2]">0</span>
              <span className="text-[#C084FC] text-xs sm:text-sm">Surveys Completed</span>
            </div>
            <span className="ml-auto text-[#9767E4]"><FaChevronRight /></span>
          </div>
        </div>
      </div>
      {/* Refer a Friend Section */}
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl px-4 py-5 sm:px-8 sm:py-8 border border-[#9767E4]/20 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-1/2 min-w-0">
            <span className="bg-gradient-to-r from-[#26B2F2]/20 to-[#9767E4]/20 rounded-full p-3 flex items-center justify-center border border-[#26B2F2]/30">
              <FaGift className="text-[#26B2F2] text-2xl" />
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-base sm:text-lg text-[#F8FAFC] truncate">Refer a Friend</span>
              <span className="text-[#F8FAFC]/70 text-xs sm:text-sm truncate">Invite friends and get 20 SSC for every successful signup!</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-1/2 justify-end">
            <span className="flex items-center gap-1">
              <img src="/tokenwhite.svg" alt="Earn Coin" className="w-5 h-5" />
              <span className="font-bold text-[#26B2F2]">40</span>
            </span>
            <button className="flex items-center gap-2 border border-[#9767E4]/30 rounded-full px-3 sm:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-base text-[#F8FAFC] bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" >
              <FaRocket className="text-[#26B2F2] text-base" /> Refer Now
            </button>
          </div>
        </div>
        {/* Referral List */}
        <div className="bg-[#0E1525]/40 border border-[#9767E4]/10 rounded-xl p-2 sm:p-4">
          <div className="font-semibold text-[#F8FAFC] mb-2">Your Referrals</div>
          <ul className="divide-y divide-[#9767E4]/10">
            <li className="flex items-center justify-between py-2">
              <span className="text-[#F8FAFC] font-medium">Rahim Uddin</span>
              <span className="bg-gradient-to-r from-[#26B2F2]/20 to-[#9767E4]/20 text-[#26B2F2] rounded-full px-2 sm:px-3 py-1 text-xs font-semibold border border-[#26B2F2]/30">Joined</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <span className="text-[#F8FAFC] font-medium">Mita Akter</span>
              <span className="bg-gradient-to-r from-[#C084FC]/20 to-[#9767E4]/20 text-[#C084FC] rounded-full px-2 sm:px-3 py-1 text-xs font-semibold border border-[#C084FC]/30">Pending</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <span className="text-[#F8FAFC] font-medium">Sakib Hasan</span>
              <span className="bg-gradient-to-r from-[#26B2F2]/20 to-[#9767E4]/20 text-[#26B2F2] rounded-full px-2 sm:px-3 py-1 text-xs font-semibold border border-[#26B2F2]/30">Joined</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Theme Selector */}
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl px-4 py-4 sm:px-8 sm:py-6 border border-[#9767E4]/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-base text-[#F8FAFC]">Select Theme</span>
            <div className="text-[#F8FAFC]/70 text-xs mt-1">Please note that survey pages will not be available in dark mode.</div>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 mt-3 sm:mt-0">
            {['Light', 'Dark', 'System'].map(opt => (
              <label key={opt} className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value={opt}
                  checked={theme === opt}
                  onChange={() => setTheme(opt)}
                  className="form-radio text-[#9767E4] focus:ring-0 border-[#9767E4]/30 bg-transparent"
                  style={{ accentColor: '#9767E4' }}
                />
                <span className={`text-xs sm:text-sm ${theme === opt ? 'text-[#9767E4] font-semibold' : 'text-[#F8FAFC]/70'}`}>{opt}</span>
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
