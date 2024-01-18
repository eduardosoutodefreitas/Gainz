import React from "react";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Sections/Hero/Hero";
import Features from "./components/Features/Features";
import Cta from "./components/Sections/CtaSection/Cta";

const Home = () => {
  return (
    <main className='w-full'>
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </main>
  );
};

export default Home;
