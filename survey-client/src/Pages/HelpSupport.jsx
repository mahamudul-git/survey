import React, { useState } from "react";
import { useNavigation } from "../hooks/useNavigation.js";

const HelpSupport = () => {
  const { isMenuOpen } = useNavigation();
  const [activeTab, setActiveTab] = useState("faq");
  const [expandedFAQ, setExpandedFAQ] = useState(0); // First question expanded by default
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  const handleSupportCategoryClick = (categoryTitle) => {
    // Switch to contact tab and pre-fill the subject
    setActiveTab("contact");
    setContactForm(prev => ({
      ...prev,
      subject: `Support needed for: ${categoryTitle}`
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted:", contactForm);
    // Reset form
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const faqData = [
    {
      question: "How do I start taking surveys?",
      answer: "To start taking surveys, simply create an account, complete your profile setup, and navigate to the Dashboard. Available surveys will be displayed based on your demographics and interests."
    },
    {
      question: "How much can I earn from surveys?",
      answer: "Earnings vary based on survey length and complexity. Most surveys pay between $0.50 to $5.00. Premium surveys and research studies can pay significantly more. Your earning potential depends on your demographics and participation frequency."
    },
    {
      question: "When and how do I get paid?",
      answer: "Payments are processed weekly via PayPal, bank transfer, or gift cards. Minimum payout threshold is $10. Payments typically arrive within 3-5 business days after processing."
    },
    {
      question: "Why was I disqualified from a survey?",
      answer: "Disqualification happens when your responses don't match the target demographic for that specific survey. This is normal and helps ensure quality data. You'll still receive a small compensation for your time."
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to Dashboard > Account Settings to update your personal information, demographics, and interests. Keeping your profile updated helps us match you with more relevant surveys."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your data. We never sell your personal information to third parties and only share anonymized survey responses with research partners."
    }
  ];

  const supportCategories = [
    {
      title: "Account Issues",
      description: "Login problems, password reset, account verification",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    },
    {
      title: "Payment Questions",
      description: "Payment methods, processing times, minimum thresholds",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Survey Issues",
      description: "Technical problems, disqualifications, survey availability",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Technical Support",
      description: "Website issues, browser compatibility, mobile app",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    }
  ];

  const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );

  return (
    <div className="bg-slate-900 min-h-screen pt-20">
      <div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm bg-black/30 brightness-75' : ''}`}>
        {/* Header Section */}
        <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

          <div className="container mx-auto max-w-[1440px] px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  Help & Support
                </span>
              </h1>
              <p className="text-[#F8FAFC]/70 text-lg animate-fade-in-up animation-delay-200 md:text-xl max-w-2xl mx-auto">
                We're here to help you make the most of your SurveySight experience. 
                Find answers to common questions or get in touch with our support team.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-400">
              <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 rounded-full p-1 backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === "faq"
                      ? "bg-gradient-to-r from-[#9767E4] to-[#C084FC] text-white"
                      : "text-[#F8FAFC]/70 hover:text-white"
                  }`}
                >
                  FAQ
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === "contact"
                      ? "bg-gradient-to-r from-[#9767E4] to-[#C084FC] text-white"
                      : "text-[#F8FAFC]/70 hover:text-white"
                  }`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setActiveTab("support")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === "support"
                      ? "bg-gradient-to-r from-[#9767E4] to-[#C084FC] text-white"
                      : "text-[#F8FAFC]/70 hover:text-white"
                  }`}
                >
                  Support Categories
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            {activeTab === "faq" && (
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className={`bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-lg overflow-hidden hover:border-[#9767E4]/40 transition-all duration-300 animate-fade-in-up`}
                      style={{ animationDelay: `${100 + index * 50}ms` }}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-[#9767E4]/5 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-[#F8FAFC] pr-4">
                          {faq.question}
                        </h3>
                        <div className={`transform transition-transform duration-200 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                          <Icon 
                            path="M19 9l-7 7-7-7" 
                            className="w-5 h-5 text-[#9767E4] flex-shrink-0" 
                          />
                        </div>
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${
                        expandedFAQ === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      } overflow-hidden`}>
                        <div className="px-6 pb-6">
                          <div className="border-t border-[#9767E4]/15 pt-4">
                            <p className="text-[#F8FAFC]/70 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Form Section */}
            {activeTab === "contact" && (
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
                  {/* Contact Form - Left Side */}
                  <div className="lg:col-span-2 animate-fade-in-up animation-delay-100">
                    <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-lg p-8 h-full">
                      <h2 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
                        Send Us a Message
                      </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#F8FAFC]/70 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-[#0B111E]/40 border border-[#9767E4]/15 rounded-lg text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:outline-none focus:ring-2 focus:ring-[#9767E4] focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#F8FAFC]/70 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-[#0B111E]/40 border border-[#9767E4]/15 rounded-lg text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:outline-none focus:ring-2 focus:ring-[#9767E4] focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#F8FAFC]/70 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B111E]/40 border border-[#9767E4]/15 rounded-lg text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:outline-none focus:ring-2 focus:ring-[#9767E4] focus:border-transparent"
                        placeholder="What can we help you with?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#F8FAFC]/70 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-[#0B111E]/40 border border-[#9767E4]/15 rounded-lg text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:outline-none focus:ring-2 focus:ring-[#9767E4] focus:border-transparent resize-none"
                        placeholder="Describe your issue or question in detail..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#9767E4] to-[#C084FC] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                    </div>
                  </div>

                  {/* Contact Information Cards - Right Side */}
                  <div className="lg:col-span-1 animate-fade-in-up animation-delay-200">
                    <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-lg p-6 h-full">
                      <div className="space-y-5 flex flex-col justify-center h-full">
                        <div className="bg-[#0B111E]/25 border border-[#9767E4]/15 backdrop-blur-sm rounded-lg p-4 text-center hover:border-[#9767E4]/40 transition-all duration-300 group">
                          <div className="p-2 bg-[#9767E4]/10 rounded-lg w-fit mx-auto mb-3 group-hover:bg-[#9767E4]/20 transition-colors duration-300">
                            <Icon path="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-5 h-5 text-[#9767E4]" />
                          </div>
                          <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">Email Us</h3>
                          <p className="text-[#F8FAFC]/70 text-xs mb-2">Send us a message anytime</p>
                          <a href="mailto:support@surveysight.com" className="text-[#9767E4] hover:text-[#C084FC] transition-colors duration-300 text-sm">
                            support@surveysight.com
                          </a>
                        </div>
                        
                        <div className="bg-[#0B111E]/25 border border-[#26B2F2]/15 backdrop-blur-sm rounded-lg p-4 text-center hover:border-[#26B2F2]/40 transition-all duration-300 group">
                          <div className="p-2 bg-[#26B2F2]/10 rounded-lg w-fit mx-auto mb-3 group-hover:bg-[#26B2F2]/20 transition-colors duration-300">
                            <Icon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="w-5 h-5 text-[#26B2F2]" />
                          </div>
                          <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">Call Us</h3>
                          <p className="text-[#F8FAFC]/70 text-xs mb-2">Mon-Fri, 9AM-6PM EST</p>
                          <a href="tel:+1-555-123-4567" className="text-[#26B2F2] hover:text-[#06B6D4] transition-colors duration-300 text-sm">
                            +1 (555) 123-4567
                          </a>
                        </div>
                        
                        <div className="bg-[#0B111E]/25 border border-[#C084FC]/15 backdrop-blur-sm rounded-lg p-4 text-center hover:border-[#C084FC]/40 transition-all duration-300 group">
                          <div className="p-2 bg-[#C084FC]/10 rounded-lg w-fit mx-auto mb-3 group-hover:bg-[#C084FC]/20 transition-colors duration-300">
                            <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" className="w-5 h-5 text-[#C084FC]" />
                          </div>
                          <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">Visit Us</h3>
                          <p className="text-[#F8FAFC]/70 text-xs mb-2">Our headquarters</p>
                          <div className="text-[#C084FC] text-xs leading-relaxed">
                            <p>123 Survey Street</p>
                            <p>Research City, RC 12345</p>
                            <p>United States</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Support Categories Section */}
            {activeTab === "support" && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 animate-fade-in-up animation-delay-100">
                  <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">
                    How can we help you today?
                  </h2>
                  <p className="text-[#F8FAFC]/70">
                    Click on a category below to get assistance with specific issues
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {supportCategories.map((category, index) => (
                    <div
                      key={index}
                      onClick={() => handleSupportCategoryClick(category.title)}
                      className={`bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-lg p-6 hover:border-[#9767E4]/50 hover:bg-[#9767E4]/5 transition-all duration-300 group cursor-pointer animate-fade-in-up`}
                      style={{ animationDelay: `${200 + index * 50}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-[#9767E4]/10 rounded-lg group-hover:bg-[#9767E4]/20 transition-colors duration-300">
                          <Icon path={category.icon} className="w-6 h-6 text-[#9767E4]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#C084FC] transition-colors duration-300">
                            {category.title}
                          </h3>
                          <p className="text-[#F8FAFC]/70 mb-3">
                            {category.description}
                          </p>
                          <div className="flex items-center text-[#9767E4] text-sm font-medium">
                            <span>Get help with this</span>
                            <Icon path="M9 5l7 7-7 7" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Help Options */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#0B111E]/30 border border-[#26B2F2]/15 backdrop-blur-sm rounded-lg p-6 text-center hover:border-[#26B2F2]/50 hover:bg-[#26B2F2]/5 transition-all duration-300 group cursor-pointer animate-fade-in-up animation-delay-400">
                    <div className="p-3 bg-[#26B2F2]/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-[#26B2F2]/20 transition-colors duration-300">
                      <Icon path="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" className="w-6 h-6 text-[#26B2F2]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#26B2F2] transition-colors duration-300">User Guide</h3>
                    <p className="text-[#F8FAFC]/70 text-sm mb-4">
                      Step-by-step tutorials and guides
                    </p>
                    <div className="flex items-center justify-center text-[#26B2F2] text-sm font-medium">
                      <span>View Documentation</span>
                      <Icon path="M9 5l7 7-7 7" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-[#0B111E]/30 border border-[#10B981]/15 backdrop-blur-sm rounded-lg p-6 text-center hover:border-[#10B981]/50 hover:bg-[#10B981]/5 transition-all duration-300 group cursor-pointer animate-fade-in-up animation-delay-450">
                    <div className="p-3 bg-[#10B981]/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-[#10B981]/20 transition-colors duration-300">
                      <Icon path="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#10B981] transition-colors duration-300">Live Chat</h3>
                    <p className="text-[#F8FAFC]/70 text-sm mb-4">
                      Real-time support available 24/7
                    </p>
                    <div className="flex items-center justify-center text-[#10B981] text-sm font-medium">
                      <span>Start Chat</span>
                      <Icon path="M9 5l7 7-7 7" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="bg-[#0B111E]/30 border border-[#C084FC]/15 backdrop-blur-sm rounded-lg p-6 text-center hover:border-[#C084FC]/50 hover:bg-[#C084FC]/5 transition-all duration-300 group cursor-pointer animate-fade-in-up animation-delay-500">
                    <div className="p-3 bg-[#C084FC]/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-[#C084FC]/20 transition-colors duration-300">
                      <Icon path="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" className="w-6 h-6 text-[#C084FC]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#C084FC] transition-colors duration-300">Video Tutorials</h3>
                    <p className="text-[#F8FAFC]/70 text-sm mb-4">
                      Watch detailed how-to videos
                    </p>
                    <div className="flex items-center justify-center text-[#C084FC] text-sm font-medium">
                      <span>Watch Videos</span>
                      <Icon path="M9 5l7 7-7 7" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default HelpSupport;
