import React, { useState } from "react";
import { motion } from "framer-motion";
import ps1 from "../assets/photo Shot/photo Shot (1).JPG";
import ps2 from "../assets/photo Shot/photo Shot (2).JPG";
import ps3 from "../assets/photo Shot/photo Shot (3).JPG";
import ps4 from "../assets/photo Shot/photo Shot (4).JPG";
import ps5 from "../assets/photo Shot/photo Shot (5).JPG";
import ImageModal from "./ImageModal";

const PhotoShotSection = () => {
  const images = [ps1, ps2, ps3, ps4, ps5];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const openModal = (idx) => { setCurrentIdx(idx); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setCurrentIdx((i) => (i + 1) % images.length);

  return (
    <section id="photoshot" className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }} 
          className="mb-6 text-5xl tracking-tight md:text-7xl"
        >
          PHOTO SHOT
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70"
        >
          Capturing the essence of the moment. From editorial fashion shoots to personal portraits, every session is a collaborative exploration of identity and style.
        </motion.p>
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5"
      >
        {images.map((s, i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            className={`overflow-hidden rounded-sm ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <img 
              src={s} 
              alt={`Photo Shot ${i}`} 
              onClick={() => openModal(i)}
              className="aspect-[9/16] w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer" 
            />
          </motion.div>
        ))}
      </motion.div>

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

export default PhotoShotSection;
