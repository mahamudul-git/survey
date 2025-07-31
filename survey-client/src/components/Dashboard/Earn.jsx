import React from "react";
import FeaturedOffers from "./FeaturedOffers";
import Surveys from "./Surveys";

const Earn = () => {
  return (
    <main className="flex-1 w-full max-w-full bg-[#f7f7f7] rounded-3xl">
      <FeaturedOffers />
      <Surveys />
    </main>
  );
};

export default Earn;