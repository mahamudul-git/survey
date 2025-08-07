import React from "react";
import { FaUserPlus, FaUser, FaFileAlt, FaMoneyBillWave, FaShieldAlt, FaCalendarAlt, FaChartLine, FaClock, FaGlobe } from "react-icons/fa";
import Button from "../components/UI/Button";	
import { useNavigation } from "../hooks/useNavigation.js";

const steps = [
	{
		icon: FaUserPlus,
		title: "Sign Up Free",
		description:
			"Register with phone, email or NID - completely free and secure",
		detail: "Phone, Email or NID",
		color: "from-[#9767E4]/15 to-[#26B2F2]/15",
		borderColor: "[#9767E4]/20"
	},
	{
		icon: FaUser,
		title: "Complete Profile",
		description:
			"Fill in your age, interests, and profession for better survey matching",
		detail: "Age, Interests, Profession",
		color: "from-[#26B2F2]/15 to-[#C084FC]/15",
		borderColor: "[#26B2F2]/20"
	},
	{
		icon: FaFileAlt,
		title: "Take Surveys",
		description:
			"Get matched with surveys based on your profile and start earning",
		detail: "Get Matched & Earn",
		color: "from-[#C084FC]/15 to-[#9767E4]/15",
		borderColor: "[#C084FC]/20"
	},
	{
		icon: FaMoneyBillWave,
		title: "Earn & Withdraw",
		description:
			"Convert tokens to cash and withdraw via bKash, Nagad, or Bank",
		detail: "bKash/Nagad/Bank",
		color: "from-[#9767E4]/15 to-[#C084FC]/15",
		borderColor: "[#9767E4]/20"
	},
];

const features = [
	{
		icon: FaMoneyBillWave,
		title: "Real Money for Surveys",
		description:
			"Convert tokens to BDT instantly - every opinion has real value",
		color: "from-[#9767E4]/15 to-[#26B2F2]/15",
		borderColor: "[#9767E4]/20"
	},
	{
		icon: FaShieldAlt,
		title: "No Investment Needed",
		description:
			"Start earning immediately without any upfront payment or fees",
		color: "from-[#26B2F2]/15 to-[#C084FC]/15",
		borderColor: "[#26B2F2]/20"
	},
	{
		icon: FaCalendarAlt,
		title: "Daily Survey Availability",
		description:
			"Fresh surveys every day matching your interests and profile",
		color: "from-[#C084FC]/15 to-[#9767E4]/15",
		borderColor: "[#C084FC]/20"
	},
	{
		icon: FaChartLine,
		title: "Level Up = Higher Earnings",
		description:
			"Build your reputation and unlock premium high-paying surveys",
		color: "from-[#9767E4]/15 to-[#C084FC]/15",
		borderColor: "[#9767E4]/20"
	},
	{
		icon: FaShieldAlt,
		title: "Safe, Secure & Verified",
		description:
			"Your data is protected and payments are guaranteed and secure",
		color: "from-[#26B2F2]/15 to-[#9767E4]/15",
		borderColor: "[#26B2F2]/20"
	},
	{
		icon: FaClock,
		title: "Flexible Work — Anytime, Anywhere",
		description:
			"Work from home, office, or on the go - complete freedom",
		color: "from-[#C084FC]/15 to-[#26B2F2]/15",
		borderColor: "[#C084FC]/20"
	},
];

export default function EarnWithUs() {
	const { isMenuOpen } = useNavigation();
	
	return (
		<div className="min-h-screen flex bg-slate-900 flex-col ">
			<div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm bg-black/30  brightness-75' : ''}`}>
			{/* Hero Section */}
			<section className="relative overflow-hidden pt-36  pb-12 sm:py-16 lg:py-20 xl:py-40">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<div className="absolute top-16 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
					<div className="absolute bottom-16 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
				</div>

				<div className="container mx-auto max-w-[1440px] px-4 sm:px-6 relative">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div className="text-left">
							<div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
								Start Earning Today
							</div>
							<h1 className="initial-hidden animate-fade-in-up animation-delay-100 text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-[#F8FAFC]">
								Turn Your{" "}
								<span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
									Opinions
								</span>{" "}
								Into{" "}
								<span className="bg-gradient-to-r from-[#26B2F2] via-[#C084FC] to-[#9767E4] bg-clip-text text-transparent">
									Earnings
								</span>
							</h1>
							<p className="initial-hidden animate-fade-in-up animation-delay-200 text-lg sm:text-xl lg:text-2xl text-[#F8FAFC]/70 mb-8 leading-relaxed">
								Join SurveySight and get paid to answer surveys that make a real
								impact in Bangladesh.
							</p>
							<div className="initial-hidden animate-fade-in-up animation-delay-300 flex flex-wrap gap-3">
								<Button>
									Join Early Access Waitlist
								</Button>
								<Button variant="outline" className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10">
									Learn More
									<FaUserPlus className="ml-2 w-4 h-4" />
								</Button>
							</div>
							<div className="initial-hidden animate-fade-in-up animation-delay-400 mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-[#F8FAFC]/60">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-[#9767E4] rounded-full"></div>
									<span>No Investment Required</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-[#26B2F2] rounded-full"></div>
									<span>Daily Surveys Available</span>
								</div>
							</div>
						</div>
						<div className="initial-hidden animate-slide-in-right animation-delay-500 relative mt-8 lg:mt-0">
							<div className="relative max-w-lg mx-auto lg:mx-0">
								{/* Main Image Container */}
								<div className="relative rounded-2xl border border-[#9767E4]/20 bg-[#0B111E]/20 overflow-hidden">
									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/30 to-[#26B2F2]/30"></div>
									<img
										src="/hero-earning.jpg"
										alt="Person earning money through mobile surveys"
										className="relative z-10 w-full h-auto rounded-2xl"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="relative pb-12 sm:pb-16 lg:pb-20 pt-0 bg-transparent w-full overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<div className="absolute top-16 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
					<div className="absolute bottom-16 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
				</div>

				<div className="container mx-auto max-w-[1440px] px-4 sm:px-6 relative">
					<div className="text-left md:text-center mb-12 lg:mb-20">
						<div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
							Simple Process
						</div>
						<h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-2xl sm:text-3xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
							How It{" "}
							<span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
								Works
							</span>
						</h2>
						<p className="initial-hidden animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-[#F8FAFC]/70 max-w-2xl md:mx-auto">
							Start earning in just 4 simple steps - no experience required
						</p>
					</div>

					{/* Steps Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
						{steps.map((step, index) => (
							<div
								key={index}
								className={`initial-hidden animate-fade-in-scale animation-delay-${300 + (index * 100)} group relative rounded-2xl border border-${step.borderColor} bg-[#0B111E]/20 p-6 lg:p-8 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 flex flex-col items-start text-left min-h-[280px] sm:min-h-[320px] justify-between`}
							>
								{/* Gradient Overlay */}
								<div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

								<div className="relative flex flex-col">
									{/* Icon */}
									<div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
										<step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
									</div>
									
									{/* Title */}
									<h3 className="text-lg font-bold text-[#F8FAFC] mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
										{step.title}
									</h3>
									
									{/* Description */}
									<p className="text-[#F8FAFC]/70 text-sm mb-4 sm:mb-6 leading-relaxed">
										{step.description}
									</p>
								</div>

								{/* Detail */}
								<span className="relative mt-auto text-[#9767E4] font-semibold text-sm">
									{step.detail}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Join Section */}
			<section className="relative py-12 sm:py-16 lg:py-20 bg-transparent w-full overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<div className="absolute top-16 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
					<div className="absolute bottom-16 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
				</div>

				<div className="container mx-auto max-w-[1440px] px-4 sm:px-6 relative">
					<div className="text-left md:text-center mb-12 lg:mb-20">
						<div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
							Premium Benefits
						</div>
						<h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-2xl sm:text-3xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
							Why Join{" "}
							<span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
								SurveySight
							</span>
						</h2>
						<p className="initial-hidden animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-[#F8FAFC]/70 max-w-2xl md:mx-auto">
							Join thousands of Bangladeshis who are already earning with us
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className={`initial-hidden animate-fade-in-scale animation-delay-${300 + (index * 100)} group relative rounded-2xl border border-${feature.borderColor} bg-[#0B111E]/20 p-6 lg:p-8 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 flex flex-col items-start text-left`}
							>
								{/* Gradient Overlay */}
								<div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

								<div className="relative">
									<div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
										<feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
									</div>
									<h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
										{feature.title}
									</h3>
									<p className="text-[#F8FAFC]/70 leading-relaxed text-sm sm:text-base">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			</div>
		</div>
	);
}