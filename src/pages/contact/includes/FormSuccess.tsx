import React from "react";

interface FormSuccessProps {
  title: string;
  message: string;
  resetLabel: string;
  onReset: () => void;
}

export default function FormSuccess({ title, message, resetLabel, onReset }: FormSuccessProps) {
  return (
    <div
      role="status"
      className="p-6 sm:p-8 rounded-2xl bg-[#F0F8F3] border border-[#00A859]/30 text-center space-y-3"
    >
      <div className="w-12 h-12 bg-[#00A859] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
        ✓
      </div>
      <h4 className="text-lg font-semibold text-[#18251E]">{title}</h4>
      <p className="text-sm text-[#5D6B62]">{message}</p>
      <button
        type="button"
        onClick={onReset}
        className="text-xs text-[#00A859] underline hover:text-[#008f4c] cursor-pointer pt-2 inline-block"
      >
        {resetLabel}
      </button>
    </div>
  );
}
