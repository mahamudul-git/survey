import React from "react";
import FeaturedTests from "./FeaturedTests";
import Surveys from "./Surveys";

const Earn = () => {
  return (
    <main className="flex-1 w-full max-w-full bg-[#f7f7f7] rounded-3xl">
      <FeaturedTests />
      <Surveys />
    </main>
  );
};

export default Earn;