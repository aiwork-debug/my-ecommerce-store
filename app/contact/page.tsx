'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/footer';
import {
  MapPin,
  PhoneCall,
  Mail,
  CheckCircle2,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-[#3E7BFA] selection:text-white flex flex-col justify-between">
      <div>
        {/* Top Announcement Bar */}
        <div className="w-full bg-slate-900 text-slate-200 text-center py-2.5 px-4 text-[11px] font-medium tracking-wide">
          🇬🇧 London Customer Support — Fast response within 2 business hours across the UK
        </div>

        {/* Hero Header */}
        <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#3E7BFA] bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              UK Help &amp; Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Get in Touch with <span className="text-[#3E7BFA]">MobixStore UK</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
              Have questions about UK deliveries, order tracking, device compatibility, or 24-month warranties? Our London team is here to help!
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Contact Details Card */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#3E7BFA]" /> Contact Info
              </h3>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <span className="p-3 bg-blue-50 text-[#3E7BFA] rounded-xl border border-blue-100 shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">London Showroom &amp; HQ</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    45 Oxford Street, Fitzrovia,<br />London, W1D 2DZ, United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <span className="p-3 bg-blue-50 text-[#3E7BFA] rounded-xl border border-blue-100 shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">UK Customer Care</h4>
                  <p className="text-xs text-slate-500 mt-1 font-semibold text-slate-800">+44 20 7946 0912</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Freephone within the UK</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <span className="p-3 bg-blue-50 text-[#3E7BFA] rounded-xl border border-blue-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Enquiries</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">support@mobixstore.co.uk</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Replies within 2 hours</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <span className="p-3 bg-blue-50 text-[#3E7BFA] rounded-xl border border-blue-100 shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Business Hours (GMT/BST)</h4>
                  <p className="text-xs text-slate-500 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-xs text-slate-500">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* UK Trust Badge */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3 bg-blue-50/50 p-4 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-[#3E7BFA] shrink-0" />
                <p className="text-xs text-slate-600 font-medium">
                  Registered in England &amp; Wales. Fully VAT compliant.
                </p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Delivered!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Our London support representative will get back to you via email within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 text-xs font-bold text-[#3E7BFA] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-[#3E7BFA]" />
                    <h3 className="text-xl font-black text-slate-900">Send Us a Direct Message</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Oliver Smith"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3E7BFA] text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="oliver.smith@example.co.uk"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3E7BFA] text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">UK Phone (Optional)</label>
                      <input
                        type="tel"
                        placeholder="07123 456789"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3E7BFA] text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">Inquiry Type</label>
                      <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3E7BFA] text-slate-900 transition-all">
                        <option>General Support</option>
                        <option>Order Tracking &amp; Delivery</option>
                        <option>24-Month Warranty Claim</option>
                        <option>Returns &amp; Refunds</option>
                        <option>Bulk / Business Orders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Next-Day DPD Delivery Status Query"
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3E7BFA] text-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please include order number if applicable..."
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3E7BFA] text-slate-900 transition-all resize-none placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#3E7BFA] hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}