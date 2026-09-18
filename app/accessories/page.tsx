'use client';

import { useState } from 'react';
import { Zap, ShieldCheck, Headphones, BatteryCharging, Star, PackageCheck } from 'lucide-react';
import Footer from '../components/footer';


export default function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const accessories = [
    {
      id: 1,
      name: 'Active Noise Earbuds Pro',
      category: 'audio',
      price: '$49.99',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
      desc: 'Spatial Audio with 30h battery life',
    },
    {
      id: 2,
      name: '65W GaN Fast Charger',
      category: 'charging',
      price: '$29.99',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
      desc: 'Dual USB-C fast charging adapter',
    },
    {
      id: 3,
      name: 'MagSafe Protective Clear Case',
      category: 'covers',
      price: '$19.99',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1611251852376-d3aaf1b0702e?auto=format&fit=crop&w=600&q=80',
      desc: 'Military grade drop protection',
    },
    {
      id: 4,
      name: '20,000mAh Power Bank 22.5W',
      category: 'power',
      price: '$39.99',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1604160687800-f7799a525a33?auto=format&fit=crop&w=600&q=80',
      desc: 'LED battery display & fast charge',
    },
    {
      id: 5,
      name: 'Wireless Charging Pad 15W',
      category: 'charging',
      price: '$24.99',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?auto=format&fit=crop&w=600&q=80',
      desc: 'Qi-certified magnetic charger',
    },
    {
      id: 6,
      name: '9H Tempered Glass Protector',
      category: 'covers',
      price: '$12.99',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80',
      desc: 'Scratch-proof HD glass pack of 2',
    },
    {
      id: 7,
      name: 'ANC Wireless Over-Ear Headphones',
      category: 'audio',
      price: '$89.99',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      desc: 'Deep bass & comfortable earcups',
    },
    {
      id: 8,
      name: 'Braided Type-C Fast Cable (2m)',
      category: 'charging',
      price: '$14.99',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
      desc: '100W ultra durable cable',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? accessories
      : accessories.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white min-h-screen text-slate-900 w-full overflow-x-hidden font-sans">
      
      {/* 1. HERO PAGE HEADER */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-8 lg:px-16">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Official Gear Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Mobile <span className="text-blue-600 italic">Accessories</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Top quality GaN chargers, crystal clear covers, immersive audio gear, and reliable power solutions engineered for longevity.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Items', value: 'all' },
              { label: 'Audio', value: 'audio' },
              { label: 'Charging', value: 'charging' },
              { label: 'Covers & Protection', value: 'covers' },
              { label: 'Power Banks', value: 'power' },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ACCESSORIES GRID SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-10">
        <div className="flex justify-between items-end border-b border-slate-100 pb-4">
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Gear Inventory</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Showing {filteredItems.length} Products
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-400">Certified Original Gear</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500 p-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="h-52 bg-slate-50 rounded-xl overflow-hidden relative mb-4 border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-700 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-slate-200 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {item.rating}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base line-clamp-1 group-hover:text-blue-600 transition">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-xs mt-1 font-normal line-clamp-1">{item.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                <span className="text-lg font-black text-slate-900">{item.price}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROMOTION / BUNDLE SPOTLIGHT BANNER */}
      <section className="w-full bg-slate-900 text-white py-20 px-4 sm:px-8 lg:px-16 my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
              Special Offer Bundle
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Power Up Complete With <span className="text-blue-500 italic">GaN Tech Bundles</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              Pair any high-capacity power bank with a 65W fast charger and get a braided type-c cable at a 20% discount automatically applied at checkout.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-800 bg-slate-800/50 p-4 rounded-xl">
                <Zap className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Rapid Charging</h4>
                <p className="text-xs text-slate-400 mt-1">Up to 50% battery in just 25 minutes.</p>
              </div>
              <div className="border border-slate-800 bg-slate-800/50 p-4 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Surge Protection</h4>
                <p className="text-xs text-slate-400 mt-1">Built-in thermal safety chips.</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
              alt="Fast Chargers and Power Accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60">
                  Best Seller Kit
                </span>
                <h3 className="text-xl font-bold text-white mt-2">65W GaN Charger &amp; Cable Pack</h3>
                <p className="text-xs text-slate-300 mt-0.5">Special bundle price available now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCESSORIES QUALITY PROMISES */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Quality Assurance</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineered For <span className="text-blue-600 italic">Reliability</span>
          </h2>
          <p className="text-slate-600 text-sm">Every accessory we stock undergoes rigorous durability stress assessments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Immersive Acoustic Fidelity</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Our audio gear delivers crystal clear highs and deep bass profiles designed for marathon listening sessions.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Smart Temperature Control</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              GaN charging technology keeps adapters cool to the touch even when delivering maximum power output.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Secure Drop Protection</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Covers and glass protectors are drop-tested to absorb shock and protect your expensive devices from impacts.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="w-full bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-8 lg:px-16 space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Support &amp; Answers</p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Accessory FAQs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'Are these accessories compatible with all phone brands?',
              a: 'Yes, our chargers, cables, and audio devices are universally compatible with Apple, Samsung, Google, Xiaomi, and other modern USB-C/Lightning devices.',
            },
            {
              q: 'Do chargers and power banks come with a replacement warranty?',
              a: 'All charging adapters and power banks include a 6-month to 1-year replacement warranty against manufacturing faults.',
            },
            {
              q: 'Are the clear cases scratch-resistant and yellowing-proof?',
              a: 'Our MagSafe protective clear cases use high-grade TPU materials treated with anti-yellowing compounds for long-lasting clarity.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
}