'use client';

import { useState } from 'react';

export default function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const accessories = [
    { id: 1, name: 'Active Noise Earbuds Pro', category: 'audio', price: '$49.99', rating: '4.8', emoji: '🎧', desc: 'Spatial Audio with 30h battery life' },
    { id: 2, name: '65W GaN Fast Charger', category: 'charging', price: '$29.99', rating: '4.9', emoji: '🔌', desc: 'Dual USB-C fast charging adapter' },
    { id: 3, name: 'MagSafe Protective Clear Case', category: 'covers', price: '$19.99', rating: '4.7', emoji: '🛡️', desc: 'Military grade drop protection' },
    { id: 4, name: '20,000mAh Power Bank 22.5W', category: 'power', price: '$39.99', rating: '4.8', emoji: '🔋', desc: 'LED battery display & fast charge' },
    { id: 5, name: 'Wireless Charging Pad 15W', category: 'charging', price: '$24.99', rating: '4.5', emoji: '⚡', desc: 'Qi-certified magnetic charger' },
    { id: 6, name: '9H Tempered Glass Screen Protector', category: 'covers', price: '$12.99', rating: '4.6', emoji: '📱', desc: 'Scratch-proof HD glass pack of 2' },
    { id: 7, name: 'ANC Wireless Over-Ear Headphones', category: 'audio', price: '$89.99', rating: '4.9', emoji: '🎧', desc: 'Deep bass & comfortable earcups' },
    { id: 8, name: 'Braided Type-C Fast Cable (2m)', category: 'charging', price: '$14.99', rating: '4.7', emoji: '🎗️', desc: '100W ultra durable cable' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? accessories 
    : accessories.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Official Gear Hub
            </span>
            <h1 className="text-3xl font-black text-slate-900 mt-2">Mobile Accessories</h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Top quality chargers, cases, audio gear, and protection solutions.
            </p>
          </div>

          {/* Category Filter */}
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
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.value
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-40 bg-slate-50 rounded-2xl flex items-center justify-center text-6xl mb-4 relative group-hover:scale-105 transition duration-300">
                  {item.emoji}
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-500 bg-white px-2 py-0.5 rounded-lg border border-slate-100">
                    ★ {item.rating}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {item.category}
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-2">{item.name}</h3>
                <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-100">
                <span className="text-lg font-black text-slate-900">{item.price}</span>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}