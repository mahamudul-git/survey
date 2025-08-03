import { FaMoneyBillWave, FaUserPlus, FaShieldAlt, FaSatelliteDish, FaCoins, FaChartBar, FaUserCog, FaWallet, FaFileAlt, FaTachometerAlt } from "react-icons/fa";

const JourneySection = () => (
  <section className="py-32 bg-gradient-to-b from-white to-gray-50 w-full">
    <div className="container mx-auto max-w-[1440px] px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
          We Build the Bridge Between
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you're looking to earn or gather insights, we've streamlined the journey for maximum efficiency
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Earn with Us */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-150"></div>
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-emerald-100 hover:border-emerald-200 transition-all duration-150 transform hover:scale-[1.02]">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMoneyBillWave className="text-white text-3xl w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Earn with Us</h3>
              <p className="text-gray-600 text-lg mb-6">Transform your opinions into earnings</p>
            </div>
            <div className="flex items-center justify-center gap-0 mb-8">
              {/* Earn with Us Steps */}
              <div className="flex items-center gap-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                    <FaUserPlus className="text-emerald-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">Register</div>
                </div>
                <div className="flex items-center" style={{alignItems: 'center'}}>
                  <div className="w-10 h-1 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full mx-2" style={{marginTop: '-8px'}}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                    <FaShieldAlt className="text-emerald-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">KYC Verification</div>
                </div>
                <div className="flex items-center" style={{alignItems: 'center'}}>
                  <div className="w-10 h-1 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full mx-2" style={{marginTop: '-8px'}}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                    <FaSatelliteDish className="text-emerald-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">Get Matched</div>
                </div>
                <div className="flex items-center" style={{alignItems: 'center'}}>
                  <div className="w-10 h-1 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full mx-2" style={{marginTop: '-8px'}}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                    <FaCoins className="text-emerald-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">Earn Tokens</div>
                </div>
              </div>
            </div>
            <a href="/earn-with-us" className="block w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white py-4 rounded-2xl hover:shadow-xl hover:shadow-emerald-400/30 transition-all duration-150 cursor-pointer whitespace-nowrap hover:scale-105 text-center font-semibold">
              Start Earning
            </a>
          </div>
        </div>
        {/* Publish with Us */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-150"></div>
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-200 transition-all duration-150 transform hover:scale-[1.02]">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartBar className="text-white text-3xl w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Publish with Us</h3>
              <p className="text-gray-600 text-lg mb-6">Get authentic insights from real users</p>
            </div>
            <div className="flex items-center justify-center gap-0 mb-8">
              {/* Publish with Us Steps */}
              <div className="flex items-center gap-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <FaUserCog className="text-blue-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">Register</div>
                </div>
                <div className="flex items-center" style={{alignItems: 'center'}}>
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full mx-2" style={{marginTop: '-8px'}}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <FaWallet className="text-blue-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">Buy Tokens</div>
                </div>
                <div className="flex items-center" style={{alignItems: 'center'}}>
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full mx-2" style={{marginTop: '-8px'}}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <FaFileAlt className="text-blue-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">Build Survey</div>
                </div>
                <div className="flex items-center" style={{alignItems: 'center'}}>
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full mx-2" style={{marginTop: '-8px'}}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <FaTachometerAlt className="text-blue-600 text-lg w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm">Dashboard</div>
                </div>
              </div>
            </div>
            <a href="/publish-survey" className="block w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-150 cursor-pointer whitespace-nowrap hover:scale-105 text-center font-semibold">
              Launch Survey
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default JourneySection;
