import { FaGift, FaClipboardList, FaTag, FaUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Earn from "../components/Dashboard/Earn";
import logo2 from "../../public/logo2.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LevelPopup from "../components/Dashboard/LevelPopup";

const menu = [
  { label: "Earn", icon: <FaGift />, active: true },
  { label: "Surveys", icon: <FaClipboardList /> },
  { label: "Offers", icon: <FaTag /> },
  { label: "Account", icon: <FaUserCircle /> },
];

const statistics = [
  "Total earnings",
  "Surveys Completed",
  "Rewards Redeemed",
  "Offers Activities",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [showLevelPopup, setShowLevelPopup] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - sticky */}
      <aside className="sticky top-0 h-screen w-full max-w-xs md:w-64 bg-white border-r flex flex-col py-6 px-3 md:py-8 md:px-6 z-20">
        <div className="flex items-center mb-10 cursor-pointer" onClick={() => navigate("/") }>
          <img src={logo2} alt="TopSurveys Logo"/>
        </div>
        <nav className="flex flex-col gap-2">
          {menu.map((item, idx) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-semibold transition ${item.active ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-green-50"}`}
            >
              {item.icon}
              <span className="tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-stretch relative overflow-hidden">
        <div className="bg-white px-5 py-5">
          <Earn />
        </div>
      </div>

      {/* Right Sidebar - sticky */}
      <aside className="sticky top-0 h-screen w-full max-w-xs md:w-[320px] bg-white border-l flex flex-col py-6 px-3 md:py-8 md:px-6 z-20">
        {/* Balance Card - exact reference design, smaller width */}
        <div className="relative rounded-2xl overflow-hidden mb-6 bg-[#0a5c4c] mx-auto w-[270px]" style={{minHeight:'170px'}}>
          <img src="/Background.png" alt="bg" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{zIndex:1, opacity:1}} />
          <div className="relative z-10 p-4 flex flex-col h-full min-h-[140px] justify-between">
            {/* 1 Level button - top right corner */}
            <button className="absolute top-4 right-4 flex items-center gap-2 rounded-full px-4 py-1 text-white font-semibold text-sm shadow-lg"style={{ background: 'rgba(29, 79, 216, 0.54)', backdropFilter: 'blur(5px) saturate(180%)', WebkitBackdropFilter: 'blur(5px) saturate(180%)'}} onClick={() => setShowLevelPopup(true)}>
              <img src="/lavel.svg" alt="Level" className="w-5 h-5" />
              1 Level
            </button>
            <div>
              <div className="text-white text-sm font-semibold">Balance:</div>
              <div className="text-white text-3xl font-bold leading-tight mb-0">$ 1.35</div>
              <div className="text-white text-lg font-bold">USD</div>
            </div>
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-white text-xs font-semibold">$ 1.35 USD / $ 5 USD</span>
              <button className="flex items-center gap-1 bg-white rounded-lg px-3 py-1 shadow font-semibold text-[#0a5c4c] text-xs border border-gray-200">
                <span className="inline-block w-5 h-5 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="3" fill="#fff" stroke="#0a5c4c" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="#0a5c4c"/></svg>
                </span>
                Cashout
              </button>
            </div>
            <div className="w-full h-2 rounded-full bg-[#0a5c4c] overflow-hidden">
              <div className="h-full rounded-full bg-[#b2d3c7]" style={{width: '27%'}}></div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-bold text-gray-700 mb-3 tracking-tight">Account statistics</h4>
          <div className="flex flex-col gap-3">
            {/* Total earnings */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="3" fill="#fff" stroke="#0a5c4c" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="#0a5c4c"/></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">$ 1.35 USD</span>
                <span className="text-xs text-gray-500">Total earnings</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            {/* Surveys Completed */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#0a5c4c" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="#0a5c4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">2</span>
                <span className="text-xs text-gray-500">Surveys Completed</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            {/* Rewards Redeemed */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="3" fill="#fff" stroke="#0a5c4c" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="#0a5c4c"/></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">0</span>
                <span className="text-xs text-gray-500">Rewards Redeemed</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            {/* Offers Activities */}
            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <span className="inline-block w-8 h-8 bg-[#eaf7f3] rounded-lg flex items-center justify-center mr-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#0a5c4c" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#0a5c4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-lg font-bold text-gray-900">Offers activities</span>
              </div>
              <span className="ml-auto text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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