import { Button } from "@nextui-org/react";
import React from "react";
import HeroCountUp from "./HeroCountUp";

const HeroCta = () => {
  return (
    <div className='w-full lg:w-1/2 min-w-[250px] flex flex-col items-center lg:items-start gap-5 text-center lg:text-start'>
      <h1 className='xl:text-7xl md:text-5xl text-4xl font-black'>
        Achieve Your Fitness Goals with Gainz
      </h1>
      <p className='sm:text-lg'>
        Get personalized workouts with 1000+ exercises to choose from. Transform
        your fitness journey with ease and simplicity.
      </p>
      <Button
        className='my-3'
        size='lg'
        radius='sm'
        variant='shadow'
        color='secondary'
      >
        Start creating customized workouts
      </Button>
      <HeroCountUp />
    </div>
  );
};

export default HeroCta;
