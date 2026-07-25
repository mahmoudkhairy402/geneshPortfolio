import React from "react";
import { motion } from "framer-motion";
import owner1 from "../assets/owner/owner (1).jpeg";

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="overflow-hidden rounded-sm bg-[#f5f0e6] p-3">
            <img src={owner1} alt="Mohamed Mahmoud" className="h-64 w-full object-cover" />
            <div className="pt-3 text-center text-[10px] tracking-[0.25em] text-black/70">
              <div className="font-semibold">MOHAMED MAHMOUD</div>
              <div>PHOTOGRAPHER</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }} className="text-6xl tracking-tight md:text-7xl">
            WHO I AM?
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70">
            <p>
              I'm Mohamed Mahmoud, a photographer and visual storyteller passionate about capturing life's most compelling moments. 
              Whether it's the elegance of a wedding or the raw emotion of a podcast session, my lens is always seeking the truth in the frame.
            </p>
            <p>
              My expertise covers food, weddings, product photography, photo shoots, and creative reels. 
              Each project is a unique opportunity to create visual art that resonates and leaves a lasting impression.
            </p>
            <p>
              Let's create something extraordinary together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
