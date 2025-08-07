import React, { useState } from "react";
import { FaChevronLeft, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isStrongPassword = (password) => {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password) && 
           /[^A-Za-z0-9]/.test(password);
  };

  const passwordsMatch = newPassword === confirmPassword && newPassword !== "";

  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 border border-[#9767E4]/30 flex items-center justify-center hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#9767E4] text-lg" />
        </button>
        <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">Change Password</h1>
      </div>

      <div className="bg-gradient-to-br from-[#26B2F2]/10 to-[#9767E4]/5 border border-[#26B2F2]/30 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <FaShieldAlt className="text-[#26B2F2] text-lg mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-[#26B2F2] mb-1">Password Security Tips</h3>
            <p className="text-[#F8FAFC]/70 text-sm">
              Use at least 8 characters with a mix of uppercase, lowercase, numbers, and symbols for the strongest security.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-6 border border-[#9767E4]/20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaLock className="text-[#9767E4]" />
              Current Password
            </label>
            <div className="relative">
              <input 
                type={showCurrentPassword ? "text" : "password"}
                className="bg-[#0E1525]/40 border border-[#9767E4]/30 rounded-xl px-4 py-3 pr-12 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/60 focus:ring-0 focus:outline-none transition-all duration-300 w-full" 
                value={currentPassword} 
                onChange={e => setCurrentPassword(e.target.value)} 
                placeholder="Enter your current password" 
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F8FAFC]/50 hover:text-[#9767E4] transition-colors duration-300"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaLock className="text-[#26B2F2]" />
              New Password
            </label>
            <div className="relative">
              <input 
                type={showNewPassword ? "text" : "password"}
                className={`bg-[#0E1525]/40 border rounded-xl px-4 py-3 pr-12 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:ring-0 focus:outline-none transition-all duration-300 w-full ${
                  newPassword ? (isStrongPassword(newPassword) ? 'border-green-500/60 focus:border-green-500/80' : 'border-red-500/60 focus:border-red-500/80') : 'border-[#26B2F2]/30 focus:border-[#26B2F2]/60'
                }`}
                value={newPassword} 
                onChange={e => setNewPassword(e.target.value)} 
                placeholder="Enter your new password" 
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F8FAFC]/50 hover:text-[#26B2F2] transition-colors duration-300"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {newPassword && (
              <div className="text-xs space-y-1">
                <div className={`flex items-center gap-2 ${newPassword.length >= 8 ? 'text-green-400' : 'text-red-400'}`}>
                  <span>•</span> At least 8 characters
                </div>
                <div className={`flex items-center gap-2 ${/[A-Z]/.test(newPassword) ? 'text-green-400' : 'text-red-400'}`}>
                  <span>•</span> One uppercase letter
                </div>
                <div className={`flex items-center gap-2 ${/[a-z]/.test(newPassword) ? 'text-green-400' : 'text-red-400'}`}>
                  <span>•</span> One lowercase letter
                </div>
                <div className={`flex items-center gap-2 ${/[0-9]/.test(newPassword) ? 'text-green-400' : 'text-red-400'}`}>
                  <span>•</span> One number
                </div>
                <div className={`flex items-center gap-2 ${/[^A-Za-z0-9]/.test(newPassword) ? 'text-green-400' : 'text-red-400'}`}>
                  <span>•</span> One special character
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaLock className="text-[#C084FC]" />
              Confirm New Password
            </label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"}
                className={`bg-[#0E1525]/40 border rounded-xl px-4 py-3 pr-12 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:ring-0 focus:outline-none transition-all duration-300 w-full ${
                  confirmPassword ? (passwordsMatch ? 'border-green-500/60 focus:border-green-500/80' : 'border-red-500/60 focus:border-red-500/80') : 'border-[#C084FC]/30 focus:border-[#C084FC]/60'
                }`}
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                placeholder="Confirm your new password" 
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F8FAFC]/50 hover:text-[#C084FC] transition-colors duration-300"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {confirmPassword && (
              <span className={`text-xs ${passwordsMatch ? 'text-green-400' : 'text-red-400'}`}>
                {passwordsMatch ? '✓ Passwords match' : '✗ Passwords do not match'}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button 
            className="flex-1 bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white rounded-full px-6 py-3 font-semibold hover:from-[#9767E4]/90 hover:to-[#26B2F2]/90 transition-all duration-300 shadow-lg shadow-[#9767E4]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!currentPassword || !isStrongPassword(newPassword) || !passwordsMatch}
          >
            Update Password
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

export default ChangePassword;
