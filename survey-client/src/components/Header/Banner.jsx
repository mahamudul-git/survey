import React from "react";
import {FaArrowRight } from "react-icons/fa";
import Button from "../UI/Button";
import useCountUp from "../../hooks/useCountUp";

const HeroSection = () => {
  const surveysCount = useCountUp(12, 800, 650);
  const responsesCount = useCountUp(284, 1200, 800);

  return (
    <section className="relative bg-transparent pt-36 md:pt-[170px] pb-[90px] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-[215px] left-[374px] w-64 h-64 rounded-full bg-[#9767E4]/20 blur-[32px]"></div>
          <div className="absolute top-[246px] left-[747px] w-96 h-96 rounded-full bg-[#26B2F2]/20 blur-[32px]"></div>
          <div className="absolute top-[417px] left-[817px] w-48 h-48 rounded-full bg-[#9767E4]/20 blur-[32px]"></div>
        </div>

        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="grid lg:grid-cols-2 gap-3 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium">
                Powerful Survey Platform
              </div>
              
              <h1 className="initial-hidden animate-fade-in-up animation-delay-100 text-5xl lg:text-6xl font-bold leading-none bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                Create Custom Surveys
                <br />
                with Powerful Analytics
              </h1>
              
              <p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl text-[#F8FAFC]/80 max-w-[600px] leading-relaxed">
                Build forms, collect responses, and visualize data all in one
                place. Get insights that matter.
              </p>
              
              <div className="initial-hidden animate-fade-in-up animation-delay-300 flex flex-wrap gap-3 pt-4">
                <Button>
                  Join Waitlist
                </Button>
                <Button variant="outline" className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10">
                  Contact Us
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="initial-hidden mt-6 md:mt-0 animate-slide-in-right animation-delay-400 relative max-w-[500px] mx-auto">
                {/* Main Dashboard Container */}
                <div className="relative w-full rounded-2xl border border-[#9767E4]/20 bg-[#0B111E]/20">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9767E4]/30 to-[#26B2F2]/30"></div>

                  {/* Content Container */}
                  <div className="relative p-8 space-y-6">
                    {/* Response Rate Chart Card */}
                    <div className="initial-hidden animate-fade-in-scale animation-delay-500 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4">
                      {/* Chart Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-5 h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.7002 2.50024V15.8336C2.7002 16.2756 2.87579 16.6995 3.18835 17.0121C3.50091 17.3246 3.92483 17.5002 4.36686 17.5002H17.7002" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15.2002 14.1669V7.50024" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.0332 14.167V4.16699" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.86719 14.167V11.667" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="initial-hidden animate-fade-in-up-small animation-delay-500 text-[#F8FAFC]/90 font-medium text-base">Response Rate</span>
                      </div>

                      {/* Bar Chart */}
                      <div className="h-30 bg-[#9767E4]/20 rounded-2xl p-3 flex items-end justify-center gap-1">
                        <div className="flex-1 flex flex-col justify-end items-start h-9 px-1">
                          <div 
                            className="w-full bg-[#9767E4]/60 rounded-xl animate-grow-height animation-delay-600"
                            style={{ '--final-height': '36px', height: '0px' }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end items-start h-14 px-1">
                          <div 
                            className="w-full bg-[#9767E4]/70 rounded-xl animate-grow-height animation-delay-650"
                            style={{ '--final-height': '54px', height: '0px' }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end items-start h-24 px-1">
                          <div 
                            className="w-full bg-[#9767E4]/80 rounded-xl animate-grow-height animation-delay-700"
                            style={{ '--final-height': '96px', height: '0px' }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end items-start h-18 px-1">
                          <div 
                            className="w-full bg-[#9767E4]/90 rounded-xl animate-grow-height animation-delay-750"
                            style={{ '--final-height': '72px', height: '0px' }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end items-start h-27 px-1">
                          <div 
                            className="w-full bg-[#9767E4] rounded-xl animate-grow-height animation-delay-800"
                            style={{ '--final-height': '108px', height: '0px' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Cards Container */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Surveys Card */}
                      <div className="initial-hidden animate-fade-in-scale animation-delay-600 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4">
                        <div className="initial-hidden animate-fade-in-up-small animation-delay-600 text-sm text-[#F8FAFC]/90 font-medium mb-2">Surveys</div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-[#9767E4]/20">
                            <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.2002 22.6001C17.723 22.6001 22.2002 18.1229 22.2002 12.6001C22.2002 7.07725 17.723 2.6001 12.2002 2.6001C6.67735 2.6001 2.2002 7.07725 2.2002 12.6001C2.2002 18.1229 6.67735 22.6001 12.2002 22.6001Z" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.2002 12.6001H16.2002" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.2002 8.6001V16.6001" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                            {surveysCount}
                          </div>
                        </div>
                      </div>

                      {/* Responses Card */}
                      <div className="initial-hidden animate-fade-in-scale animation-delay-750 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4">
                        <div className="initial-hidden animate-fade-in-up-small animation-delay-850 text-sm text-[#F8FAFC]/90 font-medium mb-2">Responses</div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-[#9767E4]/20">
                            <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.2002 3.6001V19.6001C3.2002 20.1305 3.41091 20.6392 3.78598 21.0143C4.16105 21.3894 4.66976 21.6001 5.2002 21.6001H21.2002" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18.2002 17.6001V9.6001" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M13.2002 17.6001V5.6001" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.2002 17.6001V14.6001" stroke="#9767E4" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                            {responsesCount}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
