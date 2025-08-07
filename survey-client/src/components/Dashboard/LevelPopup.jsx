import React from "react";
import { FaTimes, FaTrophy, FaCrown, FaGem, FaStar, FaMedal } from "react-icons/fa";

const LevelPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
    <div className="bg-[#0E1525]/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-[400px] relative border border-[#9767E4]/20 mx-4" onClick={e => e.stopPropagation()}>
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 bg-[#9767E4]/20 hover:bg-[#9767E4]/30 rounded-full p-2 transition-all duration-300"
      >
        <FaTimes className="text-[#9767E4] text-sm" />
      </button>
      
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-[#26B2F2] to-[#9767E4] rounded-full p-3 mb-4">
          <FaTrophy className="text-white text-2xl" />
        </div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent mb-2">
          You're in the Blue Tier! 🎉
        </h2>
        <p className="text-[#F8FAFC]/60 text-sm text-center">Keep earning to climb up the ladder and unlock amazing perks!</p>
        <img src="/lavel 1.svg" alt="Level 1" className="w-20 h-20 mt-4" />
      </div>
      
      <div className="mb-4 flex items-center justify-between text-xs font-semibold text-[#F8FAFC]/50 px-3">
        <span>Tier & Benefits</span>
        <span>Level Range</span>
      </div>
      
      <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
        {/* Blue Tier */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#26B2F2]/20 to-[#26B2F2]/10 border border-[#26B2F2]/30 rounded-xl px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <FaStar className="text-[#26B2F2] text-lg" />
            <div>
              <div className="font-bold text-[#26B2F2] text-sm">Blue Tier</div>
              <div className="text-xs text-[#F8FAFC]/70">Everyone starts here – begin your earning journey!</div>
            </div>
          </div>
          <span className="bg-gradient-to-r from-[#26B2F2] to-[#26B2F2]/80 text-white text-xs font-bold rounded-full px-3 py-1 min-w-[50px] text-center">1-4</span>
        </div>
        
        {/* Bronze Tier */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#CD7F32]/20 to-[#CD7F32]/10 border border-[#CD7F32]/30 rounded-xl px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <FaMedal className="text-[#CD7F32] text-lg" />
            <div>
              <div className="font-bold text-[#CD7F32] text-sm">Bronze Tier</div>
              <div className="text-xs text-[#F8FAFC]/70">Unlock Live Chat Support & Priority Assistance</div>
            </div>
          </div>
          <span className="bg-gradient-to-r from-[#CD7F32] to-[#CD7F32]/80 text-white text-xs font-bold rounded-full px-3 py-1 min-w-[50px] text-center">5-10</span>
        </div>
        
        {/* Silver Tier */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#C0C0C0]/20 to-[#C0C0C0]/10 border border-[#C0C0C0]/30 rounded-xl px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <FaTrophy className="text-[#C0C0C0] text-lg" />
            <div>
              <div className="font-bold text-[#C0C0C0] text-sm">Silver Tier</div>
              <div className="text-xs text-[#F8FAFC]/70">Monthly Bonus Day & Enhanced Rewards</div>
            </div>
          </div>
          <span className="bg-gradient-to-r from-[#C0C0C0] to-[#C0C0C0]/80 text-white text-xs font-bold rounded-full px-3 py-1 min-w-[58px] text-center">11-20</span>
        </div>
        
        {/* Gold Tier */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <FaCrown className="text-[#FFD700] text-lg" />
            <div>
              <div className="font-bold text-[#FFD700] text-sm">Gold Tier</div>
              <div className="text-xs text-[#F8FAFC]/70">Exclusive Reward Discounts & VIP Treatment</div>
            </div>
          </div>
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FFD700]/80 text-white text-xs font-bold rounded-full px-3 py-1 min-w-[58px] text-center">21-30</span>
        </div>
        
        {/* Diamond Tier */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/10 border border-[#9767E4]/30 rounded-xl px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <FaGem className="text-[#9767E4] text-lg" />
            <div>
              <div className="font-bold text-[#9767E4] text-sm">Diamond Tier</div>
              <div className="text-xs text-[#F8FAFC]/70">Early Access & Premium Offers - The Ultimate Experience</div>
            </div>
          </div>
          <span className="bg-gradient-to-r from-[#9767E4] to-[#C084FC] text-white text-xs font-bold rounded-full px-3 py-1 min-w-[50px] text-center">31+</span>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <button 
          onClick={onClose}
          className="bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white rounded-full px-8 py-3 font-semibold hover:from-[#9767E4]/90 hover:to-[#26B2F2]/90 transition-all duration-300 shadow-lg shadow-[#9767E4]/20"
        >
          Keep Earning!
        </button>
      </div>
    </div>
  </div>
);

export default LevelPopup;
