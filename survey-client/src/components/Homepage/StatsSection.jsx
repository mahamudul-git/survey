import { FaUser, FaFileAlt, FaBuilding, FaShieldAlt } from "react-icons/fa";

const stats = [
  { number: '2.5M+', label: 'Verified Users', icon: <FaUser className="text-white text-2xl w-8 h-8" /> },
  { number: '150K+', label: 'Surveys Completed', icon: <FaFileAlt className="text-white text-2xl w-8 h-8" /> },
  { number: '500+', label: 'Global Companies', icon: <FaBuilding className="text-white text-2xl w-8 h-8" /> },
  { number: '98%', label: 'Data Accuracy', icon: <FaShieldAlt className="text-white text-2xl w-8 h-8" /> }
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-500 to-teal-600 relative overflow-hidden">
      <div className="absolute  inset-0 bg-black/10"></div>
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Trusted by Millions
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join the largest verified survey community in the world
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
