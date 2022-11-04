export const h3Animation = {
  show: {
    y: [-100, 0],
    opacity: [0, 1],
    scale: [0.9, 1],
  },
  hide: { y: [0, -100], opacity: [1, 0], scale: [1, 0.9] },
};
export const title = {
  show: { y: [-100, 0], opacity: [0, 1] },
  hide: { y: [0, -100], opacity: [1, 0] },
  transition: { delay: 1, duration: 1 },
};
export const titleBig = {
  show: { x: [-500, 0], y: [100, 0], opacity: [0, 1] },
  hide: { x: [0, -500], y: [0, 100], opacity: [1, 0] },
};

export const lineAnimation = {
  show: { x: [-300, 0], opacity: [0, 1], scale: [0.9, 1] },
  hide: { x: [0, -300], opacity: [1, 0], scale: [1, 0.9] },
};
export const messageAnimation = {
  show: { x: [300, 0], opacity: [0, 1], scale: [0.5, 1] },
  hide: { x: [0, 300], opacity: [1, 0], scale: [1, 0.9] },
};
export const paragraphs = {
  show: { opacity: [0, 1], scale: [0.9, 1] },
  hide: { opacity: [1, 0], scale: [1, 0.9] },
};
export const work = {
  show: { opacity: [0, 1], scale: [2, 1] },
  hide: { opacity: [1, 0], scale: [1, 2] },
};
export const backWords = {
  show: { opacity: [0, 1], scale: [0, 1] },
  hide: { opacity: [1, 0], scale: [1, 0] },
};

export const filmAnimation = {
  show: { width: ["200vw", "100vw"], opacity: [0, 1] },
  hide: { width: ["100vw", "200vw"], opacity: [1, 0] },
};

export const opacityPage = {
  show: { opacity: [0, 1], transition: { duration: 1 } },
  hide: { opacity: [1, 0], transition: { duration: 1 } },
};

export const xAnimNeg = {
  show: { x: ["-100vw", "0vw"], opacity: [0, 1], transition: { duration: 1 } },
  hide: { x: ["0vw", "-100vw"], opacity: [1, 0], transition: { duration: 1 } },
};

export const h2anim = {
  show: {
    opacity: [0, 1],
    scale: [3, 1],
    x: [400, 0],
    transition: { duration: 1 },
  },
  hide: {
    opacity: [1, 0],
    scale: [1, 3],
    x: [0, 400],
    transition: { duration: 1 },
  },
};

export const xAnimPos = {
  show: { x: ["100vw", "0vw"], opacity: [0, 1], transition: { duration: 1 } },
  hide: { x: ["0vw", "100vw"], opacity: [1, 0], transition: { duration: 1 } },
};
export const scaleAnim = {
  show: { opacity: [0, 1], scale: [0, 1], transition: { duration: 1 } },
  hide: { opacity: [1, 0], scale: [1, 0], transition: { duration: 1 } },
};

export const xAnimPos50 = {
  show: {
    x: ["50vw", "0vw"],
    opacity: [0, 1],
    transition: { duration: 1, ease: "easeInOut" },
  },
  hide: {
    x: ["0vw", "50vw"],
    opacity: [1, 0],
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const scaleCentral = {
  show: {
    opacity: [0, 1],
    scale: [7, 1],
    x: [0, 0],
    transition: { duration: 1 },
  },
  hide: {
    opacity: [1, 0],
    scale: [1, 7],
    x: [0, 0],
    transition: { duration: 1 },
  },
};
export const scaleCentralNeg = {
  show: {
    opacity: [0, 1],
    scale: [0, 1],
    x: [0, 0],
    transition: { duration: 1 },
  },
  hide: {
    opacity: [1, 0],
    scale: [1, 0],
    x: [0, 0],
    transition: { duration: 1 },
  },
};
