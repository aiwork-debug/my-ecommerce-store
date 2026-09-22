'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-black text-slate-900">Search Products</h1>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search phones, chargers, earbuds..."
            className="w-full bg-white border border-slate-200 pl-12 pr-4 py-3.5 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
        </div>
      </div>
    </div>
  );
}