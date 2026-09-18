'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import { ShieldCheck, Truck, Cpu, Award, Zap, ArrowUpRight, Star } from 'lucide-react';

export default function PhonesPage() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const phones = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'apple',
      storage: '256GB',
      price: '$1,199',
      oldPrice: '$1,299',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
      tag: 'Flagship',
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'samsung',
      storage: '512GB',
      price: '$1,299',
      oldPrice: '$1,399',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop',
      tag: 'AI Powered',
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      brand: 'google',
      storage: '128GB',
      price: '$899',
      oldPrice: '$999',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
      tag: 'Best Camera',
    },
    {
      id: 4,
      name: 'OnePlus 12 5G',
      brand: 'oneplus',
      storage: '256GB',
      price: '$799',
      oldPrice: '$849',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
      tag: 'Super Fast',
    },
    {
      id: 5,
      name: 'Xiaomi 14 Ultra',
      brand: 'xiaomi',
      storage: '512GB',
      price: '$999',
      oldPrice: '$1,099',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
      tag: 'Leica Optics',
    },
    {
      id: 6,
      name: 'iPhone 15 Standard',
      brand: 'apple',
      storage: '128GB',
      price: '$799',
      oldPrice: '$829',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=600&auto=format&fit=crop',
      tag: 'Popular',
    },
    {
      id: 7,
      name: 'Samsung Galaxy Z Flip 5',
      brand: 'samsung',
      storage: '256GB',
      price: '$999',
      oldPrice: '$1,099',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600&auto=format&fit=crop',
      tag: 'Foldable',
    },
    {
      id: 8,
      name: 'Google Pixel 7a',
      brand: 'google',
      storage: '128GB',
      price: '$499',
      oldPrice: '$549',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=600&auto=format&fit=crop',
      tag: 'Budget Pick',
    },
  ];

  const filteredPhones =
    selectedBrand === 'all'
      ? phones
      : phones.filter((p) => p.brand === selectedBrand);

  return (
    <div className="bg-white min-h-screen text-slate-900 w-full overflow-x-hidden font-sans">
      
      {/* 1. HERO PAGE HEADER */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-8 lg:px-16">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Full Smartphone Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              All Mobile <span className="text-blue-600 italic">Phones</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Browse original sealed smartphones with official brand warranty, verified IMEI numbers, and factory unlock options.
            </p>
          </div>

          {/* Brand Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Brands', value: 'all' },
              { label: 'Apple', value: 'apple' },
              { label: 'Samsung', value: 'samsung' },
              { label: 'Google', value: 'google' },
              { label: 'OnePlus', value: 'oneplus' },
              { label: 'Xiaomi', value: 'xiaomi' },
            ].map((brand) => (
              <button
                key={brand.value}
                onClick={() => setSelectedBrand(brand.value)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedBrand === brand.value
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-500'
                }`}
              >
                {brand.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PRODUCT GRID SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-10">
        <div className="flex justify-between items-end border-b border-slate-100 pb-4">
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Available Inventory</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Showing {filteredPhones.length} Devices
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-400">Sorted by popularity</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500 p-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="h-52 bg-slate-50 rounded-xl overflow-hidden relative mb-4 border border-slate-100">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm uppercase tracking-wider">
                    {phone.tag}
                  </span>
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-700 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-slate-200 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {phone.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">
                  <span>{phone.brand}</span>
                  <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-bold">{phone.storage}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base line-clamp-1 group-hover:text-blue-600 transition">
                  {phone.name}
                </h3>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-lg font-black text-slate-900">{phone.price}</span>
                  <span className="text-xs text-slate-400 line-through ml-1.5 font-semibold">{phone.oldPrice}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED FLAGSHIP SPOTLIGHT BANNER */}
      <section className="w-full bg-slate-900 text-white py-20 px-4 sm:px-8 lg:px-16 my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
              Editor's Choice
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Experience Ultra-Grade Performance with <span className="text-blue-500 italic">Titanium Builds</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              Every flagship device in our store is thoroughly checked for battery health integrity, processor stress resistance, and zero-scratch factory conditions.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-800 bg-slate-800/50 p-4 rounded-xl">
                <Cpu className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Next-Gen Chips</h4>
                <p className="text-xs text-slate-400 mt-1">A17 Pro &amp; Snapdragon 8 Gen 3 ready.</p>
              </div>
              <div className="border border-slate-800 bg-slate-800/50 p-4 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="font-bold text-sm text-white">100% Genuine</h4>
                <p className="text-xs text-slate-400 mt-1">PTA approved options available.</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop"
              alt="Flagship Phone Spotlight"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800/60">
                  ★ 4.9 Rating Flagship
                </span>
                <h3 className="text-xl font-bold text-white mt-2">Apple iPhone 15 Pro Max</h3>
                <p className="text-xs text-slate-300 mt-0.5">Starting at $1,199 with full warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY BUY FROM MOBIXSTORE */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Our Store Promise</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Buy Phones From <span className="text-blue-600 italic">MobixStore?</span>
          </h2>
          <p className="text-slate-600 text-sm">We provide absolute transparency and customer security with every smartphone purchase.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Official Brand Warranty</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              All phones come with standard manufacturer warranties plus our direct store support for seamless replacement claims.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Secure &amp; Fast Shipping</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Dispatched within 24 hours in tamper-proof bubble-wrapped packaging across Rawalpindi, Islamabad, and nationwide.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Verified IMEI Seal</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Every serial number and IMEI is cross-verified prior to dispatch so you receive a factory-unlocked, genuine device.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ / BUYING GUIDE SECTION */}
      <section className="w-full bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-8 lg:px-16 space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Got Questions?</p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'Are all smartphones sold on MobixStore brand new and sealed?',
              a: 'Yes, 100% of our primary catalog consists of factory-sealed, unused smartphones shipped in original boxes with all standard accessories.',
            },
            {
              q: 'Do these phones come with a warranty?',
              a: 'Every smartphone includes a standard brand warranty along with our store verification support to handle technical issues easily.',
            },
            {
              q: 'Can I check the phone before making full payment?',
              a: 'We offer secure inspection policies on delivery within local pickup regions and verified courier channels.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
    
  );
}