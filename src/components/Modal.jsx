import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export const Modal = ({ isOpen, onClose, src, alt, onPrev, onNext }) => {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0, transition: { type: "spring", stiffness: 300 } }}
            exit={{ scale: 0.8, y: 50 }}
          />
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl"
            whileHover={{ rotate: 90 }}
          >✕</motion.button>
          <motion.button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
            whileHover={{ x: -5 }}
          >←</motion.button>
          <motion.button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
            whileHover={{ x: 5 }}
          >→</motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
