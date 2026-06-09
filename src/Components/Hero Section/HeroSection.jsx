import React from "react";

import CozyCatHouse from "./Cozy Cat House/Cozy_Cat_House";

import Banner_Text from "./Banner_Text/Banner_Text";
import ReviewCard from "./Product Review Card/ReviewCard";

const HeroSection = () => {
  return (
    <>
      <div id="ShowCase" className="bg-green-100 flex items-center ">
        <CozyCatHouse />
      </div>
      <div id="Banner-Text" className="flex justify-center relative bottom-20">
        <Banner_Text />
      </div>
      <div id="ReviewCard" className="flex flex-row-reverse" >
        <ReviewCard />
      </div>
    </>
  );
};

export default HeroSection;
