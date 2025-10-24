"use client";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import shield from "../../../public/svgs/shield-red.svg";
import dropDown from "../../../public/svgs/Chevron down.svg";
import Modal from "./modal/Modal";

export default function PrivacyPolicyModal({ open, setOpen }) {
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      maxWidth="886px"
      className="bg-[#414141]"
    >
      <div className="flex flex-col items-center text-center gap-4 text-[#979797] text-[16px] leading-[100%]">
        <h6 className="text-[18px] text-[#DEDEDE] font-medium">
          BlinkQ Privacy Policy
        </h6>
        <div className="w-full flex flex-col items-start gap-6 text-start">
          <p>
            <span className="text-[#DEDEDE]">
              Effective Date: October 16, 2025
            </span>{" "}
            <br />
            BlinkQ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values
            your privacy. This Privacy Policy explains how we collect, use, and
            protect your personal information when you use our website, WhatsApp
            bot, and related services (&quot;Services&quot;).
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              1. Information We Collect
            </span>{" "}
            <br />
            <span className="">We may collect:</span> <br />
            <ul className="list-disc pl-5">
              <li>
                Contact Information: name, email address, phone number, or
                social media handle.
              </li>
              <li>
                Account Information: login credentials, preferences, settings.
              </li>
              <li>
                Usage Information: interactions with our WhatsApp bot, pages
                visited, features used.
              </li>
              <li>
                Technical Data: IP address, browser type, operating system,
                device identifiers, cookies, and similar tracking technologies.
              </li>
              <li>
                Marketing & Communications Data: preferences, feedback, surveys.
              </li>
              <li>
                Other Information: messages or details you voluntarily provide.
              </li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              2. How We Collect Information
            </span>{" "}
            <br />
            <ul className="list-disc pl-5">
              <li>
                Directly: when you sign up, submit forms, or interact with our
                bot.
              </li>
              <li>
                Automatically: via cookies, pixels, log files, and analytics
                tools.
              </li>
              <li>
                Third Parties: partners such as WhatsApp/Meta or analytics
                providers.
              </li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              3. How We Use Your Information
            </span>{" "}
            <br />
            <span className="">We may collect:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Deliver and improve Services.</li>
              <li>Respond to inquiries and provide support.</li>
              <li>Send marketing communications (with opt-out options).</li>
              <li>Analyze usage trends and improve user experience.</li>
              <li>Detect and prevent fraud, spam, or misuse.</li>
              <li>Comply with legal obligations.</li>
              <li>
                If applicable, support automated decision-making
                (recommendations, personalization)..
              </li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              4. Cookies & Tracking Technologies
            </span>{" "}
            <br />
            <span className="">
              We use cookies, pixels, and similar technologies to:
            </span>
            <br />
            <ul className="list-disc pl-5">
              <li>Improve site functionality.</li>
              <li>Analyze usage and performance.</li>
              <li>Deliver targeted content and advertising.</li>
            </ul>
            <span className="">
              We use cookies, pixels, and similar technologies to:
            </span>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              5. Legal Basis for Processing
            </span>{" "}
            <br />
            <span className="">
              Depending on your jurisdiction (e.g., GDPR), we rely on:
            </span>
            <br />
            <ul className="list-disc pl-5">
              <li>Consent (e.g., marketing).</li>
              <li>Contract (providing requested services).</li>
              <li>Legitimate interests (security, analytics).</li>
              <li>Legal obligations (compliance with law).</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              6. Sharing Your Information
            </span>{" "}
            <br />
            <span className="">We may share your information with:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>
                Service providers: hosting, analytics, marketing platforms.
              </li>
              <li>Business partners: if collaborating on joint services.</li>
              <li>WhatsApp/Meta: to enable chatbot functionality.</li>
              <li>Authorities: if required by law.</li>
              <li>Corporate events: merger, acquisition, or sale of assets.</li>
            </ul>
            <span className="">We do not sell your personal data.</span>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              7. International Data Transfers
            </span>{" "}
            <br />
            Your data may be transferred outside your country. We use safeguards
            such as Standard Contractual Clauses or equivalent protections.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              8. Data Retention
            </span>{" "}
            <br />
            We retain data only as long as necessary for our purposes or as
            required by law.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              9. Your Rights
            </span>{" "}
            <br />
            <span className="">
              Depending on your jurisdiction, you may have rights to:
            </span>
            <br />
            <ul className="list-disc pl-5">
              <li>
                Service providers: hosting, analytics, marketing platforms.
              </li>
              <li>Business partners: if collaborating on joint services.</li>
              <li>WhatsApp/Meta: to enable chatbot functionality.</li>
              <li>Authorities: if required by law.</li>
              <li>Corporate events: merger, acquisition, or sale of assets.</li>
            </ul>
            <span className="">
              To exercise rights, contact us at 
              <a
                href="mailto:legal@blinkq.ai?subject=Account%20Issue&body=Hello%20BlinkQ%20Team,"
                className="text-[#CCFF02]"
              >
                privacy@blinkq.ai.
              </a>
            </span>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              10. Data Security
            </span>{" "}
            <br />
            We use technical, administrative, and physical safeguards to protect
            data. No system is fully secure.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              11. Children&apos;s Privacy
            </span>{" "}
            <br />
            Our Services are not directed to children under 18 (or local age of
            consent). We do not knowingly collect their data.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              12. Third-Party Links
            </span>{" "}
            <br />
            Our Services may contain links to third-party websites. We are not
            responsible for their privacy practices.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              13. Changes to This Policy
            </span>{" "}
            <br />
            We may update this Policy at any time. Updates will be posted with
            the revised Effective Date.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">
              14. Contact Us
            </span>{" "}
            <br />
            For questions about this Privacy Policy, contact us at:
            <a
              href="mailto:privacy@blinkq.ai?subject=Account%20Issue&body=Hello%20BlinkQ%20Team,"
              className="text-[#CCFF02]"
            >
              privacy@blinkq.ai
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
}
