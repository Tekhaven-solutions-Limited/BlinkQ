"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import chevronDown from "../../../public/svgs/Chevron down.svg";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is BlinkQ AI?",
      a: "BlinkQ AI is a smart WhatsApp assistant that helps you send and receive money, buy airtime and data, and manage your wallet, all through chat. It’s designed to make everyday financial transaction fast, easy, and secure.",
    },
    {
      q: "How do I start using BlinkQ AI?",
      a: "Simple click the “Chat on WhatsApp” button on our website or social media page. You’ll be guided to verify your phone number, BVN, NIN, and email. Once verified, BlinkQ AI will automatically assign you a bank account number.",
    },
    {
      q: "Is BlinkQ AI safe to use?",
      a: "Absolutely, BlinkQ AI users end-to end encryption and advanced authentication systems to protect your information. Every transaction is secured with your personal PIN, and all wallet data is encrypted to industry-grade standards.",
    },
    {
      q: "Can i send money to other bank or just BlinkQ users?",
      a: "You can do both. BlinkQ AI allows you to send money to any Nigerian bank account and also to other BlinkQ users instantly. the AI even verifies account details before you confirm a transfer.",
    },
    {
      q: "What services can I use BlinkQ AI for?",
      a: "You can: Send and receive money, Deposit or withdraw funds, Buy airtime and data, Check wallet balance, Manage your account and PIN, Get smart suggestions or updates from the AI.",
    },
    {
      q: "What currencies does BlinkQ AI support?",
      a: "You can only transact in Naira (₦) at the moment. Other currencies will be added later on.",
    },
    {
      q: "How do I block my account if I lose my phone?",
      a: "If you lose your phone, immediately contact our support team via email at support@blinkq.ai or through our social media channels. Our team will help you block your account to prevent unauthorized access. You can also request to reactivate your account on a new device after verifying your identity.",
    },
    {
      q: "How do I get help if I have a problem?",
      a: "Just type “Help” or “Support” in the WhatsApp chat. BlinkQ AI will guide you to contact support or troubleshoot common issues instantly. You can also reach us through our official support email or social channels.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#CCFF02] py-20 md:py-[164px] md:px-16  w-full text-[#212121]">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-0">
        {/* Header */}
        <div className="text-center mb-12  md:space-y-6 space-y-[12.8px] max-w-[735px] mx-auto">
          <h1 className="text-[20px] md:text-[40px] leading-[100%] font-medium">
            Frequently Asked Questions
          </h1>
          <p className="text-[12px] md:text-[24px] leading-[100%] text-[#424242]">
            Got questions? We’ve got answers. Find everything you need to know
            about BlinkQ AI.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4 w-full max-w-[735px] mx-auto">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] md:rounded-2xl rounded-[8.54px] overflow-hidden w-full"
            >
              {/* Header */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center md:px-4 md:py-6 px-2 py-3 text-left"
              >
                <span className="text-[10.67px] md:text-[20px] leading-[100%] text-[#FFFFFF]">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  <Image
                    src={chevronDown}
                    alt="toggle"
                    className="object-contain md:w-5 md:h-4 w-[10.670732498168945px] h-[10.670732498168945px]"
                  />
                </motion.div>
              </button>

              {/* Content */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-[#0D0D00] text-gray-400 border-t border-[#333] text-[10.67px] md:text-[20px] leading-[100%]">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div
          id="contact"
          className="p-6 w-full bg-[#212121] text-[#F5F5F5] md:rounded-3xl rounded-[12.8px] flex items-center flex-col text-center md:gap-10 gap-[22.56px] mt-10"
        >
          <div className="md:space-y-6 space-y-3">
            <h1 className="md:text-[40px] text-[21.34px] font-medium leading-[100%]">
              Still have questions?
            </h1>
            <p className="md:text-[24px] text-[12.8px] leading-[100%]">
              Our support team is ready to help you 24/7
            </p>
          </div>
          <Link
            href={"https://x.com/blinkqsupport?s=21&t=KM_zUjkOaj5ek0gFCPxFGA"}
          >
            <button className="bg-[#CCFF02] px-6 py-[18px] rounded-[62px] text-[#000000] md:text-[24px] text-[12.8px] leading-[100%] cursor-pointer">
              Contact Support
            </button>
          </Link>
        </div>

        <div className="p-20 w-full bg-[#212121] text-[#F5F5F5] rounded-[80px] md:flex items-center flex-col text-center gap-6 mt-[164px] max-w-[1075px] mx-auto hidden">
          <h1 className="text-[40px] font-medium leading-[100%]">
            The Future of Finance is Loading…
          </h1>
          <p className="text-[24px] leading-[100%] max-w-[784px]">
            The WhatsApp bot is just the beginning. The BlinkQ mobile app is
            coming soon, combining secure messaging, wallet services, and
            advanced financial tools into one powerful experience.
          </p>
        </div>
      </div>
    </section>
  );
}
