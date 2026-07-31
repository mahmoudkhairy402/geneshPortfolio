import React from "react";
import TopNav from "../../components/TopNav";
import Hero from "../../components/Hero";
import About from "../../components/About";
import PortfolioHighlights from "../../components/PortfolioHighlights";
import FoodSection from "../../components/FoodSection";
import PhotoShotSection from "../../components/PhotoShotSection";
import WeddingSection from "../../components/WeddingSection";
import VideoPreviewSection from "../../components/VideoPreviewSection";
import { reelClips, portraitClips } from "../../data/videoClips";
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
      <VideoPreviewSection
        id="wedding-reels"
        title="Product Photography Videos"
        subtitle="videography"
        variant="reel"
        videos={portraitClips}
        />
      <PodcastSection />
      <ReelsSection />
      <VideoPreviewSection
        id="wedding-portrait"
       title="Product Photography Videos"
        subtitle="videography"
        variant="portrait"  
        videos={reelClips}
      />
      <ProductSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
