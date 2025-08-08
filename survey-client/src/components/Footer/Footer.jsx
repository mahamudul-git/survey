import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 border-t border-[#9767E4]/20 pt-14 md:pt-32 pb-16 w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="relative">
        <div className="absolute inset-0"></div>
        
        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                
                <span className="text-3xl font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  
                  SurveySight
                </span>
              </div>
              <p className="text-[#F8FAFC]/70 text-lg leading-relaxed mb-6 max-w-md">
                The next-generation survey platform connecting companies with real, verified users for authentic insights and meaningful earnings.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#0B111E]/40 border border-[#9767E4]/20 rounded-full flex items-center justify-center hover:bg-[#9767E4]/20 hover:border-[#9767E4]/40 transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter className="w-5 h-5 text-[#9767E4]" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#0B111E]/40 border border-[#26B2F2]/20 rounded-full flex items-center justify-center hover:bg-[#26B2F2]/20 hover:border-[#26B2F2]/40 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="w-5 h-5 text-[#26B2F2]" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#0B111E]/40 border border-[#C084FC]/20 rounded-full flex items-center justify-center hover:bg-[#C084FC]/20 hover:border-[#C084FC]/40 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook className="w-5 h-5 text-[#C084FC]" />
                </a>
              </div>
            </div>
            
            {/* Platform Section */}
            <div className="group">
              <h3 className="text-lg font-bold mb-6 text-[#F8FAFC]">Platform</h3>
              <div className="space-y-4">
                <Link 
                  to="/earn-with-us" 
                  className="block text-[#F8FAFC]/70 hover:text-[#9767E4] transition-all duration-300 hover:translate-x-1"
                >
                  Earn with Us
                </Link>
                <Link 
                  to="/publish-survey" 
                  className="block text-[#F8FAFC]/70 hover:text-[#26B2F2] transition-all duration-300 hover:translate-x-1"
                >
                  Publish Survey
                </Link>
                <Link 
                  to="/resources" 
                  className="block text-[#F8FAFC]/70 hover:text-[#C084FC] transition-all duration-300 hover:translate-x-1"
                >
                  Resources
                </Link>
                <Link 
                  to="/security" 
                  className="block text-[#F8FAFC]/70 hover:text-[#9767E4] transition-all duration-300 hover:translate-x-1"
                >
                  Security
                </Link>
              </div>
            </div>
            
            {/* Users Section */}
            <div className="group">
              <h3 className="text-lg font-bold mb-6 text-[#F8FAFC]">Users</h3>
              <div className="space-y-4">
                <Link 
                  to="/surveyors" 
                  className="block text-[#F8FAFC]/70 hover:text-[#26B2F2] transition-all duration-300 hover:translate-x-1"
                >
                  For Surveyors
                </Link>
                <Link 
                  to="/publishers" 
                  className="block text-[#F8FAFC]/70 hover:text-[#9767E4] transition-all duration-300 hover:translate-x-1"
                >
                  For Publishers
                </Link>
                <Link 
                  to="/verification" 
                  className="block text-[#F8FAFC]/70 hover:text-[#C084FC] transition-all duration-300 hover:translate-x-1"
                >
                  Verification
                </Link>
                <Link 
                  to="/rewards" 
                  className="block text-[#F8FAFC]/70 hover:text-[#26B2F2] transition-all duration-300 hover:translate-x-1"
                >
                  Rewards
                </Link>
              </div>
            </div>
            
            {/* Support Section */}
            <div className="group">
              <h3 className="text-lg font-bold mb-6 text-[#F8FAFC]">Support</h3>
              <div className="space-y-4">
                <Link 
                  to="/help-support" 
                  className="block text-[#F8FAFC]/70 hover:text-[#9767E4] transition-all duration-300 hover:translate-x-1"
                >
                  Help & Support
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-[#F8FAFC]/70 hover:text-[#C084FC] transition-all duration-300 hover:translate-x-1"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/api" 
                  className="block text-[#F8FAFC]/70 hover:text-[#26B2F2] transition-all duration-300 hover:translate-x-1"
                >
                  API Docs
                </Link>
                <Link 
                  to="/waitlist" 
                  className="block text-[#F8FAFC]/70 hover:text-[#9767E4] transition-all duration-300 hover:translate-x-1"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-[#9767E4]/20 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[#F8FAFC]/60 mb-4 md:mb-0">
                © 2025 SurveySight. All rights reserved.
              </div>
              <div className="flex space-x-8">
                <Link 
                  to="/privacy" 
                  className="text-[#F8FAFC]/60 hover:text-[#9767E4] transition-all duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-[#F8FAFC]/60 hover:text-[#26B2F2] transition-all duration-300"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/cookies" 
                  className="text-[#F8FAFC]/60 hover:text-[#C084FC] transition-all duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
