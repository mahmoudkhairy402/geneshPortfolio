import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { reviewData } from "../data/gnnshClips";

const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ReviewShowcaseSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <section
      id="review"
      className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        {/* Editorial Header */}
        <div className="mb-4 text-[10px] tracking-[0.35em] text-white/40 uppercase">
          FLAGSHIP PRODUCTION
        </div>

        <h2 className="mb-4 flex flex-wrap items-baseline justify-center gap-x-3 text-center">
          <span
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
            className="text-4xl tracking-tight text-white md:text-6xl"
          >
            {reviewData.headline}
          </span>
          <span
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="text-3xl text-white/90 md:text-5xl"
          >
            {reviewData.subtitle}
          </span>
        </h2>

        <p className="mb-10 max-w-2xl text-center text-sm leading-relaxed text-white/70">
          {reviewData.description}
        </p>

        {/* Cinematic Widescreen Player */}
        <div className="relative w-full max-w-5xl overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-video w-full bg-[#080808]">
            <video
              ref={videoRef}
              src={reviewData.src}
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />

            {/* Custom Overlay on Pause */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/20"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white shadow-xl backdrop-blur transition-transform duration-300 hover:scale-110 hover:border-white">
                  <PlayIcon className="ml-1.5 h-8 w-8" />
                </div>
              </div>
            )}
          </div>

          {/* Metadata Footer Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-black/80 px-6 py-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] tracking-[0.2em] font-medium text-white uppercase">
                {reviewData.title}
              </span>
            </div>

            {/* Production Tags */}
            <div className="flex flex-wrap items-center gap-2">
              {reviewData.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xs border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] tracking-wider text-white/70 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewShowcaseSection;
