import React, { useState } from "react";
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

  return (
    <main className="flex-1 w-full max-w-full bg-[#f7f7f7] rounded-3xl">
      {/* Tabs Bar */}
      <div className="px-5 py-6 md:px-2 md:px-[20px] md:py-8">
        <div className="mb-2">
          <h2 className="text-base md:text-xl font-bold mb-3 text-gray-800">Swap Survey</h2>
          <div className="flex items-center gap-2 border-b border-gray-200">
            {TAB_LIST.map((tab) => (
              <button
                key={tab.name}
                className={`relative px-2 py-1 text-sm font-medium transition flex items-center gap-1
                  ${activeTab === tab.name ? "text-green-900" : "text-gray-600"}
                  ${activeTab === tab.name ? "border-b-2 border-green-700" : ""}
                `}
                onClick={() => setActiveTab(tab.name)}
                style={{ background: "transparent" }}
              >
                {tab.name}
                {tab.badge !== undefined && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-900">
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
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Featured Surveys</h3>
                  <button className="flex items-center border border-[#e5e7eb] rounded-full px-4 sm:px-4 py-1 sm:py-1 font-semibold text-xs sm:text-base text-[#222] bg-transparent hover:bg-green-50 transition"  onClick={handleSeeMoreClick} >
                    See More
                  </button>
                </div>
                <Surveys limit={8} />
              </div>
            </>
          )}
          {activeTab === "Survey" && <Surveys />}
          {activeTab === "Tasks" && (
            <div className="py-10 text-center text-gray-400 text-sm">No tasks available yet.</div>
          )}
          {activeTab === "Testing" && <Tests />}
        </div>
      </div>
    </main>
  );
};

export default Earn;