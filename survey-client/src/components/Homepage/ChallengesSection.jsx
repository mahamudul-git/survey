import { FaChartLine, FaHeadset, FaTools, FaSearch, FaUsers, FaBook, FaCheck } from "react-icons/fa";

const challenges = [
    {
        title: 'Market Research',
        description: 'Understand market trends, consumer behavior, and competitive landscape with comprehensive survey data.',
        features: ['Consumer insights', 'Trend analysis', 'Brand awareness', 'Competitive intelligence'],
        icon: <FaChartLine className="text-white text-2xl w-8 h-8" />,
        color: 'from-[#9767E4]/15 to-[#26B2F2]/15',
        borderColor: '[#9767E4]/20'
    },
    {
        title: 'Customer Experience',
        description: 'Measure satisfaction levels, identify pain points, and improve customer journey across all touchpoints.',
        features: ['Satisfaction surveys', 'NPS tracking', 'Journey mapping', 'Feedback loops'],
        icon: <FaHeadset className="text-white text-2xl w-8 h-8" />,
        color: 'from-[#26B2F2]/15 to-[#C084FC]/15',
        borderColor: '[#26B2F2]/20'
    },
    {
        title: 'Product Development',
        description: 'Validate product concepts, test features, and gather user feedback to build products people actually want.',
        features: ['Concept testing', 'Feature validation', 'User experience', 'Beta feedback'],
        icon: <FaTools className="text-white text-2xl w-8 h-8" />,
        color: 'from-[#C084FC]/15 to-[#9767E4]/15',
        borderColor: '[#C084FC]/20'
    },
    {
        title: 'Market Validation',
        description: 'Test business ideas, validate assumptions, and reduce market risk before major investments.',
        features: ['Idea validation', 'Demand testing', 'Price sensitivity', 'Market sizing'],
        icon: <FaSearch className="text-white text-2xl w-8 h-8" />,
        color: 'from-[#9767E4]/15 to-[#C084FC]/15',
        borderColor: '[#9767E4]/20'
    },
    {
        title: 'Employee Engagement',
        description: 'Measure workplace satisfaction, identify improvement areas, and boost organizational performance.',
        features: ['Engagement surveys', 'Culture assessment', 'Performance feedback', 'Retention insights'],
        icon: <FaUsers className="text-white text-2xl w-8 h-8" />,
        color: 'from-[#26B2F2]/15 to-[#9767E4]/15',
        borderColor: '[#26B2F2]/20'
    },
    {
        title: 'Academic Research',
        description: 'Conduct scholarly research with robust data collection tools and statistical analysis capabilities.',
        features: ['Research methodology', 'Data collection', 'Statistical analysis', 'Publication support'],
        icon: <FaBook className="text-white text-2xl w-8 h-8" />,
        color: 'from-[#C084FC]/15 to-[#26B2F2]/15',
        borderColor: '[#C084FC]/20'
    }
];

export default function ChallengesSection() {
    return (
        <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent w-full overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
                <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
            </div>

            <div className="container mx-auto max-w-[1440px] px-6 relative">
                <div className="text-center mb-20">
                    <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
                        Solutions We Offer
                    </div>
                    <h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] mb-6">
                        Challenges We Help
                        <br />
                        <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                            You Solve
                        </span>
                    </h2>
                    <p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl text-[#F8FAFC]/70 max-w-3xl mx-auto">
                        From startups to enterprises, our platform addresses critical research needs across industries
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className={`initial-hidden animate-fade-in-scale animation-delay-${300 + (index * 100)} group relative rounded-2xl border border-${challenge.borderColor} bg-[#0B111E]/20 p-8 hover:bg-[#0E1525]/40 transition-all duration-300 transform group-hover:scale-110 hover:-translate-y-2`}
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${challenge.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="relative">
                                <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
                                    {challenge.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 group-hover:text-white transition-colors duration-300">
                                    {challenge.title}
                                </h3>
                                <p className="text-[#F8FAFC]/70 leading-relaxed mb-6">
                                    {challenge.description}
                                </p>
                                <div className="space-y-2">
                                    {challenge.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-sm text-[#F8FAFC]/60">
                                            <FaCheck className="w-4 h-4 text-[#9767E4] mr-3 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
