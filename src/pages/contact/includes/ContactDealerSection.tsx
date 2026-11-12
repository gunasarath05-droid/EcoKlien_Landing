"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import { countries, dealerForm, dealerProducts, ownershipTypes } from "@/data/contact";
import { inputClass, labelClass, submitButtonClass } from "@/components/contact/formStyles";
import FormSuccess from "./FormSuccess";

type TextFieldKey =
  | "distributorName"
  | "territory"
  | "streetAddress"
  | "cityStateZip"
  | "phone"
  | "cell"
  | "fax"
  | "website"
  | "email"
  | "yearInBusiness"
  | "locations"
  | "cin"
  | "gst"
  | "pan"
  | "msme";

interface TextField {
  key: TextFieldKey;
  label: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}

const emptyForm = {
  distributorName: "",
  territory: "",
  streetAddress: "",
  cityStateZip: "",
  country: "",
  phone: "",
  cell: "",
  fax: "",
  website: "",
  email: "",
  yearInBusiness: "",
  locations: "",
  products: dealerProducts[0],
  ownershipType: "",
  cin: "",
  gst: "",
  pan: "",
  msme: "",
};

type DealerFormData = typeof emptyForm;

const selectClass = `${inputClass} appearance-none pr-10 cursor-pointer`;

export default function ContactDealerSection() {
  const [formData, setFormData] = useState<DealerFormData>(emptyForm);
  const [humanCheck, setHumanCheck] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof DealerFormData, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderField = (field: TextField) => (
    <div key={field.key}>
      <label htmlFor={`dealer-${field.key}`} className={labelClass}>
        {field.label}
        {field.required && " *"}
      </label>
      <input
        id={`dealer-${field.key}`}
        type={field.type ?? "text"}
        required={field.required}
        autoComplete={field.autoComplete}
        value={formData[field.key]}
        onChange={(e) => update(field.key, e.target.value)}
        placeholder={field.label}
        className={inputClass}
      />
    </div>
  );

  return (
    <section id={dealerForm.id} className="pb-16 md:pb-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] border border-[#DCE4DF] bg-white p-6 sm:p-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#00A859] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">
              {dealerForm.eyebrow}
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-medium text-[#0E291E] tracking-tight leading-tight mb-8">
            {dealerForm.title}
          </h2>

          {submitted ? (
            <FormSuccess
              title="Thank you for your interest!"
              message="Our partnerships team will review your application and contact you shortly."
              resetLabel="Submit another application"
              onReset={() => {
                setSubmitted(false);
                setHumanCheck(false);
                setFormData(emptyForm);
              }}
            />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Distributor / Territory */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {renderField({ key: "distributorName", label: "Distributor Name", required: true, autoComplete: "organization" })}
                {renderField({ key: "territory", label: "Territory" })}
              </div>

              {/* Address / City / Country */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {renderField({ key: "streetAddress", label: "Street Address", required: true, autoComplete: "street-address" })}
                {renderField({ key: "cityStateZip", label: "City, State, Zip", required: true })}
                <div>
                  <label htmlFor="dealer-country" className={labelClass}>
                    Country *
                  </label>
                  <div className="relative">
                    <select
                      id="dealer-country"
                      required
                      autoComplete="country-name"
                      value={formData.country}
                      onChange={(e) => update("country", e.target.value)}
                      className={`${selectClass} ${formData.country ? "" : "text-[#8A978F]"}`}
                    >
                      <option value="" disabled>
                        Country
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country} className="text-[#18251E]">
                          {country}
                        </option>
                      ))}
                    </select>
                    <LuChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#738479]" />
                  </div>
                </div>
              </div>

              {/* Phone / Cell / Fax */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {renderField({ key: "phone", label: "Phone Number", required: true, type: "tel", autoComplete: "tel" })}
                {renderField({ key: "cell", label: "Cell Number", type: "tel" })}
                {renderField({ key: "fax", label: "Fax Number", type: "tel" })}
              </div>

              {/* Website / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {renderField({ key: "website", label: "Website", type: "url", autoComplete: "url" })}
                {renderField({ key: "email", label: "Email", required: true, type: "email", autoComplete: "email" })}
              </div>

              {/* Year in business / Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {renderField({ key: "yearInBusiness", label: "Year In Business", type: "number" })}
                {renderField({ key: "locations", label: "Number Of Locations", type: "number" })}
              </div>

              {/* Products */}
              <div>
                <label htmlFor="dealer-products" className={labelClass}>
                  Products *
                </label>
                <div className="relative">
                  <select
                    id="dealer-products"
                    required
                    value={formData.products}
                    onChange={(e) => update("products", e.target.value)}
                    className={selectClass}
                  >
                    {dealerProducts.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                  <LuChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#738479]" />
                </div>
              </div>

              {/* Ownership type (single choice) */}
              <fieldset>
                <legend className={labelClass}>Ownership Type *</legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {ownershipTypes.map((type) => (
                    <label
                      key={type}
                      className="inline-flex items-center gap-3 text-[13.5px] text-[#18251E] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="ownershipType"
                        required
                        value={type}
                        checked={formData.ownershipType === type}
                        onChange={(e) => update("ownershipType", e.target.value)}
                        className="peer sr-only"
                      />
                      <span className="w-4 h-4 rounded-[4px] border border-[#B9C6BE] bg-white flex items-center justify-center transition-colors peer-checked:bg-[#00A859] peer-checked:border-[#00A859] peer-focus-visible:ring-2 peer-focus-visible:ring-[#00B050]/40 after:content-[''] after:w-1.5 after:h-1.5 after:rounded-[1px] after:bg-white after:opacity-0 peer-checked:after:opacity-100" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* CIN / GST */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {renderField({ key: "cin", label: "CIN / LLP No", required: true })}
                {renderField({ key: "gst", label: "GST No", required: true })}
              </div>

              {/* PAN / MSME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {renderField({ key: "pan", label: "PAN No", required: true })}
                {renderField({ key: "msme", label: "MSME No" })}
              </div>

              {/* Human verification — replace with a real reCAPTCHA widget once a site key is available */}
              <div className="pt-2">
                <label className="inline-flex items-center gap-4 rounded-md border border-[#DCE4DF] bg-[#F9FAF9] px-4 py-3.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={humanCheck}
                    onChange={(e) => setHumanCheck(e.target.checked)}
                    className="w-5 h-5 accent-[#00A859] cursor-pointer"
                  />
                  <span className="text-[13.5px] text-[#18251E]">I&apos;m not a robot</span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-4">
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
    </section>
  );
}
