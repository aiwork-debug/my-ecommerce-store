'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Phones', href: '/phones' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' },

  ];

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm w-full overflow-x-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-16 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-black tracking-tight flex items-center gap-2">
          <span className="p-2 bg-blue-50 rounded-xl text-blue-600 text-lg">📱</span>
          <span className="text-slate-900 font-extrabold tracking-tight">MOBIX<span className="text-blue-600">STORE</span></span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={(e) => e.preventDefault()} className="flex-1 max-w-xs md:max-w-md hidden sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search iPhone, Samsung, Chargers..."
              className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 pl-10 pr-4 py-2 rounded-2xl border border-slate-200/80 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition duration-200"
            />
            <span className="absolute left-3.5 top-2.5 text-slate-400 text-xs">🔍</span>
          </div>
        </form>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 border-l border-slate-200 pl-4 ml-1">
          <Link
            href="/login"
            className="text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-xl hover:bg-slate-50 transition"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl shadow-md shadow-blue-500/20 transition"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}