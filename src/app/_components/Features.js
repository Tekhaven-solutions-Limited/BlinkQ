"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import upImage from "../../../public/svgs/Vector 3.svg";
import downImage from "../../../public/svgs/Vector 4.svg";
import moneyIcon from "../../../public/svgs/money-icon.svg"; // example icon (replace with yours)
import bot from "../../../public/svgs/bot.svg"; // example icon (replace with yours)
import stats from "../../../public/svgs/stats.svg"; // example icon (replace with yours)
import security from "../../../public/svgs/security.svg"; // example icon (replace with yours)

const features = [
  {
    id: 1,
    icon: moneyIcon,
    title: "Bank Transfers & BlinkQ-to-BlinkQ:",
    text: "Instant, reliable, no excuses.",
  },
  {
    id: 2,
    icon: stats,
    title: "Airtime & Data:",
    text: "Recharge in seconds without leaving chat.",
  },
  {
    id: 3,
    icon: bot,
    title: "AI-Powered Payment Assistance:",
    text: "Type naturally, BlinkQ AI handles the rest.",
  },
  {
    id: 4,
    icon: security,
    title: "Security First:",
    text: "BVN/NIN verification, encryption, and 2FA built in.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative w-full bg-[#CCFF02] text-white flex flex-col items-center justify-center px-6  py-20 md:py-[165px] gap-16 overflow-hidden"
    >
      {/* Background sprays */}
      <div className="absolute top-0 right-0">
        <Image src={downImage} alt="Spray top right" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={upImage} alt="Spray bottom left" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[24.39px] md:text-[32px] font-semibold z-10 text-[#212121]"
      >
        Not Just Transfers. Your Entire Wallet in WhatsApp.
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 max-w-[1440px] w-full z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-[#CCFF02] text-[#171717] rounded-2xl px-8 py-[67px] flex flex-col items-start text-left shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Icon */}
            <Image
              src={feature.icon}
              alt="Feature icon"
              className="md:w-16 md:h-16 w-[47px] h-[47px] mb-6"
            />

            {/* Title */}
            <h3 className="text-[13.72px] md:text-[18px] mb-2 leading-[140%] pr-4">
              {feature.title}
            </h3>

            {/* Text */}
            <p className="text-[12.2px] text-[#555] leading-[140%] pr-5">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
