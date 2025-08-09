import { FaHome, FaCoins, FaClipboardList, FaTag, FaUserCircle, FaBars, FaSignOutAlt } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

// Icon component for the logo
const Icon = ({ path, className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);
import Home from "../components/Dashboard/Home";              
import Earn from "../components/Dashboard/Earn";
import Account from "../components/Dashboard/Account";
import AccountSettings from "../components/Dashboard/AccountSettings";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import LevelPopup from "../components/Dashboard/LevelPopup";
import ProfileSetup from "../components/Dashboard/ProfileSetup";
import ChangeEmail from "../components/Dashboard/ChangeEmail";
import TwoFactorVerification from "../components/Dashboard/TwoFactorVerification";
import ChangePassword from "../components/Dashboard/ChangePassword";
import DeleteAccount from "../components/Dashboard/DeleteAccount";
import SurveysCompleted from "../components/Dashboard/SurveysCompleted";

const menu = [
  { label: "Home", icon: <FaHome /> },
  { label: "Earn", icon: <FaCoins /> },
  { label: "Account", icon: <FaUserCircle /> },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [showLevelPopup, setShowLevelPopup] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const leftSidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);

  // Only one sidebar open at a time
  const handleLeftOpen = () => {
    setLeftOpen(true);
    setRightOpen(false);
  };
  const handleRightOpen = () => {
    setRightOpen(true);
    setLeftOpen(false);
  };

  // Click outside to close
  useEffect(() => {
    function handleClick(event) {
      if (leftOpen && leftSidebarRef.current && !leftSidebarRef.current.contains(event.target)) {
        setLeftOpen(false);
      }
      if (rightOpen && rightSidebarRef.current && !rightSidebarRef.current.contains(event.target)) {
        setRightOpen(false);
      }
    }
    if (leftOpen || rightOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [leftOpen, rightOpen]);

  return (
    <div className="flex min-h-screen bg-[#0B111E] relative min-w-0 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[80px] animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[60px] animate-pulse animation-delay-400"></div>
      </div>

      {/* Fixed Header with hamburger icons and centered logo */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#0E1525]/70 backdrop-blur-lg border-b border-[#9767E4]/10 flex items-center justify-between px-4 py-3 md:hidden">
        <button
          onClick={handleLeftOpen}
          aria-label="Open menu"
          className="bg-gradient-to-r from-[#9767E4]/10 to-[#26B2F2]/10 border border-[#9767E4]/20 rounded-full p-3 hover:from-[#9767E4]/20 hover:to-[#26B2F2]/20 transition-all duration-300"
        >
          <FaBars size={20} className="text-[#9767E4]" />
        </button>
        
        {/* Switch to Publisher Button */}
        <button
          onClick={() => navigate("/user-dashboard")}
          className="border border-[#9767E4]/30 text-[#9767E4] hover:bg-[#9767E4]/10 bg-transparent px-3 py-[7px] rounded-full text-xs font-medium transition-colors duration-200 flex items-center space-x-1"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Switch to Publisher</span>
        </button>
        
        {/* Centered Logo */}
        <Link to="/user-dashboard" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
          <div className="flex items-center">
            <Icon 
              path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              className="w-6 h-6 text-blue-400" 
            />
            <span className="text-lg font-bold ml-2">
              <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                SurveySight
              </span>
            </span>
          </div>
        </Link>
        
        <button
          onClick={handleRightOpen}
          aria-label="Open account"
          className="bg-gradient-to-r from-[#C084FC]/10 to-[#9767E4]/10 border border-[#C084FC]/20 rounded-full p-3 hover:from-[#C084FC]/20 hover:to-[#9767E4]/20 transition-all duration-300"
        >
          <FaUserCircle size={20} className="text-[#C084FC]" />
        </button>
      </header>
      {/* Overlay for left or right sidebar on mobile */}
      {(leftOpen || rightOpen) && (
        <div className="fixed inset-0 bg-[#0B111E]/50 backdrop-blur-sm z-30 md:hidden"></div>
      )}

      {/* Left Sidebar - Fixed Position */}
      <aside
        ref={leftSidebarRef}
        className={`fixed top-0 left-0 w-64 bg-[#0E1525]/80 backdrop-blur-xl border-r border-[#9767E4]/10 flex flex-col h-screen py-6 px-3 md:py-8 md:px-6 z-40 transition-all duration-300 ${leftOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        style={{ maxWidth: '16rem' }}
      >
        <Link to="/user-dashboard" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 mb-10">
          <div className="flex items-center">
            <Icon 
              path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              className="w-6 h-6 text-blue-400" 
            />
            <span className="text-lg font-bold ml-2">
              <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                SurveySight
              </span>
            </span>
          </div>
        </Link>
        
        {/* Switch to Publisher Button for Desktop */}
        <div className="hidden md:block mb-6">
          <button
            onClick={() => navigate("/user-dashboard")}
            className="w-full border border-[#9767E4]/30 text-[#9767E4] hover:bg-[#9767E4]/10 bg-transparent px-4 py-3 rounded-full text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>Switch to Publisher</span>
          </button>
        </div>
        
        <nav className="flex flex-col gap-3">
          {menu.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-full text-base font-semibold transition-all duration-300 group ${
                activeTab === item.label.toLowerCase() 
                  ? "bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 border border-[#9767E4]/30 text-[#9767E4]" 
                  : "text-[#F8FAFC]/70 hover:bg-gradient-to-r hover:from-[#9767E4]/10 hover:to-[#26B2F2]/10 hover:border hover:border-[#9767E4]/20 hover:text-[#9767E4] border border-transparent"
              }`}
              onClick={() => {
                setActiveTab(item.label.toLowerCase());
                setLeftOpen(false);
                navigate('/dashboard');
              }}
            >
              <span className={`transition-all duration-300 ${activeTab === item.label.toLowerCase() ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              <span className="tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="md:hidden mt-auto flex flex-col">
          <button
            className="flex items-center gap-3 px-4 py-3 mb-2 rounded-full text-base font-semibold text-red-400 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300 border border-red-500/20 w-full group backdrop-blur-sm"
            onClick={() => {/* TODO: Implement logout logic here */ }}
          >
            <FaSignOutAlt className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="tracking-tight">Logout</span>
          </button>
        </div>
      </aside>
      {/* Main Content Area - with fixed margins for sidebars */}
      <div className="flex-1 flex flex-col items-stretch relative overflow-hidden bg-transparent ml-0 md:ml-64 mr-0 md:mr-80 mt-[56px] md:mt-0 min-w-0">
        {/* 56px header height for mobile, ml-64 (left sidebar width), mr-80 (right sidebar width) */}
        <div className="px-3 py-6 md:px-4 md:py-6 relative z-10">
          {(() => {
            const path = window.location.pathname;
            if (path === "/dashboard/account-settings") return <AccountSettings />;
            if (path === "/dashboard/profile-setup") return <ProfileSetup />;
            if (path === "/dashboard/change-email") return <ChangeEmail />;
            if (path === "/dashboard/two-factor") return <TwoFactorVerification />;
            if (path === "/dashboard/change-password") return <ChangePassword />;
            if (path === "/dashboard/delete-account") return <DeleteAccount />;
            if (path === "/dashboard/surveys-completed") return <SurveysCompleted />;
            if (activeTab === "home") return <Home />;
            if (activeTab === "earn") return <Earn />;
            if (activeTab === "account") return <Account />;
            return null;
          })()}
        </div>
      </div>
      {/* Right Sidebar - Fixed Position */}
      <aside
        ref={rightSidebarRef}
        className={`
          fixed top-0 right-0 h-screen w-[320px] bg-[#0E1525]/80 backdrop-blur-xl border-l border-[#C084FC]/10 flex flex-col
          py-6 px-3 md:py-8 md:px-6 z-40 transition-all duration-300
          ${rightOpen ? 'translate-x-0' : 'translate-x-full'}
          ${activeTab === "account" ? 'md:hidden' : 'md:translate-x-0'}
        `}
        style={{ maxWidth: '20rem' }}
      >
        {/* Balance Card - exact reference design, smaller width */}
        <div className="relative rounded-2xl overflow-hidden mb-6 bg-[#0a5c4c] mx-auto w-[270px]" style={{ minHeight: '170px' }}>
          <img src="/Background.png" alt="bg" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ zIndex: 1, opacity: 1 }} />
          <div className="relative z-10 p-4 flex flex-col h-full min-h-[140px] justify-between">
            {/* 1 Level button - top right corner */}
            <button className="absolute top-4 right-4 flex items-center gap-2 rounded-full px-4 py-1 text-white font-semibold text-sm" style={{ background: 'rgba(29, 79, 216, 0.54)', backdropFilter: 'blur(5px) saturate(180%)', WebkitBackdropFilter: 'blur(5px) saturate(180%)' }} onClick={() => setShowLevelPopup(true)}>
              <img src="/lavel.svg" alt="Level" className="w-5 h-5" />
              0 Level
            </button>
            
            <div className="mb-4">
              <div className="text-white/90 text-sm font-semibold mb-2">Balance:</div>
              <div className="text-white text-4xl font-bold leading-tight mb-0 flex items-center">
                <img src="/tokenwhite.svg" alt="SSC" className="w-10 h-10 mr-2" />
                {0.00}
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-white/90 text-xs font-semibold flex items-center">
                <img src="/tokenwhite.svg" alt="SSC" className="w-4 h-4 mr-1" />
                {0} / 
                <img src="/tokenwhite.svg" alt="SSC" className="w-4 h-4 mr-1 ml-1" /> 500
              </span>
              <button className="flex items-center gap-2 bg-white/95 hover:bg-white rounded-full px-4 py-2 font-semibold text-[#000000] text-sm border border-white/20 transition-all duration-300 hover:shadow-xl group">
                <img src="/cashout.svg" alt="Cashout" className="w-5 h-5 transition-opacity duration-300" />
                Cashout
              </button>
            </div>
            
            <div className="w-full h-2 rounded-full bg-[#0E1525]/40 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-white/80 to-white/60 transition-all duration-500" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>

        {/* Enhanced Account statistics */}
        <div className="mb-6">
          <h4 className="font-bold text-[#F8FAFC] mb-4 tracking-tight text-lg">Account Statistics</h4>
          <div className="flex flex-col gap-3">
            {/* Total earnings */}
            <div className="flex items-center bg-[#0E1525]/60 border border-[#9767E4]/20 rounded-xl px-4 py-4 shadow-lg shadow-[#0B111E]/20 backdrop-blur-sm hover:bg-[#0E1525]/80 hover:border-[#9767E4]/30 transition-all duration-300 group cursor-pointer">
              <span className="w-10 h-10 bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 border border-[#9767E4]/30 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="7" width="16" height="10" rx="3" fill="none" stroke="#9767E4" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" fill="#9767E4" />
                </svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-[#F8FAFC] flex items-center">
                  <img src="/token.svg" alt="SSC" className="w-4 h-4 mr-1" />
                  {0}
                  <span className="text-xs text-[#F8FAFC]/60 ml-2 font-semibold">SSC</span>
                </span>
                <span className="text-xs text-[#F8FAFC]/60">Total earnings</span>
              </div>
              <span className="ml-auto text-[#9767E4]/60 group-hover:text-[#9767E4] transition-colors duration-300">
                <FiChevronRight size={20} />
              </span>
            </div>

            {/* Surveys Completed */}
            <div className="flex items-center bg-[#0E1525]/60 border border-[#26B2F2]/20 rounded-xl px-4 py-4 shadow-lg shadow-[#0B111E]/20 backdrop-blur-sm hover:bg-[#0E1525]/80 hover:border-[#26B2F2]/30 transition-all duration-300 group cursor-pointer">
              <span className="w-10 h-10 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 border border-[#26B2F2]/30 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#26B2F2" strokeWidth="2" />
                  <path d="M8 12l2 2 4-4" stroke="#26B2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-[#F8FAFC]">0</span>
                <span className="text-xs text-[#F8FAFC]/60">Surveys Completed</span>
              </div>
              <span className="ml-auto text-[#26B2F2]/60 group-hover:text-[#26B2F2] transition-colors duration-300">
                <FiChevronRight size={20} />
              </span>
            </div>

            {/* Rewards Redeemed */}
            <div className="flex items-center bg-[#0E1525]/60 border border-[#C084FC]/20 rounded-xl px-4 py-4 shadow-lg shadow-[#0B111E]/20 backdrop-blur-sm hover:bg-[#0E1525]/80 hover:border-[#C084FC]/30 transition-all duration-300 group cursor-pointer">
              <span className="w-10 h-10 bg-gradient-to-r from-[#C084FC]/20 to-[#9767E4]/20 border border-[#C084FC]/30 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="7" width="16" height="10" rx="3" fill="none" stroke="#C084FC" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" fill="#C084FC" />
                </svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-[#F8FAFC]">0</span>
                <span className="text-xs text-[#F8FAFC]/60">Rewards Redeemed</span>
              </div>
              <span className="ml-auto text-[#C084FC]/60 group-hover:text-[#C084FC] transition-colors duration-300">
                <FiChevronRight size={20} />
              </span>
            </div>

            {/* Tests Activities */}
            <div className="flex items-center bg-[#0E1525]/60 border border-[#9767E4]/20 rounded-xl px-4 py-4 shadow-lg shadow-[#0B111E]/20 backdrop-blur-sm hover:bg-[#0E1525]/80 hover:border-[#9767E4]/30 transition-all duration-300 group cursor-pointer">
              <span className="w-10 h-10 bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 border border-[#9767E4]/30 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#9767E4" strokeWidth="2" />
                  <path d="M12 8v4l3 3" stroke="#9767E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-[#F8FAFC]">Tests activities</span>
              </div>
              <span className="ml-auto text-[#9767E4]/60 group-hover:text-[#9767E4] transition-colors duration-300">
                <FiChevronRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </aside>
      {/* Level Popup */}
      {showLevelPopup && (
        <LevelPopup onClose={() => setShowLevelPopup(false)} />
      )}
    </div>
  );
};

export default Dashboard;