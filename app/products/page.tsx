'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Star } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const allProducts = [
    { id: 1, name: 'iPhone 15 Pro Max', price: '$1,199', category: 'Phones', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'Galaxy S24 Ultra', price: '$1,299', category: 'Phones', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Noise Earbuds Pro', price: '$49.99', category: 'Accessories', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop' },
  ];

  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900">All Products</h1>
          <p className="text-xs text-slate-500 mt-1">Showing search results for &quot;{searchQuery || 'All'}&quot;</p>
        </div>
        <input
          type="text"
          placeholder="Filter catalog..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4 hover:shadow-lg transition-shadow">
            <div className="h-48 relative rounded-xl overflow-hidden bg-slate-50">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{product.category}</span>
                <h3 className="font-bold text-slate-900">{product.name}</h3>
              </div>
              <span className="font-black text-blue-600">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}