'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, PhoneCall, Mail, CheckCircle2, MessageCircle, Smartphone } from 'lucide-react';
import Footer from '../components/footer';


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-[#14171C] font-sans flex flex-col justify-between">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 space-y-12 w-full">

        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold text-[#3E7BFA]">Get in touch</p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#0F1216] tracking-[-0.01em]">
            Contact our support
          </h1>
          <p className="text-[#5B6472] text-sm sm:text-base leading-relaxed">
            Have a question about a smartphone, a warranty claim, or an order status? We're available around the clock to help.
          </p>
        </div>

        {/* Contact Info Cards & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Info Column */}
          <div className="space-y-5">
            <div className="divide-y divide-[#E7E9EE] border-y border-[#E7E9EE] lg:border-y-0 lg:divide-y-0 lg:space-y-0">
              <div className="flex items-center gap-4 py-5 lg:py-0 lg:pb-5">
                <span className="p-3 bg-[#F5F6F8] border border-[#E1E4EA] text-[#3E7BFA] rounded-xl">
                  <MapPin className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h4 className="font-semibold text-[#0F1216] text-sm">Store location</h4>
                  <p className="text-xs text-[#5B6472] mt-0.5">Main Tech Commercial Hub, Shop #12</p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-5">
                <span className="p-3 bg-[#F5F6F8] border border-[#E1E4EA] text-[#3E7BFA] rounded-xl">
                  <PhoneCall className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h4 className="font-semibold text-[#0F1216] text-sm">Phone support</h4>
                  <p className="text-xs text-[#5B6472] mt-0.5">+92 300 1234567 (Mon – Sat)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-5 lg:pt-5 lg:pb-0">
                <span className="p-3 bg-[#F5F6F8] border border-[#E1E4EA] text-[#3E7BFA] rounded-xl">
                  <Mail className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h4 className="font-semibold text-[#0F1216] text-sm">Email address</h4>
                  <p className="text-xs text-[#5B6472] mt-0.5">support@mobixstore.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F1216] text-white p-6 rounded-2xl space-y-2">
              <MessageCircle className="w-5 h-5 text-[#3E7BFA]" />
              <h4 className="font-semibold text-sm pt-1">Need order help fast?</h4>
              <p className="text-xs text-[#9BA3AF] leading-relaxed">
                Ask about delivery timing or brand warranty coverage and our team will get back to you directly.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-[#FAFBFC] p-8 sm:p-10 rounded-2xl border border-[#E7E9EE]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#3E7BFA] mx-auto" />
                <h3 className="text-2xl font-semibold text-[#0F1216]">Message sent successfully</h3>
                <p className="text-[#5B6472] text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our support team will respond to your query within 2–4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#3E7BFA] hover:bg-[#2F68E6] text-white font-semibold text-xs px-6 py-3 rounded-xl transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-semibold text-[#0F1216]">Send us a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#14171C]">Full name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Raza"
                      className="w-full bg-white text-xs sm:text-sm text-[#14171C] placeholder:text-[#9AA1AC] px-4 py-3 rounded-xl border border-[#E1E4EA] focus:outline-none focus:border-[#3E7BFA] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#14171C]">Email address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ali@example.com"
                      className="w-full bg-white text-xs sm:text-sm text-[#14171C] placeholder:text-[#9AA1AC] px-4 py-3 rounded-xl border border-[#E1E4EA] focus:outline-none focus:border-[#3E7BFA] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#14171C]">Phone number (optional)</label>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      className="w-full bg-white text-xs sm:text-sm text-[#14171C] placeholder:text-[#9AA1AC] px-4 py-3 rounded-xl border border-[#E1E4EA] focus:outline-none focus:border-[#3E7BFA] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#14171C]">Subject</label>
                    <select className="w-full bg-white text-xs sm:text-sm text-[#14171C] px-4 py-3 rounded-xl border border-[#E1E4EA] focus:outline-none focus:border-[#3E7BFA] transition">
                      <option>General inquiry</option>
                      <option>Order status</option>
                      <option>Warranty &amp; returns</option>
                      <option>Product stock availability</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#14171C]">Your message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your query here..."
                    className="w-full bg-white text-xs sm:text-sm text-[#14171C] placeholder:text-[#9AA1AC] px-4 py-3 rounded-xl border border-[#E1E4EA] focus:outline-none focus:border-[#3E7BFA] transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#3E7BFA] hover:bg-[#2F68E6] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-colors"
                >
                  Submit message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

           <Footer />
     

    </div>
  );
}