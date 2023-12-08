import React from "react";
import HeroCta from "./HeroCta";
import HeroPictures from "./HeroPictures";

const Hero = () => {
  return (
    <section className='lg:h-[calc(100vh-80px)] w-full container mx-auto flex flex-col gap-24 lg:gap-0 lg:flex-row items-center justify-between xl:justify-around py-20 lg:py-0 px-5 mb-10'>
      <HeroCta />
      <HeroPictures />
    </section>
  );
};

export default Hero;
