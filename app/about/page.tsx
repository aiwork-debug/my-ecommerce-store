'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const phones = [
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'apple', storage: '256GB', price: '$1,199.99', oldPrice: '$1,299.99', rating: '4.9', emoji: '📱', tag: 'Best Seller' },
    { id: 2, name: 'Galaxy S24 Ultra', brand: 'samsung', storage: '512GB', price: '$1,299.99', oldPrice: '$1,399.99', rating: '4.8', emoji: '📲', tag: 'AI Featured' },
    { id: 3, name: 'Google Pixel 8 Pro', brand: 'google', storage: '128GB', price: '$899.99', oldPrice: '$999.99', rating: '4.7', emoji: '📱', tag: 'Top Camera' },
    { id: 4, name: 'OnePlus 12 5G', brand: 'oneplus', storage: '256GB', price: '$799.99', oldPrice: '$849.99', rating: '4.6', emoji: '🔥', tag: 'Fast Charging' },
    { id: 5, name: 'Xiaomi 14 Ultra', brand: 'xiaomi', storage: '512GB', price: '$999.99', oldPrice: '$1,099.99', rating: '4.7', emoji: '📸', tag: 'Leica Lens' },
    { id: 6, name: 'iPhone 15 Standard', brand: 'apple', storage: '128GB', price: '$799.99', oldPrice: '$829.99', rating: '4.8', emoji: '📱', tag: 'Popular' },
  ];

  const filteredPhones = activeCategory === 'all' 
    ? phones 
    : phones.filter((phone) => phone.brand === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans selection:bg-blue-500 selection:text-white">

      {/* 1. Flash Sale Announcement Bar */}
      <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-2 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">Flash Sale</span>
        <span>Get up to 25% OFF on all MagSafe Accessories &amp; Wireless Chargers! Offer ends tonight.</span>
      </div>

      {/* 2. Main Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 px-6 sm:px-12 overflow-hidden border-b border-slate-800">
<div className="absolute inset-0 bg-radial-[at_top_right] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none" />        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-blue-500/10 text-blue-400 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Official Warranty &amp; Stock Updated 2026
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              Next-Gen Mobiles. <br />
              <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Unbeatable Gear.
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Discover official smartphones, ultra-fast GaN chargers, heavy-duty protective covers, and immersive wireless audio with instant delivery.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link
                href="/products"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
              >
                Shop Phones Now
              </Link>
              <a
                href="#accessories"
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-3.5 rounded-xl border border-slate-700 transition"
              >
                Browse Accessories
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-md mx-auto md:mx-0">
              <div>
                <p className="text-xl font-black text-white">100%</p>
                <p className="text-xs text-slate-500">Original Tech</p>
              </div>
              <div>
                <p className="text-xl font-black text-white">24 Hours</p>
                <p className="text-xs text-slate-500">Fast Dispatch</p>
              </div>
              <div>
                <p className="text-xl font-black text-white">15k+</p>
                <p className="text-xs text-slate-500">Happy Buyers</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm bg-linear-to-tr from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/60 shadow-2xl text-center">
              <div className="text-9xl my-4 transform transition duration-500 hover:scale-110">📲</div>
              <div className="space-y-2">
                <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs px-3 py-1 rounded-full font-bold">
                  Flagship Pick
                </span>
                <h3 className="text-xl font-bold text-white mt-2">Titanium Series</h3>
                <p className="text-xs text-slate-400">Lightweight build. Heavyweight power.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Brands Bar */}
      <section className="bg-white border-b border-slate-200/80 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-8 text-slate-400 font-bold text-sm sm:text-base opacity-80">
          <span className="hover:text-slate-800 transition">🍎 Apple</span>
          <span className="hover:text-slate-800 transition">🤖 Samsung</span>
          <span className="hover:text-slate-800 transition">📱 Google Pixel</span>
          <span className="hover:text-slate-800 transition">🔥 OnePlus</span>
          <span className="hover:text-slate-800 transition">📸 Xiaomi</span>
          <span className="hover:text-slate-800 transition">⚡ Anker Gear</span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">

        {/* 4. Service Highlights Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl p-3 bg-blue-50 rounded-xl">🛡️</span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Official Warranty</h4>
              <p className="text-xs text-slate-500">100% Brand Backed</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl p-3 bg-blue-50 rounded-xl">⚡</span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Express Shipping</h4>
              <p className="text-xs text-slate-500">Fast Doorstep Delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl p-3 bg-blue-50 rounded-xl">🔄</span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">7-Day Replacement</h4>
              <p className="text-xs text-slate-500">Hassle-free Returns</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl p-3 bg-blue-50 rounded-xl">💳</span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Secure Payment</h4>
              <p className="text-xs text-slate-500">COD &amp; Cards Accepted</p>
            </div>
          </div>
        </div>

        {/* 5. Mobile Phones Section with Interactive Category Filter */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured Smartphones</h2>
              <p className="text-slate-500 text-sm mt-1">Filter smartphones by your favorite manufacturer</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All', value: 'all' },
                { label: 'Apple', value: 'apple' },
                { label: 'Samsung', value: 'samsung' },
                { label: 'Google', value: 'google' },
                { label: 'OnePlus', value: 'oneplus' },
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setActiveCategory(btn.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                    activeCategory === btn.value
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhones.map((phone) => (
              <div
                key={phone.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 bg-slate-100 rounded-xl flex items-center justify-center text-8xl mb-4 group-hover:scale-105 transition duration-300">
                    {phone.emoji}
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                      {phone.tag}
                    </span>
                    <span className="absolute top-3 right-3 text-xs font-bold text-amber-500 bg-white/90 px-2 py-0.5 rounded-md flex items-center gap-1">
                      ★ {phone.rating}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">{phone.brand} • {phone.storage}</span>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition">{phone.name}</h3>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xl font-black text-slate-900">{phone.price}</span>
                    <span className="text-xs text-slate-400 line-through ml-2">{phone.oldPrice}</span>
                  </div>
                  <button className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Mobile Accessories Grid */}
        <div id="accessories" className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Essential Mobile Gear</h2>
            <p className="text-slate-500 text-sm mt-1">High quality chargers, audio, cases, and power solutions</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-slate-100 rounded-xl flex items-center justify-center text-6xl mb-4">🎧</div>
              <span className="text-[10px] font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Audio</span>
              <h4 className="font-bold text-slate-900 text-base mt-2">Active Noise Earbuds</h4>
              <p className="text-xs text-slate-500 mt-1">Spatial sound &amp; 30h playback.</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <span className="font-extrabold text-slate-900">$49.99</span>
                <button className="text-xs font-bold text-blue-600 hover:underline">Quick Buy</button>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-slate-100 rounded-xl flex items-center justify-center text-6xl mb-4">🔌</div>
              <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Charging</span>
              <h4 className="font-bold text-slate-900 text-base mt-2">65W GaN Dual Charger</h4>
              <p className="text-xs text-slate-500 mt-1">Ultra compact fast adapter.</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <span className="font-extrabold text-slate-900">$29.99</span>
                <button className="text-xs font-bold text-blue-600 hover:underline">Quick Buy</button>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-slate-100 rounded-xl flex items-center justify-center text-6xl mb-4">🛡️</div>
              <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Protection</span>
              <h4 className="font-bold text-slate-900 text-base mt-2">MagSafe Armor Case</h4>
              <p className="text-xs text-slate-500 mt-1">Military grade shock resistance.</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <span className="font-extrabold text-slate-900">$19.99</span>
                <button className="text-xs font-bold text-blue-600 hover:underline">Quick Buy</button>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-slate-100 rounded-xl flex items-center justify-center text-6xl mb-4">🔋</div>
              <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Power</span>
              <h4 className="font-bold text-slate-900 text-base mt-2">20,000mAh Power Bank</h4>
              <p className="text-xs text-slate-500 mt-1">Fast 22.5W output display.</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <span className="font-extrabold text-slate-900">$39.99</span>
                <button className="text-xs font-bold text-blue-600 hover:underline">Quick Buy</button>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Why Shop With Us / About Us Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Our Commitment
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Why MobixStore is the Trusted Choice for Mobile Buyers
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We eliminate the stress of fake products and inflated pricing. Every device in our store is 100% original, comes with official manufacturer backing, and is verified before dispatch.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2 text-emerald-600">✓ Factory sealed phones with verified IMEIs</li>
              <li className="flex items-center gap-2 text-emerald-600">✓ Transparent 7-day replacement guarantee</li>
              <li className="flex items-center gap-2 text-emerald-600">✓ Dedicated technical chat support 24/7</li>
            </ul>
            <div className="pt-2">
              <Link href="/about" className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-6 py-3 rounded-xl transition">
                Read Our Story &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold">What Our Customers Say</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
                <p className="italic text-slate-300">&quot;Got my iPhone 15 Pro Max delivered in less than 24 hours. Sealed pack with valid official warranty!&quot;</p>
                <p className="mt-2 font-bold text-blue-400">— Hamza K. (Verified Buyer)</p>
              </div>
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
                <p className="italic text-slate-300">&quot;The 65W GaN charger works flawlessly for both my laptop and phone. Highly recommended.&quot;</p>
                <p className="mt-2 font-bold text-blue-400">— Sarah M. (Verified Buyer)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs mt-1">Got questions? We have answers.</p>
          </div>

          <div className="space-y-3">
            <details className="bg-white border border-slate-200/80 rounded-xl p-4 text-xs font-semibold text-slate-800 cursor-pointer">
              <summary className="font-bold text-sm">Are all smartphones 100% original?</summary>
              <p className="mt-2 text-slate-500 font-normal leading-relaxed">
                Yes! We only sell factory-sealed devices directly sourced from authorized brand distributors with official warranties.
              </p>
            </details>

            <details className="bg-white border border-slate-200/80 rounded-xl p-4 text-xs font-semibold text-slate-800 cursor-pointer">
              <summary className="font-bold text-sm">What is the estimated delivery time?</summary>
              <p className="mt-2 text-slate-500 font-normal leading-relaxed">
                Orders placed before 3 PM are dispatched on the same day. Standard delivery takes 1-3 business days.
              </p>
            </details>

            <details className="bg-white border border-slate-200/80 rounded-xl p-4 text-xs font-semibold text-slate-800 cursor-pointer">
              <summary className="font-bold text-sm">How does the 7-day replacement work?</summary>
              <p className="mt-2 text-slate-500 font-normal leading-relaxed">
                If your item arrives damaged or defective, contact our help desk within 7 days for an instant replacement.
              </p>
            </details>
          </div>
        </div>

        {/* 9. Newsletter Section */}
        <div className="bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <span className="text-4xl block">📩</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold">Join the VIP Tech Club</h2>
          <p className="text-blue-200 text-xs sm:text-sm max-w-md mx-auto">
            Subscribe to get instant alerts on new smartphone launches, secret coupons, and flash sales.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-xl bg-slate-800/90 text-white text-xs sm:text-sm border border-slate-700 focus:outline-none focus:border-blue-400 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* 10. Complete Dark Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <h3 className="text-white text-xl font-black flex items-center gap-2">
              <span>📱</span> MOBIX<span className="text-blue-500">STORE</span>
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              The premier destination for authentic mobile smartphones, fast chargers, MagSafe covers, and audio gear.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Smartphones</Link></li>
              <li><a href="#accessories" className="hover:text-white transition">Accessories</a></li>
              <li><Link href="/about" className="hover:text-white transition">About Store</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Customer Care</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white cursor-pointer">Track Order</span></li>
              <li><span className="hover:text-white cursor-pointer">Warranty Claim</span></li>
              <li><span className="hover:text-white cursor-pointer">Shipping &amp; Delivery</span></li>
              <li><span className="hover:text-white cursor-pointer">Return Policy</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>📍 Tech Hub, Main Commercial Area</li>
              <li>📞 +1 (800) 555-MOBIX</li>
              <li>✉️ support@mobixstore.com</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 MOBIXSTORE. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}