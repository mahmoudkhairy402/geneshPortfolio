import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import p1 from "../assets/podcast/podcast (1).jpeg";
import p2 from "../assets/podcast/podcast (2).jpeg";
import p3 from "../assets/podcast/podcast (3).jpeg";
import podcastVideo from "../assets/gnnsh/podcast.mp4";
import ImageModal from "./ImageModal";
import VideoModal from "./VideoModal";

const SectionLabel = ({ children }) => (
  <div className="mb-4 text-[10px] tracking-[0.35em] text-white/40 uppercase">{children}</div>
);

const PlayIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PodcastSection = () => {
  const images = [p1, p2, p3];
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openImageModal = (idx) => {
    setCurrentIdx(idx);
    setIsImageModalOpen(true);
  };
  const closeImageModal = () => setIsImageModalOpen(false);
  const showPrevImage = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const showNextImage = () => setCurrentIdx((i) => (i + 1) % images.length);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section id="podcast" className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      {/* Editorial Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <SectionLabel>STUDIO BROADCAST & AUDIO-VISUAL</SectionLabel>
          <h2 className="flex flex-wrap items-baseline gap-x-4">
            <span
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
              className="text-5xl tracking-tight md:text-6xl text-white"
            >
              PODCAST
            </span>
            <span
              style={{ fontFamily: "'Great Vibes', cursive" }}
              className="text-3xl text-white/90 md:text-4xl"
            >
              studio sessions
            </span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-white/70">
          Visualizing the conversation. From intimate studio setups to multi-camera live broadcasts, capturing the raw intensity and nuance of long-form dialogue.
        </p>
      </div>

      {/* Main Grid: Left Video Feature, Right Photography Grid */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        {/* Left: Interactive Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl"
        >
          {/* Top Bar with Broadcast Status */}
          <div className="flex items-center justify-between border-b border-white/10 bg-black/80 px-4 py-3 text-[10px] tracking-[0.2em] text-white/60 uppercase">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-semibold text-white">STUDIO RECORDING</span>
            </div>
            <span>4K 60FPS • MULTI-CAM</span>
          </div>

          <div className="relative aspect-video w-full bg-[#111]">
            <video
              ref={videoRef}
              src={podcastVideo}
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />

            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all hover:bg-black/20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white shadow-xl backdrop-blur transition-transform duration-300 hover:scale-110 hover:border-white">
                  <PlayIcon className="ml-1 h-6 w-6" />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Video Info */}
          <div className="flex items-center justify-between border-t border-white/10 bg-black/60 px-4 py-3 text-xs text-white/70">
            <span>Visual Storytelling in Dialogue</span>
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="text-[10px] tracking-wider text-white hover:underline uppercase"
            >
              Fullscreen View ↗
            </button>
          </div>
        </motion.div>

        {/* Right: Studio Photography Stills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <div className="overflow-hidden rounded-sm border border-white/5">
            <img
              src={p1}
              alt="Podcast studio main"
              onClick={() => openImageModal(0)}
              className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-sm border border-white/5">
              <img
                src={p2}
                alt="Podcast microphone setup"
                onClick={() => openImageModal(1)}
                className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="overflow-hidden rounded-sm border border-white/5">
              <img
                src={p3}
                alt="Podcast host dialogue"
                onClick={() => openImageModal(2)}
                className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal for Photography Stills */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        images={images}
        currentIdx={currentIdx}
        onPrev={showPrevImage}
        onNext={showNextImage}
      />

      {/* Video Modal for Fullscreen Podcast Playback */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videos={[{ src: podcastVideo, title: "Podcast Studio Recording", tag: "4K BROADCAST" }]}
        currentIdx={0}
      />
    </section>
  );
};

export default PodcastSection;
