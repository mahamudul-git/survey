import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TwoFactorVerification = () => {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="px-4 py-5 sm:px-3 sm:py-6 md:px-2 md:px-[20px] md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl flex flex-col gap-5">
      <div className="flex items-center gap-3 mb-6">
        <button className="bg-white rounded-full p-2 border border-[#eaf7f3] flex items-center justify-center" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#347433] text-lg" />
        </button>
        <span className="font-bold text-lg sm:text-xl text-[#0a5c4c]">Two Factor Verification</span>
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6 border border-[#eaf7f3]">
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-[#0a5c4c]">Enable Two Factor Authentication</label>
          <button className={`rounded-full px-6 py-2 font-semibold text-white ${enabled ? 'bg-red-500' : 'bg-[#347433]'}`} onClick={() => setEnabled(!enabled)}>
            {enabled ? 'Disable' : 'Enable'} 2FA
          </button>
        </div>
        {enabled && (
          <div className="mt-4 text-sm text-gray-700">2FA is enabled. You will be asked for a code when logging in.</div>
        )}
      </div>
    </div>
  );
};

export default TwoFactorVerification;
