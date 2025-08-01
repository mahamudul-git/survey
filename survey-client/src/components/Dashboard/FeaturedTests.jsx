import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { tests as allTests } from "./Tests";

const FeaturedTests = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const cardsPerView = 3;
  const maxIdx = allTests.length - cardsPerView;
  const cardWidth = 260; // px, adjust as needed for your card size
  const transitionRef = useRef();
  const dragState = useRef({ dragging: false, startX: 0, lastX: 0, offset: 0 });

  // Touch/drag support
  const handleTouchStart = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.touches[0].clientX;
    dragState.current.lastX = e.touches[0].clientX;
    dragState.current.offset = 0;
    if (transitionRef.current) transitionRef.current.style.transition = 'none';
  };
  const handleTouchMove = (e) => {
    if (!dragState.current.dragging) return;
    const delta = e.touches[0].clientX - dragState.current.startX;
    dragState.current.lastX = e.touches[0].clientX;
    dragState.current.offset = delta;
    if (transitionRef.current) {
      transitionRef.current.style.transform = `translateX(${-carouselIdx * cardWidth + delta}px)`;
    }
  };
  const handleTouchEnd = () => {
    if (!dragState.current.dragging) return;
    const diff = dragState.current.startX - dragState.current.lastX;
    let newIdx = carouselIdx;
    if (diff > 40 && carouselIdx < maxIdx) {
      newIdx = carouselIdx + 1;
    } else if (diff < -40 && carouselIdx > 0) {
      newIdx = carouselIdx - 1;
    }
    setCarouselIdx(newIdx);
    dragState.current.dragging = false;
    dragState.current.offset = 0;
    if (transitionRef.current) {
      transitionRef.current.style.transition = 'transform 0.4s cubic-bezier(.4,1,.3,1)';
      transitionRef.current.style.transform = `translateX(${-newIdx * cardWidth}px)`;
    }
  };
  // Mouse drag support
  const handleMouseDown = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.clientX;
    dragState.current.lastX = e.clientX;
    dragState.current.offset = 0;
    if (transitionRef.current) transitionRef.current.style.transition = 'none';
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseMove = (e) => {
    if (!dragState.current.dragging) return;
    const delta = e.clientX - dragState.current.startX;
    dragState.current.lastX = e.clientX;
    dragState.current.offset = delta;
    if (transitionRef.current) {
      transitionRef.current.style.transform = `translateX(${-carouselIdx * cardWidth + delta}px)`;
    }
  };
  const handleMouseUp = () => {
    if (!dragState.current.dragging) return;
    const diff = dragState.current.startX - dragState.current.lastX;
    let newIdx = carouselIdx;
    if (diff > 40 && carouselIdx < maxIdx) {
      newIdx = carouselIdx + 1;
    } else if (diff < -40 && carouselIdx > 0) {
      newIdx = carouselIdx - 1;
    }
    setCarouselIdx(newIdx);
    dragState.current.dragging = false;
    dragState.current.offset = 0;
    if (transitionRef.current) {
      transitionRef.current.style.transition = 'transform 0.4s cubic-bezier(.4,1,.3,1)';
      transitionRef.current.style.transform = `translateX(${-newIdx * cardWidth}px)`;
    }
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Update transform on index change (for button clicks)
  React.useEffect(() => {
    if (transitionRef.current) {
      transitionRef.current.style.transition = 'transform 0.4s cubic-bezier(.4,1,.3,1)';
      transitionRef.current.style.transform = `translateX(${-carouselIdx * cardWidth}px)`;
    }
  }, [carouselIdx]);

  return (
    <div className="px-5 pt-6 md:px-2 md:px-[20px] md:pt-8 w-full max-w-full bg-[#f7f7f7] rounded-3xl">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-base md:text-xl font-bold text-gray-800">Featured Tests</span>
        <div className="flex gap-2">
          <button
            className="rounded-full bg-[#e0ece7] w-8 h-8 flex items-center justify-center text-gray-500 border border-transparent hover:border-green-400 transition disabled:opacity-40"
            onClick={() => setCarouselIdx(Math.max(0, carouselIdx - 1))}
            disabled={carouselIdx === 0}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            className="rounded-full bg-[#e0ece7] w-8 h-8 flex items-center justify-center text-gray-500 border border-transparent hover:border-green-400 transition disabled:opacity-40"
            onClick={() => setCarouselIdx(Math.min(maxIdx, carouselIdx + 1))}
            disabled={carouselIdx >= maxIdx}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div
        className="relative w-full overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{
          cursor: dragState.current.dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <div
          ref={transitionRef}
          className="flex gap-3"
          style={{ width: `${allTests.length * cardWidth}px`, transition: 'transform 0.4s cubic-bezier(.4,1,.3,1)', transform: `translateX(${-carouselIdx * cardWidth}px)` }}
        >
          {allTests.map((test, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col px-2 py-2 relative overflow-hidden min-h-[80px]"
              style={{ width: `${cardWidth}px`, flex: '0 0 auto' }}
            >
              <div className="flex w-full gap-2">
                {/* Image + icon */}
                <div className="relative w-[48px] h-[65px] min-w-[55px] flex items-center justify-center mr-2">
                  <img
                    src={test.image}
                    alt={test.title}
                    className="w-[55px] h-[65px] rounded-lg object-cover"
                  />
                  {test.device === "Windows" && (
                    <img
                      src="/windows.svg"
                      alt="Windows"
                      style={{ background: 'rgba(0, 0, 0, 0.35)', backdropFilter: 'blur(2px) saturate(180%)', WebkitBackdropFilter: 'blur(2px) saturate(180%)'}}
                      className="absolute top-1 left-1 w-4 h-4 p-[3px] rounded-full "
                    />
                  )}
                  {test.device === "Apple" && (
                    <img
                      src="/apple.svg"
                      alt="Apple"
                      style={{ background: 'rgba(0, 0, 0, 0.35)', backdropFilter: 'blur(2px) saturate(180%)', WebkitBackdropFilter: 'blur(2px) saturate(180%)'}}
                      className="absolute top-1 left-1 w-4 h-4 p-[3px] rounded-full "
                    />
                  )}
                  {test.device === "Android" && (
                    <img
                      src="/android.png"
                      alt="Android"
                      style={{ background: 'rgba(0, 0, 0, 0.35)', backdropFilter: 'blur(2px) saturate(180%)', WebkitBackdropFilter: 'blur(2px) saturate(180%)'}}
                      className="absolute top-1 left-1 w-4 h-4 p-[3px] rounded-full "
                    />
                  )}
                </div>
                {/* Info */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="font-semibold text-xs text-gray-900 mb-0.5 truncate">
                    {test.title.length > 20 ? test.title.slice(0, 20) + '...' : test.title}
                  </div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="line-through text-[10px] text-gray-400">
                      <img src="/token.svg" alt="token" className="w-4 h-4 inline-block" />
                      {test.oldReward}
                    </span>
                    <span className="text-base font-bold text-[#347433]">
                      <img src="/token.svg" alt="token" className="w-4 h-4 inline-block" />
                      {test.reward}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-700 font-medium">
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#222"
                        d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
                      />
                    </svg>
                    {test.votes}
                  </div>
                </div>
              </div>
              {/* +25% badge - diagonal gradient stripe */}
              <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none select-none" style={{zIndex:2}}>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '70px',
                    height: '18px',
                    background: 'linear-gradient(105deg, #fffbe9 60%, #ffe9c7 100%)',
                    borderBottomRightRadius: '0.5rem',
                    borderTopLeftRadius: '0.5rem',
                    transform: 'rotate(-25deg) translate(10px, 5px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <span style={{
                    color: '#e6a23c',
                    fontWeight: 700,
                    fontSize: '0.65rem',
                    letterSpacing: '1px',
                    fontFamily: 'inherit',
                    marginLeft: '6px',
                  }}>+25%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTests;
