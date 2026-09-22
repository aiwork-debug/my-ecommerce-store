'use client';

import Link from 'next/link';
import { PhoneCall, Mail, MapPin, ShieldCheck, Truck, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full pt-16 pb-12 px-4 sm:px-8 lg:px-16 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
        
        {/* Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="text-2xl font-black text-white tracking-tight">
            Mobix<span className="text-[#3E7BFA]">Store</span> UK
          </Link>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            UK’s trusted destination for genuine, sealed smartphones and premium tech accessories. Fully VAT registered with fast nationwide courier delivery across Great Britain.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-gray-400">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#3E7BFA]" /> Next-day UK Delivery</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#3E7BFA]" /> 24 Mo UK Warranty</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm font-medium text-gray-400">
            <li><a href="#phones-section" className="hover:text-white transition">Smartphones</a></li>
            <li><a href="#accessories-section" className="hover:text-white transition">Tech Gear</a></li>
            <li><a href="#about-section" className="hover:text-white transition">About Mobix UK</a></li>
            <li><a href="#contact-section" className="hover:text-white transition">Support &amp; Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Popular Gear</h4>
          <ul className="space-y-2 text-sm font-medium text-gray-400">
            <li><span className="hover:text-white cursor-pointer transition">iPhone &amp; Apple Accessories</span></li>
            <li><span className="hover:text-white cursor-pointer transition">Samsung Galaxy Series</span></li>
            <li><span className="hover:text-white cursor-pointer transition">MagSafe &amp; Wireless Chargers</span></li>
            <li><span className="hover:text-white cursor-pointer transition">ANC Audio &amp; Wearables</span></li>
          </ul>
        </div>

        {/* UK Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">London HQ</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#3E7BFA] shrink-0 mt-0.5" />
              <span>45 Oxford Street, Fitzrovia, London W1D 2DZ, United Kingdom</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#3E7BFA] shrink-0" />
              <span>+44 20 7946 0912</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#3E7BFA] shrink-0" />
              <span>support@mobixstore.co.uk</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright & Bottom Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} MobixStore UK Ltd. All rights reserved. Registered in England &amp; Wales.</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          <span className="hover:text-gray-400 cursor-pointer">Shipping &amp; Returns</span>
        </div>
      </div>
    </footer>
  );
}