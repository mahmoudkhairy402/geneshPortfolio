import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";
import food1 from "../assets/food/food (1).jpg";
import food2 from "../assets/food/food (2).jpg";
import food3 from "../assets/food/food (1).PNG";
import food4 from "../assets/food/food (2).PNG";
import food5 from "../assets/food/food (3).PNG";
import food6 from "../assets/food/food (4).PNG";

const SectionLabel = ({ children }) => (
  <div className="mb-4 text-[10px] tracking-[0.35em] text-white/40 uppercase">{children}</div>
);

const FoodSection = () => {
  const images = [food1, food2, food3, food4, food5, food6];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const openModal = (idx) => { setCurrentIdx(idx); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setCurrentIdx((i) => (i + 1) % images.length);

  return (
    <section id="food" className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      <div className="grid gap-12 md:grid-cols-[1fr_320px]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }} className="mb-8 text-5xl tracking-tight md:text-7xl">
            FOOD
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {images.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-sm"
              >
                <img src={s} alt={`Food ${i}`} onClick={() => openModal(i)} className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 text-sm leading-relaxed text-white/70 flex flex-col justify-center"
        >
          <div>
            <SectionLabel>CULINARY ART</SectionLabel>
            <p>
              Food photography is about more than just making a dish look appetizing; it's about telling the story of the ingredients and the chef's passion.
            </p>
          </div>
          <p>
            I focus on lighting, texture, and composition to bring out the vibrant colors and exquisite details of every meal, making the viewer almost taste the flavors.
          </p>
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

export default FoodSection;
