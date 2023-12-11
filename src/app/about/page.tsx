import React from "react";
import AboutAccordion from "./AboutAccordion";
import AboutContact from "./AboutContact";

export default function About() {
  return (
    <>
      <div className='py-20 w-full max-w-4xl pt-8 mx-auto px-5 sm:px-3'>
        <div className='text-center mb-8'>
          <h2 className='font-bold text-2xl sm:text-4xl mb-1'>
            Get to Know Gainz Better
          </h2>
          <p className='sm:text-lg mb-5'>
            Find answers to commonly asked questions about our platform
          </p>
        </div>
        <AboutAccordion />
        <AboutContact />
      </div>
    </>
  );
}
