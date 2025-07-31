import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdDevices } from "react-icons/md";

// Use string paths for images in public/temp
const tempImages = [
  "/temp/Animals & Coins.png",
  "/temp/Bingo Cash.png",
  "/temp/Dice Dreams.png",
  "/temp/Game of Vampires.png",
  "/temp/Idle Bank Tycoon_ Money Game.png",
  "/temp/Match Masters.png",
  "/temp/Monopoly Go!.png",
];

const bestOffers = [
  { image: tempImages[0], title: "Animals & Coins", reward: "$383.77", currency: "USD" },
  { image: tempImages[5], title: "Match Masters", reward: "$286.57", currency: "USD" },
  { image: tempImages[3], title: "Game of Vampires", reward: "$809.52", currency: "USD" },
  { image: tempImages[2], title: "Dice Dreams", reward: "$303.40", currency: "USD" },
  { image: tempImages[1], title: "Bingo Cash", reward: "$550.80", currency: "USD" },
  { image: tempImages[6], title: "Monopoly Go!", reward: "$238.13", currency: "USD" },
  { image: tempImages[4], title: "Idle Bank Tycoon", reward: "$1019.58", currency: "USD" },
];

const myOffers = [
  { image: tempImages[1], title: "QA Challenge", reward: "$12.00", currency: "USD" },
  { image: tempImages[0], title: "UI Bug Bash", reward: "$8.50", currency: "USD" },
  { image: tempImages[2], title: "Regression Run", reward: "$15.00", currency: "USD" },
  { image: tempImages[6], title: "Performance Test", reward: "$20.00", currency: "USD" },
  { image: tempImages[5], title: "Security Sweep", reward: "$18.00", currency: "USD" },
];

const surveys = [
  { duration: "12 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 110, bonus: "+25%" },
  { duration: "11 min", oldReward: "$1.50", reward: "$1.87", rating: "2.5/5", votes: 140, bonus: "+25%" },
  { duration: "37 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 17, bonus: "+25%" },
  { duration: "22 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 5, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.49", reward: "$0.61", rating: "2.5/5", votes: 28, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.15", reward: "$0.19", rating: "2.5/5", votes: 110, bonus: "+25%" },
  { duration: "26 min", oldReward: "$0.28", reward: "$0.35", rating: "3/5", votes: 89, bonus: "+25%" },
  { duration: "5 min", oldReward: "$0.03", reward: "$0.04", rating: "5/5", votes: 110, bonus: "+25%" },
  { duration: "16 min", oldReward: "$0.49", reward: "$0.61", rating: "2/5", votes: 100, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.14", reward: "$0.17", rating: "4/5", votes: 7, bonus: "+25%" },
  { duration: "21 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 18, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.18", reward: "$0.23", rating: "3/5", votes: 110, bonus: "+25%" },
];

const getCardsPerView = () => {
if (window.innerWidth >= 1980) return 8;
  if (window.innerWidth >= 1380) return 6;
  if (window.innerWidth >= 1024) return 5;
  if (window.innerWidth >= 768) return 4;
  return 2;
};

const Earn = () => {
  const [activeTab, setActiveTab] = useState("best");
  const [startIdx, setStartIdx] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offers = activeTab === "best" ? bestOffers : myOffers;
  const visible = offers.slice(startIdx, startIdx + cardsPerView);
  const canPrev = startIdx > 0;
  const canNext = startIdx + cardsPerView < offers.length;

  useEffect(() => {
    setStartIdx(0); // Reset carousel when tab changes
  }, [activeTab, cardsPerView]);

  return (
    <main className="flex-1 px-2 py-4 md:px-6 md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl">
      {/* Header & Carousel Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-base md:text-xl font-bold text-gray-800">Featured Offers</h2>
          <button className="ml-2 px-2 md:px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium flex items-center gap-1 border border-gray-200">
            <MdDevices className="text-base" />
            <span className="hidden sm:inline">Change Devices</span>
            <HiOutlineDeviceMobile className="text-base" />
          </button>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            className="rounded-full bg-[#e0ece7] w-8 h-8 flex items-center justify-center text-gray-500 border border-transparent hover:border-green-400 transition disabled:opacity-40"
            onClick={() => setStartIdx(Math.max(0, startIdx - cardsPerView))}
            disabled={!canPrev}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            className="rounded-full bg-[#e0ece7] w-8 h-8 flex items-center justify-center text-gray-500 border border-transparent hover:border-green-400 transition disabled:opacity-40"
            onClick={() => setStartIdx(Math.min(offers.length - cardsPerView, startIdx + cardsPerView))}
            disabled={!canNext}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 md:gap-4 mb-2 mt-2 flex-wrap">
        <button
          className={`relative px-2 pb-1 text-xs md:text-sm font-semibold border-b-2 bg-transparent ${activeTab === "best" ? "text-green-700 border-green-600" : "text-gray-700 border-transparent"}`}
          onClick={() => setActiveTab("best")}
        >
          Best Offers
        </button>
        <button
          className={`relative px-2 pb-1 text-xs md:text-sm font-semibold bg-transparent border-b-2 ${activeTab === "my" ? "text-green-700 border-green-600" : "text-gray-700 border-transparent"}`}
          onClick={() => setActiveTab("my")}
        >
          My Offers
          <span className="ml-1 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-bold align-middle">{myOffers.length}</span>
        </button>
      </div>
      {/* Offers Carousel */}
      <div className="flex gap-2 md:gap-4 w-full mt-6 mb-6 overflow-x-auto">
        {visible.map((offer, idx) => (
          <div key={offer.title} className="bg-white rounded-xl shadow-sm p-2 flex flex-col items-center min-w-[100px] max-w-[120px] flex-1 border border-gray-200">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 mb-2">
              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-xs text-center mb-1 whitespace-nowrap">{offer.title}</div>
            <div className="text-green-700 font-bold text-xs md:text-sm mb-0 leading-tight">{offer.reward}</div>
            <div className="text-gray-400 text-xs font-medium">{offer.currency}</div>
          </div>
        ))}
      </div>
      {/* Featured Surveys Grid */}
      <div>
        <h3 className="text-base md:text-xl font-bold mb-4">Featured Surveys</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 w-full">
          {surveys.map((survey, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-2 flex flex-col gap-2 border border-gray-100">
              <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold mb-1">
                <span className="inline-block align-middle" style={{display:'flex',alignItems:'center'}}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{display:'block'}}>
                    <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" fill="white" />
                    <path stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" d="M12 7v5l3 3" />
                  </svg>
                </span>
                <span>{survey.duration}</span>
              </div>
              <div className="flex flex-col items-start mb-1">
                <span className="line-through text-xs text-gray-400">{survey.oldReward}</span>
                <span className="text-2xl font-bold text-green-700">{survey.reward} <span className="text-base font-normal text-gray-500">USD</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-yellow-500 font-bold">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#FFC107" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  {survey.rating}
                </span>
                <span className="text-gray-400">({survey.votes})</span>
                <span className="ml-auto px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-bold">{survey.bonus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Earn;