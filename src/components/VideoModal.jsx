import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const VideoModal = ({
  isOpen,
  onClose,
  videos,
  currentIdx = 0,
  onPrev,
  onNext,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, currentIdx]);

  if (!isOpen || !videos || videos.length === 0) return null;

  const currentItem = videos[currentIdx];
  const videoSrc = typeof currentItem === "string" ? currentItem : currentItem?.src;
  const title = currentItem?.title || "";
  const tag = currentItem?.tag || "";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Main Container */}
          <motion.div
            className="relative flex max-h-[92vh] max-w-[92vw] flex-col items-center overflow-hidden rounded-sm border border-white/10 bg-black/80 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex w-full items-center justify-between border-b border-white/10 px-5 py-3 text-[11px] tracking-[0.25em] text-white/60 uppercase">
              <div className="flex items-center gap-3">
                {tag && <span className="rounded bg-white/10 px-2 py-0.5 text-white">{tag}</span>}
                <span>{title}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player */}
            <div className="relative flex max-h-[80vh] items-center justify-center bg-black">
              <video
                ref={videoRef}
                key={videoSrc}
                src={videoSrc}
                controls
                autoPlay
                playsInline
                className="max-h-[78vh] max-w-full object-contain"
              />
            </div>

            {/* Navigation arrows if multiple videos */}
            {videos.length > 1 && onPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2.5 text-white backdrop-blur transition-all hover:bg-white hover:text-black"
                aria-label="Previous video"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {videos.length > 1 && onNext && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2.5 text-white backdrop-blur transition-all hover:bg-white hover:text-black"
                aria-label="Next video"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
