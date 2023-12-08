import features from "@/constants/Features";
import React from "react";
import Feature from "./Feature";
import { Button } from "@nextui-org/react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

const FeaturesCta = () => {
  return (
    <div className='flex flex-col items-center lg:items-start text-center lg:text-start max-w-2xl'>
      <span className='font-semibold text-sm text-secondary'>Streamline</span>
      <h2 className='font-bold xl:text-5xl md:text-4xl text-3xl mt-1 mb-5'>
        <Balancer>Discover the versatility of Gainz platform</Balancer>
      </h2>
      <p>
        <Balancer>
          Introducing Gainz platform – the versatile tool that simplifies and
          enhances your workout planning. With over 1000+ exercises to choose
          from, easily customize and transform your fitness journey. Discover
          the simplicity and speed of Gainz today!
        </Balancer>
      </p>
      <div className='mt-5 mb-2'>
        {features.map((feature) => (
          <Feature
            key={feature.title}
            description={feature.description}
            title={feature.title}
          />
        ))}
      </div>
      <Link href='/about'>
        <Button
          className='my-3'
          size='lg'
          radius='sm'
          variant='shadow'
          color='secondary'
        >
          Learn more about Gainz
        </Button>
      </Link>
    </div>
  );
};

export default FeaturesCta;
