'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/footer';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Headphones,
  Star,
  ArrowUpRight,
  MapPin,
  PhoneCall,
  Mail,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Phone Data with Real Unsplash Product Images
  const phones = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      price: '$1,199',
      oldPrice: '$1,299',
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
      tag: 'Flagship',
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: '$1,299',
      oldPrice: '$1,399',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop',
      tag: 'AI Powered',
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      price: '$899',
      oldPrice: '$999',
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
      tag: 'Best Camera',
    },
    {
      id: 4,
      name: 'OnePlus 12 5G',
      brand: 'OnePlus',
      price: '$799',
      oldPrice: '$849',
      rating: '4.6',
      image:
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
      tag: 'Fast Charge',
    },
  ];

  // Accessories Data with Real Unsplash Product Images
  const accessories = [
    {
      id: 1,
      name: 'Active Noise Earbuds Pro',
      category: 'Audio',
      price: '$49.99',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    },
    {
      id: 2,
      name: '65W GaN Fast Charger',
      category: 'Charging',
      price: '$29.99',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0',
    },
    {
      id: 3,
      name: 'MagSafe Protective Clear Case',
      category: 'Covers',
      price: '$19.99',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
    },
    {
      id: 4,
      name: 'Smartwatch Series Ultra',
      category: 'Wearable',
      price: '$45.99',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1',
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#3E7BFA] selection:text-white w-full overflow-x-hidden">
      {/* Top Banner */}
      <div className="w-full bg-gray-50 border-b border-gray-200 text-gray-600 text-center py-2.5 px-4 text-[11px] font-medium tracking-wide">
        Free shipping on orders over $50 — every unit ships with verified IMEI and full brand warranty
      </div>

      {/* 1. HERO SECTION */}
    <section className="relative overflow-hidden border-b border-gray-200 w-full px-4 sm:px-8 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-24 right-0 w-[32rem] h-[32rem] bg-[#3E7BFA] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12 lg:py-16">
          <div className="space-y-7 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-700 border border-gray-200 rounded-full px-3.5 py-1.5 bg-gray-50 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7BFA]" />
              MobixStore — Rawalpindi &amp; Islamabad
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-gray-900">
              Devices built from
              <br />
              titanium, glass and
              <br />
              <span className="bg-gradient-to-r from-[#3E7BFA] to-blue-600 bg-clip-text text-transparent italic font-extrabold">honest pricing.</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed mx-auto md:mx-0 font-normal">
              Sealed, brand-new smartphones and the gear that keeps them running — sourced, verified and shipped by people who actually use this stuff.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <a
                href="#phones-section"
                className="bg-[#3E7BFA] hover:bg-[#2b65e0] text-white font-bold px-7 py-3.5 rounded-xl transition-colors duration-200 shadow-sm"
              >
                Shop phones
              </a>
              <a
                href="#accessories-section"
                className="border border-gray-300 hover:border-[#3E7BFA] text-gray-800 font-bold px-7 py-3.5 rounded-xl transition-colors duration-200 bg-white"
              >
                Shop accessories
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start pt-4 text-gray-500 text-xs font-semibold">
              <div>
                <span className="block text-gray-900 text-xl font-black">12,400+</span>
                units shipped
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <span className="block text-gray-900 text-xl font-black">4.8/5</span>
                average rating
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <span className="block text-gray-900 text-xl font-black">24 mo</span>
                warranty support
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm rounded-[2rem] border border-gray-200 bg-gray-50 p-3 shadow-xl">
              <div className="relative h-80 w-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop"
                  alt="Featured smartphone on a dark surface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between px-3 py-4">
                <div>
                  <p className="text-sm font-extrabold text-gray-900 tracking-wide">Verified IMEI</p>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">Sealed box, factory unlocked</p>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-md">
                  <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" /> 4.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-10 border-b border-gray-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
          {[
            { icon: <Truck className="w-5 h-5" />, title: 'Fast shipping', desc: 'Dispatched within 24 hours' },
            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Official warranty', desc: 'Full brand protection' },
            { icon: <CreditCard className="w-5 h-5" />, title: 'Secure payment', desc: 'Encrypted checkout' },
            { icon: <Headphones className="w-5 h-5" />, title: '24/7 support', desc: 'Dedicated help desk' },
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3.5 py-5 lg:py-2 lg:px-6 first:lg:pl-0">
              <span className="text-[#3E7BFA] mt-0.5">{feat.icon}</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm tracking-wide">{feat.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PHONES SECTION */}
      <section id="phones-section" className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-9">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-black text-[#3E7BFA] mb-2 tracking-widest uppercase">Top smartphones</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Latest <span className="text-[#3E7BFA] underline decoration-blue-200 underline-offset-4">mobile collection</span>
            </h2>
          </div>
          <Link
            href="/phones"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors group"
          >
            View all
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#3E7BFA] p-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="h-48 bg-gray-50 rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-lg border border-gray-200 shadow-sm uppercase tracking-wider">
                    {phone.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                    {phone.brand}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-700">
                    <Star className="w-3 h-3 fill-amber-600 text-amber-600" /> {phone.rating}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mt-1.5 line-clamp-1">{phone.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <div>
                  <span className="text-lg font-extrabold text-gray-900">{phone.price}</span>
                  <span className="text-xs text-gray-400 line-through ml-1.5 font-semibold">{phone.oldPrice}</span>
                </div>
                <button className="bg-[#3E7BFA] hover:bg-[#2b65e0] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACCESSORIES SECTION */}
      <section id="accessories-section" className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-9">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-black text-amber-600 mb-2 tracking-widest uppercase">Mobile gear</p>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight font-serif italic">
              Trending accessories
            </h2>
          </div>
          <Link
            href="/accessories"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors group"
          >
            View all
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {accessories.map((acc) => (
            <div
              key={acc.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-amber-500 p-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="h-44 bg-gray-50 rounded-xl overflow-hidden relative mb-4">
                  <img
                    src={acc.image}
                    alt={acc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-gray-200 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-600 text-amber-600" /> {acc.rating}
                  </span>
                </div>
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                  {acc.category}
                </span>
                <h3 className="font-bold text-gray-900 text-base mt-1.5 line-clamp-1">{acc.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <span className="text-lg font-extrabold text-gray-900">{acc.price}</span>
                <button className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT US SECTION */}
      <section id="contact-section" className="w-full px-4 sm:px-8 lg:px-16 py-20 space-y-12 border-t border-gray-200">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-black text-[#3E7BFA] tracking-widest uppercase">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Have questions? <span className="text-blue-600 font-extrabold">Contact us</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-normal">
            We're available around the clock for specs, order status or warranty claims.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="divide-y divide-gray-200 border-y border-gray-200 lg:border-y-0">
            <div className="flex items-center gap-4 py-5">
              <span className="p-3 bg-gray-50 border border-gray-200 text-[#3E7BFA] rounded-xl">
                <MapPin className="w-4.5 h-4.5" />
              </span>
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm tracking-wide">Store location</h4>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">Main Tech Commercial Hub, Shop #12</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-5">
              <span className="p-3 bg-gray-50 border border-gray-200 text-[#3E7BFA] rounded-xl">
                <PhoneCall className="w-4.5 h-4.5" />
              </span>
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm tracking-wide">Phone support</h4>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-5">
              <span className="p-3 bg-gray-50 border border-gray-200 text-[#3E7BFA] rounded-xl">
                <Mail className="w-4.5 h-4.5" />
              </span>
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm tracking-wide">Email</h4>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">support@mobixstore.com</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#3E7BFA] mx-auto" />
                <h3 className="text-2xl font-black text-gray-900">Thank you for contacting us</h3>
                <p className="text-sm text-gray-600 font-medium">Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="bg-white text-sm text-gray-900 placeholder:text-gray-400 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E7BFA] transition w-full shadow-sm"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="bg-white text-sm text-gray-900 placeholder:text-gray-400 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E7BFA] transition w-full shadow-sm"
                  />
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="bg-white text-sm text-gray-900 placeholder:text-gray-400 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E7BFA] transition w-full resize-none shadow-sm"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#3E7BFA] hover:bg-[#2b65e0] text-white font-bold text-sm px-8 py-4 rounded-xl transition-colors duration-200 w-full sm:w-auto shadow-sm"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}