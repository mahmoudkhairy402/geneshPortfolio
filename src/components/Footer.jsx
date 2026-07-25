import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="border-t border-white/10 py-6 text-center text-[10px] tracking-[0.25em] text-white/30"
    >
      © {new Date().getFullYear()} MOHAMED MAHMOUD · ALL RIGHTS RESERVED
    </motion.footer>
  );
};

export default Footer;
