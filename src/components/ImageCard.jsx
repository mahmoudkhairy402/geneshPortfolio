import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../motion/variants";

/**
 * ImageCard component – displays an image with stagger-compatible fade-in
 * and a spring bounce on hover.
 *
 * Props:
 *   - src: string – image URL/import.
 *   - alt: string – alt text.
 *   - onClick: () => void – click handler (e.g., open modal).
 */
const ImageCard = ({ src, alt, onClick }) => (
  <motion.div
    variants={fadeInUp}
    className="relative overflow-hidden rounded-lg cursor-pointer shadow-lg group"
    whileHover={{ scale: 1.05, rotate: 1, transition: { type: "spring", stiffness: 300 } }}
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

export default ImageCard;
