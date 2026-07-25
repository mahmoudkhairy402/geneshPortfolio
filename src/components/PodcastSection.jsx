import React, { useState } from "react";
import { motion } from "framer-motion";
import p1 from "../assets/podcast/podcast (1).jpeg";
import p2 from "../assets/podcast/podcast (2).jpeg";
import p3 from "../assets/podcast/podcast (3).jpeg";
import ImageModal from "./ImageModal";

const SectionLabel = ({ children }) => (
  <div className="mb-4 text-[10px] tracking-[0.35em] text-white/40 uppercase">{children}</div>
);

const PodcastSection = () => {
  const images = [p1, p2, p3];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const openModal = (idx) => { setCurrentIdx(idx); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setCurrentIdx((i) => (i + 1) % images.length);

  return (
    <section id="podcast" className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      <div className="grid gap-12 md:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-2 gap-3">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 overflow-hidden rounded-sm"
          >
            <img src={p1} alt="Podcast" onClick={() => openModal(0)} className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-sm"
          >
            <img src={p2} alt="Podcast" onClick={() => openModal(1)} className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overflow-hidden rounded-sm"
          >
            <img src={p3} alt="Podcast" onClick={() => openModal(2)} className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer" />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-sm leading-relaxed text-white/70 flex flex-col justify-center"
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }} className="text-5xl tracking-tight md:text-6xl text-white">
            PODCAST
          </h2>
          <p>
            Visualizing the conversation. From studio setups to live events, capturing the intensity and connection of podcast discussions requires a keen eye for subtle expressions.
          </p>
          <div>
            <SectionLabel>VISUAL STORYTELLING</SectionLabel>
            <p className="text-xs text-white/60">
              Enhancing audio narratives with compelling imagery that resonates with audiences.
            </p>
          </div>
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

export default PodcastSection;
