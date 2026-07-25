import React from "react";
import TopNav from "../../components/TopNav";
import Hero from "../../components/Hero";
import About from "../../components/About";
import PortfolioHighlights from "../../components/PortfolioHighlights";
import FoodSection from "../../components/FoodSection";
import PhotoShotSection from "../../components/PhotoShotSection";
import WeddingSection from "../../components/WeddingSection";
import PodcastSection from "../../components/PodcastSection";
import ReelsSection from "../../components/ReelsSection";
import ProductSection from "../../components/ProductSection";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <TopNav />
      <Hero />
      <About />
      <PortfolioHighlights />
      <FoodSection />
      <PhotoShotSection />
      <WeddingSection />
      <PodcastSection />
      <ReelsSection />
      <ProductSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
