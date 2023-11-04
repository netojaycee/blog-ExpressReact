import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Mental from "../components/Home/Mental";
import Whats from "../components/Home/Whats";
import Faqs from "../components/Home/Faqs";

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Mental />
      <Whats />
      
      <Faqs />

      
    </main>
  );
}

export default Home;
