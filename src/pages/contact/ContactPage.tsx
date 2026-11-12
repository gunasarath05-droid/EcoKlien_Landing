import React from "react";
import ContactHeroSection from "./includes/ContactHeroSection";
import ContactEnquirySection from "./includes/ContactEnquirySection";
import ContactOfficeSection from "./includes/ContactOfficeSection";
import ContactDealerSection from "./includes/ContactDealerSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero: breadcrumb, heading, Email us CTA */}
      <ContactHeroSection />

      {/* 2. Contact card + enquiry form */}
      <ContactEnquirySection />

      {/* 3. Singapore office */}
      <ContactOfficeSection />

      {/* 4. Dealer application form */}
      <ContactDealerSection />
    </div>
  );
}
