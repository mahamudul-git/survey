import React, { useState } from "react";
import { FaChevronLeft, FaEnvelope, FaLock, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChangeEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 border border-[#9767E4]/30 flex items-center justify-center hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#9767E4] text-lg" />
        </button>
        <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">Change Email</h1>
      </div>

      <div className="bg-gradient-to-br from-[#FBBF24]/10 to-[#F59E0B]/5 border border-[#FBBF24]/30 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <FaExclamationTriangle className="text-[#FBBF24] text-lg mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-[#FBBF24] mb-1">Important Notice</h3>
            <p className="text-[#F8FAFC]/70 text-sm">
              Changing your email address will require verification and may affect your login. You'll receive a confirmation email at both your current and new email addresses.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-6 border border-[#9767E4]/20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaEnvelope className="text-[#26B2F2]" />
              New Email Address
            </label>
            <input 
              type="email" 
              className="bg-[#0E1525]/40 border border-[#26B2F2]/30 rounded-xl px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#26B2F2]/60 focus:ring-0 focus:outline-none transition-all duration-300" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="Enter your new email address" 
            />
            <span className="text-xs text-[#F8FAFC]/50">Make sure this email is accessible as you'll need to verify it</span>
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaLock className="text-[#9767E4]" />
              Current Password
            </label>
            <input 
              type="password" 
              className="bg-[#0E1525]/40 border border-[#9767E4]/30 rounded-xl px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/60 focus:ring-0 focus:outline-none transition-all duration-300" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Enter your current password for verification" 
            />
            <span className="text-xs text-[#F8FAFC]/50">Required for security verification</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button 
            className="flex-1 bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white rounded-full px-6 py-3 font-semibold hover:from-[#9767E4]/90 hover:to-[#26B2F2]/90 transition-all duration-300 shadow-lg shadow-[#9767E4]/20"
            disabled={!email || !password}
          >
            Update Email Address
          </button>
          <button 
            className="bg-[#0E1525]/40 border border-[#9767E4]/30 text-[#F8FAFC]/70 rounded-full px-6 py-3 font-semibold hover:bg-[#0E1525]/60 hover:border-[#9767E4]/50 transition-all duration-300"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeEmail;
