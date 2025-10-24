"use client";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import shield from "../../../public/svgs/shield-red.svg";
import dropDown from "../../../public/svgs/Chevron down.svg";
import Modal from "./modal/Modal";

// ✅ Validation Schema
const validationSchema = Yup.object({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(?:\+234\d{10}|0\d{10})$/,
      "Enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678)"
    ),
  reason: Yup.string().required("Please select a reason"),
});

export default function BlockAccountModal({ open, setOpen }) {
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      maxWidth="886px"
      className="bg-[#414141]"
    >
      <div className="flex flex-col items-center text-center gap-10">
        <Image src={shield} alt="shield" />
        <div className="w-full flex flex-col items-center gap-6">
          <div className="space-y-4">
            <h6 className="text-[18px] text-[#DEDEDE] font-medium">
              Block My Account
            </h6>
            <p className="text-[16px] text-[#979797]">
              Lost your phone? Block your BlinkQ account immediately to prevent
              unauthorized access.
            </p>
          </div>

          {/* ✅ Formik Form */}
          <Formik
            initialValues={{ phone: "", reason: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              alert("Account blocked successfully!");
              resetForm();
              setOpen(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full space-y-6 text-left">
                {/* Phone Number Field */}
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-[16px] text-[#DEDEDE]">
                    Phone Number *
                  </label>
                  <Field
                    name="phone"
                    placeholder="08012345678 or +2348012345678"
                    maxLength={14} // prevents typing too long
                    onInput={(e) => {
                      // Allow only numbers and "+"
                      e.target.value = e.target.value.replace(/[^0-9+]/g, "");
                    }}
                    className="w-full px-8 py-4 rounded-[56px] border border-[#9E9E9E] bg-transparent text-[#DEDEDE] placeholder:text-[#979797]"
                  />

                  {errors.phone && touched.phone ? (
                    <p className="text-[10px] text-red-400">{errors.phone}</p>
                  ) : (
                    <p className="text-[10px] text-[#979797]">
                      Enter the phone registered with your BlinkQ account
                    </p>
                  )}
                </div>

                {/* Reason Select */}
                <div className="flex flex-col gap-3 relative">
                  <label className="text-[16px] text-[#DEDEDE]">
                    Reason for Blocking *
                  </label>
                  <div className="relative w-full">
                    <Field
                      as="select"
                      name="reason"
                      className="w-full py-[19.2px] px-4 pr-10 rounded-[56px] border border-[#9E9E9E] text-[#DEDEDE] bg-transparent appearance-none focus:outline-none"
                    >
                      <option value="">Select reason</option>
                      <option value="fraudulent-activity">
                        Fraudulent activity
                      </option>
                      <option value="lost-device">Lost or stolen device</option>
                      <option value="suspicious-login">
                        Suspicious login attempt
                      </option>
                      <option value="account-compromise">
                        Account compromised
                      </option>
                      <option value="other">Other</option>
                    </Field>
                    <Image
                      src={dropDown}
                      alt="Dropdown"
                      width={20}
                      height={20}
                      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                  <ErrorMessage
                    name="reason"
                    component="div"
                    className="text-red-400 text-[8px] leading-4"
                  />
                </div>

                {/* What Happens Next Section */}
                <div className="bg-[#191919] text-[#757575] text-[14px] leading-[20px] text-start p-6 rounded-lg">
                  <h2 className="text-[#DEDEDE] font-medium mb-3 text-[16px]">
                    What happens next?
                  </h2>
                  <ul className="list-disc pl-6">
                    <li>Your account will be blocked immediately</li>
                    <li>All transactions will be suspended</li>
                    <li>Our support team will contact you by email</li>
                    <li>You’ll need to verify your identity to reactivate</li>
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 text-[14px]">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="p-4 border border-[#9E9E9E] rounded-[56px] text-[#DEDEDE] w-full sm:w-1/2 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="p-4 bg-[#F15B5B] rounded-[56px] text-[#0D0D0D] w-full sm:w-1/2 cursor-pointer"
                  >
                    Block Account
                  </button>
                </div>

                <p className="text-[14px] text-[#757575] text-center">
                  Need help?{" "}
                  <span className="text-[#CCFF02]">support@blinkq.ai</span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
}
