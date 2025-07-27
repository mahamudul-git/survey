import { useState } from "react";

const SharedHome_2 = () => {
  const [tab, setTab] = useState("customer");

  const tabContents = {
    customer: (
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-[#004030] rounded-3xl p-4 md:p-8 w-full max-w-2xl flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
                  <div className="font-semibold">
                    Write a prompt.
                    <br />
                    Let AI do the rest.
                  </div>
                  <div className="text-xs text-gray-500">
                    I want to gather feedback from our clients about the overall
                    satisfaction with our company...
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      className="border rounded px-2 py-1 text-xs flex-1"
                      value="I want to gather feedback from our clients about the overall satisfaction with our company..."
                      readOnly
                    />
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      →
                    </button>
                  </div>
                </div>
                <div className="bg-[#004030] rounded-xl p-4 flex flex-col gap-2 text-white border border-white/20">
                  <div className="font-semibold text-lg">
                    Overall, how satisfied are you with your experience?
                  </div>
                  <div className="flex flex-col gap-1 mt-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="csat" />
                      Extremely
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="csat" />
                      Very
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="csat" />
                      Somewhat
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="csat" />
                      Not very
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="csat" />
                      Not at all
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-between">
                <img
                  src="/box-mock.png"
                  alt="Survey"
                  className="rounded-xl w-full object-cover max-h-40 md:max-h-48"
                />
                <div className="bg-white rounded-xl p-4 flex flex-col items-center gap-2">
                  <div className="font-bold text-sm">CSAT Score</div>
                  <div className="flex gap-4 mt-2">
                    <div className="bg-yellow-400 text-black rounded px-3 py-1 text-lg font-bold">
                      3.8
                    </div>
                    <div className="bg-green-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.6
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-1">
                    <span>Benchmark</span>
                    <span>Your score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Improve customer satisfaction and loyalty
          </h3>
          <p className="text-gray-700 mb-4">
            Capture feedback across the customer journey to identify pain
            points, track satisfaction, and build brand loyalty.
          </p>
          <ul className="text-green-700 text-base space-y-1 mb-4">
            <li>
              <a href="#" className="underline hover:text-green-900">
                NPS survey template
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Customer satisfaction survey template
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Customer service feedback survey template
              </a>
            </li>
          </ul>
          <button className="border border-gray-400 rounded px-5 py-2 font-semibold hover:bg-gray-100 transition w-fit">
            See more templates
          </button>
        </div>
      </div>
    ),
    employee: (
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex justify-center">
          <div className="bg-[#004030] rounded-3xl p-4 md:p-8 w-full max-w-2xl flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
                  <div className="font-semibold">
                    Ask for feedback.
                    <br />
                    Grow your team.
                  </div>
                  <div className="text-xs text-gray-500">
                    I want to gather feedback from employees about their
                    engagement and satisfaction...
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      className="border rounded px-2 py-1 text-xs flex-1"
                      value="I want to gather feedback from employees about their engagement and satisfaction..."
                      readOnly
                    />
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      →
                    </button>
                  </div>
                </div>
                <div className="bg-[#004030] rounded-xl p-4 flex flex-col gap-2 text-white border border-white/20">
                  <div className="font-semibold text-lg">
                    How engaged do you feel at work?
                  </div>
                  <div className="flex flex-col gap-1 mt-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="engage" />
                      Extremely
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="engage" />
                      Very
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="engage" />
                      Somewhat
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="engage" />
                      Not very
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="engage" />
                      Not at all
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-between">
                <img
                  src="/employee-mock.png"
                  alt="Employee"
                  className="rounded-xl w-full object-cover max-h-40 md:max-h-48"
                />
                <div className="bg-white rounded-xl p-4 flex flex-col items-center gap-2">
                  <div className="font-bold text-sm">Engagement Score</div>
                  <div className="flex gap-4 mt-2">
                    <div className="bg-yellow-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.1
                    </div>
                    <div className="bg-green-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.8
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-1">
                    <span>Benchmark</span>
                    <span>Your score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Boost employee engagement and retention
          </h3>
          <p className="text-gray-700 mb-4">
            Collect feedback to improve workplace culture, satisfaction, and
            productivity.
          </p>
          <ul className="text-green-700 text-base space-y-1 mb-4">
            <li>
              <a href="#" className="underline hover:text-green-900">
                Employee engagement survey
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Pulse survey template
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                360 feedback template
              </a>
            </li>
          </ul>
          <button className="border border-gray-400 rounded px-5 py-2 font-semibold hover:bg-gray-100 transition w-fit">
            See more templates
          </button>
        </div>
      </div>
    ),
    market: (
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex justify-center">
          <div className="bg-[#004030] rounded-3xl p-4 md:p-8 w-full max-w-2xl flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
                  <div className="font-semibold">
                    Market research prompt.
                    <br />
                    Let AI analyze trends.
                  </div>
                  <div className="text-xs text-gray-500">
                    I want to gather insights about market trends and competitor
                    benchmarks...
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      className="border rounded px-2 py-1 text-xs flex-1"
                      value="I want to gather insights about market trends and competitor benchmarks..."
                      readOnly
                    />
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      →
                    </button>
                  </div>
                </div>
                <div className="bg-[#004030] rounded-xl p-4 flex flex-col gap-2 text-white border border-white/20">
                  <div className="font-semibold text-lg">
                    How likely are you to try our new product?
                  </div>
                  <div className="flex flex-col gap-1 mt-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="market" />
                      Very likely
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="market" />
                      Likely
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="market" />
                      Neutral
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="market" />
                      Unlikely
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="market" />
                      Very unlikely
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-between">
                <img
                  src="/market-mock.png"
                  alt="Market"
                  className="rounded-xl w-full object-cover max-h-40 md:max-h-48"
                />
                <div className="bg-white rounded-xl p-4 flex flex-col items-center gap-2">
                  <div className="font-bold text-sm">Market Score</div>
                  <div className="flex gap-4 mt-2">
                    <div className="bg-yellow-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.2
                    </div>
                    <div className="bg-green-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.9
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-1">
                    <span>Benchmark</span>
                    <span>Your score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Unlock market opportunities
          </h3>
          <p className="text-gray-700 mb-4">
            Make informed decisions with real-time market data and analytics.
          </p>
          <ul className="text-green-700 text-base space-y-1 mb-4">
            <li>
              <a href="#" className="underline hover:text-green-900">
                Market research survey
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Competitor analysis template
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Product feedback survey
              </a>
            </li>
          </ul>
          <button className="border border-gray-400 rounded px-5 py-2 font-semibold hover:bg-gray-100 transition w-fit">
            See more templates
          </button>
        </div>
      </div>
    ),
    education: (
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex justify-center">
          <div className="bg-[#004030] rounded-3xl p-4 md:p-8 w-full max-w-2xl flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
                  <div className="font-semibold">
                    Education prompt.
                    <br />
                    Let AI help students.
                  </div>
                  <div className="text-xs text-gray-500">
                    I want to gather feedback from students and teachers about
                    learning experiences...
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      className="border rounded px-2 py-1 text-xs flex-1"
                      value="I want to gather feedback from students and teachers about learning experiences..."
                      readOnly
                    />
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      →
                    </button>
                  </div>
                </div>
                <div className="bg-[#004030] rounded-xl p-4 flex flex-col gap-2 text-white border border-white/20">
                  <div className="font-semibold text-lg">
                    How satisfied are you with your course?
                  </div>
                  <div className="flex flex-col gap-1 mt-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="edu" />
                      Very satisfied
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="edu" />
                      Satisfied
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="edu" />
                      Neutral
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="edu" />
                      Dissatisfied
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="edu" />
                      Very dissatisfied
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-between">
                <img
                  src="/education-mock.png"
                  alt="Education"
                  className="rounded-xl w-full object-cover max-h-40 md:max-h-48"
                />
                <div className="bg-white rounded-xl p-4 flex flex-col items-center gap-2">
                  <div className="font-bold text-sm">Satisfaction Score</div>
                  <div className="flex gap-4 mt-2">
                    <div className="bg-yellow-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.0
                    </div>
                    <div className="bg-green-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.7
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-1">
                    <span>Benchmark</span>
                    <span>Your score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Enhance learning outcomes
          </h3>
          <p className="text-gray-700 mb-4">
            Use feedback to improve teaching methods and student engagement.
          </p>
          <ul className="text-green-700 text-base space-y-1 mb-4">
            <li>
              <a href="#" className="underline hover:text-green-900">
                Student feedback survey
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Teacher evaluation template
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Course improvement survey
              </a>
            </li>
          </ul>
          <button className="border border-gray-400 rounded px-5 py-2 font-semibold hover:bg-gray-100 transition w-fit">
            See more templates
          </button>
        </div>
      </div>
    ),
    healthcare: (
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex justify-center">
          <div className="bg-[#004030] rounded-3xl p-4 md:p-8 w-full max-w-2xl flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
                  <div className="font-semibold">
                    Healthcare prompt.
                    <br />
                    Let AI improve care.
                  </div>
                  <div className="text-xs text-gray-500">
                    I want to gather feedback from patients about their care
                    experience...
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      className="border rounded px-2 py-1 text-xs flex-1"
                      value="I want to gather feedback from patients about their care experience..."
                      readOnly
                    />
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      →
                    </button>
                  </div>
                </div>
                <div className="bg-[#004030] rounded-xl p-4 flex flex-col gap-2 text-white border border-white/20">
                  <div className="font-semibold text-lg">
                    How would you rate your care?
                  </div>
                  <div className="flex flex-col gap-1 mt-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="care" />
                      Excellent
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="care" />
                      Good
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="care" />
                      Average
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="care" />
                      Poor
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="care" />
                      Very poor
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-between">
                <img
                  src="/health-mock.png"
                  alt="Healthcare"
                  className="rounded-xl w-full object-cover max-h-40 md:max-h-48"
                />
                <div className="bg-white rounded-xl p-4 flex flex-col items-center gap-2">
                  <div className="font-bold text-sm">Care Score</div>
                  <div className="flex gap-4 mt-2">
                    <div className="bg-yellow-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.3
                    </div>
                    <div className="bg-green-400 text-black rounded px-3 py-1 text-lg font-bold">
                      4.8
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-1">
                    <span>Benchmark</span>
                    <span>Your score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Enhance patient satisfaction
          </h3>
          <p className="text-gray-700 mb-4">
            Use patient feedback to improve care quality and meet compliance
            goals.
          </p>
          <ul className="text-green-700 text-base space-y-1 mb-4">
            <li>
              <a href="#" className="underline hover:text-green-900">
                Patient satisfaction survey
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Care quality template
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-green-900">
                Accreditation feedback
              </a>
            </li>
          </ul>
          <button className="border border-gray-400 rounded px-5 py-2 font-semibold hover:bg-gray-100 transition w-fit">
            See more templates
          </button>
        </div>
      </div>
    ),
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto px-2 md:px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">We Build the Bridge Between</h2>
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-200">
            <button
              className={`px-4 py-2 font-semibold text-lg transition-all duration-200 border-b-2 ${
                tab === "customer"
                  ? "border-green-600 text-green-700 bg-green-50 shadow-sm"
                  : "border-transparent text-gray-500 hover:bg-gray-100"
              } rounded-t-md`}
              onClick={() => setTab("customer")}
            >
              Customer experience
            </button>
            <button
              className={`px-4 py-2 font-semibold text-lg transition-all duration-200 border-b-2 ${
                tab === "employee"
                  ? "border-green-600 text-green-700 bg-green-50 shadow-sm"
                  : "border-transparent text-gray-500 hover:bg-gray-100"
              } rounded-t-md`}
              onClick={() => setTab("employee")}
            >
              Employee experience
            </button>
            <button
              className={`px-4 py-2 font-semibold text-lg transition-all duration-200 border-b-2 ${
                tab === "market"
                  ? "border-green-600 text-green-700 bg-green-50 shadow-sm"
                  : "border-transparent text-gray-500 hover:bg-gray-100"
              } rounded-t-md`}
              onClick={() => setTab("market")}
            >
              Market research
            </button>
            <button
              className={`px-4 py-2 font-semibold text-lg transition-all duration-200 border-b-2 ${
                tab === "education"
                  ? "border-green-600 text-green-700 bg-green-50 shadow-sm"
                  : "border-transparent text-gray-500 hover:bg-gray-100"
              } rounded-t-md`}
              onClick={() => setTab("education")}
            >
              Education
            </button>
            <button
              className={`px-4 py-2 font-semibold text-lg transition-all duration-200 border-b-2 ${
                tab === "healthcare"
                  ? "border-green-600 text-green-700 bg-green-50 shadow-sm"
                  : "border-transparent text-gray-500 hover:bg-gray-100"
              } rounded-t-md`}
              onClick={() => setTab("healthcare")}
            >
              Healthcare
            </button>
          </div>
        </div>
        <div className="animate-fade-in-up transition-all duration-300">
          {tabContents[tab]}
        </div>
      </section>
      <div className="bg-[#004030] text-white py-10 px-4 md:px-12 mt-12 rounded-none animate-fade-in-up transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 mb-4 md:mb-0 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-2">Greyhound's NPS® response<br className="hidden md:block" />rates jumped to 94% after using SurveyMonkey</h3>
          </div>
          <div className="flex-1 md:border-l md:pl-8 border-white/20 animate-fade-in">
            <p className="text-base md:text-lg font-medium">“Within a few months, our NPS was up almost 15 points. SurveyMonkey changed the way that data was getting into people's hands and it changed what they were able to do with it.”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedHome_2;
