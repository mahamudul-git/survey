import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-['Pacifico'] text-emerald-400">SurveySight</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              The next-generation survey platform connecting companies with real, verified users for authentic insights and meaningful earnings.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Platform</h3>
            <div className="space-y-3">
              <Link to="/earn-with-us" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Earn with Us</Link>
              <Link to="/publish-survey" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Publish Survey</Link>
              <Link to="/resources" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Resources</Link>
              <Link to="/security" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Security</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Users</h3>
            <div className="space-y-3">
              <Link to="/surveyors" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">For Surveyors</Link>
              <Link to="/publishers" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">For Publishers</Link>
              <Link to="/verification" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Verification</Link>
              <Link to="/rewards" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Rewards</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <div className="space-y-3">
              <Link to="/help-support" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Help & Support</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Contact Us</Link>
              <Link to="/api" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">API Docs</Link>
              <Link to="/waitlist" className="block text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Join Waitlist</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 SurveySight. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
