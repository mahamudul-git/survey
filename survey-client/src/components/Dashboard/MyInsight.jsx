import React, { useState } from "react";
import { FaChartLine, FaClock, FaCalendarAlt, FaTrophy, FaCoins, FaEye, FaCheckCircle, FaFire } from "react-icons/fa";

const MyInsight = () => {
  const [timeframe, setTimeframe] = useState('week');

  const stats = {
    week: {
      surveysCompleted: 12,
      timeSpent: '4h 32m',
      tokensEarned: 1250,
      avgRating: 4.8,
      streak: 5,
      completionRate: 92
    },
    month: {
      surveysCompleted: 48,
      timeSpent: '18h 15m',
      tokensEarned: 4890,
      avgRating: 4.7,
      streak: 5,
      completionRate: 89
    },
    year: {
      surveysCompleted: 187,
      timeSpent: '76h 42m',
      tokensEarned: 18750,
      avgRating: 4.6,
      streak: 5,
      completionRate: 85
    }
  };

  const currentStats = stats[timeframe];

  const recentActivity = [
    { type: 'survey', title: 'Consumer Shopping Habits', tokens: 150, time: '2 hours ago', status: 'completed' },
    { type: 'survey', title: 'Mobile App User Experience', tokens: 200, time: '1 day ago', status: 'completed' },
    { type: 'survey', title: 'Food Delivery Preferences', tokens: 100, time: '2 days ago', status: 'completed' },
    { type: 'survey', title: 'Social Media Usage Study', tokens: 175, time: '3 days ago', status: 'completed' },
  ];

  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">My Insights</h1>
        <div className="flex bg-[#0E1525]/60 backdrop-blur-sm rounded-xl p-1 border border-[#9767E4]/20">
          {['week', 'month', 'year'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                timeframe === period
                  ? 'bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white shadow-lg'
                  : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]/80'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/5 backdrop-blur-sm rounded-xl p-4 border border-[#9767E4]/20">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2">
              <FaCheckCircle className="text-[#9767E4] text-lg" />
            </div>
            <span className="text-xs text-[#F8FAFC]/50 uppercase tracking-wide">Surveys</span>
          </div>
          <div className="text-2xl font-bold text-[#F8FAFC] mb-1">{currentStats.surveysCompleted}</div>
          <div className="text-sm text-[#F8FAFC]/60">Completed this {timeframe}</div>
        </div>

        <div className="bg-gradient-to-br from-[#26B2F2]/10 to-[#9767E4]/5 backdrop-blur-sm rounded-xl p-4 border border-[#26B2F2]/20">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-gradient-to-r from-[#26B2F2]/20 to-[#9767E4]/20 rounded-full p-2">
              <FaClock className="text-[#26B2F2] text-lg" />
            </div>
            <span className="text-xs text-[#F8FAFC]/50 uppercase tracking-wide">Time</span>
          </div>
          <div className="text-2xl font-bold text-[#F8FAFC] mb-1">{currentStats.timeSpent}</div>
          <div className="text-sm text-[#F8FAFC]/60">Total time spent</div>
        </div>

        <div className="bg-gradient-to-br from-[#C084FC]/10 to-[#9767E4]/5 backdrop-blur-sm rounded-xl p-4 border border-[#C084FC]/20">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-gradient-to-r from-[#C084FC]/20 to-[#9767E4]/20 rounded-full p-2">
              <FaCoins className="text-[#C084FC] text-lg" />
            </div>
            <span className="text-xs text-[#F8FAFC]/50 uppercase tracking-wide">Tokens</span>
          </div>
          <div className="text-2xl font-bold text-[#F8FAFC] mb-1">{currentStats.tokensEarned.toLocaleString()}</div>
          <div className="text-sm text-[#F8FAFC]/60">Tokens earned</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full p-2">
              <FaTrophy className="text-yellow-400 text-lg" />
            </div>
            <span className="text-xs text-[#F8FAFC]/50 uppercase tracking-wide">Rating</span>
          </div>
          <div className="text-2xl font-bold text-[#F8FAFC] mb-1">{currentStats.avgRating}/5</div>
          <div className="text-sm text-[#F8FAFC]/60">Average rating</div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full p-2">
              <FaChartLine className="text-green-400 text-lg" />
            </div>
            <span className="text-xs text-[#F8FAFC]/50 uppercase tracking-wide">Success</span>
          </div>
          <div className="text-2xl font-bold text-[#F8FAFC] mb-1">{currentStats.completionRate}%</div>
          <div className="text-sm text-[#F8FAFC]/60">Completion rate</div>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/5 backdrop-blur-sm rounded-xl p-4 border border-red-500/20">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full p-2">
              <FaFire className="text-red-400 text-lg" />
            </div>
            <span className="text-xs text-[#F8FAFC]/50 uppercase tracking-wide">Streak</span>
          </div>
          <div className="text-2xl font-bold text-[#F8FAFC] mb-1">{currentStats.streak}</div>
          <div className="text-sm text-[#F8FAFC]/60">Day streak</div>
        </div>
      </div>

      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#9767E4]/20">
        <h2 className="font-bold text-xl text-[#F8FAFC] mb-4 flex items-center gap-2">
          <FaCalendarAlt className="text-[#26B2F2]" />
          Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-[#0E1525]/40 rounded-xl border border-[#9767E4]/10 hover:border-[#9767E4]/20 transition-all duration-300">
              <div className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 flex-shrink-0">
                <FaEye className="text-[#9767E4] text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[#F8FAFC] truncate">{activity.title}</h3>
                <p className="text-sm text-[#F8FAFC]/60">{activity.time}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  +{activity.tokens}
                </span>
                <FaCheckCircle className="text-green-400 text-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#9767E4]/20">
        <h2 className="font-bold text-xl text-[#F8FAFC] mb-4">Performance Tips</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-[#26B2F2]/20 rounded-full p-1 mt-1">
              <div className="w-2 h-2 bg-[#26B2F2] rounded-full"></div>
            </div>
            <div>
              <p className="text-[#F8FAFC] font-medium">Maintain your streak</p>
              <p className="text-[#F8FAFC]/60 text-sm">Complete at least one survey daily to keep your earning streak alive!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#9767E4]/20 rounded-full p-1 mt-1">
              <div className="w-2 h-2 bg-[#9767E4] rounded-full"></div>
            </div>
            <div>
              <p className="text-[#F8FAFC] font-medium">Quality over quantity</p>
              <p className="text-[#F8FAFC]/60 text-sm">Provide thoughtful responses to maintain your high rating and unlock better opportunities.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#C084FC]/20 rounded-full p-1 mt-1">
              <div className="w-2 h-2 bg-[#C084FC] rounded-full"></div>
            </div>
            <div>
              <p className="text-[#F8FAFC] font-medium">Peak earning times</p>
              <p className="text-[#F8FAFC]/60 text-sm">Most surveys are available between 9 AM - 6 PM in your timezone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInsight;