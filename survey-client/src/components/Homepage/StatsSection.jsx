import { FaUser, FaFileAlt, FaBuilding, FaShieldAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import useCountUp from "../../hooks/useCountUp";

const stats = [
  { 
    number: '2.5M+', 
    value: 2500000,
    suffix: 'M+',
    label: 'Verified Users', 
    icon: <FaUser className="text-white text-2xl w-8 h-8" />,
    color: "from-[#9767E4]/15 to-[#26B2F2]/15",
    borderColor: "[#9767E4]/20"
  },
  { 
    number: '150K+', 
    value: 150000,
    suffix: 'K+',
    label: 'Surveys Completed', 
    icon: <FaFileAlt className="text-white text-2xl w-8 h-8" />,
    color: "from-[#26B2F2]/15 to-[#C084FC]/15",
    borderColor: "[#26B2F2]/20"
  },
  { 
    number: '500+', 
    value: 500,
    suffix: '+',
    label: 'Global Companies', 
    icon: <FaBuilding className="text-white text-2xl w-8 h-8" />,
    color: "from-[#C084FC]/15 to-[#9767E4]/15",
    borderColor: "[#C084FC]/20"
  },
  { 
    number: '98%', 
    value: 98,
    suffix: '%',
    label: 'Data Accuracy', 
    icon: <FaShieldAlt className="text-white text-2xl w-8 h-8" />,
    color: "from-[#9767E4]/15 to-[#C084FC]/15",
    borderColor: "[#9767E4]/20"
  }
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section is fully visible
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [isVisible]);

  // Create animated counters for each stat - only start when visible
  const usersCount = useCountUp(2.5, 1500, isVisible ? 500 : 0, isVisible);
  const surveysCount = useCountUp(150, 1200, isVisible ? 600 : 0, isVisible);
  const companiesCount = useCountUp(500, 1000, isVisible ? 700 : 0, isVisible);
  const accuracyCount = useCountUp(98, 800, isVisible ? 800 : 0, isVisible);

  const getFormattedCount = (index, count) => {
    switch(index) {
      case 0: return `${count}M+`; // Users
      case 1: return `${count}K+`; // Surveys
      case 2: return `${count}+`;   // Companies
      case 3: return `${count}%`;   // Accuracy
      default: return count;
    }
  };

  const getCountValue = (index) => {
    switch(index) {
      case 0: return usersCount;
      case 1: return surveysCount;
      case 2: return companiesCount;
      case 3: return accuracyCount;
      default: return 0;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-transparent w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 relative">
        <div className="text-center mb-20">
          <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
            Global Impact
          </div>
          <h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] mb-6">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
              Millions Worldwide
            </span>
          </h2>
          <p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl text-[#F8FAFC]/70 max-w-2xl mx-auto">
            Join the largest verified survey community in the world with real-time insights and data-driven results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const countValue = getCountValue(index);
            const formattedCount = getFormattedCount(index, countValue);
            
            return (
              <div key={index} className={`initial-hidden animate-fade-in-scale animation-delay-${300 + (index * 100)} group relative`}>
                <div className={`relative rounded-2xl border border-${stat.borderColor} bg-[#0B111E]/20 p-8 text-center hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#F8FAFC] to-[#F8FAFC]/80 bg-clip-text text-transparent mb-2">
                      {formattedCount}
                    </div>
                    <div className="text-[#F8FAFC]/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
