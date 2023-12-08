import Image from "next/image";
import React from "react";

const FeaturesPicture = () => {
  return (
    <Image
      width={1024}
      height={1024}
      className='min-w-[300px] sm:min-w-[400px] w-1/3 h-auto'
      src={"/assets/images/featuresImage.jpeg"}
      alt={"features image"}
    />
  );
};

export default FeaturesPicture;
