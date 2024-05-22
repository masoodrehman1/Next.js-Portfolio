"use client";
import { motion } from "framer-motion";
export function AnnimationWrapper({ children, className, ...props }) {
  return (
    <motion.div
      innitial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: "0.8" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
