import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
        <source src="/blackhole.webm" type="video/webm" />
      <HeroContent />
    </div>
  );
};

export default Hero;
