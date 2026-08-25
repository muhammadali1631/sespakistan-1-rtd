"use client";

import Image from "next/image";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
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

      form.append("name", formData.name);
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
          name: "",
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
    <div className="bg-black/50">
      <Image
        src="/contact/contactmain.avif"
        alt="Contact main Image"
        height={600}
        width={1000}
        sizes="100vw"
        className="fixed top-36 -z-10 h-screen max-h-full w-full object-cover"
      />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <div className="mt-56 min-h-screen">
          <div>
            <h4 className="px-4 text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Get In Touch
            </h4>

            <div className="mb-10 mt-5 h-[320px] w-full overflow-hidden sm:h-[420px]">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps?q=Office%20%232%20Haroon%20Plaza%202nd%20Floor%20IJP%20Road%20Near%20PSO%20Pump%20I-9%20Islamabad&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="relative mx-auto flex min-h-screen w-full max-w-[830px] items-center rounded-3xl bg-black/10 px-5 pt-12">
            <form onSubmit={onSubmit} className="w-full">
              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-bold text-white"
                >
                  Name*
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 w-full rounded-full border-[3px] border-gray-300 bg-white px-4 text-sm text-gray-700 outline-none placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-bold text-white"
                >
                  Email*
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 w-full rounded-full border-[3px] border-gray-300 bg-white px-4 text-sm text-gray-700 outline-none placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-bold text-white"
                >
                  Message*
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Enter your message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border-[3px] border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Submit"}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <p className="rounded-full bg-green-100 px-5 py-2 text-center text-sm font-medium text-green-700">
                    Thanks! Your message has been sent successfully.
                  </p>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <p className="rounded-full bg-red-100 px-5 py-2 text-center text-sm font-medium text-red-700">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Address */}
          <div className="mb-20 mt-3 space-y-4 text-center">
            <h4 className="text-xl font-bold text-white sm:text-2xl lg:text-4xl">
              Address
            </h4>

            <p className="font-bold text-white">
              Office # 2 Haroon Plaza 2nd Floor IJP Road Near PSO PUMP I-9
              Islamabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;