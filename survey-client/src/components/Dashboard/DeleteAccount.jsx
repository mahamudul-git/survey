import React, { useState } from "react";
import { FaChevronLeft, FaTrash, FaExclamationTriangle, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmationChange = (e) => {
    const value = e.target.value;
    setConfirmation(value);
    setIsConfirmed(value === "DELETE");
  };

  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-red-500/20 rounded-2xl flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 border border-[#9767E4]/30 flex items-center justify-center hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#9767E4] text-lg" />
        </button>
        <h1 className="font-bold text-xl sm:text-2xl text-red-400">Delete Account</h1>
      </div>

      <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/40 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <FaExclamationTriangle className="text-red-400 text-lg mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-red-400 mb-2">⚠️ Warning: This action cannot be undone!</h3>
            <ul className="text-[#F8FAFC]/70 text-sm space-y-1">
              <li>• All your survey data and earnings will be permanently deleted</li>
              <li>• Your account cannot be recovered after deletion</li>
              <li>• Any pending rewards or payments will be forfeited</li>
              <li>• You will lose access to all features immediately</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-6 border border-red-500/30">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full p-4">
            <FaTrash className="text-red-400 text-3xl" />
          </div>
          <h2 className="font-bold text-xl text-red-400">Permanently Delete Account</h2>
          <p className="text-[#F8FAFC]/60 text-sm max-w-md">
            Once you delete your account, there is no going back. Please be certain before proceeding.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaLock className="text-red-400" />
              Password Confirmation
            </label>
            <input 
              type="password" 
              className="bg-[#0E1525]/40 border border-red-500/40 rounded-xl px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-red-500/60 focus:ring-0 focus:outline-none transition-all duration-300" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Enter your password to confirm" 
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC]">
              Type "DELETE" to confirm
            </label>
            <input 
              type="text" 
              className={`bg-[#0E1525]/40 border rounded-xl px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:ring-0 focus:outline-none transition-all duration-300 ${
                confirmation ? (isConfirmed ? 'border-red-500/60 focus:border-red-500/80' : 'border-red-600/80 focus:border-red-600') : 'border-red-500/40 focus:border-red-500/60'
              }`}
              value={confirmation} 
              onChange={handleConfirmationChange} 
              placeholder="Type DELETE to confirm deletion" 
            />
            {confirmation && !isConfirmed && (
              <span className="text-red-400 text-xs">Please type "DELETE" exactly to confirm</span>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button 
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full px-6 py-3 font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            disabled={!password || !isConfirmed}
          >
            <FaTrash />
            Permanently Delete Account
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

export default DeleteAccount;
