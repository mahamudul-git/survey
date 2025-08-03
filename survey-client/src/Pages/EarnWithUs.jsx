import React from "react";
import { FaUserPlus, FaUser, FaFileAlt, FaMoneyBillWave, FaShieldAlt, FaCalendarAlt, FaChartLine, FaClock, FaGlobe } from "react-icons/fa";

const steps = [
	{
		icon: FaUserPlus,
		title: "Sign Up Free",
		description:
			"Register with phone, email or NID - completely free and secure",
		detail: "Phone, Email or NID",
	},
	{
		icon: FaUser,
		title: "Complete Profile",
		description:
			"Fill in your age, interests, and profession for better survey matching",
		detail: "Age, Interests, Profession",
	},
	{
		icon: FaFileAlt,
		title: "Take Surveys",
		description:
			"Get matched with surveys based on your profile and start earning",
		detail: "Get Matched & Earn",
	},
	{
		icon: FaMoneyBillWave,
		title: "Earn & Withdraw",
		description:
			"Convert tokens to cash and withdraw via bKash, Nagad, or Bank",
		detail: "bKash/Nagad/Bank",
	},
];

const features = [
	{
		icon: FaMoneyBillWave,
		title: "Real Money for Surveys",
		description:
			"Convert tokens to BDT instantly - every opinion has real value",
	},
	{
		icon: FaShieldAlt,
		title: "No Investment Needed",
		description:
			"Start earning immediately without any upfront payment or fees",
	},
	{
		icon: FaCalendarAlt,
		title: "Daily Survey Availability",
		description:
			"Fresh surveys every day matching your interests and profile",
	},
	{
		icon: FaChartLine,
		title: "Level Up = Higher Earnings",
		description:
			"Build your reputation and unlock premium high-paying surveys",
	},
	{
		icon: FaShieldAlt,
		title: "Safe, Secure & Verified",
		description:
			"Your data is protected and payments are guaranteed and secure",
	},
	{
		icon: FaClock,
		title: "Flexible Work — Anytime, Anywhere",
		description:
			"Work from home, office, or on the go - complete freedom",
	},
];

export default function EarnWithUs() {
	return (
		<div className="min-h-screen flex flex-col bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-success/10 py-20 lg:py-32">
				<div className="container py-20 mx-auto max-w-[1440px] px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="text-center lg:text-left">
							<h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
								Turn Your{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
									Opinions
								</span>{" "}
								Into{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
									Earnings
								</span>
							</h1>
							<p className="text-xl lg:text-2xl text-gray-500 mb-8 leading-relaxed">
								Join E-Survey and get paid to answer surveys that make a real
								impact in Bangladesh.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<button className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 hover:-translate-y-1 text-lg font-semibold font-poppins shadow-xl">
									<i className="ri-rocket-line w-6 h-6 flex items-center justify-center mr-3"></i>
									Join Early Access Waitlist
								</button>
								<button className="inline-flex items-center bg-gradient-to-r from-green-500 via-blue-500 to-teal-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 hover:-translate-y-1 text-lg font-semibold font-poppins shadow-xl">
									Learn More
								</button>
							</div>
							<div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<span>No Investment Required</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<span>Daily Surveys Available</span>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl blur-3xl"></div>
							<img
								src="/hero-earning.jpg"
								alt="Person earning money through mobile surveys"
								className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20 bg-gradient-to-b from-background to-muted/30">
				<div className="container mx-auto max-w-[1440px] px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold mb-6">
							How It{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">
								Works
							</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Start earning in just 4 simple steps - no experience required
						</p>
					</div>
					{/* Card grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{steps.map((step, index) => (
							<div
								key={index}
								className="relative overflow-visible bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-between min-h-[320px] p-8 transition-all duration-300 hover:shadow-lg"
							>
								{/* Icon circle */}
								<span className="bg-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-6 shadow-lg">
									<step.icon className="w-7 h-7 text-white" />
								</span>
								{/* Title */}
								<h3 className="text-lg font-bold text-center text-gray-900 mb-2 font-poppins">
									{step.title}
								</h3>
								{/* Description */}
								<p className="text-center text-gray-600 text-sm mb-6 font-poppins">
									{step.description}
								</p>
								{/* Action */}
								<span className="mt-auto text-green-700 font-semibold text-center text-sm font-poppins">
									{step.detail}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="py-20 bg-gradient-to-b from-muted/30 to-background">
				<div className="container mx-auto max-w-[1440px] px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-5xl font-bold mb-6">
							Why Join{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
								E-Survey
							</span>
						</h2>
						<p className="text-xl text-gray-500 max-w-2xl mx-auto">
							Join thousands of Bangladeshis who are already earning with us
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="group bg-white border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-green-200 hover:-translate-y-1 p-8 flex flex-col items-center text-center"
							>
								<div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
									<feature.icon className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-xl font-bold mb-4 font-poppins text-gray-900">
									{feature.title}
								</h3>
								<p className="text-gray-600 leading-relaxed font-poppins">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}