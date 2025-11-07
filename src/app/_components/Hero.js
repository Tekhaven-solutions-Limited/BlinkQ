"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import phoneMockup from "../../../public/images/Frame 2147226417.png"; // your WhatsApp phone image
import arrowHero from "../../../public/svgs/arrowHero.svg"; // your WhatsApp phone image
import hero from "../../../public/images/hero.png";
import curvedLine from "../../../public/images/curved-line.svg";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full md:h-screen bg-[#CCFF02] overflow-hidden flex items-center ">
      {/* Content Wrapper */}
      <div
        className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row items-center  gap-[78px]
        w-full px-6 md:pl-[45px] mt-24"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[758px] text-left space-y-20 self-center  md:mt-0"
        >
          <div className="md:space-y-8 space-y-4">
            <h1 className="font-unbounded text-[32px]/[46px] md:leading-[56px] text-[#212121] font-medium">
              No network wahala. Your Money moves swiftly in WhatsApp with{" "}
              <span className="relative inline-block text-[#171717]">
                BlinkQ
                <Image
                  src={curvedLine}
                  alt="curved line"
                  className="absolute -bottom-2 left-0 w-full"
                  priority
                />
              </span>
            </h1>

            <p className="text-[#757575] pt-4 text-[12px]/[normal] md:text-[18px]/[normal]">
              Tired of failed transfers, hidden charges, and endless ‘system
              down’ excuses? With BlinkQ Ai, you can send money and buy airtime
              instantly inside WhatsApp.
            </p>
          </div>
          <div className="relative flex justify-center">
            <Image
              src={arrowHero}
              alt="arrow Icon"
              className="absolute md:top-[20%] hidden md:block top-[35%] md:left-[53%] left-[80%] -translate-x-1/2  rotate-90 md:rotate-0 block md:hidden"
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
          {/* <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200"> */}
          <video
            src="/videos/blinkq-demo.mp4" // 👉 replace with your actual video path
            autoPlay
            loop
            muted
            playsInline
            className=" md:mr-0"
          />
          {/* </div> */}
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
