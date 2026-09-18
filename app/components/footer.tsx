
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-12 pb-8 border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-3">
          <h3 className="text-slate-900 text-lg font-black flex items-center gap-2">
            <span>📱</span> MOBIX<span className="text-blue-600">STORE</span>
          </h3>
          <p className="text-xs leading-relaxed text-slate-500">
            Your authentic store for original smartphones, fast chargers, covers, and mobile accessories.
          </p>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/phones" className="hover:text-blue-600 transition">Smartphones</Link></li>
            <li><Link href="/accessories" className="hover:text-blue-600 transition">Accessories</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">Customer Service</h4>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-blue-600 cursor-pointer">Order Tracking</li>
            <li className="hover:text-blue-600 cursor-pointer">Warranty Policy</li>
            <li className="hover:text-blue-600 cursor-pointer">Shipping Rates</li>
            <li className="hover:text-blue-600 cursor-pointer">Returns &amp; Exchange</li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">Store Contact</h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li>📍 Main Tech Market, Shop #12</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ support@mobixstore.com</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
        © 2026 MOBIXSTORE. All rights reserved.
      </div>
    </footer>
  );
}