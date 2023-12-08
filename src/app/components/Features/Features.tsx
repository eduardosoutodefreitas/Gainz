import React from "react";
import FeaturesCta from "./FeaturesCta";
import FeaturesPicture from "./FeaturesPicture";

const Features = () => {
  return (
    <section className='bg-alternativeBlack w-full px-5 py-20 lg:py-36'>
      <div className='container mx-auto w-full flex flex-col lg:justify-around lg:flex-row gap-16 items-center'>
        <FeaturesCta />
        <FeaturesPicture />
      </div>
    </section>
  );
};

export default Features;
