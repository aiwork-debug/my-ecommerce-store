'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/footer';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Headphones,
  Star,
  ArrowUpRight,
  MapPin,
  PhoneCall,
  Mail,
  CheckCircle2,
  Building2,
  Award,
  Clock,
} from 'lucide-react';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Phone Data (Prices in GBP)
  const phones = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      price: '£1,199',
      oldPrice: '£1,299',
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
      tag: 'Flagship',
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: '£1,249',
      oldPrice: '£1,349',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop',
      tag: 'AI Powered',
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      price: '£899',
      oldPrice: '£999',
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
      tag: 'Best Camera',
    },
    {
      id: 4,
      name: 'OnePlus 12 5G',
      brand: 'OnePlus',
      price: '£749',
      oldPrice: '£849',
      rating: '4.6',
      image:
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
      tag: 'Fast Charge',
    },
  ];

  // Expanded Accessories Data (8 Products with Pictures)
  const accessories = [
    {
      id: 1,
      name: 'Active Noise Earbuds Pro',
      category: 'Audio',
      price: '£49.99',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      name: '65W GaN Fast Wall Charger',
      category: 'Charging',
      price: '£29.99',
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'MagSafe Armor Clear Case',
      category: 'Covers',
      price: '£18.99',
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Smartwatch Series Ultra',
      category: 'Wearables',
      price: '£199.99',
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 5,
      name: '20,000mAh Power Bank 30W PD',
      category: 'Power',
      price: '£39.99',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1609592424109-dd9892f1b177?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'MagSafe Wireless Charging Pad',
      category: 'Charging',
      price: '£24.99',
      rating: '4.6',
      image:
        'https://images.unsplash.com/photo-1622445268465-8438a059810a?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Magnetic Car Mount Holder',
      category: 'Mounts',
      price: '£15.99',
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'Braided USB-C to Lightning Cable',
      category: 'Cables',
      price: '£12.99',
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=600&auto=format&fit=crop',
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#3E7BFA] selection:text-white w-full overflow-x-hidden">
      {/* Top Banner */}
      <div className="w-full bg-gray-900 text-gray-200 text-center py-2.5 px-4 text-[11px] font-medium tracking-wide">
        🇬🇧 Free UK Next-Day Shipping on orders over £50 — UK VAT Registered with 24-Month Official Warranty
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-200 w-full px-4 sm:px-8 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-24 right-0 w-[32rem] h-[32rem] bg-[#3E7BFA] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12 lg:py-20">
          <div className="space-y-7 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-700 border border-gray-200 rounded-full px-3.5 py-1.5 bg-gray-50 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7BFA]" />
              MobixStore UK — London Dispatch Hub
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-gray-900">
              Premium mobile tech,
              <br />
              authentic gear &amp;
              <br />
              <span className="bg-gradient-to-r from-[#3E7BFA] to-blue-600 bg-clip-text text-transparent italic font-extrabold">
                honest UK pricing.
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed mx-auto md:mx-0 font-normal">
              Brand-new factory unlocked smartphones and certified accessories dispatched straight from our London fulfillment center across Great Britain.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <a
                href="#phones-section"
                className="bg-[#3E7BFA] hover:bg-[#2b65e0] text-white font-bold px-7 py-3.5 rounded-xl transition-colors duration-200 shadow-sm"
              >
                Shop smartphones
              </a>
              <a
                href="#accessories-section"
                className="border border-gray-300 hover:border-[#3E7BFA] text-gray-800 font-bold px-7 py-3.5 rounded-xl transition-colors duration-200 bg-white"
              >
                Shop accessories
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start pt-4 text-gray-500 text-xs font-semibold">
              <div>
                <span className="block text-gray-900 text-xl font-black">25,000+</span>
                UK customers
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <span className="block text-gray-900 text-xl font-black">4.9/5</span>
                Trustpilot rating
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <span className="block text-gray-900 text-xl font-black">DPD / Royal Mail</span>
                tracked shipping
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm rounded-[2rem] border border-gray-200 bg-gray-50 p-3 shadow-xl">
              <div className="relative h-80 w-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop"
                  alt="Featured smartphone on dark background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between px-3 py-4">
                <div>
                  <p className="text-sm font-extrabold text-gray-900 tracking-wide">UK Official Stock</p>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">Sealed box, full 24-month UK warranty</p>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                  <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" /> 4.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-10 border-b border-gray-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
          {[
            { icon: <Truck className="w-5 h-5" />, title: 'Next-Day UK Express', desc: 'Orders dispatched via DPD / Royal Mail' },
            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Official UK Warranty', desc: 'Full manufacturer cover included' },
            { icon: <CreditCard className="w-5 h-5" />, title: 'Secure Checkout', desc: 'Apple Pay, Klarna & Cards' },
            { icon: <Headphones className="w-5 h-5" />, title: 'UK Customer Support', desc: 'London-based technical help' },
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3.5 py-5 lg:py-2 lg:px-6 first:lg:pl-0">
              <span className="text-[#3E7BFA] mt-0.5">{feat.icon}</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm tracking-wide">{feat.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHONES SECTION */}
      <section id="phones-section" className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-9">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-black text-[#3E7BFA] mb-2 tracking-widest uppercase">Top UK smartphones</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Latest <span className="text-[#3E7BFA] underline decoration-blue-200 underline-offset-4">mobile releases</span>
            </h2>
          </div>
          <Link
            href="/phones"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors group"
          >
            View all models
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#3E7BFA] p-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="h-48 bg-gray-50 rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-lg border border-gray-200 shadow-sm uppercase tracking-wider">
                    {phone.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                    {phone.brand}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-700">
                    <Star className="w-3 h-3 fill-amber-600 text-amber-600" /> {phone.rating}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mt-1.5 line-clamp-1">{phone.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <div>
                  <span className="text-lg font-extrabold text-gray-900">{phone.price}</span>
                  <span className="text-xs text-gray-400 line-through ml-1.5 font-semibold">{phone.oldPrice}</span>
                </div>
                <button className="bg-[#3E7BFA] hover:bg-[#2b65e0] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCESSORIES SECTION (EXPANDED TO 8 ITEMS) */}
      <section id="accessories-section" className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-9 bg-gray-50/50 border-y border-gray-200">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-black text-amber-600 mb-2 tracking-widest uppercase">Essential mobile gear</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Featured UK <span className="text-amber-600">tech accessories</span>
            </h2>
          </div>
          <Link
            href="/accessories"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors group"
          >
            View all accessories
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {accessories.map((acc) => (
            <div
              key={acc.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-amber-500 p-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="h-44 bg-gray-50 rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src={acc.image}
                    alt={acc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <span className="absolute top-3 right-3 text-xs font-bold text-amber-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-gray-200 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-600 text-amber-600" /> {acc.rating}
                  </span>
                </div>
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                  {acc.category}
                </span>
                <h3 className="font-bold text-gray-900 text-base mt-1.5 line-clamp-1">{acc.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <span className="text-lg font-extrabold text-gray-900">{acc.price}</span>
                <button className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION (UK FOCUSED) */}
      <section id="about-section" className="w-full px-4 sm:px-8 lg:px-16 py-20 border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-black text-[#3E7BFA] uppercase tracking-widest">About MobixStore UK</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              London’s premier hub for authentic devices &amp; accessories.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Established in London, MobixStore UK was founded with a singular mission: to provide UK tech enthusiasts and everyday users with guaranteed authentic, factory-sealed smartphones and premium tech accessories without inflated retail markups.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Operating out of our central London logistics hub, we ensure every product undergoes thorough IMEI verification and quality assurance. Whether you are in England, Scotland, Wales, or Northern Ireland, our nationwide UK fulfillment network guarantees fast, tracked, and insured delivery to your doorstep.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-[#3E7BFA] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">London Logistics</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Central UK dispatch warehouse</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#3E7BFA] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">VAT Registered</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Official UK business compliance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-[28rem] rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop"
              alt="MobixStore UK headquarters and tech lineup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">UK Head Office</p>
              <p className="text-base font-extrabold text-gray-900 mt-0.5">45 Oxford Street, Fitzrovia, London W1D 2DZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION (UK ADDRESS) */}
      <section id="contact-section" className="w-full px-4 sm:px-8 lg:px-16 py-20 space-y-12 border-b border-gray-200">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-black text-[#3E7BFA] tracking-widest uppercase">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Questions? <span className="text-[#3E7BFA] font-extrabold">Contact our UK team</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-normal">
            Our London team is on hand Monday to Saturday to assist with orders, warranty claims or product advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="divide-y divide-gray-200 border-y border-gray-200 lg:border-y-0">
            <div className="flex items-center gap-4 py-5">
              <span className="p-3 bg-gray-50 border border-gray-200 text-[#3E7BFA] rounded-xl">
                <MapPin className="w-4.5 h-4.5" />
              </span>
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm tracking-wide">London Store &amp; Office</h4>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">45 Oxford Street, Fitzrovia, London W1D 2DZ</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-5">
              <span className="p-3 bg-gray-50 border border-gray-200 text-[#3E7BFA] rounded-xl">
                <PhoneCall className="w-4.5 h-4.5" />
              </span>
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm tracking-wide">UK Phone Support</h4>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">+44 20 7946 0912</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-5">
              <span className="p-3 bg-gray-50 border border-gray-200 text-[#3E7BFA] rounded-xl">
                <Mail className="w-4.5 h-4.5" />
              </span>
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm tracking-wide">Email Enquiries</h4>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">support@mobixstore.co.uk</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#3E7BFA] mx-auto" />
                <h3 className="text-2xl font-black text-gray-900">Thank you for reaching out</h3>
                <p className="text-sm text-gray-600 font-medium">Our London support team will get back to you within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="bg-white text-sm text-gray-900 placeholder:text-gray-400 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E7BFA] transition w-full shadow-sm"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address (e.g. name@domain.co.uk)"
                    className="bg-white text-sm text-gray-900 placeholder:text-gray-400 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E7BFA] transition w-full shadow-sm"
                  />
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="How can our UK team help you?"
                  className="bg-white text-sm text-gray-900 placeholder:text-gray-400 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E7BFA] transition w-full resize-none shadow-sm"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#3E7BFA] hover:bg-[#2b65e0] text-white font-bold text-sm px-8 py-4 rounded-xl transition-colors duration-200 w-full sm:w-auto shadow-sm"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}