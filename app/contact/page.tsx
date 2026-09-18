'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans flex flex-col justify-between">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">Contact Our Support</h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Have a question about a smartphone, warranty, or order status? We are here to help you 24/7.
          </p>
        </div>

        {/* Contact Info Cards & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Info Column */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl font-bold">
                📍
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Store Location</h4>
                <p className="text-xs text-slate-500 mt-0.5">Main Tech Commercial Hub, Shop #12</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl font-bold">
                📞
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Phone Support</h4>
                <p className="text-xs text-slate-500 mt-0.5">+92 300 1234567 (Mon - Sat)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-xl font-bold">
                ✉️
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Email Address</h4>
                <p className="text-xs text-slate-500 mt-0.5">support@mobixstore.com</p>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-600 to-indigo-600 text-white p-6 rounded-3xl shadow-lg space-y-2">
              <h4 className="font-extrabold text-base">Instant Order Help?</h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                Need quick details about delivery or official brand warranty? Chat directly with our technical team.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="text-6xl block">✅</span>
                <h3 className="text-2xl font-black text-slate-900">Message Sent Successfully!</h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our support representative will respond to your query within 2-4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-extrabold text-slate-900">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Raza"
                      className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ali@example.com"
                      className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Subject</label>
                    <select className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition">
                      <option>General Inquiry</option>
                      <option>Order Status</option>
                      <option>Warranty &amp; Returns</option>
                      <option>Product Stock Availability</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your query here..."
                    className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition shadow-md shadow-blue-500/20"
                >
                  Submit Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="bg-white text-slate-600 pt-12 pb-8 border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <h3 className="text-slate-900 text-lg font-black flex items-center gap-2">
              <span>📱</span> MOBIX<span className="text-blue-600">STORE</span>
            </h3>
            <p className="text-xs leading-relaxed text-slate-500">
              Your authentic store for original smartphones, fast chargers, covers, and mobile accessories.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link href="/phones" className="hover:text-blue-600 transition">Smartphones</Link></li>
              <li><Link href="/accessories" className="hover:text-blue-600 transition">Accessories</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">Customer Service</h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-blue-600 cursor-pointer">Order Tracking</li>
              <li className="hover:text-blue-600 cursor-pointer">Warranty Policy</li>
              <li className="hover:text-blue-600 cursor-pointer">Shipping Rates</li>
              <li className="hover:text-blue-600 cursor-pointer">Returns &amp; Exchange</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>📍 Main Tech Market, Shop #12</li>
              <li>📞 +92 300 1234567</li>
              <li>✉️ support@mobixstore.com</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          © 2026 MOBIXSTORE. All rights reserved.
        </div>
      </footer>

    </div>
  );
}