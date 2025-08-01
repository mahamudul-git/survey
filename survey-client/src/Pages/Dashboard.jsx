import { FaHome,FaCoins, FaClipboardList, FaTag, FaUserCircle, FaBars } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Home from "../components/Dashboard/Home";
import MyInsight from "../components/Dashboard/MyInsight";
import Earn from "../components/Dashboard/Earn";
import Account from "../components/Dashboard/Account";
import AccountSettings from "../components/Dashboard/AccountSettings";
import logo2 from "../../public/logo2.png";
import { useNavigate, Outlet } from "react-router-dom";
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
  { label: "My Insight", icon: <FaClipboardList /> },
  { label: "Earn", icon: <FaCoins /> },
  { label: "Account", icon: <FaUserCircle /> },
];

const statistics = [
  "Total earnings",
  "Surveys Completed",
  "Rewards Redeemed",
  "Tests Activities",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [showLevelPopup, setShowLevelPopup] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);
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

  // Listen for route change to /dashboard/account-settings
  useEffect(() => {
    if (window.location.pathname === "/dashboard/account-settings") {
      setShowAccountSettings(true);
    } else {
      setShowAccountSettings(false);
    }
  }, [window.location.pathname]);

  return (
    <div className="flex min-h-screen bg-gray-50 relative min-w-0">
      {/* Fixed Header with both hamburger icons */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white shadow flex items-center justify-between px-4 py-3 md:hidden">
        <button
          onClick={handleLeftOpen}
          aria-label="Open menu"
          className="bg-white rounded-full p-2 shadow"
        >
          <FaBars size={22} />
        </button>
        <button
          onClick={handleRightOpen}
          aria-label="Open account"
          className="bg-white rounded-full p-2 shadow"
        >
          <FaUserCircle size={22} />
        </button>
      </header>
      {/* Overlay for left or right sidebar on mobile */}
      {(leftOpen || rightOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"></div>
      )}
      {/* Sidebar - sticky/offcanvas */}
      <aside
        ref={leftSidebarRef}
        className={`fixed md:sticky top-0 left-0 w-64 bg-white border-r flex flex-col h-screen md:h-screen min-h-screen py-6 px-3 md:py-8 md:px-6 z-40 transition-transform duration-300 md:translate-x-0 ${leftOpen ? 'translate-x-0' : '-translate-x-full'} md:block`}
        style={{ maxWidth: '16rem' }}
      >
        <div className="flex items-center mb-10 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo2} alt="TopSurveys Logo" />
        </div>
        <nav className="flex flex-col gap-2">
          {menu.map((item, idx) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-2 rounded-full text-lg font-semibold transition ${activeTab === item.label.toLowerCase() ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-green-50"}`}
              onClick={() => {
                setActiveTab(item.label.toLowerCase());
                setLeftOpen(false);
                navigate('/dashboard');
              }}
            >
              {item.icon}
              <span className="tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="inline md:hidden mt-auto flex flex-col">
          <button
            className="flex items-center gap-3 px-4 py-2 mb-2 rounded-lg text-lg font-semibold text-red-600 hover:bg-red-50 transition border border-red-100 w-full"
            onClick={() => {/* TODO: Implement logout logic here */ }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" /></svg>
            <span className="tracking-tight">Logout</span>
          </button>
        </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-stretch relative overflow-hidden bg-white mt-[56px] md:mt-0 min-w-0">
{/* 56px header height for mobile */}
        <div className="px-3 py-6 md:px-4 md:py-6">
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
            if (activeTab === "myinsight") return <MyInsight />;
            if (activeTab === "earn") return <Earn />;
            if (activeTab === "account") return <Account />;
            return null;
          })()}
        </div>
      </div>
      {/* Right Sidebar - sticky/offcanvas */}
      <aside
        ref={rightSidebarRef}
        className={`
    fixed md:sticky top-0 right-0 h-full w-[320px] bg-white border-l flex flex-col
    py-6 px-3 md:py-8 md:px-6 z-40 transition-transform duration-300
    ${rightOpen ? 'translate-x-0' : 'translate-x-full'}
    ${activeTab === "account" ? 'md:hidden' : 'md:translate-x-0 md:block'}
  `}
        style={{ maxWidth: '20rem' }}
      >
        {/* Balance Card - exact reference design, smaller width */}
        <div className="relative rounded-2xl overflow-hidden mb-6 bg-[#0a5c4c] mx-auto w-[270px]" style={{ minHeight: '170px' }}>
          <img src="/Background.png" alt="bg" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ zIndex: 1, opacity: 1 }} />
          <div className="relative z-10 p-4 flex flex-col h-full min-h-[140px] justify-between">
            {/* 1 Level button - top right corner */}
            <button className="absolute top-4 right-4 flex items-center gap-2 rounded-full px-4 py-1 text-white font-semibold text-sm shadow-lg" style={{ background: 'rgba(29, 79, 216, 0.54)', backdropFilter: 'blur(5px) saturate(180%)', WebkitBackdropFilter: 'blur(5px) saturate(180%)' }} onClick={() => setShowLevelPopup(true)}>
              <img src="/lavel.svg" alt="Level" className="w-5 h-5" />
              1 Level
            </button>
            <div className="mb-5">
              <div className="text-white text-sm font-semibold">Balance:</div>
              <div className="text-white text-4xl mt-3 font-bold leading-tight mb-0">
                <img src="/tokenwhite.svg" alt="SSC" className="w-10 h-10 mr-1 inline-block" />
                {135}
              </div>
            </div>
            <div className="flex items-center mt-3 justify-between w-full mb-2">
              <span className="text-white text-xs font-semibold">
                <img src="/tokenwhite.svg" alt="SSC" className="w-4 h-4 mr-1 inline-block" />
                {135} / 
                <img src="/tokenwhite.svg" alt="SSC" className="w-4 h-4 mr-1 ml-1 inline-block" /> 500
              </span>
              <button className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow font-semibold text-[#0a5c4c] text-[13px]  border border-gray-200">
                <span className="inline-block w-5 h-5 flex items-center justify-center">
                  <img src="/cashout.svg" alt="Cashout" className="w-5 h-5" />
                </span>
                Cashout
              </button>
            </div>
            <div className="w-full h-2 rounded-full bg-[#0a5c4c] overflow-hidden">
              <div className="h-full rounded-full bg-[#b2d3c7]" style={{ width: '27%' }}></div>
            </div>
          </div>
        </div>
        {/* Account statistics - always visible */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-700 mb-3 tracking-tight">Account statistics</h4>
          <div className="flex flex-col gap-3">
            {/* Total earnings */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="3" fill="#fff" stroke="#0a5c4c" strokeWidth="2" /><circle cx="12" cy="12" r="2" fill="#0a5c4c" /></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">
                  <img src="/token.svg" alt="SSC" className="w-4 h-4 inline-block" />
                  {135}
                  <span className="text-xs text-gray-500 ml-1 font-semibold">SSC</span>
                </span>
                <span className="text-xs text-gray-500">Total earnings</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
            {/* Surveys Completed */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#0a5c4c" strokeWidth="2" /><path d="M8 12l2 2 4-4" stroke="#0a5c4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">2</span>
                <span className="text-xs text-gray-500">Surveys Completed</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
            {/* Rewards Redeemed */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="3" fill="#fff" stroke="#0a5c4c" strokeWidth="2" /><circle cx="12" cy="12" r="2" fill="#0a5c4c" /></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">0</span>
                <span className="text-xs text-gray-500">Rewards Redeemed</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
            {/* Tests Activities */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#0a5c4c" strokeWidth="2" /><path d="M12 8v4l3 3" stroke="#0a5c4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">Tests activities</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
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