import { FaShieldAlt, FaBullseye, FaChartBar, FaGamepad, FaArrowRight } from "react-icons/fa";
import Button from "../UI/Button";

const features = [
	{
		icon: <FaShieldAlt className="text-white text-2xl w-7 h-7" />,
		title: "Verified Users",
		description: "Every participant goes through our comprehensive KYC process",
		color: "from-[#9767E4] to-[#26B2F2]",
		borderColor: "[#9767E4]/20",
	},
	{
		icon: <FaBullseye className="text-white text-2xl w-7 h-7" />,
		title: "Deep Targeting",
		description: "Reach your exact audience with precision targeting tools",
		color: "from-[#26B2F2] to-[#C084FC]",
		borderColor: "[#26B2F2]/20",
	},
	{
		icon: <FaChartBar className="text-white text-2xl w-7 h-7" />,
		title: "Instant Analytics",
		description: "Real-time insights and data visualization dashboard",
		color: "from-[#C084FC] to-[#9767E4]",
		borderColor: "[#C084FC]/20",
	},
	{
		icon: <FaGamepad className="text-white text-2xl w-7 h-7" />,
		title: "Gamified System",
		description: "Engaging survey experience with rewards and achievements",
		color: "from-[#9767E4] to-[#C084FC]",
		borderColor: "[#9767E4]/20",
	},
];

const FeatureGridSection = () => (
	<section className="relative py-20 bg-transparent w-full overflow-hidden">
		{/* Background Effects */}
		<div className="absolute inset-0">
			<div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
			<div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
		</div>

		<div className="container mx-auto max-w-[1440px] px-6 relative">
			<div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
				<div>
					<div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
						Premium Features
					</div>
					<h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] mb-6">
						Why Choose
						<br />
						<span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
							SurveySight?
						</span>
					</h2>
					<p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl text-[#F8FAFC]/70 leading-relaxed mb-8">
						Built with cutting-edge technology to deliver unparalleled survey
						experiences. We combine verification, targeting, analytics, and
						gamification to create the most effective survey platform available.
					</p>
					<div className="initial-hidden animate-fade-in-up animation-delay-300">
						<Button 
							variant="outline" 
							className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10"
						>
							Explore All Features
							<FaArrowRight className="ml-2 w-4 h-4" />
						</Button>
					</div>
				</div>

				{/* Dashboard Preview */}
				<div className="initial-hidden animate-slide-in-right animation-delay-400 relative">
					<div className="relative max-w-[500px] mx-auto">
						{/* Main Dashboard Container */}
						<div className="relative w-full rounded-2xl border border-[#9767E4]/20 bg-[#0B111E]/20">
							{/* Gradient Overlay */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9767E4]/30 to-[#26B2F2]/30"></div>

							{/* Content Container */}
							<div className="relative p-8 space-y-6">
								{/* Feature Preview Card */}
								<div className="initial-hidden animate-fade-in-scale animation-delay-500 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-6 text-center">
									<div className="w-16 h-16 bg-gradient-to-r from-[#9767E4] to-[#26B2F2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#9767E4]/25">
										<FaChartBar className="text-white text-2xl" />
									</div>
									<h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Advanced Analytics</h3>
									<p className="text-[#F8FAFC]/70 text-sm">Real-time insights and data visualization</p>
								</div>

								{/* Feature Icons Grid */}
								<div className="grid grid-cols-2 gap-4">
									<div className="initial-hidden animate-fade-in-scale animation-delay-600 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4 text-center">
										<div className="w-12 h-12 bg-[#9767E4]/20 border border-[#9767E4]/30 rounded-full flex items-center justify-center mx-auto mb-2">
											<FaShieldAlt className="text-[#9767E4] text-lg" />
										</div>
										<div className="text-sm font-semibold text-[#F8FAFC]/90">Verified</div>
									</div>
									<div className="initial-hidden animate-fade-in-scale animation-delay-650 bg-[#0E1525]/40 border border-[#26B2F2]/20 rounded-xl p-4 text-center">
										<div className="w-12 h-12 bg-[#26B2F2]/20 border border-[#26B2F2]/30 rounded-full flex items-center justify-center mx-auto mb-2">
											<FaBullseye className="text-[#26B2F2] text-lg" />
										</div>
										<div className="text-sm font-semibold text-[#F8FAFC]/90">Targeted</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Grid */}
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className={`initial-hidden animate-fade-in-scale animation-delay-${500 + (index * 100)} group relative rounded-2xl border border-${feature.borderColor} bg-[#0B111E]/20 p-6 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
					>
						{/* Gradient Overlay */}
						<div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${feature.color.split(' ')[1].replace('to-', '')}/20 to-${feature.color.split(' ')[3]}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

						<div className="relative">
							<div
								className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-${feature.color.split(' ')[1].replace('to-', '')}/25`}
							>
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors duration-300 mb-3">
								{feature.title}
							</h3>
							<p className="text-[#F8FAFC]/70 text-sm leading-relaxed">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default FeatureGridSection;
