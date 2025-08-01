import React, { useState, useRef, useEffect } from "react";
import { MdDevices } from "react-icons/md";

export const tests = [
	{
		image: "/temp/Animals & Coins.png",
		title: "Animals & Coins",
		oldReward: 307.01,
		reward: 383.77,
		currency: "SSC",
		votes: 6817,
		device: "Windows",
	},
	{
		image: "/temp/Match Masters.png",
		title: "Match Masters",
		oldReward: 213.25,
		reward: 266.57,
		currency: "SSC",
		votes: 309,
		device: "Apple",
	},
	{
		image: "/temp/Game of Vampires.png",
		title: "Game of Vampires",
		oldReward: 472.58,
		reward: 809.52,
		currency: "SSC",
		votes: 1245,
		device: "Android",
	},
	{
		image: "/temp/Dice Dreams.png",
		title: "Dice Dreams",
		oldReward: 404.57,
		reward: 303.40,
		currency: "SSC",
		votes: 650,
		device: "Apple",
	},
	{
		image: "/temp/Bingo Cash.png",
		title: "Bingo Cash",
		oldReward: 448.49,
		reward: 550.60,
		currency: "SSC",
		votes: 109,
		device: "Windows",
	},
	{
		image: "/temp/Idle Bank Tycoon_ Money Game.png",
		title: "Idle Bank Tycoon: Money Game",
		oldReward: 44.54,
		reward: 1117.67,
		currency: "SSC",
		votes: 3121,
		device: "Android",
	},
	{
		image: "/temp/Monopoly Go!.png",
		title: "Monopoly Go!",
		oldReward: 40.60,
		reward: 238.13,
		currency: "SSC",
		votes: 2939,
		device: "Apple",
	},
	{
		image: "/temp/Match Masters.png",
		title: "Match Masters",
		oldReward: 213.25,
		reward: 266.57,
		currency: "SSC",
		votes: 309,
		device: "Apple",
	},
	{
		image: "/temp/Game of Vampires.png",
		title: "Game of Vampires",
		oldReward: 472.58,
		reward: 809.52,
		currency: "SSC",
		votes: 1245,
		device: "Android",
	},
	{
		image: "/temp/Dice Dreams.png",
		title: "Dice Dreams",
		oldReward: 404.57,
		reward: 303.40,
		currency: "SSC",
		votes: 650,
		device: "Apple",
	},
	{
		image: "/temp/Bingo Cash.png",
		title: "Bingo Cash",
		oldReward: 448.49,
		reward: 550.60,
		currency: "SSC",
		votes: 109,
		device: "Windows",
	},
	{
		image: "/temp/Idle Bank Tycoon_ Money Game.png",
		title: "Idle Bank Tycoon: Money Game",
		oldReward: 44.54,
		reward: 1117.67,
		currency: "SSC",
		votes: 3121,
		device: "Android",
	},
	{
		image: "/temp/Monopoly Go!.png",
		title: "Monopoly Go!",
		oldReward: 40.60,
		reward: 238.13,
		currency: "SSC",
		votes: 2939,
		device: "Apple",
	},
	{
		image: "/temp/Match Masters.png",
		title: "Match Masters",
		oldReward: 213.25,
		reward: 266.57,
		currency: "SSC",
		votes: 309,
		device: "Apple",
	},
	{
		image: "/temp/Game of Vampires.png",
		title: "Game of Vampires",
		oldReward: 472.58,
		reward: 809.52,
		currency: "SSC",
		votes: 1245,
		device: "Android",
	},
	{
		image: "/temp/Dice Dreams.png",
		title: "Dice Dreams",
		oldReward: 404.57,
		reward: 303.40,
		currency: "SSC",
		votes: 650,
		device: "Apple",
	},
	{
		image: "/temp/Bingo Cash.png",
		title: "Bingo Cash",
		oldReward: 448.49,
		reward: 550.60,
		currency: "SSC",
		votes: 109,
		device: "Windows",
	},
	{
		image: "/temp/Idle Bank Tycoon_ Money Game.png",
		title: "Idle Bank Tycoon: Money Game",
		oldReward: 44.54,
		reward: 1117.67,
		currency: "SSC",
		votes: 312,
		device: "Android",
	},
	{
		image: "/temp/Monopoly Go!.png",
		title: "Monopoly Go!",
		oldReward: 40.60,
		reward: 238.13,
		currency: "SSC",
		votes: 293,
		device: "Apple",
	},
];

const TestsHeader = ({ selectedDevice, setSelectedDevice }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSelect = (device) => {
		setSelectedDevice(device);
		setDropdownOpen(false);
	};

	return (
		<div className="mb-4" ref={dropdownRef}>
			{/* Filter Bar */}
			<div className="flex items-center justify-between gap-4">
				<span className="text-lg font-semibold text-gray-900">All Tests</span>
				<div className="relative">
					<button
						onClick={() => setDropdownOpen((v) => !v)}
						className="ml-2 px-2 md:px-3 py-1 rounded-full bg-transparent text-gray-700 text-xs font-medium flex items-center gap-1 border border-gray-200"
						
					>
						<img src="/windowsblack.svg" alt="Windows" className="w-4 h-4" />
						<img src="/appleblack.svg" alt="Apple" className="w-4 h-4" />
						<span className="text-xs mx-1">Change Devices{selectedDevice !== 'All' ? `: ${selectedDevice}` : ''}</span>
						<img src="/filter-icon.svg" alt="Filter" className="w-5 h-" />
					</button>
					{dropdownOpen && (
						<div className="absolute right-0 mt-2 w-44 rounded-lg shadow-lg z-10" style={{background: 'rgba(0, 0, 0, 0.48)', backdropFilter: 'blur(8px) saturate(180%)', WebkitBackdropFilter: 'blur(8px) saturate(180%)'}}>
							<ul className="py-2">
								<li onClick={() => handleSelect('All')} className="flex items-center px-4 py-2 hover:bg-gray-600 cursor-pointer gap-2">
									<span className="text-white text-sm font-medium">All Devices</span>
								</li>
								<li onClick={() => handleSelect('Windows')} className="flex items-center px-4 py-2 hover:bg-gray-600 cursor-pointer gap-2">
									<img src="/windows.svg" alt="Windows" className="w-5 h-5" />
									<span className="text-white text-sm font-medium">Windows</span>
								</li>
								<li onClick={() => handleSelect('Apple')} className="flex items-center px-4 py-2 hover:bg-gray-600 cursor-pointer gap-2">
									<img src="/apple.svg" alt="Apple" className="w-5 h-5" />
									<span className="text-white text-sm font-medium">Apple</span>
								</li>
								<li onClick={() => handleSelect('Android')} className="flex items-center px-4 py-2 hover:bg-gray-600 cursor-pointer gap-2">
									<img src="/android.png" alt="Android" className="w-5 h-5" />
									<span className="text-white text-sm font-medium">Android</span>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const Tests = () => {
	const [selectedDevice, setSelectedDevice] = useState('All');
	const filteredTests = selectedDevice === 'All' ? tests : tests.filter(t => t.device === selectedDevice);

	return (
		<div className="flex-1 rounded-3xl">
			<TestsHeader selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice} />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
				{filteredTests.map((test, idx) => (
					<div
						key={idx}
						className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col px-2 py-2 relative overflow-hidden min-h-[80px]"
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
									<span className="line-through text-[10px] text-gray-400"><img src="/token.svg" alt="token" className="w-4 h-4 inline-block" />{test.oldReward}</span>
									<span className="text-base font-bold text-[#347433]"><img src="/token.svg" alt="token" className="w-4 h-4 inline-block" />{test.reward}</span>
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
	);
};

export default Tests;
