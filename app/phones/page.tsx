'use client';

import { useState } from 'react';

export default function PhonesPage() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const phones = [
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'apple', storage: '256GB', price: '$1,199', oldPrice: '$1,299', rating: '4.9', emoji: '📱', tag: 'Flagship' },
    { id: 2, name: 'Galaxy S24 Ultra', brand: 'samsung', storage: '512GB', price: '$1,299', oldPrice: '$1,399', rating: '4.8', emoji: '📲', tag: 'AI Powered' },
    { id: 3, name: 'Google Pixel 8 Pro', brand: 'google', storage: '128GB', price: '$899', oldPrice: '$999', rating: '4.7', emoji: '📱', tag: 'Best Camera' },
    { id: 4, name: 'OnePlus 12 5G', brand: 'oneplus', storage: '256GB', price: '$799', oldPrice: '$849', rating: '4.6', emoji: '🔥', tag: 'Super Fast' },
    { id: 5, name: 'Xiaomi 14 Ultra', brand: 'xiaomi', storage: '512GB', price: '$999', oldPrice: '$1,099', rating: '4.7', emoji: '📸', tag: 'Leica Optics' },
    { id: 6, name: 'iPhone 15 Standard', brand: 'apple', storage: '128GB', price: '$799', oldPrice: '$829', rating: '4.8', emoji: '📱', tag: 'Popular' },
    { id: 7, name: 'Samsung Galaxy Z Flip 5', brand: 'samsung', storage: '256GB', price: '$999', oldPrice: '$1,099', rating: '4.5', emoji: '📲', tag: 'Foldable' },
    { id: 8, name: 'Google Pixel 7a', brand: 'google', storage: '128GB', price: '$499', oldPrice: '$549', rating: '4.6', emoji: '📱', tag: 'Budget Pick' },
  ];

  const filteredPhones = selectedBrand === 'all' 
    ? phones 
    : phones.filter((p) => p.brand === selectedBrand);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Full Smartphone Catalog
            </span>
            <h1 className="text-3xl font-black text-slate-900 mt-2">All Mobile Phones</h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Browse original sealed smartphones with official 1-year warranty.
            </p>
          </div>

          {/* Brand Filter */}
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
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedBrand === brand.value
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {brand.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-slate-50 rounded-2xl flex items-center justify-center text-7xl mb-4 relative group-hover:scale-105 transition duration-300">
                  {phone.emoji}
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-white text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm">
                    {phone.tag}
                  </span>
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-500 bg-white px-2 py-0.5 rounded-lg border border-slate-100">
                    ★ {phone.rating}
                  </span>
                </div>

                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{phone.brand} • {phone.storage}</span>
                <h3 className="font-bold text-slate-900 text-base mt-1 group-hover:text-blue-600 transition">{phone.name}</h3>
              </div>

              <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-100">
                <div>
                  <span className="text-lg font-black text-slate-900">{phone.price}</span>
                  <span className="text-xs text-slate-400 line-through ml-1.5">{phone.oldPrice}</span>
                </div>
                <button className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
                  Buy Phone
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}