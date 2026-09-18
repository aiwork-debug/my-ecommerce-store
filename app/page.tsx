
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from './components/footer';
export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Phone Data
  const phones = [
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', price: '$1,199', oldPrice: '$1,299', rating: '4.9', emoji: '📱', tag: 'Flagship' },
    { id: 2, name: 'Galaxy S24 Ultra', brand: 'Samsung', price: '$1,299', oldPrice: '$1,399', rating: '4.8', emoji: '📲', tag: 'AI Powered' },
    { id: 3, name: 'Google Pixel 8 Pro', brand: 'Google', price: '$899', oldPrice: '$999', rating: '4.7', emoji: '📱', tag: 'Best Camera' },
    { id: 4, name: 'OnePlus 12 5G', brand: 'OnePlus', price: '$799', oldPrice: '$849', rating: '4.6', emoji: '🔥', tag: 'Fast Charge' },
  ];

  // Accessories Data
  const accessories = [
    { id: 1, name: 'Active Noise Earbuds Pro', category: 'Audio', price: '$49.99', rating: '4.8', emoji: '🎧' },
    { id: 2, name: '65W GaN Fast Charger', category: 'Charging', price: '$29.99', rating: '4.9', emoji: '🔌' },
    { id: 3, name: 'MagSafe Protective Clear Case', category: 'Covers', price: '$19.99', rating: '4.7', emoji: '🛡️' },
    { id: 4, name: '20,000mAh Power Bank 22.5W', category: 'Power', price: '$39.99', rating: '4.8', emoji: '🔋' },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      
      {/* Top Banner */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white text-center py-2.5 px-4 text-xs font-bold tracking-wide">
        🚀 FREE SHIPPING ON ORDERS OVER $50 • OFFICIAL BRAND WARRANTY INCLUDED
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-white py-16 sm:py-20 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-600 px-3.5 py-1.5 rounded-full border border-blue-100">
              Welcome to MobixStore
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Original Mobiles &amp; <br />
              <span className="text-blue-600">Premium Accessories.</span>
            </h1>
            <p className="text-slate-500 text-sm sm:text-base max-w-lg leading-relaxed">
              Your one-stop destination for authentic sealed smartphones, ultra-fast chargers, covers, and audio gear.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <a href="#phones-section" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/25 transition">
                Shop Phones
              </a>
              <a href="#accessories-section" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-8 py-3.5 rounded-2xl transition">
                Shop Gear
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-linear-to-tr from-slate-50 to-blue-50 border border-slate-200/80 p-8 rounded-3xl shadow-xl text-center max-w-sm w-full">
              <div className="text-9xl my-4 hover:scale-105 transition transform">📱</div>
              <h3 className="text-xl font-bold text-slate-900">100% Genuine Tech</h3>
              <p className="text-xs text-slate-500 mt-1">Official Box Packed &amp; Verified IMEI</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🚚', title: 'Fast Shipping', desc: 'Dispatched within 24 hours' },
            { icon: '🛡️', title: 'Official Warranty', desc: '100% brand protection' },
            { icon: '💳', title: 'Secure Payment', desc: 'Encrypted checkout' },
            { icon: '🎧', title: '24/7 Support', desc: 'Dedicated help desk' },
          ].map((feat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
              <span className="text-3xl p-3 bg-slate-50 rounded-xl">{feat.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
                <p className="text-xs text-slate-500">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PHONES SECTION */}
      <section id="phones-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Top Smartphones</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">Latest Mobile Collection</h2>
          </div>
          <Link href="/phones" className="text-xs sm:text-sm font-bold text-blue-600 hover:underline">
            View All Phones &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phones.map((phone) => (
            <div key={phone.id} className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-44 bg-slate-50 rounded-2xl flex items-center justify-center text-6xl mb-4 relative group-hover:scale-105 transition">
                  {phone.emoji}
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-white text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200">{phone.tag}</span>
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-500 bg-white px-2 py-0.5 rounded-lg border border-slate-100">★ {phone.rating}</span>
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{phone.brand}</span>
                <h3 className="font-bold text-slate-900 text-base mt-1">{phone.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-100">
                <div>
                  <span className="text-lg font-black text-slate-900">{phone.price}</span>
                  <span className="text-xs text-slate-400 line-through ml-1.5">{phone.oldPrice}</span>
                </div>
                <button className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACCESSORIES SECTION */}
      <section id="accessories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Mobile Gear</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">Trending Accessories</h2>
          </div>
          <Link href="/accessories" className="text-xs sm:text-sm font-bold text-emerald-600 hover:underline">
            View All Accessories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((acc) => (
            <div key={acc.id} className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 bg-slate-50 rounded-2xl flex items-center justify-center text-6xl mb-4 relative group-hover:scale-105 transition">
                  {acc.emoji}
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-500 bg-white px-2 py-0.5 rounded-lg border border-slate-100">★ {acc.rating}</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">{acc.category}</span>
                <h3 className="font-bold text-slate-900 text-base mt-1">{acc.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-100">
                <span className="text-lg font-black text-slate-900">{acc.price}</span>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT US SECTION */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">Get In Touch</span>
          <h2 className="text-3xl font-black text-slate-900">Have Questions? Contact Us</h2>
          <p className="text-slate-500 text-xs sm:text-sm">We are available 24/7 to assist you with mobile specs, orders, or warranty claims.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
              <span className="text-2xl p-3 bg-blue-50 rounded-xl">📍</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Store Location</h4>
                <p className="text-xs text-slate-500">Main Tech Commercial Hub, Shop #12</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
              <span className="text-2xl p-3 bg-emerald-50 rounded-xl">📞</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Phone Support</h4>
                <p className="text-xs text-slate-500">+92 300 1234567</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
              <span className="text-2xl p-3 bg-indigo-50 rounded-xl">✉️</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Email</h4>
                <p className="text-xs text-slate-500">support@mobixstore.com</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <span className="text-5xl block">✅</span>
                <h3 className="text-xl font-bold text-slate-900">Thank you for contacting us!</h3>
                <p className="text-xs text-slate-500">Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 w-full"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-xl transition"
                >
                  Send Message
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