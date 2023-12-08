import { Button } from "@nextui-org/react";
import React from "react";
import HeroCountUp from "./HeroCountUp";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

const HeroCta = () => {
  return (
    <div className='w-full lg:w-1/2 min-w-[250px] flex flex-col items-center lg:items-start gap-5 text-center lg:text-start'>
      <h1 className='xl:text-7xl md:text-5xl text-4xl font-black'>
        <Balancer>Achieve Your Fitness Goals with Gainz</Balancer>
      </h1>
      <p className='sm:text-lg'>
        <Balancer>
          Get personalized workouts with over 1000 exercises to choose from,
          covering a wide range of fitness levels and goals. Transform your
          fitness journey with ease and simplicity, and discover a multitude of
          options to keep your workouts exciting and effective.
        </Balancer>
      </p>
      <Link className='max-w-xs xs:max-w-none' href='/create-workout'>
        <Button
          className='my-3 xs:text-base xs:px-5'
          radius='sm'
          variant='shadow'
          color='secondary'
        >
          Start creating customized workouts
        </Button>
      </Link>
      <HeroCountUp />
    </div>
  );
};

export default HeroCta;
