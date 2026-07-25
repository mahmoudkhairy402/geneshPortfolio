import React from "react";
import { motion } from "framer-motion";
import owner1 from "../assets/owner/owner (1).jpeg";
import owner2 from "../assets/owner/owner (2).jpeg";

const Hero = () => {
  return (
    <header id="home" className="mx-auto max-w-[1400px] px-6 pt-32 pb-10">
      <div className="flex items-end justify-between gap-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="leading-[0.85] tracking-tight text-[#f5f0e6]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(3rem, 12vw, 10rem)" }}
        >
          PORTFOLIO
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden shrink-0 items-center gap-4 md:flex"
        >
          <div className="text-right text-[10px] leading-tight tracking-[0.25em] text-white/60 uppercase">
            MOHAMED MAHMOUD<br />PHOTOGRAPHY
          </div>
          <div className="h-24 w-24 overflow-hidden rounded bg-white/5 ring-1 ring-white/10">
            <img src={owner1} alt="Mohamed Mahmoud" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 overflow-hidden rounded-sm shadow-inner-5"
      >
        <img src={owner2} alt="Hero banner" className="h-[280px] w-full object-cover md:h-[390px]" />
        </motion.div>
      </header>
  );
};

export default Hero;
