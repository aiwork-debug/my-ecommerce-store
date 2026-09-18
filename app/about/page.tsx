import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import {
  ShieldCheck,
  Target,
  Users,
  Truck,
  Award,
  Heart,
  ArrowUpRight,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 w-full overflow-x-hidden font-sans">

      {/* 1. HERO PAGE HEADER */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-8 lg:px-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              About <span className="text-blue-600 italic">MobixStore</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              We started MobixStore because buying a phone shouldn't feel like a gamble. Every device we sell is sealed, verified, and backed by people who actually use this stuff.
            </p>
          </div>

          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop"
              alt="MobixStore team inspecting smartphones"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 border-b border-slate-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-slate-100 lg:divide-y-0 lg:divide-x">
          {[
            { value: '2019', label: 'Founded in Rawalpindi' },
            { value: '12,400+', label: 'Units shipped' },
            { value: '4.8/5', label: 'Average rating' },
            { value: '24 mo', label: 'Warranty support' },
          ].map((stat, idx) => (
            <div key={idx} className="py-5 lg:py-2 lg:px-6 first:lg:pl-0">
              <span className="block text-2xl font-black text-slate-900">{stat.value}</span>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-3">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">How we started</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Built by people tired of guessing games
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              MobixStore began as a small counter in a Rawalpindi tech market, selling sealed phones to friends who kept getting burned by grey-market imports and fake IMEI numbers. Word spread fast, and the counter grew into a full storefront and an online catalog.
            </p>
            <p>
              Today we ship original, factory-sealed smartphones and accessories across Pakistan, but the promise hasn't changed: every unit is verified before it leaves our hands, every warranty claim is handled directly, and every question gets a straight answer.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE STAND FOR */}
      <section className="w-full bg-slate-50 border-y border-slate-200 px-4 sm:px-8 lg:px-16 py-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Our Promise</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What We Stand <span className="text-blue-600 italic">For</span>
          </h2>
          <p className="text-slate-600 text-sm">The same four principles guide every order, big or small.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Verified Authenticity</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Every IMEI is checked before dispatch — no grey imports, no reboxed returns.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Honest Pricing</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              What you see at checkout is what you pay — no hidden fees, no bait pricing.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Fast, Careful Shipping</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Dispatched within 24 hours, packed to survive the trip across the country.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Support That Answers</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Real people handle warranty claims and questions — no bots, no runaround.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TEAM SPOTLIGHT BANNER */}
      <section className="w-full bg-slate-900 text-white py-20 px-4 sm:px-8 lg:px-16 my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
              The Team
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              A small team that still <span className="text-blue-500 italic">checks every box</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              We're still a small, hands-on team — the same people who verify your IMEI are the ones who answer your warranty calls. That's on purpose.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-800 bg-slate-800/50 p-4 rounded-xl">
                <Users className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Local, Hands-On</h4>
                <p className="text-xs text-slate-400 mt-1">Based in Rawalpindi, serving all of Pakistan.</p>
              </div>
              <div className="border border-slate-800 bg-slate-800/50 p-4 rounded-xl">
                <Award className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Certified Original</h4>
                <p className="text-xs text-slate-400 mt-1">Sourced only from authorized distributors.</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="MobixStore team at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60">
                  Since 2019
                </span>
                <h3 className="text-xl font-bold text-white mt-2">Rawalpindi &amp; Islamabad</h3>
                <p className="text-xs text-slate-300 mt-0.5">Shop #12, Main Tech Commercial Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ready to find your next phone?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Browse our full catalog of sealed, verified smartphones and accessories.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-1">
            <Link
              href="/phones"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition shadow-sm shadow-blue-500/20"
            >
              Shop phones
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 border border-slate-200 hover:border-blue-500 text-slate-700 font-bold text-sm px-7 py-3.5 rounded-xl transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}