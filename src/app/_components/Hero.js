"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import phoneMockup from "../../../public/images/Frame 2147226417.png"; // your WhatsApp phone image
import arrowHero from "../../../public/svgs/arrowHero.svg"; // your WhatsApp phone image
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full md:h-screen bg-[#CCFF02] overflow-hidden flex items-center ">
      {/* Content Wrapper */}
      <div
        className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row items-center  gap-[78px]
        w-full pl-6 md:pl-[45px] mt-24"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[758px] text-left space-y-20 self-center  md:mt-0"
        >
          <div className="md:space-y-8 space-y-4">
            <h1 className="font-unbounded md:text-[32px] text-[16.89px] md:leading-[56px] leading-[29.55px] text-[#171717] font-medium pr-10">
              No network wahala. Your Money moves swiftly in WhatsApp with{" "}
              <span className="text-[#171717]">BlinkQ</span>
            </h1>

            <p className="text-[#757575] text-[9.5px] md:text-[18px] leading-[100%]">
              Tired of failed transfers, hidden charges, and endless ‘system
              down’ excuses? With BlinkQ Ai, you can send money and buy airtime
              instantly inside WhatsApp.
            </p>
          </div>
          <div className="relative">
            <Image
              src={arrowHero}
              alt="arrow Icon"
              className="absolute md:top-[20%] top-[35%] md:left-[53%] left-[80%] -translate-x-1/2  rotate-90 md:rotate-0 block md:hidden"
              priority
            />

            <Link href={"https://wa.me/message/OI6ICEYF6SMNE1"} passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-[#171717] text-white px-10 md:px-14  py-4  rounded-full text-[12px] leading-[20px] font-medium shadow-md hover:bg-[#333] transition"
              >
                👉🏽 Start on WhatsApp Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Section (Phone Image) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 md:mt-0 w-full flex justify-center"
        >
          <Image
            src={phoneMockup}
            alt="BlinkQ WhatsApp transfer mockup"
            // className="w-[280px] md:w-[360px] lg:w-[604px] drop-shadow-2xl"
            priority
          />
        </motion.div>
        <Image
          src={arrowHero}
          alt="arrow Icon"
          className="absolute md:top-[20%] top-[35%] md:left-[53%] left-[70%] -translate-x-1/2  rotate-90 md:rotate-0 md:block hidden"
          priority
        />
      </div>
    </section>
  );
}
