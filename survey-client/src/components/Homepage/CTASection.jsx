import { FaMoneyBillWave, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-900 to-black "></div>
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-400 rotate-45 rounded-lg"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-cyan-400 rotate-12 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-purple-400 -rotate-12 rounded-lg"></div>
          <div className="absolute bottom-32 right-32 w-20 h-20 border-2 border-pink-400 rotate-45 rounded-full"></div>
        </div>
      </div>
      {/* Animated Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-emerald-400/30 to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-400/20 to-transparent transform skew-x-12" style={{animation: 'pulse 3s infinite'}}></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-purple-400/25 to-transparent transform -skew-x-6" style={{animation: 'pulse 4s infinite'}}></div>
      </div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight font-poppins">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Ready to Bridge the Gap?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-poppins font-medium">
            Connect with your target audience or start earning from your valuable opinions today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/earn-with-us" className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 hover:-translate-y-1 flex items-center justify-center font-poppins shadow-xl">
              <FaMoneyBillWave className="w-6 h-6 flex items-center justify-center mr-3" />
              Start Earning Premium Rewards
            </Link>
            <Link to="/publish-survey" className="bg-white/10 backdrop-blur-lg text-white px-10 py-4 rounded-2xl text-lg font-bold border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 hover:-translate-y-1 flex items-center justify-center font-poppins">
              <FaChartBar className="w-6 h-6 flex items-center justify-center mr-3" />
              Publish Your Survey
            </Link>
          </div>
          <div className="mt-8 text-gray-400">
            <p className="font-poppins">No credit card required • Free tier available • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}