'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import {
  ShieldCheck,
  Award,
  Users,
  Truck,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-[#3E7BFA] selection:text-white">
      {/* Top Banner */}
      <div className="w-full bg-slate-900 text-slate-200 text-center py-2.5 px-4 text-[11px] font-medium tracking-wide">
        🇬🇧 London HQ — Serving Customers Across England, Scotland, Wales &amp; Northern Ireland
      </div>

      {/* Hero Header */}
      <section className="relative bg-white border-b border-slate-200 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#3E7BFA] bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
            Our UK Journey &amp; Mission
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Redefining Mobile Retail in <br />
            <span className="bg-gradient-to-r from-[#3E7BFA] to-indigo-600 bg-clip-text text-transparent">
              London &amp; Across the UK
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            At MobixStore UK, we supply authentic factory-sealed hardware, transparent GBP pricing, and 100% genuine UK-spec mobile phones with full brand warranties.
          </p>
        </div>
      </section>

      {/* High-Resolution Gallery & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Built on Quality, Backed by UK Expertise
            </h2>
            <p className="text-slate-600 leading-relaxed font-normal">
              Founded in Central London, MobixStore UK started with a single focus: giving tech enthusiasts across Great Britain direct access to genuine smartphones and certified tech accessories without retail markups.
            </p>
            <p className="text-slate-600 leading-relaxed font-normal">
              Whether you are upgrading to the latest flagship iPhone in Manchester, sourcing high-power GaN chargers in Edinburgh, or picking up MagSafe gear in Cardiff, every single order ships directly from our London logistics hub with full tracking.
            </p>
            <div className="pt-2">
              <Link
                href="/phones"
                className="inline-flex items-center gap-2 bg-[#3E7BFA] hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20"
              >
                <span>Explore Mobile Devices</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
            <Image
              src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1000&auto=format&fit=crop"
              alt="MobixStore London showroom and hub"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">London Head Office &amp; Showroom</p>
              <h3 className="text-xl font-black">45 Oxford Street, Fitzrovia, London</h3>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-6 h-6 text-[#3E7BFA]" />,
              title: "100% Genuine Stock",
              desc: "Verified factory sealed UK units with official IMEI check.",
            },
            {
              icon: <Award className="w-6 h-6 text-[#3E7BFA]" />,
              title: "24-Month UK Warranty",
              desc: "Comprehensive brand warranty & local UK customer support.",
            },
            {
              icon: <Users className="w-6 h-6 text-[#3E7BFA]" />,
              title: "25,000+ UK Customers",
              desc: "Rated 4.9/5 on Trustpilot by buyers across the UK.",
            },
            {
              icon: <Truck className="w-6 h-6 text-[#3E7BFA]" />,
              title: "Next-Day UK Express",
              desc: "Fast tracked dispatch via DPD and Royal Mail.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3"
            >
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* London Fulfillment & Logistics Section */}
      <section className="bg-white border-y border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
              alt="UK Dispatch and Fulfillment Operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Central Logistics</span>
              <h3 className="text-xl font-black">Fast UK Fulfillment Network</h3>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <span className="text-xs font-black text-[#3E7BFA] uppercase tracking-widest">
              UK Standards &amp; Operations
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Delivering Excellence Across the United Kingdom
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Operating out of our central London hub, our logistics team inspects and prepares every product under strict UK standards. We work closely with leading couriers to make sure your package arrives safely and on time.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3E7BFA] shrink-0" />
                <span>Fully VAT Registered UK Business (HM Revenue &amp; Customs compliant)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3E7BFA] shrink-0" />
                <span>Next-working-day express options available at checkout</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3E7BFA] shrink-0" />
                <span>Hassle-free 30-day UK return policy &amp; dedicated support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* UK Head Office Location Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl z-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Visit Our London Hub</span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight">Need in-person advice or technical help?</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our Fitzrovia store is open Monday to Saturday for device demos, accessory pairings, and support.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3E7BFA]" /> 45 Oxford St, London W1D 2DZ
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#3E7BFA]" /> Mon - Sat: 9:00 AM - 6:00 PM
              </span>
            </div>
          </div>

          <div className="z-10 w-full sm:w-auto">
            <Link
              href="/#contact-section"
              className="inline-block text-center w-full sm:w-auto bg-[#3E7BFA] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg"
            >
              Contact UK Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}