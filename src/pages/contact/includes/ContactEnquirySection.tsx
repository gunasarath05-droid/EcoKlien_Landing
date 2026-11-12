"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import { images } from "@/data/images";
import { contactCard, enquiryForm } from "@/data/contact";
import { inputClass, labelClass, submitButtonClass } from "@/components/contact/formStyles";
import FormSuccess from "./FormSuccess";

const emptyForm = { name: "", email: "", phone: "" };

export default function ContactEnquirySection() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: dark contact card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[460px] h-full p-7 sm:p-10 flex flex-col text-white shadow-xl">
              <Image
                src={images.enquiry}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/55 pointer-events-none" />

              <div className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] inline-block" />
                <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-white/80">
                  {contactCard.eyebrow}
                </span>
              </div>

              <div className="relative z-10 mt-6 space-y-3">
                <h2 className="text-[30px] sm:text-[36px] font-normal !text-white tracking-tight leading-[1.1]">
                  {contactCard.title}
                </h2>
                <p className="text-[14px] text-white/85 leading-relaxed font-normal">
                  {contactCard.subtitle}
                </p>
              </div>

              <div className="relative z-10 mt-8 space-y-7">
                {/* Emails */}
                <div>
                  <span className="block text-[10.5px] font-mono uppercase tracking-[0.1em] text-white/60 mb-2.5">
                    {contactCard.emails[0].label}
                  </span>
                  <ul className="space-y-2.5">
                    {contactCard.emails.map((email) => (
                      <li key={email.value}>
                        <a
                          href={email.href}
                          className="text-[17px] sm:text-[19px] text-white hover:text-[#38C978] transition-colors break-all"
                        >
                          {email.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phones */}
                {contactCard.phones.map((phone) => (
                  <div key={phone.value}>
                    <span className="block text-[10.5px] font-mono uppercase tracking-[0.1em] text-white/60 mb-2">
                      {phone.label}
                    </span>
                    <a
                      href={phone.href}
                      className="text-[17px] sm:text-[19px] text-white hover:text-[#38C978] transition-colors"
                    >
                      {phone.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-auto pt-10 text-[10.5px] font-mono text-white/70 tracking-widest uppercase">
                {contactCard.footerTag}
              </div>
            </div>
          </motion.div>

          {/* Right: enquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col bg-white p-1 sm:p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#00A859] inline-block" />
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">
                {enquiryForm.eyebrow}
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[30px] font-medium text-[#0E291E] tracking-tight leading-tight mb-3">
              {enquiryForm.title}
            </h2>
            <p className="text-[14px] text-[#55645C] mb-8">{enquiryForm.description}</p>

            {submitted ? (
              <FormSuccess
                title="Thank you for your enquiry!"
                message="Our team will get in touch with you shortly."
                resetLabel="Submit another enquiry"
                onReset={() => {
                  setSubmitted(false);
                  setFormData(emptyForm);
                }}
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="enquiry-name" className={labelClass}>
                    Name*
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-email" className={labelClass}>
                    Email*
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email address"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Include country code"
                    className={inputClass}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[12px] text-[#78887F] font-normal">* Required fields</span>
                  <button type="submit" className={submitButtonClass}>
                    <span>Submit</span>
                    <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
