import React from "react";
import Marquee from "react-fast-marquee";
import Banner from "../components/Header/Banner";
import JourneySection from "../components/Homepage/JourneySection";
import FeatureGridSection from "../components/Homepage/FeatureGridSection";
import StatsSection from "../components/Homepage/StatsSection";
import ChallengesSection from "../components/Homepage/ChallengesSection";
import TestimonialSection from "../components/Homepage/TestimonialSection";
import CTASection from "../components/Homepage/CTASection";



const Home = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto max-w-[1440px]">
        <div className="py-8  px-6">
          <Marquee pauseOnHover={false} speed={50} gradient={true} className="">
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
              <div key={logo.id} className="flex flex-col items-center mx-8">
                <img
                  src={logo.image_url}
                  alt={logo.name}
                  title={logo.name}
                  className="w-20 h-20 object-contain"
                  style={{ minWidth: 80, minHeight: 80 }}
                />
                <span className="mt-2 text-xs text-gray-500 font-semibold">{logo.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
       
      </div>
      {/* Journey Section - Full width background, content in container */}
      <JourneySection />
      {/* Feature Grid Section - Why Choose SurveySight? */}
      <FeatureGridSection />
      {/* Stats Section - Trusted by Millions */}
      <StatsSection />
      <ChallengesSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default Home;
