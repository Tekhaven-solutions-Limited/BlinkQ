"use client";
import Modal from "./modal/Modal";

export default function TermsConditionsModal({ open, setOpen }) {
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      maxWidth="886px"
      className="bg-[#414141]"
    >
      <div className="flex flex-col items-center text-center gap-4 text-[#979797] text-[16px] leading-[100%]">
        <h6 className="text-[18px] text-[#DEDEDE] font-medium">
          BlinkQ Terms &amp; Conditions
        </h6>
        <div className="w-full flex flex-col items-start gap-6 text-start">
          <p>
            <span className="text-[#DEDEDE]">Effective Date: October 16, 2025</span>
            <br />
            Welcome to BlinkQ! These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of our mobile application and related services (&quot;Services&quot;). By accessing or using our Services, you agree to these Terms.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">1. Services We Provide</span>
            <br />
            BlinkQ is a communication and messaging application that offers real-time messaging, voice calls, video calls, and an in-app wallet powered by Rubies MFB.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">2. Eligibility</span>
            <br />
            <ul className="list-disc pl-5">
              <li>You must be at least 18 years old (or the age of majority in your jurisdiction).</li>
              <li>By using our Services, you confirm you meet these requirements.</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">3. Acceptable Use</span>
            <br />
            <span>You agree not to:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>Use the Services for unlawful purposes.</li>
              <li>Post, share, or transmit harmful, abusive, defamatory, hateful, sexually explicit, or objectionable content of any kind.</li>
              <li>Harass, bully, threaten, or abuse other users.</li>
              <li>Spam, hack, or disrupt our systems.</li>
              <li>Attempt reverse engineering or unauthorised access.</li>
              <li>Use the Services for fraudulent or illegal financial activity.</li>
            </ul>
            BlinkQ has a zero-tolerance policy for objectionable content and abusive behaviour. Violations may result in immediate account suspension or termination and reporting to relevant authorities.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">4. Account Registration</span>
            <br />
            <ul className="list-disc pl-5">
              <li>You are responsible for your account and password security.</li>
              <li>Notify us of unauthorised use immediately.</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">5. Content Moderation and Reporting</span>
            <br />
            BlinkQ provides in-app mechanisms for users to:
            <ul className="list-disc pl-5">
              <li>Report users who post objectionable content or behave abusively.</li>
              <li>Block users to prevent further contact.</li>
            </ul>
            All reports are reviewed by our moderation team. We reserve the right to remove content and suspend or terminate accounts that violate these Terms.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">6. Service Availability</span>
            <br />
            We do not guarantee continuous availability. Services may be interrupted for maintenance, updates, or factors beyond our control.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">7. User-Generated Content</span>
            <br />
            <span>If you submit content via the Services:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>You grant BlinkQ a worldwide, royalty-free licence to use, host, and display it.</li>
              <li>You remain responsible for its legality and accuracy.</li>
              <li>You must not submit content that is illegal, offensive, or violates the rights of others.</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">8. Intellectual Property</span>
            <br />
            All content, software, and branding belong to BlinkQ. You may not reproduce or distribute without prior consent.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">9. Payments</span>
            <br />
            Wallet and payment features are provided in partnership with Rubies MFB, a licensed microfinance bank. Fees, billing terms, and refund policies will be disclosed before any transaction.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">10. Disclaimer of Warranties</span>
            <br />
            Our Services are provided &quot;as is&quot; and &quot;as available.&quot; We make no warranties regarding reliability, accuracy, or suitability.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">11. Limitation of Liability</span>
            <br />
            <span>To the extent permitted by law:</span>
            <br />
            <ul className="list-disc pl-5">
              <li>BlinkQ is not liable for indirect, incidental, or consequential damages.</li>
              <li>Our maximum liability is limited to the amount you paid for Services (if any).</li>
            </ul>
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">12. Indemnification</span>
            <br />
            You agree to indemnify and hold BlinkQ harmless from claims, damages, or expenses arising from your misuse or breach of these Terms.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">13. Dispute Resolution</span>
            <br />
            In case of disputes, parties will attempt mediation or arbitration before court proceedings.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">14. Termination</span>
            <br />
            We may suspend or terminate access for violation of these Terms, including posting objectionable content or abusive behaviour.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">15. Force Majeure</span>
            <br />
            We are not responsible for delays or failures due to causes beyond our control (e.g., natural disasters, internet outages, government actions).
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">16. Governing Law &amp; Jurisdiction</span>
            <br />
            These Terms are governed by the laws of Nigeria. Any disputes will be resolved exclusively in the courts of Nigeria, unless arbitration applies.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">17. Severability</span>
            <br />
            If any part of these Terms is invalid, the rest remains enforceable.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">18. Entire Agreement</span>
            <br />
            These Terms constitute the entire agreement between you and BlinkQ, superseding prior agreements.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">19. Changes to These Terms</span>
            <br />
            We may revise these Terms at any time. Continued use of the Services after changes means you accept them.
          </p>

          <p>
            <span className="text-[#DEDEDE] text-[18px] leading-[100%]">20. Contact Us</span>
            <br />
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:legal@blinkq.ai?subject=Terms%20Query&body=Hello%20BlinkQ%20Team,"
              className="text-[#CCFF02]"
            >
              legal@blinkq.ai
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
}
