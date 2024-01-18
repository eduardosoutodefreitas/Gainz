"use client";
import targets from "@/constants/targets";
import React from "react";
import CountUp from "react-countup";

const HeroCountUp = () => {
  return (
    <div className='flex md:max-w-sm flex-col xs:flex-row justify-between gap-5 items-center'>
      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>Exercises</h3>
        <span className='font-medium text-xl'>
          <CountUp duration={3} start={100} end={1000} prefix='+' />
        </span>
      </div>
      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>Muscle targets</h3>
        <span className='font-medium text-xl'>
          <CountUp duration={3} start={2} end={targets.length - 1} prefix='+' />
        </span>
      </div>
    </div>
  );
};

export default HeroCountUp;
