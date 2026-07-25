import React from "react";
import { motion } from "framer-motion";
import food1 from "../assets/food/food (1).jpg";
import photoShot2 from "../assets/photo Shot/photo Shot (2).JPG";
import podcast1 from "../assets/podcast/podcast (1).jpeg";
import reels1 from "../assets/reels/reals1.jpeg";
import wedding1 from "../assets/wedding/wedding1.jpeg";
import product1 from "../assets/product/product1.jpg";

const PortfolioHighlights = () => {
  const categories = [
    { img: food1, label: "FOOD" },
    { img: photoShot2, label: "PHOTO SHOT" },
    { img: wedding1, label: "WEDDING" },
    { img: podcast1, label: "PODCAST" },
    { img: reels1, label: "REELS" },
    { img: product1, label: "PRODUCT" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="portfolio" className="mx-auto max-w-[1400px] px-6 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }} 
        className="mb-8 text-5xl leading-none tracking-tight md:text-7xl"
      >
        PORTFOLIO<br />HIGHLIGHTS
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 gap-3 md:grid-cols-3"
      >
        {categories.map((c) => (
          <motion.div key={c.label} variants={itemVariants} className="group relative overflow-hidden rounded-sm cursor-pointer">
            <img src={c.img} alt={c.label} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
            <div className="absolute bottom-4 left-4 text-[12px] tracking-[0.3em] font-semibold text-white transition-transform duration-500 group-hover:-translate-y-1">{c.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioHighlights;
