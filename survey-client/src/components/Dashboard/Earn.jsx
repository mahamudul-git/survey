import React, { useState, useRef } from "react";
import FeaturedTests from "./FeaturedTests";
import Surveys from "./Surveys";
import Tests from "./Tests";

const TAB_LIST = [
  { name: "Featured" },
  { name: "Survey", badge: 25 },
  { name: "Tasks", badge: 10 },
  { name: "Testing", badge: 5 },
];

const Earn = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const handleSeeMoreClick = () => setActiveTab("Survey");

  // Carousel logic for tabs
  const tabRef = useRef();
  const dragState = useRef({ dragging: false, startX: 0, lastX: 0, offset: 0, scrollLeft: 0 });

  // Touch/drag support
  const handleTabTouchStart = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.touches[0].clientX;
    dragState.current.lastX = e.touches[0].clientX;
    dragState.current.scrollLeft = tabRef.current.scrollLeft;
  };
  const handleTabTouchMove = (e) => {
    if (!dragState.current.dragging) return;
    const delta = dragState.current.startX - e.touches[0].clientX;
    tabRef.current.scrollLeft = dragState.current.scrollLeft + delta;
    dragState.current.lastX = e.touches[0].clientX;
  };
  const handleTabTouchEnd = () => {
    dragState.current.dragging = false;
  };
  // Mouse drag support
  const handleTabMouseDown = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.clientX;
    dragState.current.lastX = e.clientX;
    dragState.current.scrollLeft = tabRef.current.scrollLeft;
    window.addEventListener('mousemove', handleTabMouseMove);
    window.addEventListener('mouseup', handleTabMouseUp);
  };
  const handleTabMouseMove = (e) => {
    if (!dragState.current.dragging) return;
    const delta = dragState.current.startX - e.clientX;
    tabRef.current.scrollLeft = dragState.current.scrollLeft + delta;
    dragState.current.lastX = e.clientX;
  };
  const handleTabMouseUp = () => {
    dragState.current.dragging = false;
    window.removeEventListener('mousemove', handleTabMouseMove);
    window.removeEventListener('mouseup', handleTabMouseUp);
  };

  return (
    <main className="flex-1 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl">
      {/* Tabs Bar */}
      <div className="px-5 py-6 md:px-6 md:py-8">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">Earn With Us</h2>
          <div
            ref={tabRef}
            className="flex items-center gap-3 border-b border-[#9767E4]/10 overflow-x-auto whitespace-nowrap hide-scrollbar pb-3"
            onTouchStart={handleTabTouchStart}
            onTouchMove={handleTabTouchMove}
            onTouchEnd={handleTabTouchEnd}
            onMouseDown={handleTabMouseDown}
            style={{ cursor: dragState.current.dragging ? 'grabbing' : 'grab', userSelect: 'none' }}
          >
            {TAB_LIST.map((tab) => (
              <button
                key={tab.name}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-2 rounded-full border
                  ${activeTab === tab.name 
                    ? "bg-gradient-to-r from-[#9767E4]/10 to-[#26B2F2]/10 border-[#9767E4]/20 text-[#9767E4]" 
                    : "text-[#F8FAFC]/70 hover:bg-gradient-to-r hover:from-[#9767E4]/5 hover:to-[#26B2F2]/5 hover:border-[#9767E4]/10 hover:text-[#9767E4] border-transparent"
                  }
                `}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
                {tab.badge !== undefined && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-[#26B2F2]/20 to-[#9767E4]/20 text-[#26B2F2] rounded-full border border-[#26B2F2]/30">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "Featured" && (
            <>
              <FeaturedTests />
              <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#F8FAFC]">Featured Surveys</h3>
                  <button
                    className="flex items-center border border-[#9767E4]/20 rounded-full px-4 py-2 font-semibold text-sm text-[#9767E4] bg-gradient-to-r from-[#9767E4]/5 to-[#26B2F2]/5 hover:from-[#9767E4]/10 hover:to-[#26B2F2]/10 hover:border-[#9767E4]/30 transition-all duration-300"
                    onClick={handleSeeMoreClick}>
                    See More
                  </button>
                </div>
                <Surveys limit={8} />
              </div>
            </>
          )}
          {activeTab === "Survey" && <Surveys />}
          {activeTab === "Tasks" && (
            <div className="py-16 text-center">
              <div className="text-[#F8FAFC]/60 text-sm mb-2">No tasks available yet.</div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-xl flex items-center justify-center mx-auto border border-[#9767E4]/20">
                <svg className="w-8 h-8 text-[#9767E4]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
          )}
          {activeTab === "Testing" && <Tests />}
        </div>
      </div>
    </main>
  );
};

export default Earn;