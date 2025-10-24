"use client";

import { motion } from "framer-motion";
import thunder from "../../../public/svgs/image 310.svg";
import diamond from "../../../public/svgs/image 311.svg";
import moon from "../../../public/svgs/image 312.svg";
import star from "../../../public/svgs/image 313.svg";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: thunder,
    title: "Instant transfer:",
    text: "money moves as fast as your chats.",
    maxWidth: "max-w-[450px]",
  },
  {
    id: 2,
    icon: diamond,
    title: "Transparent fees:",
    text: "no hidden charges, ever.",
    maxWidth: "max-w-[648px]",
  },
  {
    id: 3,
    icon: moon,
    title: "Always available:",
    text: "24/7, day or night.",
    maxWidth: "max-w-[648px]",
  },
  {
    id: 4,
    icon: star,
    title: "Simple to use:",
    text: "no app download needed, just WhatsApp.",
    maxWidth: "max-w-[450px]",
  },
];

export default function WhyBlinkQ() {
  return (
    <section
      id="whyBlinkQ"
      className="relative w-full overflow-hidden bg-[#000000] text-white flex flex-col items-center justify-center px-6 py-20 md:pb-[153px] md:pt-[112px]"
    >
      {/* Animated glowing sprays */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#CCFF02] rounded-full blur-[250px] opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#CCFF02] rounded-full blur-[250px] opacity-30 pointer-events-none"
        animate={{
          scale: [1.1, 1.3, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[22.22px] md:text-[32px] font-semibold z-10 max-w-[1312px] w-full "
      >
        Other Apps Give You Stories.{" "}
        <span className="text-[#CCFF02]">BlinkQ AI</span> Gives You Results.
      </motion.h2>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center gap-4 max-w-[1400px] w-full z-10 mt-16 md:mb-6 mb-12.5">
        {features.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className={`bg-white/95 text-[#171717] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 w-full ${f.maxWidth} flex-grow`}
          >
            <Image
              src={f.icon}
              alt={f.title}
              width={62}
              height={62}
              className="mb-8"
            />
            <h3 className="text-[25px] md:text-[36px] leading-[140%] mb-2">
              {f.title}
            </h3>
            <p className="text-[16.67px] md:text-[24px] text-gray-600 leading-[140%]">
              {f.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" bg-[#CCFF02] text-black font-medium px-14 py-5 rounded-full z-10 cursor-pointer md:text-[16px] md:leading-5 text-[11.11px] leading-[13.89px]"
      >
        Send Money on WhatsApp Now
      </motion.button>
    </section>
  );
}
