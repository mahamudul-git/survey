import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const completedSurveys = [
  // Example data, replace with real data from API or context
  { id: 1, title: "Customer Satisfaction Survey", date: "2025-07-15" },
  { id: 2, title: "Product Feedback Survey", date: "2025-07-10" },
];

const SurveysCompleted = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 border border-[#9767E4]/30 flex items-center justify-center hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#9767E4] text-lg" />
        </button>
        <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">Surveys Completed</span>
      </div>
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-6 border border-[#9767E4]/20">
        {completedSurveys.length === 0 ? (
          <div className="text-center text-[#F8FAFC]/60">No surveys completed yet.</div>
        ) : (
          <ul className="divide-y divide-[#9767E4]/10">
            {completedSurveys.map(survey => (
              <li key={survey.id} className="py-3 flex flex-col">
                <span className="font-semibold text-[#F8FAFC]">{survey.title}</span>
                <span className="text-xs text-[#F8FAFC]/60">Completed on {survey.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SurveysCompleted;
