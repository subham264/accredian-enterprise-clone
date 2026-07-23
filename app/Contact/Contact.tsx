"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    const body = {
      fullName: formData.get("fullName"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      requirement: formData.get("requirement"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess("Your request has been sent successfully!");

      form.reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-3xl overflow-hidden bg-white shadow-xl">
            {/* Image */}
            <div className="relative h-80 w-full">
              <Image
                src="/images/section.jpg"
                alt="Enterprise Training"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 50vw"
                className="object-contain bg-gray-100"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                Contact Us
              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-900">
                Build a{" "}
                <span className="text-blue-600">Future-Ready Workforce</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Partner with Accredian Enterprise to empower your teams through
                industry-led training, AI-powered learning, and measurable
                business outcomes.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Customized Learning Programs",
                  "Industry Expert Trainers",
                  "Live Instructor-Led Sessions",
                  "Progress Tracking Dashboard",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={22} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="mb-8 text-3xl font-bold">Request a Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="fullName"
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                />
              </div>

              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="company"
                  required
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                />
              </div>

              <select
                name="requirement"
                required
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              >
                <option value="">Select Training Requirement</option>
                <option>Artificial Intelligence</option>
                <option>Leadership Training</option>
                <option>Cloud Computing</option>
                <option>Data Analytics</option>
                <option>Cyber Security</option>
                <option>Corporate Upskilling</option>
              </select>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-5 text-gray-400" />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                />
              </div>

              {success && (
                <div className="rounded-lg bg-green-100 p-4 text-green-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-lg bg-red-100 p-4 text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Request Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
