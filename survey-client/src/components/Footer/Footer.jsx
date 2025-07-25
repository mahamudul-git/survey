import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="font-semibold text-lg">SurveyApp</span>
          <nav className="flex gap-4 text-sm">
            <a href="/" className="hover:text-blue-500 transition">Home</a>
            <a href="/about" className="hover:text-blue-500 transition">About</a>
            <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
            <a href="/privacy" className="hover:text-blue-500 transition">Privacy</a>
          </nav>
        </div>
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} SurveyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
