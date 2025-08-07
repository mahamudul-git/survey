import { FaMoneyBillWave, FaUserPlus, FaShieldAlt, FaSatelliteDish, FaCoins, FaChartBar, FaUserCog, FaWallet, FaFileAlt, FaTachometerAlt } from "react-icons/fa";
import Button from "../UI/Button";

const JourneySection = () => (
  <section className="relative py-20 bg-transparent w-full overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
      <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
    </div>
    
    <div className="container mx-auto max-w-[1440px] px-6 relative">
      <div className="text-center mb-20">
        <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
          Streamlined Journey
        </div>
        <h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] mb-6">
          We Build the Bridge Between
          <br />
          <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
            Earners & Researchers
          </span>
        </h2>
        <p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl text-[#F8FAFC]/70 max-w-2xl mx-auto">
          Whether you're looking to earn or gather insights, we've streamlined the journey for maximum efficiency
        </p>
      </div>
      
      <div className="flex lg:grid-cols-2 items-center justify-center gap-8 center">
        {/* Earn with Us */}
        <div className="initial-hidden animate-fade-in-up animation-delay-300 relative">
          <div className="relative">
            {/* Main Dashboard Container */}
            <div className="relative w-full rounded-2xl border border-[#9767E4]/20 bg-[#0B111E]/20">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9767E4]/30 to-[#26B2F2]/30"></div>

              {/* Content Container */}
              <div className="relative p-8 space-y-6">
                {/* Header Card */}
                <div className="initial-hidden animate-fade-in-scale animation-delay-500 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#9767E4] to-[#26B2F2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#9767E4]/25">
                    <FaMoneyBillWave className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Earn with Us</h3>
                  <p className="text-[#F8FAFC]/70 text-sm">Transform your opinions into earnings</p>
                </div>

                {/* Steps Container */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Step 1 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-600 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#9767E4]/20 border border-[#9767E4]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaUserPlus className="text-[#9767E4] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Register</div>
                        <div className="text-xs text-[#F8FAFC]/60">Create Account</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-650 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#9767E4]/20 border border-[#9767E4]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaShieldAlt className="text-[#9767E4] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Verify KYC</div>
                        <div className="text-xs text-[#F8FAFC]/60">Identity Check</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-700 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#9767E4]/20 border border-[#9767E4]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaSatelliteDish className="text-[#9767E4] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Get Matched</div>
                        <div className="text-xs text-[#F8FAFC]/60">Find Surveys</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-750 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#9767E4]/20 border border-[#9767E4]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaCoins className="text-[#9767E4] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Earn Tokens</div>
                        <div className="text-xs text-[#F8FAFC]/60">Get Rewards</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="initial-hidden animate-fade-in-scale animation-delay-800">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[#9767E4] to-[#26B2F2] hover:from-[#8B5CF6] hover:to-[#0EA5E9] text-white shadow-[0_0_20px_rgba(151,103,228,0.4)] hover:shadow-[0_0_25px_rgba(151,103,228,0.6)]"
                  >
                    <a href="/earn-with-us" className="w-full">
                      Start Earning
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Publish with Us */}
        <div className="initial-hidden animate-fade-in-up animation-delay-400 relative">
          <div className="relative max-w-[450px]">
            {/* Main Dashboard Container */}
            <div className="relative w-full rounded-2xl border border-[#C084FC]/20 bg-[#0B111E]/20">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C084FC]/30 to-[#9767E4]/30"></div>

              {/* Content Container */}
              <div className="relative p-8 space-y-6">
                {/* Header Card */}
                <div className="initial-hidden animate-fade-in-scale animation-delay-500 bg-[#0E1525]/40 border border-[#C084FC]/20 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#C084FC] to-[#9767E4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#C084FC]/25">
                    <FaChartBar className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Publish with Us</h3>
                  <p className="text-[#F8FAFC]/70 text-sm">Get authentic insights from real users</p>
                </div>

                {/* Steps Container */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Step 1 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-600 bg-[#0E1525]/40 border border-[#C084FC]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#C084FC]/20 border border-[#C084FC]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaUserCog className="text-[#C084FC] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Register</div>
                        <div className="text-xs text-[#F8FAFC]/60">Create Account</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-650 bg-[#0E1525]/40 border border-[#C084FC]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#C084FC]/20 border border-[#C084FC]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaWallet className="text-[#C084FC] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Buy Tokens</div>
                        <div className="text-xs text-[#F8FAFC]/60">Fund Account</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-700 bg-[#0E1525]/40 border border-[#C084FC]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#C084FC]/20 border border-[#C084FC]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaFileAlt className="text-[#C084FC] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Build Survey</div>
                        <div className="text-xs text-[#F8FAFC]/60">Create Form</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 Card */}
                  <div className="initial-hidden animate-fade-in-scale animation-delay-750 bg-[#0E1525]/40 border border-[#C084FC]/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#C084FC]/20 border border-[#C084FC]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaTachometerAlt className="text-[#C084FC] text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#F8FAFC]/90">Dashboard</div>
                        <div className="text-xs text-[#F8FAFC]/60">View Results</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="initial-hidden animate-fade-in-scale animation-delay-800">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[#C084FC] to-[#9767E4] hover:from-[#A855F7] hover:to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(192,132,252,0.4)] hover:shadow-[0_0_25px_rgba(192,132,252,0.6)]"
                  >
                    <a href="/publish-survey" className="w-full">
                      Launch Survey
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default JourneySection;
