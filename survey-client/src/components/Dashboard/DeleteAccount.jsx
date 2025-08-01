import React from "react";
import { FaChevronLeft, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-5 sm:px-3 sm:py-6 md:px-2 md:px-[20px] md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl flex flex-col gap-5">
      <div className="flex items-center gap-3 mb-6">
        <button className="bg-white rounded-full p-2 border border-[#eaf7f3] flex items-center justify-center" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#347433] text-lg" />
        </button>
        <span className="font-bold text-lg sm:text-xl text-[#0a5c4c]">Delete Account</span>
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6 border border-[#eaf7f3] items-center">
        <FaTrash className="text-red-500 text-4xl mb-2" />
        <span className="font-semibold text-red-500 text-lg mb-2">Are you sure you want to delete your account?</span>
        <span className="text-gray-500 text-sm mb-4 text-center">This action cannot be undone. All your data will be permanently deleted.</span>
        <button className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold">Delete Account</button>
      </div>
    </div>
  );
};

export default DeleteAccount;
