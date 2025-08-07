import { FaMoneyBillWave, FaChartBar, FaArrowRight, FaUsers, FaStar } from "react-icons/fa";
import Button from "../UI/Button";

export default function CTASection() {
  return (
    <section className="relative py-10 lg:py-20 bg-transparent w-full overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/15 blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/15 blur-[80px] animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/10 blur-[60px] animate-pulse animation-delay-400"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-[#9767E4] animate-pulse animation-delay-100"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 rounded-full bg-[#26B2F2] animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-[#C084FC] animate-pulse animation-delay-500"></div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 relative">
        <div className="text-center">
          {/* Enhanced badge with glow effect */}
          <div className="initial-hidden animate-fade-in-up inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 border border-[#9767E4]/30 text-[#9767E4] text-sm font-semibold mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(151,103,228,0.3)]">
            <FaStar className="w-4 h-4 mr-2 text-[#26B2F2]" />
            Ready to Start Earning?
            <FaArrowRight className="w-3 h-3 ml-2 animate-pulse" />
          </div>
          
          {/* Enhanced heading with better gradient */}
          <h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent drop-shadow-lg">
              Ready to Bridge
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#26B2F2] via-[#C084FC] to-[#9767E4] bg-clip-text text-transparent">
              the Gap?
            </span>
          </h2>
          
          {/* Enhanced description */}
          <p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl lg:text-2xl text-[#F8FAFC]/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Connect with your target audience or start earning from your valuable opinions today.
            
          </p>
          
          {/* Enhanced buttons with better styling */}
          <div className="initial-hidden animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#9767E4] to-[#26B2F2] hover:from-[#8B5CF6] hover:to-[#0EA5E9] text-white shadow-[0_0_30px_rgba(151,103,228,0.5)] hover:shadow-[0_0_40px_rgba(151,103,228,0.7)] px-10 py-4 duration-300 text-lg font-semibold"
            >
              <FaMoneyBillWave className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Start Earning
              <FaArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-[#26B2F2]/40 text-[#26B2F2] hover:bg-[#26B2F2]/15 backdrop-blur-lg hover:border-[#26B2F2]/60 duration-300 px-10 py-4 text-lg font-semibold shadow-[0_0_20px_rgba(38,178,242,0.2)] hover:shadow-[0_0_30px_rgba(38,178,242,0.4)]"
            >
              <FaChartBar className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Publish Your Survey
              <FaArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          
          {/* Enhanced stats section */}
          <div className="initial-hidden animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-[#F8FAFC]/70">
              <FaUsers className="w-5 h-5 text-[#26B2F2]" />
              <span className="text-lg font-medium">1,000+ Active Users</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-[#F8FAFC]/30"></div>
            <div className="flex items-center gap-2 text-[#F8FAFC]/70">
              <FaStar className="w-5 h-5 text-[#9767E4]" />
              <span className="text-lg font-medium">5/5 Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-[#F8FAFC]/30"></div>
            <div className="flex items-center gap-2 text-[#F8FAFC]/70">
              <FaMoneyBillWave className="w-5 h-5 text-[#C084FC]" />
              <span className="text-lg font-medium">$0.5M+ Earned</span>
            </div>
          </div>
          
          
         
        </div>
      </div>
    </section>
  );
}