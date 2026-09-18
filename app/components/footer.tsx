import Link from 'next/link';
import { Smartphone, MapPin, PhoneCall, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-[#5B6472] pt-16 pb-8 border-t border-[#E7E9EE] mt-0 w-full overflow-x-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="space-y-3">
          <h3 className="text-[#0F1216] text-lg font-semibold flex items-center gap-2 tracking-tight">
            <Smartphone className="w-5 h-5 text-[#3E7BFA]" />
            MobixStore
          </h3>
          <p className="text-xs leading-relaxed text-[#5B6472] max-w-[220px]">
            Your authentic store for original smartphones, fast chargers, covers, and mobile accessories.
          </p>
        </div>

        <div>
          <h4 className="text-[#0F1216] font-semibold text-xs uppercase tracking-wide mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><Link href="/" className="hover:text-[#3E7BFA] transition-colors">Home</Link></li>
            <li><Link href="/phones" className="hover:text-[#3E7BFA] transition-colors">Smartphones</Link></li>
            <li><Link href="/accessories" className="hover:text-[#3E7BFA] transition-colors">Accessories</Link></li>
            <li><Link href="/about" className="hover:text-[#3E7BFA] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#3E7BFA] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#0F1216] font-semibold text-xs uppercase tracking-wide mb-4">Customer Service</h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li className="hover:text-[#3E7BFA] cursor-pointer transition-colors">Order Tracking</li>
            <li className="hover:text-[#3E7BFA] cursor-pointer transition-colors">Warranty Policy</li>
            <li className="hover:text-[#3E7BFA] cursor-pointer transition-colors">Shipping Rates</li>
            <li className="hover:text-[#3E7BFA] cursor-pointer transition-colors">Returns &amp; Exchange</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#0F1216] font-semibold text-xs uppercase tracking-wide mb-4">Store Contact</h4>
          <ul className="space-y-2.5 text-xs text-[#5B6472] font-medium">
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#3E7BFA]" /> Main Tech Market, Shop #12</li>
            <li className="flex items-center gap-2"><PhoneCall className="w-3.5 h-3.5 text-[#3E7BFA]" /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#3E7BFA]" /> support@mobixstore.com</li>
          </ul>
        </div>

      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 mt-12 pt-6 border-t border-[#E7E9EE] text-center text-xs text-[#9AA1AC] font-medium">
        © 2026 MobixStore. All rights reserved.
      </div>
    </footer>
  );
}