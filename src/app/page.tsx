import React from "react";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

const Home = () => {
  return (
    <main className='w-full'>
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};

export default Home;
