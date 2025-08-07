import React from "react";
import { FaUser, FaEnvelope, FaShieldAlt, FaLock, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    icon: <FaUser className="text-[#9767E4] text-xl" />,
    title: "Profile Setup",
    description: "Update your personal information and preferences",
    route: "/dashboard/profile-setup"
  },
  {
    icon: <FaEnvelope className="text-[#26B2F2] text-xl" />,
    title: "Change Email",
    description: "Update your email address for account access",
    route: "/dashboard/change-email"
  },
  {
    icon: <FaShieldAlt className="text-[#C084FC] text-xl" />,
    title: "Two Factor Verification",
    description: "Add an extra layer of security to your account",
    route: "/dashboard/two-factor"
  },
  {
    icon: <FaLock className="text-[#9767E4] text-xl" />,
    title: "Change Password",
    description: "Update your password to keep your account secure",
    route: "/dashboard/change-password"
  },
  {
    icon: <FaTrash className="text-[#EF4444] text-xl" />,
    title: "Delete Account",
    description: "Permanently delete your account and all data",
    route: "/dashboard/delete-account",
    danger: true
  }
];

const AccountSettings = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 border border-[#9767E4]/30 flex items-center justify-center hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300"
          onClick={() => navigate('/dashboard')}
        >
          <FaChevronLeft className="text-[#9767E4] text-lg" />
        </button>
        <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">Account Settings</h1>
      </div>
      <div className="flex flex-col gap-4">
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className={`bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl flex items-center px-4 py-4 border transition-all duration-300 cursor-pointer ${
              section.danger 
                ? 'border-[#EF4444]/30 hover:bg-[#EF4444]/10 hover:border-[#EF4444]/40' 
                : 'border-[#9767E4]/20 hover:bg-[#9767E4]/10 hover:border-[#9767E4]/30'
            }`}
            onClick={() => section.route && navigate(section.route)}
          >
            <span className={`rounded-full p-3 mr-4 flex items-center justify-center border transition-all duration-300 ${
              section.danger 
                ? 'bg-gradient-to-r from-[#EF4444]/10 to-[#EF4444]/20 border-[#EF4444]/30' 
                : 'bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 border-[#9767E4]/30'
            }`}>
              {section.icon}
            </span>
            <div className="flex-1">
              <div className={`font-semibold text-base sm:text-lg ${section.danger ? 'text-[#EF4444]' : 'text-[#F8FAFC]'}`}>
                {section.title}
              </div>
              <div className="text-sm text-[#F8FAFC]/60 mt-1">
                {section.description}
              </div>
            </div>
            <span className={`${section.danger ? 'text-[#EF4444]' : 'text-[#9767E4]'}`}>
              <FaChevronRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSettings;
