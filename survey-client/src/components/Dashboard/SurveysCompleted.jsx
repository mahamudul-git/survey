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
    <div className="px-4 py-5 sm:px-3 sm:py-6 md:px-2 md:px-[20px] md:py-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button className="bg-white rounded-full p-2 border border-[#eaf7f3] flex items-center justify-center" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#347433] text-lg" />
        </button>
        <span className="font-bold text-lg sm:text-xl text-[#0a5c4c]">Surveys Completed</span>
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6 border border-[#eaf7f3]">
        {completedSurveys.length === 0 ? (
          <div className="text-center text-gray-500">No surveys completed yet.</div>
        ) : (
          <ul className="divide-y divide-[#eaf7f3]">
            {completedSurveys.map(survey => (
              <li key={survey.id} className="py-3 flex flex-col">
                <span className="font-semibold text-[#0a5c4c]">{survey.title}</span>
                <span className="text-xs text-gray-500">Completed on {survey.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SurveysCompleted;
