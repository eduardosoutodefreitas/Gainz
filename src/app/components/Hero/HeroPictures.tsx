import Image from "next/image";
import React from "react";

const HeroPictures = () => {
  return (
    <div className='flex items-start gap-4'>
      <Image
        width={500}
        height={749.91}
        className='z-[2] rounded-3xl w-[150px] xs:w-[200px] sm:w-[250px] absolute -translate-x-1/3 lg:-translate-x-1/2 -translate-y-14 h-auto'
        src={"/assets/images/heroWomanPicture.png"}
        alt={"Hero Woman Picture"}
      />
      <Image
        width={500}
        height={729.86}
        className='z-[1] rounded-3xl w-[150px] xs:w-[200px] sm:w-[250px] h-auto translate-y-14 translate-x-1/3 lg:-translate-x-0'
        src={"/assets/images/heroManPicture.png"}
        alt={"Hero Man Picture"}
      />
    </div>
  );
};

export default HeroPictures;
