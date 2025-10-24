"use client";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import key from "../../../public/svgs/key.svg";
import Modal from "./modal/Modal";

// ✅ Validation Schema
const validationSchema = Yup.object({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(?:\+234\d{10}|0\d{10})$/,
      "Enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678)"
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  pin: Yup.string()
    .required("Transaction pin is required")
    .matches(/^\d{4}$/, "Pin must be exactly 4 digits"),
});

export default function RetrieveAccountModal({ open, setOpen }) {
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      maxWidth="886px"
      className="bg-[#414141]"
    >
      <div className="flex flex-col items-center text-center gap-10">
        <Image src={key} alt="key" />
        <div className="w-full flex flex-col items-center gap-6">
          <div className="space-y-4">
            <h6 className="text-[18px] text-[#DEDEDE] font-medium">
              Retrieve Account
            </h6>
            <p className="text-[16px] text-[#979797]">
              Enter your details to recover your account
            </p>
          </div>

          {/* ✅ Formik Form */}
          <Formik
            initialValues={{ phone: "", email: "", pin: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              alert("Account retrieval successful!");
              resetForm();
              setOpen(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full space-y-6 text-left">
                {/* Phone Number */}
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-[16px] text-[#DEDEDE]">
                    Phone Number *
                  </label>
                  <Field
                    name="phone"
                    placeholder="08012345678 or +2348012345678"
                    maxLength={14}
                    onInput={(e) => {
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

                {/* Email */}
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-[16px] text-[#DEDEDE]">Email *</label>
                  <Field
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-8 py-4 rounded-[56px] border border-[#9E9E9E] bg-transparent text-[#DEDEDE] placeholder:text-[#979797]"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-[10px] text-red-400">{errors.email}</p>
                  ) : (
                    <p className="text-[10px] text-[#979797]">
                      An OTP will be sent to your email
                    </p>
                  )}
                </div>

                {/* Transaction Pin */}
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-[16px] text-[#DEDEDE]">
                    Transaction Pin *
                  </label>
                  <Field
                    name="pin"
                    type="password"
                    placeholder="Enter your 4-digit pin"
                    maxLength={4}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className="w-full px-8 py-4 rounded-[56px] border border-[#9E9E9E] bg-transparent text-[#DEDEDE] placeholder:text-[#979797]"
                  />
                  {errors.pin && touched.pin ? (
                    <p className="text-[10px] text-red-400">{errors.pin}</p>
                  ) : (
                    <p className="text-[10px] text-[#979797]">
                      Enter your BlinkQ transaction pin
                    </p>
                  )}
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
                    className="p-4 bg-[#CCFF02] rounded-[56px] text-[#0D0D0D] w-full sm:w-1/2 cursor-pointer"
                  >
                    Continue
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
