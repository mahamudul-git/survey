import React from "react";

const LevelPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" style={{backdropFilter: 'blur(7px) saturate(180%)', WebkitBackdropFilter: 'blur(7px) saturate(180%)'}} onClick={onClose}>
    <div className="bg-white rounded-2xl shadow-lg p-3 w-full max-w-[320px] relative" style={{marginTop:'60px', marginBottom:'60px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)', border: '1px solid rgba(52,116,51,0.2)'}} onClick={e => e.stopPropagation()}>
      <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold" onClick={onClose}>&times;</button>
      <div className="flex flex-col items-center mb-4">
        <div className="text-base font-semibold text-gray-700 mb-1">You're currently in the Blue Tier 🎉</div>
        <div className="text-xs text-gray-500 mb-3">Keep earning to climb up the ladder!</div>
        <img src="/lavel 1.svg" alt="Level 1" className="w-20 h-20 mb-3" />
      </div>
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-400 px-2">
        <span>Tier/Bonus</span>
        <span>Level</span>
      </div>
      <div className="space-y-2">
        {/* Blue Tier */}
        <div className="flex items-center justify-between bg-blue-50 rounded-xl px-3 py-2">
          <div>
            <div className="font-bold text-blue-900 text-sm">Blue</div>
            <div className="text-xs text-gray-600">Everyone starts here – start earning to unlock more perks!</div>
          </div>
          <span className="bg-blue-700 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[58px] text-center">1-4</span>
        </div>
        {/* Bronze Tier */}
        <div className="flex items-center justify-between bg-[#f8f5f0] rounded-xl px-3 py-2">
          <div>
            <div className="font-bold text-yellow-900 text-sm">Bronze</div>
            <div className="text-xs text-gray-600">Unlock Live Chat Support</div>
          </div>
          <span className="bg-yellow-600 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[48px] text-center">5-10</span>
        </div>
        {/* Silver Tier */}
        <div className="flex items-center justify-between bg-gray-100 rounded-xl px-3 py-2">
          <div>
            <div className="font-bold text-gray-700 text-sm">Silver</div>
            <div className="text-xs text-gray-600">Enjoy a special Bonus Day every month</div>
          </div>
          <span className="bg-gray-400 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[58px] text-center">11-20</span>
        </div>
        {/* Gold Tier */}
        <div className="flex items-center justify-between bg-yellow-50 rounded-xl px-3 py-2">
          <div>
            <div className="font-bold text-yellow-700 text-sm">Gold</div>
            <div className="text-xs text-gray-600">Get access to Exclusive Reward Discounts</div>
          </div>
          <span className="bg-yellow-400 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[58px] text-center">21-30</span>
        </div>
        {/* Diamond Tier */}
        <div className="flex items-center justify-between bg-purple-50 rounded-xl px-3 py-2">
          <div>
            <div className="font-bold text-purple-700 text-sm">Diamond</div>
            <div className="text-xs text-gray-600">Early Access to New Features and Premium Offers</div>
          </div>
          <span className="bg-purple-700 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[58px] text-center">31+</span>
        </div>
      </div>
    </div>
  </div>
);

export default LevelPopup;
