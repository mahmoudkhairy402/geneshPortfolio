import React, { useState } from "react";
import { motion } from "framer-motion";
import wedding1 from "../assets/wedding/wedding1.jpeg";
import wedding2 from "../assets/wedding/wedding2.jpeg";
import wedding3 from "../assets/wedding/wedding3.jpeg";
import wedding4 from "../assets/wedding/wedding4.jpeg";
import ImageModal from "./ImageModal";

const SectionLabel = ({ children }) => (
  <div className="mb-4 text-[10px] tracking-[0.35em] text-white/40 uppercase">{children}</div>
);

const WeddingSection = () => {
  const images = [wedding1, wedding2, wedding3, wedding4];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const openModal = (idx) => { setCurrentIdx(idx); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setCurrentIdx((i) => (i + 1) % images.length);

  return (
    <section id="wedding" className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      <div className="grid gap-12 md:grid-cols-[320px_1fr]">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-sm leading-relaxed text-white/70"
        >
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
            className="text-5xl tracking-tight md:text-6xl text-white"
          >
            WEDDING
          </h2>
          <p>
            A wedding is a collection of fleeting moments that deserve to be preserved forever.
            I focus on capturing the authentic emotions and candid interactions that make your day unique.
          </p>
          <div>
            <SectionLabel>WHAT'S INCLUDED</SectionLabel>
            <ul className="space-y-2 text-xs text-white/60">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" /> Full-day coverage</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" /> High-resolution edited photos</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" /> Highlight gallery</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" /> Printed keepsake album (Optional)</li>
            </ul>
          </div>
        </motion.div>

        {/* Vertical portrait cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
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
                alt={`Wedding ${i + 1}`}
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

export default WeddingSection;
