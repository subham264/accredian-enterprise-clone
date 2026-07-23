"use client";

import { useState } from "react";
import { faqs } from "@/data/enterprise";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Find answers to the most common questions about our enterprise
            learning solutions.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {open === faq.id ? (
                  <Minus className="text-blue-600" size={22} />
                ) : (
                  <Plus className="text-blue-600" size={22} />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === faq.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-6 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
