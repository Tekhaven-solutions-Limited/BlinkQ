"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    text: "Sign up once with NIN, BVN, Phone, and email.",
  },
  {
    id: 2,
    text: "Get your BlinkQ wallet, bank account number.",
  },
  {
    id: 3,
    text: "Start sending, receiving, and paying instantly; all in WhatsApp.",
  },
];

export default function ThreeSteps() {
  return (
    <section
      id="howDoesItWork"
      className="relative w-full bg-gradient-to-br from-[#1A1A00] via-[#0D0D00] to-[#000000] text-white flex flex-col items-center justify-center px-6  py-20 md:py-[165px] gap-16 overflow-hidden"
    >
      {/* Spray gradients */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#CCFF02] rounded-full blur-[400px] opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#CCFF02] rounded-full blur-[400px] opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[18px] md:text-[32px] font-medium z-10"
      >
        ⚡ Three Steps. Zero Stress.{" "}
        <span className="text-white">Payments Sorted.</span>
      </motion.h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 md:max-w-[1100px] w-full z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-[#171717] rounded-2xl px-8 py-[57px] flex flex-col items-center text-center shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
          >
            {/* Step Number */}
            <div className="bg-[#CCFF02] text-black font-bold md:text-[24px] text-[16.67px] leading-[100%] rounded-full md:w-[62px] md:h-[62px] w-[43px] h-[43px] flex items-center justify-center mb-8">
              {step.id}
            </div>

            {/* Step Text */}
            <p className="text-[12.5px] md:text-[18px] leading-[140%]">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
