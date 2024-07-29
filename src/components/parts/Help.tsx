"use client";
import { motion } from "framer-motion";
import { HeroHighlight,  } from "../ui/hero-highlight";
const Help = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-4xl  text-neutral-700 dark:text-[#19183A] max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        We help ambitious businesses scale beyond traditional growth targets!
      </motion.h1>
    </HeroHighlight>
  )
}

export default Help