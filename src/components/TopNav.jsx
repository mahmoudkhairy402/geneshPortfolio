import React from "react";
import { motion } from "framer-motion";

const TopNav = () => {
  const items = ["HOME", "ABOUT", "PORTFOLIO", "FOOD", "PHOTO SHOT", "WEDDING", "PODCAST", "REELS", "PRODUCT", "CONTACT"];
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full border-b border-white/10 bg-black fixed top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4 text-[10px] tracking-[0.2em] text-white/60">
        {items.map((it) => (
          <a key={it} href={`#${it.toLowerCase().replace(/[^a-z]/g, "")}`} className="transition-colors hover:text-white">
            {it}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default TopNav;
