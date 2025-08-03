import { FaChartLine, FaHeadset, FaTools, FaSearch, FaUsers, FaBook, FaCheck } from "react-icons/fa";

const challenges = [
    {
        title: 'Market Research',
        description: 'Understand market trends, consumer behavior, and competitive landscape with comprehensive survey data.',
        features: ['Consumer insights', 'Trend analysis', 'Brand awareness', 'Competitive intelligence'],
        icon: <FaChartLine className="text-white text-2xl w-8 h-8" />,
        color: 'from-emerald-400 to-teal-500'
    },
    {
        title: 'Customer Experience',
        description: 'Measure satisfaction levels, identify pain points, and improve customer journey across all touchpoints.',
        features: ['Satisfaction surveys', 'NPS tracking', 'Journey mapping', 'Feedback loops'],
        icon: <FaHeadset className="text-white text-2xl w-8 h-8" />,
        color: 'from-blue-400 to-indigo-500'
    },
    {
        title: 'Product Development',
        description: 'Validate product concepts, test features, and gather user feedback to build products people actually want.',
        features: ['Concept testing', 'Feature validation', 'User experience', 'Beta feedback'],
        icon: <FaTools className="text-white text-2xl w-8 h-8" />,
        color: 'from-purple-400 to-pink-500'
    },
    {
        title: 'Market Validation',
        description: 'Test business ideas, validate assumptions, and reduce market risk before major investments.',
        features: ['Idea validation', 'Demand testing', 'Price sensitivity', 'Market sizing'],
        icon: <FaSearch className="text-white text-2xl w-8 h-8" />,
        color: 'from-orange-400 to-red-500'
    },
    {
        title: 'Employee Engagement',
        description: 'Measure workplace satisfaction, identify improvement areas, and boost organizational performance.',
        features: ['Engagement surveys', 'Culture assessment', 'Performance feedback', 'Retention insights'],
        icon: <FaUsers className="text-white text-2xl w-8 h-8" />,
        color: 'from-green-400 to-emerald-500'
    },
    {
        title: 'Academic Research',
        description: 'Conduct scholarly research with robust data collection tools and statistical analysis capabilities.',
        features: ['Research methodology', 'Data collection', 'Statistical analysis', 'Publication support'],
        icon: <FaBook className="text-white text-2xl w-8 h-8" />,
        color: 'from-cyan-400 to-blue-500'
    }
];

export default function ChallengesSection() {
    return (
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">

            <div className="relative z-10 container mx-auto max-w-[1440px] px-6 pt-2">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                        Challenges We Help You Solve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From startups to enterprises, our platform addresses critical research needs across industries
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-150`}>
                                {challenge.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                                {challenge.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {challenge.description}
                            </p>
                            <div className="space-y-2">
                                {challenge.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                                        <FaCheck className="w-4 h-4 flex items-center justify-center text-emerald-500 mr-3" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
