import React from "react";

export default function TickerSection() {
  const features = [
    "Advanced electrochemical treatment",
    "Chemical-free treatment",
    "On-site treatment",
    "Healthcare & laboratory use",
  ];

  return (
    <section className="border-y border-[#D7DED5] bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center justify-start gap-2 text-sm font-medium text-[#123D30]"
            >
              <span className="text-[#647069] font-normal text-base shrink-0 select-none">
                +
              </span>
              <span className="tracking-tight text-[14px]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


