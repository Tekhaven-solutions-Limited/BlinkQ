"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[28px] md:text-[48px] font-medium text-[#212121] leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-[14px] md:text-[18px] text-[#616161] max-w-xl mx-auto leading-relaxed">
            Have a question or need support? We&apos;d love to hear from you. Send us
            a message and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            className="lg:w-[380px] shrink-0 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-[#F9F9F9] rounded-2xl p-8 space-y-6">
              <h2 className="text-[18px] md:text-[22px] font-medium text-[#212121]">
                Get in Touch
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#CCFF02] rounded-full flex items-center justify-center shrink-0 text-[18px]">
                    ✉
                  </div>
                  <div>
                    <p className="text-[12px] text-[#757575] uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-[14px] text-[#212121] font-medium">
                      support@blinkq.chat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#CCFF02] rounded-full flex items-center justify-center shrink-0 text-[18px]">
                    💬
                  </div>
                  <div>
                    <p className="text-[12px] text-[#757575] uppercase tracking-wider mb-1">
                      WhatsApp
                    </p>
                    <p className="text-[14px] text-[#212121] font-medium">
                      Start a chat on WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#CCFF02] rounded-full flex items-center justify-center shrink-0 text-[18px]">
                    🕐
                  </div>
                  <div>
                    <p className="text-[12px] text-[#757575] uppercase tracking-wider mb-1">
                      Support Hours
                    </p>
                    <p className="text-[14px] text-[#212121] font-medium">
                      24/7 – We&apos;re always here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 bg-[#CCFF02] rounded-full flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h2 className="text-[22px] md:text-[28px] font-medium text-[#212121]">
                  Message Sent!
                </h2>
                <p className="text-[14px] md:text-[16px] text-[#616161] max-w-sm">
                  Thank you for reaching out. We&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-8 py-3 border border-[#212121] rounded-full text-[14px] font-medium text-[#212121] hover:bg-[#F5F5F5] transition"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <Formik
                initialValues={{ name: "", email: "", subject: "", message: "" }}
                validationSchema={contactSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  emailjs
                    .send(
                      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                      {
                        from_name: values.name,
                        from_email: values.email,
                        subject: values.subject,
                        message: values.message,
                      },
                      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                    )
                    .then(() => {
                      resetForm();
                      setSubmitted(true);
                    })
                    .catch(() => {
                      alert("Something went wrong. Please try again.");
                    })
                    .finally(() => {
                      setSubmitting(false);
                    });
                }}
              >
                {({ isSubmitting, setSubmitting }) => (
                  <Form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="block text-[12px] font-medium text-[#212121] uppercase tracking-wider"
                        >
                          Name
                        </label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#212121] transition"
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="text-[11px] text-red-500"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="block text-[12px] font-medium text-[#212121] uppercase tracking-wider"
                        >
                          Email
                        </label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#212121] transition"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-[11px] text-red-500"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="block text-[12px] font-medium text-[#212121] uppercase tracking-wider"
                      >
                        Subject
                      </label>
                      <Field
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#212121] transition"
                      />
                      <ErrorMessage
                        name="subject"
                        component="p"
                        className="text-[11px] text-red-500"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-[12px] font-medium text-[#212121] uppercase tracking-wider"
                      >
                        Message
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us how we can help..."
                        className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#212121] transition resize-none"
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-[11px] text-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-10 py-3.5 bg-[#212121] text-white rounded-full text-[14px] font-medium hover:bg-[#333] transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </Form>
                )}
              </Formik>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
