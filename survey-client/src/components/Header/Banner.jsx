import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const messages = [
    "login and earn your money",
    "get paid for your opinion",
    "start surveys, start earning",
    "easy cash, easy surveys",
    "join, answer, get rewards"
  ];
  const [placeholder, setPlaceholder] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    let typingInterval;
    let cursorInterval;
    let restartTimeout;

    const typeMessage = () => {
      typingInterval = setInterval(() => {
        setPlaceholder(messages[msgIndex].slice(0, i));
        i++;
        if (i > messages[msgIndex].length) {
          clearInterval(typingInterval);
          restartTimeout = setTimeout(() => {
            setMsgIndex((prev) => (prev + 1) % messages.length);
            i = 0;
            typeMessage();
          }, 3000);
        }
      }, 80);
    };

    typeMessage();

    cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearTimeout(restartTimeout);
    };
    // eslint-disable-next-line
  }, [msgIndex]);
  return (
    <section className="bg-[#004030] min-h-[70vh] flex items-center justify-center px-2 py-6 md:px-4 md:py-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:space-y-8 mb-8 md:mb-0">
            <h2 className="text-white text-xl md:text-2xl font-medium mb-2">
              Tired of screenouts and disqualifications?
            </h2>
            <h1 className="text-green-500 text-3xl md:text-5xl font-semibold mb-4 leading-tight">
              EARN CASH WITH <br className="hidden md:block" /> TOPSURVEYS
              <span className="inline-block align-middle ml-2 bg-[#347433] text-white text-xs px-2 py-1 rounded-full">
                .APP
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 bg-[#0a6c5c] border border-green-400 rounded-full px-4 py-2 text-green-300 font-semibold">
                <span className="text-green-400 text-lg">✔</span> No
                Disqualifications
              </div>
              <div className="flex items-center gap-2 bg-[#0a6c5c] border border-green-400 rounded-full px-4 py-2 text-green-300 font-semibold">
                <span className="text-green-400 text-lg">✔</span> No Screenouts
              </div>
            </div>
          </div>

          {/* Right Side: Card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl  shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-md cursor-pointer" onClick={() => navigate('/login')}>
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <span className="text-green-600 text-3xl">$</span>
                </div>
              </div>
              <h2 className="text-center text-2xl font-bold mb-2">
                Start Earning Now
              </h2>
              <p className="text-center text-gray-600 mb-4">
                Join E-Survey by entering your email
              </p>
              <form className="flex flex-col gap-3 pointer-events-none">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 text-left"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={placeholder + (showCursor ? "|" : " ")}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 font-mono"
                  readOnly
                />
                <button
                  type="button"
                  className="bg-[#347433] hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 mt-2"
                  disabled
                >
                  Continue
                </button>
              </form>
              <div className="mt-4 flex flex-col gap-2">
                <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
