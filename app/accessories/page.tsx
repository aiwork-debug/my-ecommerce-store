'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import {
  Star,
  Search,
  SlidersHorizontal,
  ShoppingBag,
  ArrowLeft,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
} from 'lucide-react';

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [addedId, setAddedId] = useState<number | null>(null);

  // Categories list
  const categories = ['All', 'Audio', 'Charging', 'Covers', 'Wearables', 'Power', 'Mounts', 'Cables'];

  // Expanded Accessories Data with high quality images
  const accessories = [
    {
      id: 1,
      name: 'Active Noise Earbuds Pro',
      category: 'Audio',
      price: '£49.99',
      oldPrice: '£69.99',
      rating: '4.8',
      reviews: 124,
      image:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop',
      badge: 'Bestseller',
      description: 'Active Noise Cancellation with 30-hour battery life and crisp bass.',
    },
    {
      id: 2,
      name: '65W GaN Fast Wall Charger',
      category: 'Charging',
      price: '£29.99',
      oldPrice: '£39.99',
      rating: '4.9',
      reviews: 89,
      image:
        'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop',
      badge: 'Fast Charge',
      description: 'Ultra-compact dual USB-C charger for iPhone, MacBooks & Android.',
    },
    {
      id: 3,
      name: 'MagSafe Armor Clear Case',
      category: 'Covers',
      price: '£18.99',
      oldPrice: '£24.99',
      rating: '4.7',
      reviews: 210,
      image:
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=600&auto=format&fit=crop',
      badge: 'Top Rated',
      description: 'Military-grade drop protection with built-in strong MagSafe magnets.',
    },
    {
      id: 4,
      name: 'Smartwatch Series Ultra',
      category: 'Wearables',
      price: '£199.99',
      oldPrice: '£249.99',
      rating: '4.9',
      reviews: 67,
      image:
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop',
      badge: 'New',
      description: 'Titanium case with AMOLED display, heart monitoring & GPS tracking.',
    },
    {
      id: 5,
      name: '20,000mAh Power Bank 30W PD',
      category: 'Power',
      price: '£39.99',
      oldPrice: '£49.99',
      rating: '4.8',
      reviews: 142,
      image:
        'https://images.unsplash.com/photo-1609592424109-dd9892f1b177?q=80&w=600&auto=format&fit=crop',
      badge: 'Travel Ready',
      description: 'High capacity portable battery with digital LED percentage display.',
    },
    {
      id: 6,
      name: 'MagSafe Wireless Charging Pad',
      category: 'Charging',
      price: '£24.99',
      oldPrice: '£32.99',
      rating: '4.6',
      reviews: 95,
      image:
        'https://images.unsplash.com/photo-1622445268465-8438a059810a?q=80&w=600&auto=format&fit=crop',
      badge: 'Slim',
      description: 'Aluminum Qi2 certified fast wireless pad for desk or nightstand.',
    },
    {
      id: 7,
      name: 'Magnetic Car Mount Holder',
      category: 'Mounts',
      price: '£15.99',
      oldPrice: '£21.99',
      rating: '4.7',
      reviews: 178,
      image:
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=600&auto=format&fit=crop',
      badge: '360 Rotatable',
      description: 'Air vent magnetic car holder with firm grip for all phone sizes.',
    },
    {
      id: 8,
      name: 'Braided USB-C to Lightning Cable',
      category: 'Cables',
      price: '£12.99',
      oldPrice: '£17.99',
      rating: '4.9',
      reviews: 310,
      image:
        'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=600&auto=format&fit=crop',
      badge: 'Durable',
      description: '2-meter reinforced nylon cable tested for over 20,000 bends.',
    },
    {
      id: 9,
      name: 'Over-Ear Wireless ANC Headphones',
      category: 'Audio',
      price: '£89.99',
      oldPrice: '£119.99',
      rating: '4.8',
      reviews: 54,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
      badge: 'Premium Sound',
      description: 'Plush earcups with Hi-Res audio drivers and 50-hour playback.',
    },
    {
      id: 10,
      name: '3-in-1 Foldable Charging Stand',
      category: 'Charging',
      price: '£34.99',
      oldPrice: '£44.99',
      rating: '4.7',
      reviews: 82,
      image:
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop',
      badge: '3-in-1',
      description: 'Charge your phone, smartwatch, and earbuds simultaneously on one stand.',
    },
  ];

  // Filter Logic
  const filteredProducts = accessories.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (id: number) => {
    setCartCount((prev) => prev + 1);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#3E7BFA] selection:text-white w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="w-full bg-gray-900 text-gray-200 text-center py-2.5 px-4 text-[11px] font-medium tracking-wide">
        🇬🇧 Free Next-Day UK Delivery on all accessories over £30 — 1 Year Warranty Included
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 sm:px-8 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">
              Mobix<span className="text-[#3E7BFA]">Accessories</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative border border-gray-200 bg-gray-50 rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium text-gray-700">
              <ShoppingBag className="w-4 h-4 text-[#3E7BFA]" />
              <span>Cart ({cartCount})</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-4 text-center sm:text-left">
          <span className="text-xs font-black text-[#3E7BFA] uppercase tracking-widest">UK Stock &amp; Next-Day Shipping</span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Mobile <span className="text-[#3E7BFA]">Accessories &amp; Gear</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl font-normal">
            Enhance your device with official cases, GaN fast chargers, active noise-cancelling audio, and MagSafe accessories tested for UK power standards.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#3E7BFA] text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search accessories..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3E7BFA] transition"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center py-4 text-xs font-semibold text-gray-500">
          <p>Showing {filteredProducts.length} items</p>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-[#3E7BFA] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#3E7BFA] p-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Image Container */}
                <div className="h-52 bg-gray-50 rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-lg border border-gray-200 shadow-sm uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-700 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-200 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-600 text-amber-600" /> {item.rating}
                  </span>
                </div>

                {/* Details */}
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="font-bold text-gray-900 text-base mt-1 line-clamp-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <div>
                  <span className="text-lg font-extrabold text-gray-900">{item.price}</span>
                  <span className="text-xs text-gray-400 line-through ml-1.5 font-semibold">
                    {item.oldPrice}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className={`text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    addedId === item.id
                      ? 'bg-green-600 text-white'
                      : 'bg-[#3E7BFA] hover:bg-[#2b65e0] text-white shadow-sm'
                  }`}
                >
                  {addedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Added
                    </>
                  ) : (
                    'Add to cart'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <SlidersHorizontal className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="text-lg font-bold text-gray-800">No accessories found</h3>
            <p className="text-xs text-gray-500">Try changing your search term or category selection.</p>
          </div>
        )}
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-8 lg:px-16 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Truck className="w-8 h-8 text-[#3E7BFA]" />
            <h4 className="font-bold text-sm text-gray-900">Fast UK Delivery</h4>
            <p className="text-xs text-gray-500">Tracked DPD &amp; Royal Mail delivery across the UK.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#3E7BFA]" />
            <h4 className="font-bold text-sm text-gray-900">12 Months Warranty</h4>
            <p className="text-xs text-gray-500">All tech accessories come with full UK replacement guarantee.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <RotateCcw className="w-8 h-8 text-[#3E7BFA]" />
            <h4 className="font-bold text-sm text-gray-900">30-Day Easy Returns</h4>
            <p className="text-xs text-gray-500">Hassle-free return policy if you change your mind.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}