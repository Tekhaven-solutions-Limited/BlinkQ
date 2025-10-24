import { Unbounded } from "next/font/google";
import "./globals.css";
import ClientLayout from "./_components/ClientLayout";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "BlinkQ – WhatsApp Bot for Transfers, Airtime & Data",
    template: "%s | BlinkQ",
  },
  icons: {
    icon: "/logo.svg", // You can also use .png or .svg
  },
  description:
    "BlinkQ is a secure WhatsApp bot that lets you transfer money, buy airtime, and purchase data bundles instantly. Fast, simple, and available 24/7 right inside WhatsApp.",
  keywords: [
    "BlinkQ",
    "WhatsApp bot",
    "money transfer",
    "airtime top-up",
    "buy data bundles",
    "WhatsApp banking",
    "mobile payment bot",
    "Nigeria fintech bot",
  ],
  authors: [{ name: "BlinkQ Team", url: "https://blinkq.com" }],
  metadataBase: new URL("https://blinkq.com"),
  openGraph: {
    title: "BlinkQ – WhatsApp Bot for Transfers, Airtime & Data",
    description:
      "Send money, buy airtime, and purchase data directly on WhatsApp with BlinkQ. Fast, secure, and available anytime.",
    url: "https://blinkq.com",
    siteName: "BlinkQ",
    images: [
      {
        url: "/svgs/logo.svg", // Replace with your actual preview image
        width: 1200,
        height: 630,
        alt: "BlinkQ – WhatsApp Bot for Transfers, Airtime & Data",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlinkQ – WhatsApp Bot for Transfers, Airtime & Data",
    description:
      "Experience instant transactions through WhatsApp. Send money, buy airtime, and data in seconds with BlinkQ.",
    images: ["/og-image.jpg"],
    creator: "@blinkqapp", // update if you have a Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://blinkq.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
