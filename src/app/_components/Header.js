"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/svgs/logo.svg";
import shield from "../../../public/svgs/shield-red.svg";
import { motion, AnimatePresence } from "framer-motion";
import hambugger from "../../../public/svgs/hambugger.svg"; // hamburger & close icons
import Link from "next/link";

export default function Header({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-[400px] transition-all duration-300 border-b
        ${
          scrolled
            ? "py-3 border-white/30 shadow-md bg-white/60"
            : "py-4 border-transparent "
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-16">
        {/* Logo */}
        <Image
          src={logo}
          alt="BlinkQ logo"
          className="h-10 w-[106px]"
          priority
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[#212121] text-[12px] leading-[20px]">
          <Link href={"#howDoesItWork"}>
            <li className="cursor-pointer hover:underline list-none">
              How It Works
            </li>
          </Link>
          <Link href={"#features"}>
            <li className="cursor-pointer hover:underline list-none">
              Features
            </li>
          </Link>
          <Link href={"#whyBlinkQ"}>
            <li className="cursor-pointer hover:underline list-none">
              Why BlinkQ
            </li>
          </Link>
          {/* <li className="cursor-pointer hover:underline list-none">
            Coming Soon
          </li> */}
          <Link href={"#contact"}>
            <li className="cursor-pointer hover:underline list-none">
              Contact
            </li>
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="flex items-center gap-2.5 px-6 py-2.5 border border-[#EF4444] rounded-full hover:bg-[#FFECEC] transition cursor-pointer"
            onClick={onOpenModal}
          >
            <Image src={shield} alt="shield icon" className="h-4 w-4" />
            <span className="text-[12px] leading-[20px] text-[#FF5F57] font-medium">
              Block Account
            </span>
          </button>
          <Link href={"https://wa.me/message/BBY4G4PXGRQID1"}>
            <button className="px-6 py-2.5 bg-[#212121] rounded-full text-white text-[12px] leading-[20px] font-medium hover:bg-[#333] transition cursor-pointer">
              Start on WhatsApp Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center text-[#212121]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <Image src={hambugger} alt="=" />
          ) : (
            <Image src={hambugger} alt="=" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col gap-4 py-6 px-6 text-[#212121] text-[14px]">
              <Link href={"#howDoesItWork"}>
                <li className="cursor-pointer hover:underline">How It Works</li>
              </Link>
              <Link href={"#features"}>
                <li className="cursor-pointer hover:underline">Features</li>
              </Link>
              <Link href={"#whyBlinkQ"}>
                <li className="cursor-pointer hover:underline">Why BlinkQ</li>
              </Link>

              <Link href={"#contact"}>
                <li className="cursor-pointer hover:underline">Contact</li>
              </Link>

              <div className="flex flex-col gap-3 mt-4">
                <button
                  className="flex items-center justify-center gap-2.5 px-6 py-2.5 border border-[#EF4444] rounded-full hover:bg-[#FFECEC] transition cursor-pointer"
                  onClick={() => {
                    onOpenModal(), setMenuOpen(false);
                  }}
                >
                  <Image src={shield} alt="shield icon" className="h-4 w-4" />
                  <span className="text-[12px] leading-[20px] text-[#FF5F57] font-medium">
                    Block Account
                  </span>
                </button>
                <Link
                  href={"https://wa.me/message/BBY4G4PXGRQID1"}
                  className="px-6 py-2.5 bg-[#212121] rounded-full text-white text-[12px] leading-[20px] font-medium hover:bg-[#333] transition cursor-pointer text-center"
                >
                  <button>Start on WhatsApp Now</button>
                </Link>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
