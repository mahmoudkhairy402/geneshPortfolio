import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, globalStagger, parallax3D } from "../motion/variants";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";

import prod1 from "../assets/product/product1.jpg";
import prod2 from "../assets/product/product2.jpg";
import prod3 from "../assets/product/product3.jpg";
import prod4 from "../assets/product/product4.jpg";
import prod5 from "../assets/product/product5.jpg";
import prod6 from "../assets/product/product6.jpg";

const images = [prod1, prod2, prod3, prod4, prod5, prod6];

const ProductSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const openModal = (idx) => { setCurrentIdx(idx); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () => setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setCurrentIdx((i) => (i + 1) % images.length);

  return (
    <section id="product" className="mx-auto max-w-[1400px] px-6 py-20 border-t border-white/5">
      <motion.div
        variants={globalStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-12 md:grid-cols-[320px_1fr]"
      >
        {/* Text Block */}
        <motion.div variants={fadeInUp} className="flex flex-col justify-center">
          <motion.h2
            variants={parallax3D}
            className="mb-6 text-5xl tracking-tight md:text-6xl text-white"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            PRODUCT
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70"
          >
            Commercial product photography that elevates brands. Every detail is highlighted through meticulous lighting and styling to showcase the product's true quality and design.
          </motion.p>
        </motion.div>
        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          {images.map((src, idx) => (
            <ImageCard key={idx} src={src} alt={`Product ${idx + 1}`} onClick={() => openModal(idx)} />
          ))}
        </motion.div>
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

export default ProductSection;
