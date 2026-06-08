"use client";
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
            <span className="text-[#DEDEDE]">Effective Date: October 16, 2025</span>
            <br />
            BlinkQ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application and related services (&quot;Services&quot;).
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">1. Information We Collect</span>
            <br />
            <span>We may collect:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Contact Information: name, email address, phone number.</li>
              <li>Identity Verification Data: National Identification Number (NIN), used solely to verify your identity during registration.</li>
              <li>Account Information: login credentials, preferences, settings.</li>
              <li>Usage Information: interactions within the app, features used, messages sent.</li>
              <li>Technical Data: IP address, operating system, device identifiers.</li>
              <li>Camera and Microphone Data: used for real-time voice and video calls only. No call recordings are stored on our servers.</li>
              <li>Face Data: a one-time face scan is performed during registration solely to verify your identity against your NIN. This biometric data is processed securely and is not stored on our servers beyond the verification check. It is not used for facial recognition, advertising, or any other purpose.</li>
              <li>Financial Data: wallet balance, transaction history, and bank account details for users who use the in-app wallet, powered by Rubies MFB.</li>
              <li>Other Information: messages or details you voluntarily provide.</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">2. How We Collect Information</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Directly: when you sign up, submit forms, or use app features.</li>
              <li>Automatically: via log files and analytics tools.</li>
              <li>Third Parties: analytics providers and our financial partner Rubies MFB.</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">3. How We Use Your Information</span>
            <br />
            <span>We use your information to:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Deliver and improve Services.</li>
              <li>Verify user identity during registration.</li>
              <li>Enable real-time messaging, voice calls, and video calls.</li>
              <li>Process wallet transactions via Rubies MFB.</li>
              <li>Respond to inquiries and provide support.</li>
              <li>Detect and prevent fraud, spam, or misuse.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">4. Camera, Microphone, and Face Data</span>
            <br />
            <span>BlinkQ uses your device camera and microphone for:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Real-time video calls between users via Agora RTC. Video frames are streamed live and not stored on our servers.</li>
              <li>One-time face verification during sign-up to confirm your identity against your NIN. This data is not retained after the verification is complete.</li>
            </ul>
            Face data is not shared with any third parties and is not used for advertising or profiling.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">5. Legal Basis for Processing</span>
            <br />
            <span>Depending on your jurisdiction (e.g., GDPR, NDPR), we rely on:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Consent (e.g., biometric verification, marketing).</li>
              <li>Contract (providing requested services).</li>
              <li>Legitimate interests (security, analytics).</li>
              <li>Legal obligations (compliance with Nigerian and applicable law).</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">6. Sharing Your Information</span>
            <br />
            <span>We may share your information with:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Service providers: hosting and analytics platforms.</li>
              <li>Rubies MFB: our licensed financial partner, for wallet and payment services.</li>
              <li>Agora RTC: for real-time voice and video call functionality.</li>
              <li>Authorities: if required by law.</li>
              <li>Corporate events: merger, acquisition, or sale of assets.</li>
            </ul>
            <span>We do not sell your personal data.</span>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">7. International Data Transfers</span>
            <br />
            Your data may be transferred outside your country. We use safeguards such as Standard Contractual Clauses or equivalent protections.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">8. Data Retention</span>
            <br />
            We retain data only as long as necessary for our purposes or as required by law. Face verification data is deleted immediately after the identity check is complete.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">9. Your Rights</span>
            <br />
            <span>Depending on your jurisdiction, you may have the right to:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Withdraw consent at any time.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
            <span>
              To exercise your rights, contact us at{" "}
              <a
                href="mailto:privacy@blinkq.ai?subject=Privacy%20Request&body=Hello%20BlinkQ%20Team,"
                className="text-[#CCFF02]"
              >
                privacy@blinkq.ai.
              </a>
            </span>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">10. Data Security</span>
            <br />
            We use technical, administrative, and physical safeguards to protect your data. No system is fully secure.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">11. Children&apos;s Privacy</span>
            <br />
            Our Services are not directed to children under 18. We do not knowingly collect their data.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">12. Third-Party Links</span>
            <br />
            Our Services may contain links to third-party websites. We are not responsible for their privacy practices.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">13. Changes to This Policy</span>
            <br />
            We may update this Policy at any time. Updates will be posted with the revised Effective Date.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">14. Contact Us</span>
            <br />
            For questions about this Privacy Policy, contact us at{" "}
            <a
              href="mailto:privacy@blinkq.ai?subject=Privacy%20Request&body=Hello%20BlinkQ%20Team,"
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
