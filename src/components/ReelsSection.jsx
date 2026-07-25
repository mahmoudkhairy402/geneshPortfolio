import React, { useState } from "react";
import { motion } from "framer-motion";
import r1 from "../assets/reels/reals5.jpeg";
import r2 from "../assets/reels/reals4.jpeg";
import r3 from "../assets/reels/reals3.jpeg";
import ImageModal from "./ImageModal";

const SectionLabel = ({ children }) => (
  <div className="mb-4 text-[10px] tracking-[0.35em] text-white/40 uppercase">{children}</div>
);

const ReelsSection = () => {
  const images = [r1, r2, r3];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const openModal = (idx) => { setCurrentIdx(idx); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setCurrentIdx((i) => (i + 1) % images.length);

  return (
    <section id="reels" className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      <div className="grid gap-12 md:grid-cols-[320px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-sm leading-relaxed text-white/70"
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }} className="text-5xl tracking-tight md:text-6xl text-white">
            REELS
          </h2>
          <p>Dynamic, short-form visual content that grabs attention in the first second.</p>
          <div>
            <SectionLabel>ENGAGEMENT</SectionLabel>
            <p className="text-xs text-white/60">Crafting high-impact visuals for social media platforms.</p>
          </div>
        </motion.div>

        {/* Vertical portrait cards grid — same as Wedding */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              className="overflow-hidden rounded-sm"
            >
              <img
                src={src}
                alt={`Reel ${i + 1}`}
                onClick={() => openModal(i)}
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIdx={currentIdx}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
};

export default ReelsSection;
