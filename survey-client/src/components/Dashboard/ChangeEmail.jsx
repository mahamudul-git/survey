import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChangeEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="px-4 py-5 sm:px-3 sm:py-6 md:px-2 md:px-[20px] md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl flex flex-col gap-5">
      <div className="flex items-center gap-3 mb-6">
        <button className="bg-white rounded-full p-2 border border-[#eaf7f3] flex items-center justify-center" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#347433] text-lg" />
        </button>
        <span className="font-bold text-lg sm:text-xl text-[#0a5c4c]">Change Email</span>
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6 border border-[#eaf7f3]">
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-[#0a5c4c]">New Email</label>
          <input type="email" className="border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter new email" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-[#0a5c4c]">Current Password</label>
          <input type="password" className="border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
        </div>
        <button className="bg-[#347433] text-white rounded-full px-6 py-2 font-semibold mt-4">Update Email</button>
      </div>
    </div>
  );
};

export default ChangeEmail;
