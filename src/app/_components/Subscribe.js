"use client";

import { motion } from "framer-motion";

function Subscribe() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#1A1A00] via-[#0D0D00] to-[#000000] text-white flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-32 gap-12 md:gap-20">
      {/* Animated glow gradients */}
      <motion.div
        className="absolute -top-40 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#CCFF02] rounded-full blur-[350px] opacity-25 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#CCFF02] rounded-full blur-[350px] opacity-25 pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Text Content */}
      <div className="flex flex-col items-center text-center w-full gap-8 md:gap-12 z-10">
        <div className="space-y-3 md:space-y-6">
          <h1 className="text-[22px] md:text-[34px] font-medium leading-tight">
            Stay in the Loop with BlinkQ
          </h1>
          <p className="text-[13px] md:text-[20px] leading-snug text-[#D4D4D4] max-w-2xl mx-auto">
            Enter your email to get updates, tips, and announcements about
            BlinkQ AI and our upcoming mobile app.
          </p>
        </div>

        {/* Email Form */}
        <form className="flex flex-col md:flex-row items-center gap-4 md:gap-3 w-full max-w-xl">
          <input
            type="email"
            className="w-full flex-1 bg-white text-black placeholder:text-[#757575] px-5 md:px-6 py-3 md:py-4 rounded-full text-[16px] md:text-[20px] focus:outline-none"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-[#CCFF02] text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-[16px] md:text-[20px] hover:brightness-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
