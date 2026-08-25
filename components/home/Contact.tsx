"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";

interface FormData {
  firstName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const form = new FormData();

      form.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
      );

      form.append("firstName", formData.firstName);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          firstName: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="border-t-4 border-[#033268] px-2 py-5">
      <FadeIn direction="up">
        <h3 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
          Contact Us
        </h3>

        <p className="text-center text-sm text-[#616263]">
          Get in touch for personalized engineering solutions.
        </p>
      </FadeIn>

      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <FadeIn
          direction="left"
          className="w-full max-w-[500px] p-0 lg:p-4"
        >
          <div className="w-full max-w-md rounded-2xl bg-sky-100 p-8 shadow-sm">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              {/* First Name */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label
                  htmlFor="firstName"
                  className="mb-1 block text-sm font-semibold text-slate-800"
                >
                  Your First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full rounded-md border border-slate-800 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-semibold text-slate-800"
                >
                  Your Email Address
                  <span className="text-red-500">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-md border border-slate-800 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-semibold text-slate-800"
                >
                  Your Message
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project needs"
                  className="w-full resize-none rounded-md border border-slate-800 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                type="submit"
                disabled={status === "loading"}
                className="mt-2 w-fit rounded-full bg-sky-600/90 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Submit Your Message"}
              </motion.button>

              {/* Success */}
              {status === "success" && (
                <p className="rounded-md bg-green-100 px-4 py-3 text-sm font-medium text-green-700">
                  Thanks! Your message has been sent successfully.
                </p>
              )}

              {/* Error */}
              {status === "error" && (
                <p className="rounded-md bg-red-100 px-4 py-3 text-sm font-medium text-red-700">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </FadeIn>

        {/* Image */}
        <FadeIn direction="right">
          <Image
            src="/home/contact.avif"
            alt="Contact"
            height={400}
            width={400}
            className="h-auto w-full max-w-[400px] rounded-3xl object-cover"
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;