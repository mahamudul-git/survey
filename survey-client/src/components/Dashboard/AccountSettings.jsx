import React from "react";
import { FaUser, FaEnvelope, FaShieldAlt, FaLock, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    icon: <FaUser className="text-[#347433] text-xl" />,
    title: "Profile Setup",
    route: "/dashboard/profile-setup"
  },
  {
    icon: <FaEnvelope className="text-[#347433] text-xl" />,
    title: "Change Email",
    route: "/dashboard/change-email"
  },
  {
    icon: <FaShieldAlt className="text-[#347433] text-xl" />,
    title: "Two Factor Verification",
    route: "/dashboard/two-factor"
  },
  {
    icon: <FaLock className="text-[#347433] text-xl" />,
    title: "Change Password",
    route: "/dashboard/change-password"
  },
  {
    icon: <FaTrash className="text-red-500 text-xl" />,
    title: "Delete Account",
    route: "/dashboard/delete-account",
    danger: true
  }
];

const AccountSettings = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-5 sm:px-3 sm:py-6 md:px-2 md:px-[20px] md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          className="bg-white rounded-full p-2 border border-[#eaf7f3] flex items-center justify-center"
          onClick={() => navigate('/dashboard')}
        >
          <FaChevronLeft className="text-[#347433] text-lg" />
        </button>
        <span className="font-bold text-lg sm:text-xl text-[#0a5c4c]">Account Settings</span>
      </div>
      <div className="flex flex-col gap-3">
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className={`bg-white rounded-full flex items-center px-4 py-4 border ${section.danger ? 'border-red-100' : 'border-[#eaf7f3]'} cursor-pointer hover:bg-[#eaf7f3] transition`}
            onClick={() => section.route && navigate(section.route)}
          >
            <span className={`bg-white rounded-full p-2 sm:p-3 mr-4 flex items-center justify-center border ${section.danger ? 'border-red-100' : 'border-[#eaf7f3]'}`}>{section.icon}</span>
            <span className={`font-semibold text-base sm:text-lg ${section.danger ? 'text-red-500' : 'text-[#0a5c4c]'}`}>{section.title}</span>
            <span className="ml-auto text-[#347433]">
              <FaChevronRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSettings;
