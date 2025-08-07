import React, { useState } from "react";
import { FaChevronLeft, FaCamera, FaUser, FaAt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handlePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 border border-[#9767E4]/30 flex items-center justify-center hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#9767E4] text-lg" />
        </button>
        <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">Profile Setup</h1>
      </div>
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-6 border border-[#9767E4]/20">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <label htmlFor="profilePic" className="cursor-pointer group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#9767E4]/30 bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20">
                <img 
                  src={profilePic || "/logo.png"} 
                  alt="Profile" 
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" 
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaCamera className="text-white text-lg" />
              </div>
              <input type="file" id="profilePic" className="hidden" accept="image/*" onChange={handlePicChange} />
            </label>
          </div>
          <span className="text-sm text-[#F8FAFC]/60">Click to upload profile picture</span>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaUser className="text-[#9767E4]" />
              Full Name
            </label>
            <input 
              type="text" 
              className="bg-[#0E1525]/40 border border-[#9767E4]/30 rounded-xl px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/60 focus:ring-0 focus:outline-none transition-all duration-300" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Enter your full name" 
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#F8FAFC] flex items-center gap-2">
              <FaAt className="text-[#26B2F2]" />
              Username
            </label>
            <input 
              type="text" 
              className="bg-[#0E1525]/40 border border-[#9767E4]/30 rounded-xl px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#26B2F2]/60 focus:ring-0 focus:outline-none transition-all duration-300" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              placeholder="Enter your username" 
            />
          </div>
          
          <button className="bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white rounded-full px-6 py-3 font-semibold mt-4 hover:from-[#9767E4]/90 hover:to-[#26B2F2]/90 transition-all duration-300 shadow-lg shadow-[#9767E4]/20">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
