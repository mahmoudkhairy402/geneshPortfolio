import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const PlayIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VideoThumbnail = ({ video, isActive, onClick, variant }) => {
  const aspectClass = variant === "portrait" ? "aspect-[9/16]" : "aspect-video";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex-1 min-w-0 overflow-hidden rounded-sm transition-all duration-300 ${
        isActive ? "ring-2 ring-white ring-offset-2 ring-offset-black" : "opacity-70 hover:opacity-100"
      }`}
    >
      <div className={`relative w-full ${aspectClass} bg-black`}>
        <video
          src={video.src}
          muted
          preload="metadata"
          className="h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-black/40 text-white">
            <PlayIcon className="ml-0.5 h-3.5 w-3.5" />
          </div>
        </div>
        <span className="absolute bottom-2 left-2 text-[9px] tracking-[0.2em] text-white uppercase">
          {video.title}
        </span>
      </div>
    </button>
  );
};

const VideoPreviewSection = ({
  id,
  title,
  subtitle,
  variant = "reel",
  videos,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const activeVideo = videos[activeIndex];

  const aspectClass = variant === "portrait" ? "aspect-[9/16]" : "aspect-video";
  const playerMaxWidth = variant === "portrait" ? "max-w-md" : "max-w-4xl";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [activeIndex]);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id={id} className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        {/* Header */}
        <h2 className="mb-10 flex flex-wrap items-baseline justify-center gap-x-3 text-center">
          <span
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
            className="text-4xl tracking-tight text-white md:text-5xl"
          >
            {title}
          </span>
          <span
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="text-3xl text-white/90 md:text-4xl"
          >
            {subtitle}
          </span>
        </h2>

        {/* Main player */}
        <div className={`w-full ${playerMaxWidth} mx-auto`}>
          <div className={`relative w-full overflow-hidden rounded-sm bg-black ${aspectClass}`}>
            <video
              ref={videoRef}
              key={activeVideo.src}
              src={activeVideo.src}
              controls
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          {/* Status bar */}
          <div className="mt-4 flex items-center justify-between border-b border-white/20 pb-3 text-[10px] tracking-[0.25em] text-white/50 uppercase">
            <span>
              Now Playing <span className="text-white/30">•</span>{" "}
              <span className="text-white/70">{activeVideo.title}</span>
            </span>
            <span>{videos.length} Clips</span>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {videos.map((video, index) => (
              <VideoThumbnail
                key={video.src}
                video={video}
                isActive={index === activeIndex}
                onClick={() => handleSelect(index)}
                variant={variant}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoPreviewSection;
