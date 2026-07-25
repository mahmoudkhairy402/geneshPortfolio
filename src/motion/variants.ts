export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerChildren = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const bounceHover = {
  whileHover: {
    scale: 1.08,
    rotate: 3,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const parallax = (y: number) => ({
  whileInView: { y },
  transition: { type: "spring", stiffness: 200 },
});

export const parallax3D = {
  hidden: { opacity: 0, rotateY: -10, z: -100 },
  show: {
    opacity: 1,
    rotateY: 0,
    z: 0,
    transition: { type: "spring", stiffness: 200 },
  },
};

export const globalStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
