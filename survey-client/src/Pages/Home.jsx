import React from "react";
import Marquee from "react-fast-marquee";
import Banner from "../components/Header/Banner";
import JourneySection from "../components/Homepage/JourneySection";
import FeatureGridSection from "../components/Homepage/FeatureGridSection";
import StatsSection from "../components/Homepage/StatsSection";
import ChallengesSection from "../components/Homepage/ChallengesSection";
import TestimonialSection from "../components/Homepage/TestimonialSection";
import CTASection from "../components/Homepage/CTASection";
import Nav from "../components/Header/Nav";
import { useNavigation } from "../hooks/useNavigation.js";

const Home = () => {
  const { isMenuOpen } = useNavigation();
  
  return (
    <div className="bg-slate-900">
      {/* Content wrapper with conditional blur and shadow */}
      <div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm bg-black/30  brightness-75' : ''}`}>
        <Banner />
        {/* Trusted Partners Section */}
        <section className="relative bg-slate-900/0 py-10 overflow-hidden">
        <div className="container mx-auto  max-w-[1440px] relative">
          <div className="initial-hidden animate-fade-in-up animation-delay-300 relative">
            {/* Glassmorphism Container */}
            <div className="relative rounded-3xl border border-[#9767E4]/20 bg-[#0B111E]/40 px-8 backdrop-blur-sm">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#9767E4]/5 via-transparent to-[#26B2F2]/5"></div>
              
              <div className="relative">
                <Marquee pauseOnHover={true} speed={40} gradient={false} className="">
                  {[
                    { id: 1, name: "Unilever Bangladesh", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Unilever.svg/1200px-Unilever.svg.png" },
                    { id: 2, name: "BAT Bangladesh", image_url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Bat_bangladesh_logo.png" },
                    { id: 3, name: "bKash", image_url: "https://wp.logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png" },
                    { id: 4, name: "Grameenphone", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Grameenphone_Logo_GP_Logo.svg/1200px-Grameenphone_Logo_GP_Logo.svg.png" },
                    { id: 5, name: "Robi", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_of_Robi_Axiata.svg/1200px-Logo_of_Robi_Axiata.svg.png" },
                    { id: 6, name: "Aarong", image_url: "https://upload.wikimedia.org/wikipedia/bn/thumb/0/0a/%E0%A6%86%E0%A6%A1%E0%A6%BC%E0%A6%82-%E0%A6%8F%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.svg/1200px-%E0%A6%86%E0%A6%A1%E0%A6%BC%E0%A6%82-%E0%A6%8F%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.svg.png" },
                    { id: 7, name: "PRAN-RFL Group", image_url: "https://images.seeklogo.com/logo-png/25/2/pran-logo-png_seeklogo-258211.png" },
                    { id: 8, name: "Square Group", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Seal_of_Square_Group.svg/1647px-Seal_of_Square_Group.svg.png" },
                    { id: 10, name: "BRAC Bank", image_url: "https://bnbbd.com/wp-content/uploads/2021/08/BRACK-BANK-2.png" },
                  ].map((logo) => (
                    <div key={logo.id} className="flex flex-col items-center py-8 mx-12 group">
                      {/* Logo Container with Hover Effect */}
                      <div className="relative p-4 rounded-xl bg-[#F8FAFC]/5 border border-[#9767E4]/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#9767E4]/10 group-hover:border-[#9767E4]/30 group-hover:scale-105">
                        <img
                          src={logo.image_url}
                          alt={logo.name}
                          title={logo.name}
                          className="w-16 h-16 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                          style={{ minWidth: 64, minHeight: 64 }}
                        />
                      </div>
                      <span className="mt-3 text-sm text-[#F8FAFC]/60 font-medium group-hover:text-[#F8FAFC]/80 transition-colors duration-300">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Journey Section - Full width background, content in container */}
      <JourneySection />
      {/* Feature Grid Section - Why Choose SurveySight? */}
      <FeatureGridSection />
      {/* Stats Section - Trusted by Millions */}
      <StatsSection />
      <ChallengesSection />
      <TestimonialSection />
      <CTASection />
      </div>
    </div>
  );
};

export default Home;
