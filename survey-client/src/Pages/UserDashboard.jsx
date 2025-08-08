import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";	
import { AuthContext } from "../providers/AuthProvider";
import { 
  BarChart3, 
  FileText, 
  Plus, 
  Moon,
  Eye,
  TrendingUp,
  Home
} from "lucide-react";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("surveys");
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white ">
      

      {/* Main Content */}
      <div className="flex pt-32  pb-12 sm:py-16 lg:py-20 xl:py-36 container mx-auto max-w-[1440px] px-4 sm:px-6 relative flex-start items-top">
        {/* Left Content */}
        <div className="flex-1 w-[70%] px-3">
          <div className="max-w-full">
            {/* Dashboard Title */}
            <h1 className="initial-hidden animate-fade-in-up text-3xl font-bold text-[#F8FAFC] mb-6">Dashboard</h1>

            {/* Stats Cards */}
            <div className="initial-hidden animate-fade-in-up animation-delay-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Total Surveys */}
              <div className="initial-hidden animate-fade-in-scale animation-delay-200 bg-[#0E1525]/80 border border-[#222F44] rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-[#F8FAFC]/90 font-medium">Total Surveys</p>
                  </div>
                  <svg className="w-4 h-4 text-[#9767E4]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M9 8h1" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-[#F8FAFC]">0</p>
              </div>

              {/* Total Responses */}
              <div className="initial-hidden animate-fade-in-scale animation-delay-300 bg-[#0E1525]/80 border border-[#222F44] rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-[#F8FAFC]/90 font-medium">Total Responses</p>
                  </div>
                  <Eye className="w-4 h-4 text-[#9767E4]/80" />
                </div>
                <p className="text-2xl font-bold text-[#F8FAFC]">0</p>
              </div>

              {/* Avg. Responses */}
              <div className="initial-hidden animate-fade-in-scale animation-delay-400 bg-[#0E1525]/80 border border-[#222F44] rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-[#F8FAFC]/90 font-medium">Avg. Responses</p>
                  </div>
                  <svg className="w-4 h-4 text-[#9767E4]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M3 4v16a1 1 0 001 1h16M8 20V10M16 20V6M12 20V4" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-[#F8FAFC]">0</p>
              </div>

              {/* Active Surveys */}
              <div className="initial-hidden animate-fade-in-scale animation-delay-500 bg-[#0E1525]/80 border border-[#222F44] rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-[#F8FAFC]/90 font-medium">Active Surveys</p>
                  </div>
                  <TrendingUp className="w-4 h-4 text-[#9767E4]/80" />
                </div>
                <p className="text-2xl font-bold text-[#F8FAFC]">0</p>
              </div>
            </div>

            {/* Tabs and Content */}
            <div className="initial-hidden animate-fade-in-up animation-delay-600 space-y-2">
              {/* Tab Navigation */}
              <div className="inline-flex p-1 rounded-2xl bg-[#0B111E]/30 backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab("surveys")}
                  className={`px-3 py-1 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "surveys"
                      ? "bg-[#9767E4]/20 text-[#9767E4] shadow-sm"
                      : "text-[#B3BDCC] hover:text-white"
                  }`}
                >
                  Surveys
                </button>
                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`px-3 py-1 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "analytics"
                      ? "bg-[#9767E4]/20 text-[#9767E4] shadow-sm"
                      : "text-[#B3BDCC] hover:text-white"
                  }`}
                >
                  Analytics
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-[#0E1525]/80 border border-[#222F44] rounded-xl backdrop-blur-sm">
                <div className="p-6">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-[#F8FAFC]/90 mb-2">No Surveys Yet</h3>
                    <p className="text-sm text-[#B3BDCC]/80 mb-6">Create your first survey to get started.</p>
                    <Link to="/create">
                      <Button className="bg-[#9767E4] hover:bg-[#8B5CF6] text-[#0F1729] font-medium px-4 py-2 h-9">
                        Create Survey
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - User Profile */}
        <div className="w-[30%] px-8 py-8 mt-6">
          <div className="initial-hidden animate-slide-in-right animation-delay-700 bg-[#0E1525] border border-[#222F44] rounded-xl h-fit">
            {/* Profile Header */}
            <div className="p-6 border-b border-[#222F44]/30">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-[#9767E4]/20 p-0.5">
                  <img 
                    src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                    alt={user?.name || user?.email?.split("@")[0] || "User"}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">
                    {user?.name || user?.email?.split("@")[0] || "User"}
                  </h3>
                  <p className="text-sm text-[#B3BDCC]">Manage your account details</p>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-[#F8FAFC] mb-1">Email</p>
                <p className="text-sm text-[#6B7280]">{user?.email || "Not available"}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-[#F8FAFC] mb-1">Display Name</p>
                <p className="text-sm text-[#6B7280]">
                  {user?.name || user?.email?.split("@")[0] || "User"}
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-[#F8FAFC] mb-1">Email Verified</p>
                <p className="text-sm text-[#6B7280]">
                  {user?.emailVerified !== undefined ? (user.emailVerified ? "Yes" : "No") : "Unknown"}
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-[#F8FAFC] mb-1">Account ID</p>
                <p className="text-xs text-[#6B7280] font-mono break-all">
                  {user?.uid || "Not available"}
                </p>
              </div>
            </div>

            {/* Sign Out Button */}
            <div className="p-6 pt-0">
              <Button 
                variant="outline" 
                className="w-full border-[#222F44] bg-[#0B111E] text-[#F8FAFC] hover:bg-[#1A2332]"
                onClick={handleLogout}
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
