import { FaShieldAlt, FaBullseye, FaChartBar, FaGamepad, FaArrowRight } from "react-icons/fa";

const features = [
	{
		icon: <FaShieldAlt className="text-white text-2xl w-7 h-7" />,
		title: "Verified Users",
		description: "Every participant goes through our comprehensive KYC process",
		color: "from-emerald-400 to-teal-500",
	},
	{
		icon: <FaBullseye className="text-white text-2xl w-7 h-7" />,
		title: "Deep Targeting",
		description: "Reach your exact audience with precision targeting tools",
		color: "from-blue-400 to-indigo-500",
	},
	{
		icon: <FaChartBar className="text-white text-2xl w-7 h-7" />,
		title: "Instant Analytics",
		description: "Real-time insights and data visualization dashboard",
		color: "from-purple-400 to-pink-500",
	},
	{
		icon: <FaGamepad className="text-white text-2xl w-7 h-7" />,
		title: "Gamified System",
		description: "Engaging survey experience with rewards and achievements",
		color: "from-orange-400 to-red-500",
	},
];

const FeatureGridSection = () => (
	<section className="py-24 bg-gradient-to-b from-white to-purple-50">
		<div className="container mx-auto max-w-[1440px] px-6">
			<div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
				<div>
					<h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 font-poppins">
						Why Choose SurveySight?
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed mb-8 font-poppins font-medium">
						Built with cutting-edge technology to deliver unparalleled survey
						experiences. We combine verification, targeting, analytics, and
						gamification to create the most effective survey platform available.
					</p>
					<a
						href="/features"
						className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors cursor-pointer text-lg font-poppins"
					>
						Explore All Features{" "}
						<FaArrowRight className="ml-2 w-5 h-5" />
					</a>
				</div>
				<div className="relative flex flex-col md:flex-row items-center justify-center gap-6 h-80 mb-8">
					<div className="relative w-2/3 h-full flex items-center justify-center">
						<img
							src="https://readdy.ai/api/search-image?query=Modern%203D%20isometric%20survey%20platform%20dashboard%20with%20floating%20data%20visualization%20elements%2C%20holographic%20charts%20and%20graphs%2C%20futuristic%20interface%20design%20with%20neon%20accents%2C%20dark%20theme%20with%20glowing%20elements%2C%20cyberpunk%20aesthetic&width=500&height=300&seq=features-3d-main&orientation=landscape"
							alt="3D Survey Dashboard"
							className="w-full h-64 object-cover object-top rounded-2xl shadow-2xl border border-purple-200 z-10 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
						/>
						<img
							src="https://readdy.ai/api/search-image?query=3D%20rendered%20mobile%20phone%20with%20holographic%20survey%20interface%20floating%20above%20it%2C%20gamification%20badges%20and%20rewards%20in%203D%20space%2C%20neon%20lighting%20effects%2C%20modern%20tech%20visualization&width=280&height=350&seq=features-3d-mobile&orientation=portrait"
							alt="3D Mobile Survey"
							className="absolute -top-6 -right-10 w-32 h-44 object-cover object-top rounded-xl shadow-xl border border-purple-200 z-20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
						/>
						<img
							src="https://readdy.ai/api/search-image?query=3D%20rendered%20analytics%20crystals%20and%20geometric%20shapes%20with%20data%20flowing%20through%20them%2C%20holographic%20statistics%20display%2C%20modern%20tech%20visualization%20with%20purple%20and%20blue%20gradients&width=250&height=200&seq=features-3d-analytics&orientation=landscape"
							alt="3D Analytics"
							className="absolute bottom-0 right-0 w-28 h-20 object-cover object-top rounded-lg shadow-md border border-purple-200 z-20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
						/>
						<img
							src="https://readdy.ai/api/search-image?query=Isometric%203D%20illustration%20of%20global%20user%20network%20with%20verification%20checkmarks%2C%20connected%20nodes%20and%20data%20flows%2C%20modern%20tech%20style%20with%20gradient%20colors%2C%20futuristic%20design&width=320&height=200&seq=features-3d-network&orientation=landscape"
							alt="3D User Network"
							className="absolute bottom-0 left-0 w-36 h-16 object-cover object-center rounded-xl shadow-lg border border-purple-200 z-20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
						/>
					</div>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent rounded-3xl pointer-events-none"></div>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl shadow-lg"
					>
						<div
							className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}
						>
							{feature.icon}
						</div>
						<h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-3 font-poppins">
							{feature.title}
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed font-poppins">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default FeatureGridSection;
