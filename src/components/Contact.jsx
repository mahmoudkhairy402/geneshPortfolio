import React, { useState } from "react";
import { motion } from "framer-motion";
import { bounceHover, fadeInUp } from "../motion/variants";
import owner4 from "../assets/owner/owner (4).jpeg";

// Inline SVG icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.07 2 .07v2.3h-1.4c-1.1 0-1.4.7-1.4 1.3V12h2.8l-.4 3h-2.4v7A10 10 0 0022 12z" fill="currentColor"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M22 12c0 5.52-4.48 10-10 10-1.74 0-3.37-.44-4.8-1.21L2 22l1.21-5.2C2.44 15.37 2 13.74 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 py-20">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-12"
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }} className="text-6xl leading-none tracking-tight md:text-8xl">
          CONTACT<br />ME
        </h2>
        <div className="flex items-center gap-6">
          <div className="space-y-2 text-xs text-white/70">
            <motion.a
              href="https://www.instagram.com/mohme6121?igsh=d3IzNHJldjJwYTUw&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              whileHover={bounceHover}
            >
              <InstagramIcon />
              <span>Instagram</span>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/share/19AqjKn9SZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              whileHover={bounceHover}
            >
              <FacebookIcon />
              <span>Facebook</span>
            </motion.a>
            <motion.a href="tel:+201026389991" className="flex items-center gap-2" whileHover={bounceHover}>
              <PhoneIcon />
              <span>+20 10 2638 9991</span>
            </motion.a>
            <motion.a href="https://wa.me/201026389991" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" whileHover={bounceHover}>
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </motion.a>
          </div>
          <motion.img
            whileHover={bounceHover}
            src={owner4}
            alt="Mohamed Mahmoud"
            className="h-32 w-24 rounded-sm object-cover"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <a
          href="https://wa.me/201026389991"
          className="inline-block border border-white/40 px-10 py-4 text-[11px] tracking-[0.35em] transition-colors hover:bg-white hover:text-black"
        >
          LET'S WORK TOGETHER
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
