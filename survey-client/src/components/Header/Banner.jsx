
import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#085c4e] min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-xl md:text-2xl font-medium mb-2">Tired of screenouts and disqualifications?</h2>
          <h1 className="text-green-400 text-3xl md:text-5xl font-bold mb-4 leading-tight">
            EARN CASH WITH <br className="hidden md:block" /> TOPSURVEYS
            <span className="inline-block align-middle ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">.APP</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <div className="flex items-center gap-2 bg-[#0a6c5c] border border-green-400 rounded-full px-4 py-2 text-green-300 font-semibold">
              <span className="text-green-400 text-lg">✔</span> No Disqualifications
            </div>
            <div className="flex items-center gap-2 bg-[#0a6c5c] border border-green-400 rounded-full px-4 py-2 text-green-300 font-semibold">
              <span className="text-green-400 text-lg">✔</span> No Screenouts
            </div>
          </div>
        </div>

        {/* Right Side: Card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <span className="text-green-600 text-3xl">$</span>
              </div>
            </div>
            <h2 className="text-center text-2xl font-bold mb-2">Start Earning Now</h2>
            <p className="text-center text-gray-600 mb-4">Join TopSurveys by entering your email</p>
            <form className="flex flex-col gap-3">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 text-left">Email*</label>
              <input id="email" type="email" placeholder="Enter your email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-4 py-2 mt-2">Continue</button>
            </form>
            <div className="mt-4 flex flex-col gap-2">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                <img src="https://www.svgrepo.com/show/452210/apple.svg" alt="Apple" className="w-5 h-5" />
                Continue with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;