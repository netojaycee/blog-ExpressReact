import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Mental from "../components/Home/Mental";
import Whats from "../components/Home/Whats";
import Faqs from "../components/Home/Faqs";
import Layout from "../components/LayoutSite";

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Layout>
      <Hero />
      <Features />
      <Mental />
      <Whats />
      
      <Faqs />
      </Layout>
      
    </main>
  );
}

export default Home;
