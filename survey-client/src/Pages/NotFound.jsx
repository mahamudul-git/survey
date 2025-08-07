import { Link } from "react-router-dom";
import { useNavigation } from "../hooks/useNavigation.js";
import Button from "../components/UI/Button";

// Icon component for custom SVG icons
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

export default function NotFound() {
  const { isMenuOpen } = useNavigation();

  return (
    <div className="bg-slate-900">
      {/* Content wrapper with conditional blur */}
      <div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm bg-black/30 brightness-75' : ''}`}>
        <section className="relative bg-slate-900 min-h-screen flex items-center justify-center overflow-hidden  pt-36  pb-12 sm:py-16 lg:py-20 xl:py-36">
          {/* Background Effects - matching your theme */}
          <div className="absolute inset-0">
            <div className="absolute top-[35%] left-[15%] w-64 h-64 rounded-full bg-[#9767E4]/20 blur-[32px]"></div>
            <div className="absolute top-[40%] right-[15%] w-96 h-96 rounded-full bg-[#26B2F2]/20 blur-[32px]"></div>
            <div className="absolute bottom-[30%] left-[60%] w-48 h-48 rounded-full bg-[#9767E4]/20 blur-[32px]"></div>
          </div>

          <div className="container mx-auto max-w-[1440px] px-6 relative">
            <div className="text-center space-y-8">
              {/* 404 Number with gradient */}
              <div className="initial-hidden animate-fade-in-up">
                <h1 className="text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  404
                </h1>
              </div>

              {/* Error Message */}
              <div className="initial-hidden animate-fade-in-up animation-delay-100 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                  Oops! Page Not Found
                </h2>
                <p className="text-xl text-[#F8FAFC]/80 max-w-[600px] mx-auto leading-relaxed">
                  The page you're looking for seems to have vanished into the digital void.
                  Don't worry, let's get you back on track!
                </p>
              </div>

              {/* Glassmorphism Container with Navigation Options */}
              <div className="initial-hidden animate-fade-in-up animation-delay-200 max-w-4xl mx-auto">
                <div className="relative rounded-3xl border border-[#9767E4]/20 bg-[#0B111E]/40 p-8 backdrop-blur-sm">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#9767E4]/5 via-transparent to-[#26B2F2]/5"></div>
                  
                  <div className="relative space-y-8">
                    {/* Quick Actions Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Link 
                        to="/" 
                        className="group p-6 rounded-xl bg-[#0E1525]/40 border border-[#9767E4]/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#9767E4]/10 hover:border-[#9767E4]/30 hover:scale-105"
                      >
                        <Icon 
                          path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                          className="w-8 h-8 text-[#9767E4] mx-auto mb-3 group-hover:animate-bounce" 
                        />
                        <h4 className="font-semibold text-[#F8FAFC] mb-2">Home</h4>
                        <p className="text-sm text-[#F8FAFC]/60">Return to homepage</p>
                      </Link>

                      <Link 
                        to="/earn-with-us" 
                        className="group p-6 rounded-xl bg-[#0E1525]/40 border border-[#26B2F2]/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#26B2F2]/10 hover:border-[#26B2F2]/30 hover:scale-105"
                      >
                        <Icon 
                          path="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                          className="w-8 h-8 text-[#26B2F2] mx-auto mb-3 group-hover:animate-bounce" 
                        />
                        <h4 className="font-semibold text-[#F8FAFC] mb-2">Earn With Us</h4>
                        <p className="text-sm text-[#F8FAFC]/60">Start earning now</p>
                      </Link>

                      <Link 
                        to="/help-support" 
                        className="group p-6 rounded-xl bg-[#0E1525]/40 border border-[#9767E4]/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#9767E4]/10 hover:border-[#9767E4]/30 hover:scale-105"
                      >
                        <Icon 
                          path="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                          className="w-8 h-8 text-[#C084FC] mx-auto mb-3 group-hover:animate-bounce" 
                        />
                        <h4 className="font-semibold text-[#F8FAFC] mb-2">Help & Support</h4>
                        <p className="text-sm text-[#F8FAFC]/60">Get assistance</p>
                      </Link>

                      <div 
                        onClick={() => window.history.back()}
                        className="group p-6 rounded-xl bg-[#0E1525]/40 border border-[#26B2F2]/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#26B2F2]/10 hover:border-[#26B2F2]/30 hover:scale-105 cursor-pointer"
                      >
                        <Icon 
                          path="M10 19l-7-7m0 0l7-7m-7 7h18" 
                          className="w-8 h-8 text-[#26B2F2] mx-auto mb-3 group-hover:animate-bounce" 
                        />
                        <h4 className="font-semibold text-[#F8FAFC] mb-2">Go Back</h4>
                        <p className="text-sm text-[#F8FAFC]/60">Previous page</p>
                      </div>
                    </div>

                    {/* Main Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button 
                        as={Link}
                        to="/"
                        size="lg"
                        className="bg-[#9767E4] hover:bg-[#8B5CF6] text-[#0F1729] font-medium shadow-[0_0_15px_rgba(186,165,255,0.5)]"
                      >
                        <Icon 
                          path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                          className="w-5 h-5 mr-2" 
                        />
                        Take Me Home
                      </Button>
                      
                      <Button 
                        variant="outline"
                        size="lg"
                        as={Link}
                        to="/earn-with-us"
                        className="border-[#9767E4]/30 text-[#9767E4] hover:bg-[#9767E4]/10"
                      >
                        <Icon 
                          path="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                          className="w-5 h-5 mr-2" 
                        />
                        Start Earning
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS animations matching your theme */}
      <style jsx>{`
        .initial-hidden {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
