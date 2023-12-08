import { IoIosFitness } from "react-icons/io";

import { Feature } from "@/types/FeatureTypes";
import React from "react";
import Balancer from "react-wrap-balancer";

const Feature = ({ description, title }: Feature) => {
  return (
    <div className='flex flex-col items-center text-center lg:text-start lg:items-start gap-2 max-w-xs mb-3'>
      <div className='flex gap-2 items-center'>
        <IoIosFitness className='text-secondary' size={35} />
        <h3 className='font-bold text-xl sm:text-2xl'>{title}</h3>
      </div>
      <p className='text-lightGray'>
        <Balancer>{description}</Balancer>
      </p>
    </div>
  );
};

export default Feature;
