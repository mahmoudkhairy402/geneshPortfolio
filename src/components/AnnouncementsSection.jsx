import React, { useState, useRef } from "react";
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
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
      className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-black"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#111]">
        <video
          ref={videoRef}
          src={clip.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

        {/* Play Icon Badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-sm transition-all duration-300 ${
              isHovered ? "scale-110 border-white bg-white/20 text-white" : "opacity-80"
            }`}
          >
            <PlayIcon className="ml-1 h-5 w-5" />
          </div>
        </div>

        {/* Card Metadata */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
          <span className="text-[9px] tracking-[0.25em] text-white/50 uppercase">
            {clip.tag}
          </span>
          <span className="text-xs font-semibold tracking-wider text-white transition-transform duration-300 group-hover:-translate-y-0.5">
            {clip.title}
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
      <div className="grid gap-12 md:grid-cols-[320px_1fr]">
        {/* Editorial Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-sm leading-relaxed text-white/70 flex flex-col justify-center"
        >
          <SectionLabel>COMMERCIAL RELEASES</SectionLabel>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
            className="text-5xl tracking-tight md:text-6xl text-white"
          >
            ANNOUNCEMENTS
          </h2>
          <p>
            High-impact visual announcements, commercial launches, and campaign teasers designed to seize attention within the first second and leave a memorable impression.
          </p>
          <div>
            <SectionLabel>CAMPAIGN SCOPE</SectionLabel>
            <ul className="space-y-2 text-xs text-white/60">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/40" /> Brand Storytelling & Teasers
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/40" /> Dynamic Short-form Editing
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/40" /> High-retention Social Formats
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/40" /> Sound Design & Color Mastery
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 4 Portrait Video Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
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
      </div>

      {/* Video Modal Player */}
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
