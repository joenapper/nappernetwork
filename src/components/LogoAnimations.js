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

export const blueWave = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: 1000,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

export const leftWave = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: 1000,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

export const rightWave = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: 1000,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};
