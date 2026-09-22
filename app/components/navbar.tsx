'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Active link check Function
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/20">
            M
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
            Mobix<span className="text-blue-600">Store</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 text-sm font-semibold">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
              isActive('/')
                ? 'text-blue-600 bg-blue-50 font-bold'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Home
          </Link>
          <Link
            href="/phones"
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
              isActive('/phones')
                ? 'text-blue-600 bg-blue-50 font-bold'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Phones
          </Link>
          <Link
            href="/accessories"
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
              isActive('/accessories')
                ? 'text-blue-600 bg-blue-50 font-bold'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Accessories
          </Link>
          <Link
            href="/about"
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
              isActive('/about')
                ? 'text-blue-600 bg-blue-50 font-bold'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
              isActive('/contact')
                ? 'text-blue-600 bg-blue-50 font-bold'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className={`p-2 rounded-xl transition-all duration-200 ${
              isActive('/search')
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
            }`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </Link>

          <Link
            href="/login"
            className={`hidden sm:flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 ${
              isActive('/login')
                ? 'text-white bg-blue-600 shadow-sm'
                : 'text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Account</span>
          </Link>

          <Link
            href="/products"
            className={`relative p-2 rounded-xl transition-all duration-200 ${
              isActive('/products')
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white animate-pulse" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 font-semibold text-sm text-slate-700 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg transition-colors ${
              isActive('/') ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-slate-50'
            }`}
          >
            Home
          </Link>
          <Link
            href="/phones"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg transition-colors ${
              isActive('/phones') ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-slate-50'
            }`}
          >
            Phones
          </Link>
          <Link
            href="/accessories"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg transition-colors ${
              isActive('/accessories') ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-slate-50'
            }`}
          >
            Accessories
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg transition-colors ${
              isActive('/about') ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-slate-50'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg transition-colors ${
              isActive('/contact') ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-slate-50'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2.5 px-3 text-center rounded-xl font-bold transition-colors ${
              isActive('/login')
                ? 'bg-blue-700 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Login / Register
          </Link>
        </div>
      )}
    </header>
  );
}