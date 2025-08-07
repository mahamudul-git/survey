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
	<div className="flex-1 w-full max-w-full">
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-4 w-full">
			{(limit ? surveys.slice(0, limit) : surveys).map((survey, idx) => {
				const percent = Math.round(
					(survey.surveyCompletion.completedCount / survey.surveyCompletion.totalRequired) * 100
				);
				return (
					<div
						key={idx}
						className="bg-[#0E1525]/50 border border-[#9767E4]/10 rounded-xl backdrop-blur-sm p-3 sm:p-4 flex flex-col gap-2 md:gap-3 overflow-hidden relative min-h-[100px] w-full min-w-0 hover:bg-[#0E1525]/70 hover:border-[#9767E4]/20 transition-all duration-300 group cursor-pointer"
						style={{ fontFamily: "inherit" }}
					>
						{/* Top row: date and time */}
						<div className="flex items-center justify-between mb-1">
							<span className="text-xs text-[#F8FAFC]/70 font-medium">{survey.lastUpdated.date}</span>
							<span className="flex items-center gap-1 text-xs text-[#26B2F2] font-semibold">
								<svg
									width="13"
									height="13"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block align-middle"
								>
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
									<path
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										d="M12 8v4l3 3"
									/>
								</svg>
								{survey.lastUpdated.time}
							</span>
						</div>
						{/* Reward row */}
						<div className="flex items-center justify-between mb-2">
							<span className="flex items-center gap-1 text-base sm:text-lg font-bold text-[#F8FAFC]">
								<img
									src="/token.svg"
									alt="token"
									className="w-4 h-4 sm:w-5 sm:h-5 inline-block"
								/>
								{survey.rewardValue.amount}
								<span className="text-xs font-medium text-[#F8FAFC]/60 mt-1">
									{survey.rewardValue.currency}
								</span>
							</span>
							{survey.rewardValue.bonus > 0 && (
								<span className="text-xs font-bold text-white bg-gradient-to-r from-[#9767E4] to-[#C084FC] px-2 py-1 rounded-md shadow-lg shadow-[#9767E4]/20">
									+{survey.rewardValue.bonus}%
								</span>
							)}
						</div>
						{/* Progress bar */}
						<div className="w-full h-2 rounded-full bg-[#0B111E]/40 overflow-hidden">
							<div
								className="h-full rounded-full bg-gradient-to-r from-[#26B2F2] to-[#9767E4] transition-all duration-500"
								style={{ width: `${percent}%` }}
							></div>
						</div>
						{/* Progress text */}
						<div className="text-xs text-[#F8FAFC]/60 font-medium">
							{survey.surveyCompletion.completedCount}/{survey.surveyCompletion.totalRequired} completed ({percent}%)
						</div>
					</div>
				);
			})}
		</div>
	</div>
);

export default Surveys;
