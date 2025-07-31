import React from "react";

const surveys = [
  { duration: "12 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 110, bonus: "+25%" },
  { duration: "11 min", oldReward: "$1.50", reward: "$1.87", rating: "2.5/5", votes: 140, bonus: "+25%" },
  { duration: "37 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 17, bonus: "+25%" },
  { duration: "22 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 5, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.49", reward: "$0.61", rating: "2.5/5", votes: 28, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.15", reward: "$0.19", rating: "2.5/5", votes: 110, bonus: "+25%" },
  { duration: "26 min", oldReward: "$0.28", reward: "$0.35", rating: "3/5", votes: 89, bonus: "+25%" },
  { duration: "5 min", oldReward: "$0.03", reward: "$0.04", rating: "5/5", votes: 110, bonus: "+25%" },
  { duration: "16 min", oldReward: "$0.49", reward: "$0.61", rating: "2/5", votes: 100, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.14", reward: "$0.17", rating: "4/5", votes: 7, bonus: "+25%" },
  { duration: "21 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 18, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.18", reward: "$0.23", rating: "3/5", votes: 110, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 110, bonus: "+25%" },
  { duration: "11 min", oldReward: "$1.50", reward: "$1.87", rating: "2.5/5", votes: 140, bonus: "+25%" },
  { duration: "37 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 17, bonus: "+25%" },
  { duration: "22 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 5, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.49", reward: "$0.61", rating: "2.5/5", votes: 28, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.15", reward: "$0.19", rating: "2.5/5", votes: 110, bonus: "+25%" },
  { duration: "26 min", oldReward: "$0.28", reward: "$0.35", rating: "3/5", votes: 89, bonus: "+25%" },
  { duration: "5 min", oldReward: "$0.03", reward: "$0.04", rating: "5/5", votes: 110, bonus: "+25%" },
  { duration: "16 min", oldReward: "$0.49", reward: "$0.61", rating: "2/5", votes: 100, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.14", reward: "$0.17", rating: "4/5", votes: 7, bonus: "+25%" },
  { duration: "21 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 18, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.18", reward: "$0.23", rating: "3/5", votes: 110, bonus: "+25%" },{ duration: "12 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 110, bonus: "+25%" },
  { duration: "11 min", oldReward: "$1.50", reward: "$1.87", rating: "2.5/5", votes: 140, bonus: "+25%" },
  { duration: "37 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 17, bonus: "+25%" },
  { duration: "22 min", oldReward: "$0.38", reward: "$0.48", rating: "4/5", votes: 5, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.49", reward: "$0.61", rating: "2.5/5", votes: 28, bonus: "+25%" },
  { duration: "8 min", oldReward: "$0.15", reward: "$0.19", rating: "2.5/5", votes: 110, bonus: "+25%" },
  { duration: "26 min", oldReward: "$0.28", reward: "$0.35", rating: "3/5", votes: 89, bonus: "+25%" },
  { duration: "5 min", oldReward: "$0.03", reward: "$0.04", rating: "5/5", votes: 110, bonus: "+25%" },
  { duration: "16 min", oldReward: "$0.49", reward: "$0.61", rating: "2/5", votes: 100, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.14", reward: "$0.17", rating: "4/5", votes: 7, bonus: "+25%" },
  { duration: "21 min", oldReward: "$2.00", reward: "$2.50", rating: "2.5/5", votes: 18, bonus: "+25%" },
  { duration: "12 min", oldReward: "$0.18", reward: "$0.23", rating: "3/5", votes: 110, bonus: "+25%" },
];

const Surveys = () => (
  <div className="flex-1 px-5 py-6 md:px-2 md:px-[20px] md:py-8  w-full max-w-full bg-[#f7f7f7] rounded-3xl">
    <h3 className="text-base md:text-xl font-bold mb-4">All Surveys</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 w-full">
      {surveys.map((survey, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm p-2 flex flex-col gap-2 border border-gray-100 overflow-hidden relative ">
          <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold mb-1">
            <span className="inline-block align-middle" style={{display:'flex',alignItems:'center'}}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{display:'block'}}>
                <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" fill="white" />
                <path stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" d="M12 7v5l3 3" />
              </svg>
            </span>
            <span>{survey.duration}</span>
          </div>
          <div className="flex flex-col items-start mb-1">
            <span className="line-through text-xs text-gray-400">{survey.oldReward}</span>
            <span className="text-2xl font-bold text-green-700">{survey.reward} <span className="text-base font-normal text-gray-500">USD</span></span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-yellow-500 font-bold">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#FFC107" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              {survey.rating}
            </span>
            <span className="text-gray-400">({survey.votes})</span>
            
          </div>
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
                }}>{survey.bonus}</span>
              </div>
            </div>
        </div>
      ))}
    </div>
  </div>
);

export default Surveys;
