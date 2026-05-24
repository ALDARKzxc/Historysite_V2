import type { Variants, Transition } from 'framer-motion';

// Smooth "expensive" easing (easeOutExpo-ish).
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Soft spring for hovers / pills / dropdowns. */
export const spring: Transition = { type: 'spring', stiffness: 300, damping: 26, mass: 0.7 };
export const springSnappy: Transition = { type: 'spring', stiffness: 420, damping: 32 };

/** Item that fades and rises into place. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** Item that scales + fades in (for cards). */
export const popIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

/** Container that staggers its children into view. */
export const staggerGrid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/** Hover lift for clickable cards. */
export const cardHover = { y: -8, transition: spring };
export const cardTap = { scale: 0.985 };

/** Standard "reveal on scroll" viewport config. */
export const inView = { once: true, margin: '-60px' } as const;
