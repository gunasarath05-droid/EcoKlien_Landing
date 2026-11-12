import React from "react";
import AboutHero from "./includes/AboutHero";
import AboutEnquiryForm from "./includes/AboutEnquiry";
import WhoWeAre from "./includes/WhoWeAre";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 w-full">
        <AboutHero />
        <WhoWeAre />
        <AboutEnquiryForm />
      </main>
    </div>
  );
}

