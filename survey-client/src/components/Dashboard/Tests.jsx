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
		<div className="mb-6" ref={dropdownRef}>
			{/* Filter Bar */}
			<div className="flex items-center justify-between gap-4">
				<span className="text-lg font-bold text-[#F8FAFC]">All Tests</span>
				<div className="relative">
					<button
						onClick={() => setDropdownOpen((v) => !v)}
						className="ml-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 border border-[#9767E4]/30 text-[#F8FAFC] text-sm font-medium flex items-center gap-2 hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 hover:border-[#9767E4]/40 transition-all duration-300"
					>
						<img src="/windows.svg" alt="Windows" className="w-4 h-4" />
						<img src="/apple.svg" alt="Apple" className="w-4 h-4" />
						<span className="text-sm mx-1">Change Devices{selectedDevice !== 'All' ? `: ${selectedDevice}` : ''}</span>
						<img src="/filter-icon.svg" alt="Filter" className="w-5 h-5" />
					</button>
					{dropdownOpen && (
						<div className="absolute right-0 mt-2 w-48 rounded-xl z-10 bg-[#0E1525]/80 backdrop-blur-xl border border-[#9767E4]/10">
							<ul className="py-2">
								<li onClick={() => handleSelect('All')} className="flex items-center px-4 py-3 hover:bg-[#9767E4]/10 cursor-pointer gap-2 transition-all duration-200">
									<span className="text-[#F8FAFC] text-sm font-medium">All Devices</span>
								</li>
								<li onClick={() => handleSelect('Windows')} className="flex items-center px-4 py-3 hover:bg-[#9767E4]/10 cursor-pointer gap-2 transition-all duration-200">
									<img src="/windows.svg" alt="Windows" className="w-5 h-5" />
									<span className="text-[#F8FAFC] text-sm font-medium">Windows</span>
								</li>
								<li onClick={() => handleSelect('Apple')} className="flex items-center px-4 py-3 hover:bg-[#9767E4]/10 cursor-pointer gap-2 transition-all duration-200">
									<img src="/apple.svg" alt="Apple" className="w-5 h-5" />
									<span className="text-[#F8FAFC] text-sm font-medium">Apple</span>
								</li>
								<li onClick={() => handleSelect('Android')} className="flex items-center px-4 py-3 hover:bg-[#9767E4]/20 cursor-pointer gap-2 transition-all duration-200">
									<img src="/android.png" alt="Android" className="w-5 h-5" />
									<span className="text-[#F8FAFC] text-sm font-medium">Android</span>
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
		<div className="flex-1">
			<TestsHeader selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice} />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
				{filteredTests.map((test, idx) => (
					<div
						key={idx}
						className="bg-[#0E1525]/50 border border-[#9767E4]/10 rounded-xl backdrop-blur-sm relative overflow-hidden hover:bg-[#0E1525]/70 hover:border-[#9767E4]/20 transition-all duration-300 group cursor-pointer"
					>
						<div className="flex w-full gap-2.5 p-2.5 items-center">
							{/* Image + icon */}
							<div className="relative w-[50px] h-[60px] min-w-[50px] flex-shrink-0">
								<img
									src={test.image}
									alt={test.title}
									className="w-[50px] h-[60px] rounded-lg object-cover shadow-md"
								/>
								{test.device === "Windows" && (
									<img
										src="/windows.svg"
										alt="Windows"
										style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px) saturate(180%)', WebkitBackdropFilter: 'blur(4px) saturate(180%)'}}
										className="absolute top-1 left-1 w-4 h-4 p-[3px] rounded-full border border-white/20"
									/>
								)}
								{test.device === "Apple" && (
									<img
										src="/apple.svg"
										alt="Apple"
										style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px) saturate(180%)', WebkitBackdropFilter: 'blur(4px) saturate(180%)'}}
										className="absolute top-1 left-1 w-4 h-4 p-[3px] rounded-full border border-white/20"
									/>
								)}
								{test.device === "Android" && (
									<img
										src="/android.png"
										alt="Android"
										style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px) saturate(180%)', WebkitBackdropFilter: 'blur(4px) saturate(180%)'}}
										className="absolute top-1 left-1 w-4 h-4 p-[3px] rounded-full border border-white/20"
									/>
								)}
							</div>
							{/* Info */}
							<div className="flex-1 min-w-0">
								<div className="font-semibold text-sm text-[#F8FAFC] mb-1 truncate leading-tight">
									{test.title.length > 16 ? test.title.slice(0, 16) + '...' : test.title}
								</div>
								<div className="flex items-center gap-2 mb-1">
									<span className="line-through text-xs text-[#F8FAFC]/40 flex items-center">
										<img src="/token.svg" alt="token" className="w-3 h-3 mr-1" />
										{test.oldReward}
									</span>
									<span className="text-sm font-bold text-[#26B2F2] flex items-center">
										<img src="/token.svg" alt="token" className="w-3.5 h-3.5 mr-1" />
										{test.reward}
									</span>
								</div>
								<div className="flex items-center gap-1 text-xs text-[#F8FAFC]/60 font-medium">
									<svg
										width="12"
										height="12"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
										/>
									</svg>
									{test.votes}
								</div>
							</div>
						</div>
						{/* Enhanced +25% badge */}
						<div 
							className="absolute bottom-0 right-0 pointer-events-none select-none"
							style={{
								width: '60px',
								height: '16px',
								background: 'linear-gradient(105deg, rgba(151, 103, 228, 0.9) 60%, rgba(192, 132, 252, 0.9) 100%)',
								borderBottomRightRadius: '0.75rem',
								borderTopLeftRadius: '0.75rem',
								transform: 'rotate(-20deg) translate(8px, 2px)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								boxShadow: '0 2px 8px rgba(151, 103, 228, 0.3)',
								border: '1px solid rgba(255, 255, 255, 0.2)',
								zIndex: 2
							}}
						>
							<span style={{
								color: '#ffffff',
								fontWeight: 700,
								fontSize: '0.6rem',
								letterSpacing: '0.5px',
								fontFamily: 'inherit',
								marginLeft: '4px',
							}}>+25%</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tests;
