export const fadeOpacity = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 1,
    delay,
    ease: "easeInOut",
  },
});

export const fadeInZoom = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smoothness
  },
  viewport: { once: true },
});

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

export const fadeInDown = (delay = 0) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

export const fadeInLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

export const fadeInRight = (delay = 0) => ({
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

export const scaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.7,
    delay,
    ease: "easeInOut",
  },
});

export const zoomIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  },
});
