import Image from "next/image";
import logo from "../../../public/svgs/logoFooter.svg";
import X from "../../../public/svgs/X.svg";
import instagram from "../../../public/svgs/instagram.svg";
import linkedin from "../../../public/svgs/linkedin.svg";
import Link from "next/link";

function Footer({
  onOpenModalTermsConditions,
  onOpenModalPrivacyPolicy,
  onOpenModalRetrieveAccount,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#CCFF02] py-16 md:py-[110px] w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full space-y-12 md:space-y-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8 w-full">
          {/* Logo + Description */}
          <div className="md:max-w-[385px] w-full space-y-6 md:space-y-10 text-center md:text-left">
            <Image
              src={logo}
              alt="BlinkQ logo"
              className="mx-auto md:mx-0 w-[140px] md:w-auto"
            />
            <p className="text-[14px] md:text-[16px] leading-[140%] text-[#212121]">
              The future of payments in WhatsApp. Send money, buy airtime, and
              manage your finances with AI-powered simplicity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:max-w-[385px] w-full space-y-6 md:space-y-[45px] text-center md:text-left">
            <h1 className="text-[20px] md:text-[24px] font-medium text-[#212121]">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-4 md:gap-6 text-[#212121] text-[16px]">
              <li className="hover:text-[#000000] cursor-pointer transition">
                About
              </li>
              <li
                className="hover:text-[#000000] cursor-pointer transition"
                onClick={onOpenModalPrivacyPolicy}
              >
                Privacy Policy
              </li>
              <li
                className="hover:text-[#000000] cursor-pointer transition"
                onClick={onOpenModalTermsConditions}
              >
                Terms of Use
              </li>
              <Link href={"#contact"}>
                <li className="hover:text-[#000000] cursor-pointer transition">
                  Contact
                </li>
              </Link>
              <li
                className="hover:text-[#000000] cursor-pointer transition"
                onClick={onOpenModalRetrieveAccount}
              >
                Retrieve Account
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:max-w-[385px] w-full space-y-6 md:space-y-[45px] text-center md:text-left">
            <h1 className="text-[20px] md:text-[24px] font-medium text-[#212121]">
              Follow Us
            </h1>
            <div className="flex justify-center md:justify-start gap-4">
              <Image
                src={X}
                alt="X (Twitter)"
                className="cursor-pointer hover:opacity-80 transition"
              />
              <Image
                src={instagram}
                alt="Instagram"
                className="cursor-pointer hover:opacity-80 transition"
              />
              <Image
                src={linkedin}
                alt="LinkedIn"
                className="cursor-pointer hover:opacity-80 transition"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#BCBCBC] pt-6 text-center text-[14px] md:text-[16px] text-[#424242]">
          © {currentYear} BlinkQ AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
