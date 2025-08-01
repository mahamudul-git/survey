import React from "react";

const surveys = [
	{
		lastUpdated: { date: "20 Nov 2025", time: "10:30PM" },
		surveyCompletion: { totalRequired: 100, completedCount: 60 },
		rewardValue: { amount: 150, currency: "SSC", bonus: 25 },
	},
	{
		lastUpdated: { date: "19 Nov 2025", time: "09:15PM" },
		surveyCompletion: { totalRequired: 80, completedCount: 40 },
		rewardValue: { amount: 120, currency: "SSC", bonus: 20 },
	},
	{
		lastUpdated: { date: "18 Nov 2025", time: "08:00PM" },
		surveyCompletion: { totalRequired: 150, completedCount: 100 },
		rewardValue: { amount: 200, currency: "SSC", bonus: 30 },
	},
	{
		lastUpdated: { date: "17 Nov 2025", time: "07:45PM" },
		surveyCompletion: { totalRequired: 60, completedCount: 30 },
		rewardValue: { amount: 90, currency: "SSC", bonus: 10 },
	},
	{
		lastUpdated: { date: "16 Nov 2025", time: "06:30PM" },
		surveyCompletion: { totalRequired: 110, completedCount: 80 },
		rewardValue: { amount: 170, currency: "SSC", bonus: 15 },
	},
	{
		lastUpdated: { date: "15 Nov 2025", time: "05:20PM" },
		surveyCompletion: { totalRequired: 90, completedCount: 60 },
		rewardValue: { amount: 130, currency: "SSC", bonus: 18 },
	},
	{
		lastUpdated: { date: "14 Nov 2025", time: "04:10PM" },
		surveyCompletion: { totalRequired: 120, completedCount: 100 },
		rewardValue: { amount: 210, currency: "SSC", bonus: 22 },
	},
	{
		lastUpdated: { date: "13 Nov 2025", time: "03:00PM" },
		surveyCompletion: { totalRequired: 70, completedCount: 50 },
		rewardValue: { amount: 80, currency: "SSC", bonus: 12 },
	},
	{
		lastUpdated: { date: "12 Nov 2025", time: "02:30PM" },
		surveyCompletion: { totalRequired: 130, completedCount: 90 },
		rewardValue: { amount: 160, currency: "SSC", bonus: 17 },
	},
	{
		lastUpdated: { date: "11 Nov 2025", time: "01:15PM" },
		surveyCompletion: { totalRequired: 100, completedCount: 70 },
		rewardValue: { amount: 140, currency: "SSC", bonus: 19 },
	},
	{
		lastUpdated: { date: "10 Nov 2025", time: "12:00PM" },
		surveyCompletion: { totalRequired: 140, completedCount: 110 },
		rewardValue: { amount: 220, currency: "SSC", bonus: 28 },
	},
	{
		lastUpdated: { date: "09 Nov 2025", time: "11:45AM" },
		surveyCompletion: { totalRequired: 80, completedCount: 60 },
		rewardValue: { amount: 100, currency: "SSC", bonus: 14 },
	},
	{
		lastUpdated: { date: "08 Nov 2025", time: "10:30AM" },
		surveyCompletion: { totalRequired: 150, completedCount: 120 },
		rewardValue: { amount: 250, currency: "SSC", bonus: 35 },
	},
	{
		lastUpdated: { date: "07 Nov 2025", time: "09:15AM" },
		surveyCompletion: { totalRequired: 60, completedCount: 40 },
		rewardValue: { amount: 70, currency: "SSC", bonus: 8 },
	},
	{
		lastUpdated: { date: "06 Nov 2025", time: "08:00AM" },
		surveyCompletion: { totalRequired: 110, completedCount: 90 },
		rewardValue: { amount: 180, currency: "SSC", bonus: 21 },
	},
	{
		lastUpdated: { date: "13 Nov 2025", time: "03:00PM" },
		surveyCompletion: { totalRequired: 70, completedCount: 50 },
		rewardValue: { amount: 80, currency: "SSC", bonus: 12 },
	},
	{
		lastUpdated: { date: "12 Nov 2025", time: "02:30PM" },
		surveyCompletion: { totalRequired: 130, completedCount: 90 },
		rewardValue: { amount: 160, currency: "SSC", bonus: 17 },
	},
	{
		lastUpdated: { date: "11 Nov 2025", time: "01:15PM" },
		surveyCompletion: { totalRequired: 100, completedCount: 70 },
		rewardValue: { amount: 140, currency: "SSC", bonus: 19 },
	},
	{
		lastUpdated: { date: "10 Nov 2025", time: "12:00PM" },
		surveyCompletion: { totalRequired: 140, completedCount: 110 },
		rewardValue: { amount: 220, currency: "SSC", bonus: 28 },
	},
	{
		lastUpdated: { date: "09 Nov 2025", time: "11:45AM" },
		surveyCompletion: { totalRequired: 80, completedCount: 60 },
		rewardValue: { amount: 100, currency: "SSC", bonus: 14 },
	},
	{
		lastUpdated: { date: "08 Nov 2025", time: "10:30AM" },
		surveyCompletion: { totalRequired: 150, completedCount: 120 },
		rewardValue: { amount: 250, currency: "SSC", bonus: 35 },
	},
	{
		lastUpdated: { date: "07 Nov 2025", time: "09:15AM" },
		surveyCompletion: { totalRequired: 60, completedCount: 40 },
		rewardValue: { amount: 70, currency: "SSC", bonus: 0 },
	},
	{
		lastUpdated: { date: "06 Nov 2025", time: "08:00AM" },
		surveyCompletion: { totalRequired: 110, completedCount: 90 },
		rewardValue: { amount: 180, currency: "SSC", bonus: 21 },
	},
];

const Surveys = ({ limit }) => (
	<div className="flex-1 w-full max-w-full rounded-3xl">
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3 md:gap-3 w-full">
			{(limit ? surveys.slice(0, limit) : surveys).map((survey, idx) => {
				const percent = Math.round(
					(survey.surveyCompletion.completedCount / survey.surveyCompletion.totalRequired) * 100
				);
				return (
					<div
						key={idx}
						className="bg-white rounded-xl shadow-sm p-2 sm:p-3 flex flex-col gap-1 md:gap-3 border border-gray-100 overflow-hidden relative min-h-[90px] w-full min-w-0"
						style={{ fontFamily: "inherit" }}
					>
						{/* Top row: date and time */}
						<div className="flex items-center justify-between mb-1">
							<span className="text-[11px] sm:text-xs text-gray-700 font-medium">{survey.lastUpdated.date}</span>
							<span className="flex items-center gap-1 text-[11px] sm:text-xs text-[#347433] font-semibold">
								<svg
									width="13"
									height="13"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block align-middle"
								>
									<circle cx="12" cy="12" r="10" stroke="#347433" strokeWidth="2" fill="white" />
									<path
										stroke="#347433"
										strokeWidth="2"
										strokeLinecap="round"
										d="M12 8v4l3 3"
									/>
								</svg>
								{survey.lastUpdated.time}
							</span>
						</div>
						{/* Reward row */}
						<div className="flex items-center justify-between mb-1">
							<span className="flex items-center gap-1 text-base sm:text-lg font-bold text-[#347433]">
								<img
									src="/token.svg"
									alt="token"
									className="w-4 h-4 sm:w-5 sm:h-5 inline-block"
								/>
								{survey.rewardValue.amount}
								<span className="text-xs font-medium text-gray-400 mt-1 ">
									{survey.rewardValue.currency}
								</span>
							</span>
							<span className="text-[10px] sm:text-xs font-bold text-[#e6a23c] bg-[#fffbe9] px-2 py-0.5 rounded-md">
								+{survey.rewardValue.bonus}%
							</span>
						</div>
						{/* Progress bar */}
						<div className="w-full h-1.5 rounded-full bg-[#eaf0ee] overflow-hidden">
							<div
								className="h-full rounded-full bg-[#347433]"
								style={{ width: `${percent}%` }}
							></div>
						</div>
					</div>
				);
			})}
		</div>
	</div>
);

export default Surveys;
