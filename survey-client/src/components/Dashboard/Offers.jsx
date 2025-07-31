import React from "react";
import { MdDevices } from "react-icons/md";

const offers = [
	{
		image: "/temp/Animals & Coins.png",
		title: "Animals & Coins",
		oldReward: "$307.01",
		reward: "$383.77",
		currency: "USD",
		votes: 6817,
	},
	{
		image: "/temp/Match Masters.png",
		title: "Match Masters",
		oldReward: "$213.25",
		reward: "$266.57",
		currency: "USD",
		votes: 309,
	},
	{
		image: "/temp/Game of Vampires.png",
		title: "Game of Vampires",
		oldReward: "$472.58",
		reward: "$809.52",
		currency: "USD",
		votes: 12452,
	},
	{
		image: "/temp/Dice Dreams.png",
		title: "Dice Dreams",
		oldReward: "$404.57",
		reward: "$303.40",
		currency: "USD",
		votes: 650,
	},
	{
		image: "/temp/Bingo Cash.png",
		title: "Bingo Cash",
		oldReward: "$448.49",
		reward: "$550.60",
		currency: "USD",
		votes: 109,
	},
	{
		image: "/temp/Idle Bank Tycoon_ Money Game.png",
		title: "Idle Bank Tycoon: Money Game",
		oldReward: "$44.54",
		reward: "$1,117.67",
		currency: "USD",
		votes: 31217,
	},
	{
		image: "/temp/Monopoly Go!.png",
		title: "Monopoly Go!",
		oldReward: "$40.60",
		reward: "$238.13",
		currency: "USD",
		votes: 2939,
	},
];

const OffersHeader = () => (
	<div className="mb-4">
		{/* Tabs */}
		<div className="flex items-center gap-6 border-b border-gray-200 pb-2">
			<button className="px-2 pb-1 font-semibold text-base border-b-2 border-green-600 text-green-700">
				Best Offers
			</button>
			<button className="px-2 pb-1 font-semibold text-base border-b-2 border-transparent text-gray-700 flex items-center gap-2 relative">
				My Offers
				<span className="ml-1 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-bold align-middle">
					0
				</span>
			</button>
		</div>
		{/* Filter Bar */}
		<div className="flex items-center gap-4 bg-gray-100 rounded-lg px-4 py-3 mt-4">
			<span className="text-gray-700 font-medium">Show offers for</span>
			<button className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 text-gray-700 font-semibold border border-gray-300 shadow-sm">
				<MdDevices className="text-lg" />
				Change Devices
			</button>
		</div>
	</div>
);

const Offers = () => (
	<div>
		<OffersHeader />
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
			{offers.map((offer, idx) => (
				<div
					key={idx}
					className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col px-3 py-3 relative overflow-hidden min-h-[120px]"
				>
					<div className="flex w-[30%] gap-3">
						{/* Image + icon */}
						<div className="relative w-full h-full min-w-[64px] flex items-center justify-center">
							<img
								src={offer.image}
								alt={offer.title}
								className="w-full h-full rounded-xl object-cover"
							/>
							<img
								src="/apple.svg"
								alt="Apple"
								className="absolute top-0 left-0 w-5 h-5 rounded-full"
							/>
						</div>
						{/* Info */}
						<div className="flex-1 flex flex-col justify-center">
							<div className="font-semibold text-base text-gray-900 mb-1">
								{offer.title}
							</div>
							<div className="flex items-center gap-2 mb-1">
								<span className="line-through text-sm text-gray-400">
									{offer.oldReward}
								</span>
								<span className="text-xl font-bold text-[#347433]">
									{offer.reward}
								</span>
								<span className="text-base text-gray-500 font-semibold">
									{offer.currency}
								</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
								<svg
									width="18"
									height="18"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										fill="#222"
										d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
									/>
								</svg>
								{offer.votes}
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
                width: '120px',
                height: '32px',
                background: 'linear-gradient(105deg, #fffbe9 60%, #ffe9c7 100%)',
                borderBottomRightRadius: '1rem',
                borderTopLeftRadius: '1rem',
                transform: 'rotate(-25deg) translate(20px, 10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <span style={{
                color: '#e6a23c',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '1px',
                fontFamily: 'inherit',
                marginLeft: '10px',
              }}>+25%</span>
            </div>
          </div>
				</div>
			))}
		</div>
	</div>
);

export default Offers;
