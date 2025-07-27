

import { useState } from "react";

const SharedHome_1 = () => {
  const [tab, setTab] = useState("customer");

  const tabContent = {
    customer: (
      <>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Extra Income,<br className="hidden md:block" /> Trusted by Thousands</h3>
        <ul className="mb-6 space-y-3">
          <li className="flex items-center gap-2 text-lg text-gray-700"><span className="text-green-600"><i className="fa-solid fa-circle-check"></i></span> Top paying surveys with competitive rewards.</li>
          <li className="flex items-center gap-2 text-lg text-gray-700"><span className="text-green-600"><i className="fa-solid fa-circle-check"></i></span> Get paid fast, no waiting periods.</li>
          <li className="flex items-center gap-2 text-lg text-gray-700"><span className="text-green-600"><i className="fa-solid fa-circle-check"></i></span> Access from any device: Mobile, Desktop or Tablet</li>
        </ul>
        <div className="flex gap-3">
          <button className="border border-gray-300 rounded px-5 py-2 font-semibold bg-white hover:bg-gray-100 transition">Learn more</button>
          <button className="bg-green-600 text-white rounded px-5 py-2 font-semibold hover:bg-green-700 transition">Get started</button>
        </div>
      </>
    ),
    employee: (
      <>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Empower Your Team,<br className="hidden md:block" /> Elevate Engagement</h3>
        <ul className="mb-6 space-y-3">
          <li className="flex items-center gap-2 text-lg text-gray-700"><span className="text-green-600"><i className="fa-solid fa-circle-check"></i></span> Anonymous feedback for honest insights.</li>
          <li className="flex items-center gap-2 text-lg text-gray-700"><span className="text-green-600"><i className="fa-solid fa-circle-check"></i></span> Track engagement and satisfaction trends.</li>
          <li className="flex items-center gap-2 text-lg text-gray-700"><span className="text-green-600"><i className="fa-solid fa-circle-check"></i></span> Actionable reports for HR and managers.</li>
        </ul>
        <div className="flex gap-3">
          <button className="border border-gray-300 rounded px-5 py-2 font-semibold bg-white hover:bg-gray-100 transition">Learn more</button>
          <button className="bg-[#347433] text-white rounded px-5 py-2 font-semibold hover:bg-green-700 transition">Get started</button>
        </div>
      </>
    ),
  };

  return (
    <section className="w-full">
      {/* FIRST IMAGE: Top Section */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 pt-12 pb-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">We Build the Bridge Between</h2>
        <div className="flex flex-row items-center justify-center gap-4 bg-white rounded-xl p-2 md:p-4 shadow-none">
          <div className="flex flex-row bg-white rounded-xl mx-auto">
            <button
              className={`px-6 py-2 font-semibold text-lg border-b-2 ${tab === "customer" ? "border-green-500 text-green-700" : "border-transparent text-gray-700"} bg-transparent`}
              onClick={() => setTab("customer")}
            >
              Customer experience
            </button>
            <button
              className={`px-6 py-2 font-semibold text-lg border-b-2 ${tab === "employee" ? "border-green-500 text-green-700" : "border-transparent text-gray-700"} bg-transparent`}
              onClick={() => setTab("employee")}
            >
              Employee experience
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 w-full">
          {/* Left: Tab Content */}
          <div className="flex-1 flex flex-col items-start justify-center w-full max-w-xl">
            {tabContent[tab]}
          </div>
          {/* Right: Phone Image in Green Frame */}
          <div className="flex-1 flex justify-center w-full max-w-xl">
            <div className="bg-[#004030] rounded-[2.5rem] p-3 md:p-6 flex items-center justify-center w-full max-w-md">
              <img src="/phone-mock.png" alt="Survey App" className="rounded-2xl w-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* SECOND IMAGE: Middle Section */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Card Image in Green Frame */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="bg-[#004030] rounded-3xl p-3 md:p-6 flex items-center justify-center w-full max-w-xl">
            <img src="/customer-mock.png" alt="Customer Experience" className="rounded-2xl w-full object-contain" />
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Improve customer satisfaction and loyalty</h3>
          <p className="text-gray-700 mb-4">Capture feedback across the customer journey to identify pain points, track satisfaction, and build brand loyalty.</p>
          <ul className="text-green-700 text-base space-y-1 mb-4">
            <li><a href="#" className="underline hover:text-green-900">NPS survey template</a></li>
            <li><a href="#" className="underline hover:text-green-900">Customer satisfaction survey template</a></li>
            <li><a href="#" className="underline hover:text-green-900">Customer service feedback survey template</a></li>
          </ul>
          <button className="border border-gray-400 rounded px-5 py-2 font-semibold hover:bg-gray-100 transition w-fit">See more templates</button>
        </div>
      </div>

      {/* THIRD IMAGE: Bottom Section */}
      <div className="w-full bg-[#004030] py-14 px-2 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-300 text-center mb-2">Great insights are ready when you are</h3>
          <p className="text-white text-center font-semibold mb-10">Join the 260K+ global organizations using SurveyMonkey to drive real results.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-[#a1847a] rounded-xl h-32 md:h-40 flex items-center justify-center text-white text-lg font-bold opacity-90">
                {/* Replace with real logos or testimonials as needed */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharedHome_1;