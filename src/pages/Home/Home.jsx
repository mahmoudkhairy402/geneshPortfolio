import React from "react";
import TopNav from "../../components/TopNav";
import Hero from "../../components/Hero";
import About from "../../components/About";
import PortfolioHighlights from "../../components/PortfolioHighlights";
import FoodSection from "../../components/FoodSection";
import PhotoShotSection from "../../components/PhotoShotSection";
import WeddingSection from "../../components/WeddingSection";
import AnnouncementsSection from "../../components/AnnouncementsSection";
import VideoPreviewSection from "../../components/VideoPreviewSection";
import { reelClips, portraitClips } from "../../data/videoClips";
import PodcastSection from "../../components/PodcastSection";
import ReelsSection from "../../components/ReelsSection";
import ReviewShowcaseSection from "../../components/ReviewShowcaseSection";
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
      <AnnouncementsSection />
      <VideoPreviewSection
        id="commercial-reels"
        title="Commercial Videography"
        subtitle="motion & light"
        variant="portrait"
        videos={portraitClips}
      />
      <PodcastSection />
      <ReelsSection />
      <ReviewShowcaseSection />
      <VideoPreviewSection
        id="product-reels"
        title="Product In Motion"
        subtitle="visual identity"
        variant="reel"
        videos={reelClips}
      />
      <ProductSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
