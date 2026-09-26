import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { announcementClips } from "../data/gnnshClips";
import VideoModal from "./VideoModal";

const SectionLabel = ({ children }) => (
  <div className="mb-4 text-[10px] tracking-[0.35em] text-white/40 uppercase">
    {children}
  </div>
);

const PlayIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const AnnouncementCard = ({ clip, index, onClick }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Seek slightly into the video to ensure a crisp frame is rendered (avoids black screen)
      const handleLoadedMetadata = () => {
        video.currentTime = 0.1;
        setIsLoaded(true);
      };

      if (video.readyState >= 1) {
        video.currentTime = 0.1;
        setIsLoaded(true);
      } else {
        video.addEventListener("loadedmetadata", handleLoadedMetadata, { once: true });
      }

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, [clip.src]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
      }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#0d0d0d] shadow-xl w-[78vw] max-w-[280px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 9:16 Video Canvas */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#111]">
        <video
          ref={videoRef}
          src={`${clip.src}#t=0.1`}
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 transition-opacity duration-300 group-hover:from-black/95" />

        {/* Top Tag & Index Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9px] tracking-[0.2em] uppercase">
          <span className="rounded bg-black/60 px-2 py-0.5 font-medium text-white/80 backdrop-blur-xs border border-white/10">
            {clip.tag}
          </span>
          <span className="text-white/40 font-mono">0{index + 1}</span>
        </div>

        {/* Centered Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm transition-all duration-300 ${
              isHovered
                ? "scale-110 border-white bg-white/20 text-white"
                : "opacity-80 group-hover:opacity-100"
            }`}
          >
            <PlayIcon className="ml-1 h-5 w-5" />
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[9px] tracking-[0.25em] text-white/50 uppercase font-medium">
              Commercial Reel
            </span>
          </div>
          <h3 className="text-sm font-semibold tracking-wide text-white transition-transform duration-300 group-hover:-translate-y-0.5">
            {clip.title}
          </h3>
          <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors">
            Tap to watch full cut ↗
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const AnnouncementsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (idx) => {
    setCurrentIdx(idx);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () =>
    setCurrentIdx((i) => (i - 1 + announcementClips.length) % announcementClips.length);
  const showNext = () =>
    setCurrentIdx((i) => (i + 1) % announcementClips.length);

  return (
    <section
      id="announcements"
      className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5"
    >
      {/* 1. Header on Top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <SectionLabel>COMMERCIAL RELEASES</SectionLabel>
          <h2 className="flex flex-wrap items-baseline gap-x-4">
            <span
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
              className="text-4xl tracking-tight text-white md:text-6xl"
            >
              ANNOUNCEMENTS
            </span>
            <span
              style={{ fontFamily: "'Great Vibes', cursive" }}
              className="text-3xl text-white/90 md:text-5xl"
            >
              commercial campaigns
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 max-w-lg">
          <p className="text-sm leading-relaxed text-white/70">
            High-impact visual announcements, commercial launches, and campaign teasers designed to seize attention within the first second and leave a memorable impression.
          </p>

          {/* Scope Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Brand Storytelling",
              "Dynamic Editing",
              "High Retention",
              "Sound & Color Mastery",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-xs border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] tracking-wider text-white/60 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 2. Full-Width 4-Card Reel Grid (Desktop 4-Cols | Mobile Horizontal Snap Reel) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0"
      >
        {announcementClips.map((clip, idx) => (
          <AnnouncementCard
            key={clip.id}
            clip={clip}
            index={idx}
            onClick={() => openModal(idx)}
          />
        ))}
      </motion.div>

      {/* Mobile Swipe Indicator */}
      <div className="mt-4 flex items-center justify-center gap-1.5 md:hidden text-[10px] tracking-[0.2em] text-white/40 uppercase">
        <span>← Swipe to explore 4 reels →</span>
      </div>

      {/* 3. Fullscreen Video Modal Player */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videos={announcementClips}
        currentIdx={currentIdx}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
};

export default AnnouncementsSection;
