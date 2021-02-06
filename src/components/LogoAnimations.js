export const container = {
  hidden: {},
  show: {
    transition: {
      duration: 1,
      ease: "easeIn",
      staggerChildren: 0.5,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
