"use client";

import * as motion from "motion/react-client";

export default function TransitionOptions() {
  return (
    <motion.div
      className="h-16 w-16 rounded-full bg-blue-500 shadow-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-hidden
    />
  );
}
