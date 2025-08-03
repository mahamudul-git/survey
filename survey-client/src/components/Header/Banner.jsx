import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex pt-20 items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto w-full h-full px-4 flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight font-poppins">
              Bridging Companies
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                With Real Audiences
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-poppins font-medium">
              SurveySight connects researchers and companies with verified survey
              participants.
              <br className="hidden sm:block" /> Get authentic insights while
              users earn valuable tokens.
            </p>
            <div className="space-y-6">
              <Link
                to="/waitlist"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 hover:-translate-y-1 text-lg font-semibold font-poppins shadow-xl"
              >
                <i className="ri-rocket-line w-6 h-6 flex items-center justify-center mr-3"></i>
                Join Early Access Waitlist
              </Link>
              <p className="text-sm text-gray-500 font-poppins">
                🚀 Early launch - Be among the first to experience SurveySight
              </p>
            </div>
          </div>
          {/* Right Side - Image Collage */}
          <div className="relative h-[600px] w-full">
            {/* Background Image 1 - Top Left */}
            <div className="absolute top-0 left-0 w-48 h-32 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-500 hover:scale-110">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20office%20environment%20with%20diverse%20professionals%20collaborating%20on%20surveys%20and%20market%20research%2C%20clean%20bright%20workspace%20with%20laptops%20and%20charts%2C%20professional%20business%20atmosphere%20with%20natural%20lighting%20and%20contemporary%20design&width=400&height=260&seq=hero1&orientation=landscape"
                alt="Professional Survey Research"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Background Image 2 - Top Right */}
            <div className="absolute top-8 right-0 w-56 h-40 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:-rotate-6 transition-all duration-500 hover:scale-110">
              <img
                src="https://readdy.ai/api/search-image?query=Happy%20diverse%20group%20of%20people%20using%20smartphones%20and%20tablets%20to%20participate%20in%20surveys%2C%20modern%20casual%20setting%20with%20bright%20colors%2C%20engaged%20users%20earning%20rewards%20through%20digital%20platforms%2C%20contemporary%20lifestyle%20photography&width=460&height=320&seq=hero2&orientation=landscape"
                alt="Survey Participants"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Background Image 3 - Bottom Left */}
            <div className="absolute bottom-12 left-8 w-44 h-36 rounded-3xl overflow-hidden shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-500 hover:scale-110">
              <img
                src="https://readdy.ai/api/search-image?query=Digital%20analytics%20dashboard%20displaying%20survey%20results%20and%20data%20insights%2C%20modern%20interface%20with%20colorful%20charts%20graphs%20and%20statistics%2C%20futuristic%20business%20intelligence%20visualization%20with%20clean%20design%20elements&width=380&height=300&seq=hero3&orientation=landscape"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Background Image 4 - Bottom Right */}
            <div className="absolute bottom-0 right-12 w-52 h-44 rounded-3xl overflow-hidden shadow-2xl transform -rotate-8 hover:-rotate-12 transition-all duration-500 hover:scale-110">
              <img
                src="https://readdy.ai/api/search-image?query=Cryptocurrency%20tokens%20and%20digital%20rewards%20floating%20in%20space%2C%20golden%20coins%20with%20emerald%20and%20blue%20gradients%2C%20modern%20fintech%20visualization%20representing%20earnings%20and%20rewards%2C%20clean%20minimalist%20background%20with%20premium%20feel&width=440&height=360&seq=hero4&orientation=landscape"
                alt="Digital Rewards"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Top Layer Central Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-110 z-10 border-4 border-white/80">
              <img
                src="https://readdy.ai/api/search-image?query=Holographic%20connection%20bridge%20between%20companies%20and%20survey%20participants%2C%20futuristic%20digital%20networking%20visualization%20with%20flowing%20data%20streams%2C%20modern%20tech%20interface%20connecting%20businesses%20with%20audiences%2C%20ethereal%20design%20with%20purple%20blue%20gradients&width=520&height=380&seq=hero5&orientation=landscape"
                alt="SurveySight Connection Platform"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-bold text-lg font-poppins drop-shadow-lg">
                  SurveySight
                </div>
                <div className="text-sm opacity-90 font-poppins">
                  Connecting Platform
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute top-16 left-16 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-60 animate-bounce"></div>
            <div
              className="absolute top-32 right-20 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-50"
              style={{ animation: "bounce 2s infinite" }}
            ></div>
            <div
              className="absolute bottom-32 left-20 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-70"
              style={{ animation: "bounce 3s infinite" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
