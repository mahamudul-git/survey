import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
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
    <div className="px-4 py-5 sm:px-3 sm:py-6 md:px-2 md:px-[20px] md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl flex flex-col gap-5">
      <div className="flex items-center gap-3 mb-6">
        <button className="bg-white rounded-full p-2 border border-[#eaf7f3] flex items-center justify-center" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#347433] text-lg" />
        </button>
        <span className="font-bold text-lg sm:text-xl text-[#0a5c4c]">Profile Setup</span>
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6 border border-[#eaf7f3]">
        <div className="flex flex-col items-center gap-4">
          <label htmlFor="profilePic" className="cursor-pointer">
            <img src={profilePic || "/logo.png"} alt="Profile" className="w-24 h-24 rounded-full object-cover border border-[#eaf7f3]" />
            <input type="file" id="profilePic" className="hidden" accept="image/*" onChange={handlePicChange} />
          </label>
          <span className="text-xs text-gray-500">Upload Profile Picture</span>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-[#0a5c4c]">Name</label>
          <input type="text" className="border rounded px-3 py-2" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-[#0a5c4c]">Username</label>
          <input type="text" className="border rounded px-3 py-2" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter your username" />
        </div>
        <button className="bg-[#347433] text-white rounded-full px-6 py-2 font-semibold mt-4">Save Changes</button>
      </div>
    </div>
  );
};

export default ProfileSetup;
