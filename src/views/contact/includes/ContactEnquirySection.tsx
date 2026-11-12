"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import { images } from "@/data/images";
import { contactEmails, contactPhones } from "@/data/contact";
import { inputClass, labelClass, submitButtonClass } from "@/components/contact/formStyles";
import { useMessages } from "@/i18n/LocaleProvider";
import { contactMessages } from "@/i18n/messages/contact";
import FormSuccess from "./FormSuccess";

const emptyForm = { name: "", email: "", phone: "" };

export default function ContactEnquirySection() {
  const t = useMessages(contactMessages);
  const { card, enquiry } = t;
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const phones = [
    { label: card.singaporeLabel, ...contactPhones.singapore },
    { label: card.indiaLabel, ...contactPhones.india },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Dark contact card */}
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
                <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-white/80">{card.eyebrow}</span>
              </div>

              <div className="relative z-10 mt-6 space-y-3">
                <h2 className="text-[30px] sm:text-[36px] font-normal !text-white tracking-tight leading-[1.1]">
                  {card.title}
                </h2>
                <p className="text-[14px] text-white/85 leading-relaxed font-normal">{card.subtitle}</p>
              </div>

              <div className="relative z-10 mt-8 space-y-7">
                {/* Emails */}
                <div>
                  <span className="block text-[10.5px] font-mono uppercase tracking-[0.1em] text-white/60 mb-2.5">
                    {card.emailLabel}
                  </span>
                  <ul className="space-y-2.5">
                    {contactEmails.map((email) => (
                      <li key={email.value}>
                        <a
                          href={email.href}
                          dir="ltr"
                          className="text-[17px] sm:text-[19px] text-white hover:text-[#38C978] transition-colors break-all"
                        >
                          {email.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phones (kept left-to-right in every language) */}
                {phones.map((phone) => (
                  <div key={phone.value}>
                    <span className="block text-[10.5px] font-mono uppercase tracking-[0.1em] text-white/60 mb-2">
                      {phone.label}
                    </span>
                    <a
                      href={phone.href}
                      dir="ltr"
                      className="inline-block text-[17px] sm:text-[19px] text-white hover:text-[#38C978] transition-colors"
                    >
                      {phone.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-auto pt-10 text-[10.5px] font-mono text-white/70 tracking-widest uppercase">
                {card.footerTag}
              </div>
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col bg-white p-1 sm:p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#00A859] inline-block" />
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">{enquiry.eyebrow}</span>
            </div>
            <h2 className="text-[26px] sm:text-[30px] font-medium text-[#0E291E] tracking-tight leading-tight mb-3">
              {enquiry.title}
            </h2>
            <p className="text-[14px] text-[#55645C] mb-8">{enquiry.description}</p>

            {submitted ? (
              <FormSuccess
                title={enquiry.successTitle}
                message={enquiry.successMessage}
                resetLabel={enquiry.successReset}
                onReset={() => {
                  setSubmitted(false);
                  setFormData(emptyForm);
                }}
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="enquiry-name" className={labelClass}>
                    {enquiry.name}*
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={enquiry.namePlaceholder}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-email" className={labelClass}>
                    {enquiry.email}*
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    autoComplete="email"
                    dir="ltr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={enquiry.emailPlaceholder}
                    className={`${inputClass} rtl:text-right`}
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-phone" className={labelClass}>
                    {enquiry.phone}
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    autoComplete="tel"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={enquiry.phonePlaceholder}
                    className={`${inputClass} rtl:text-right`}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[12px] text-[#78887F] font-normal">{t.requiredFields}</span>
                  <button type="submit" className={submitButtonClass}>
                    <span>{t.submit}</span>
                    <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
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
