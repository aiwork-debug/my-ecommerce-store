'use client';

import Link from 'next/link';

export default function SignUpPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account created successfully!');
  };

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 py-12">
      <div className="bg-white w-full max-w-md rounded-3xl border border-slate-200/80 shadow-xl p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-block p-3 bg-blue-50 rounded-2xl text-2xl mb-1">
            ✨
          </div>
          <h1 className="text-2xl font-black text-slate-900">Create Account</h1>
          <p className="text-slate-500 text-xs">Join MobixStore for exclusive mobile deals</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Full Name</label>
            <input
              type="text"
              required
              placeholder="Ali Raza"
              className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Password</label>
            <input
              type="password"
              required
              placeholder="At least 6 characters"
              className="w-full bg-slate-50 text-xs sm:text-sm text-slate-800 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:bg-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition mt-2"
          >
            Create Free Account
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 font-bold hover:underline">
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
}