import Image from "next/image";
import Hero from "./_components/Hero";
import ThreeSteps from "./_components/ThreeSteps";
import Features from "./_components/Features";
import WhyBlinkQ from "./_components/WhyBlinkQ";
import FAQ from "./_components/FAQ";
import Subscribe from "./_components/Subscribe";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ThreeSteps />
      <Features />
      <WhyBlinkQ />
      <FAQ />
      <Subscribe />
    </main>
  );
}
