import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function AttentionBar() {
  const { scrollY } = useViewportScroll();
  const yRange = [-400, -100, 100, 400];
  const opacityRange = [0, 1, 1, 0];
  const opacity = useTransform(scrollY, yRange, opacityRange);
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 bottom-0 transform translate-y-1/2"
    >
      <motion.div
        aria-hidden
        initial="unmounted"
        animate="mounted"
        exit="unmounted"
        variants={{
          mounted: { y: '1rem' },
          unmounted: { y: '-1rem' },
        }}
        transition={{ yoyo: Infinity, duration: 2 }}
        style={{ opacity }}
        className="flex flex-col items-center justify-center"
      >
        <div
          aria-hidden
          className="w-4 h-4 border-4 rounded-full border-brand-pink"
        />
        <div aria-hidden className="w-1 h-24 bg-brand-pink" />
        <div aria-hidden className="w-4 h-4 rounded-full bg-brand-pink" />
      </motion.div>
    </div>
  );
}

export { AttentionBar };
