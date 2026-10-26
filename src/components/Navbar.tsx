import React, { useState } from 'react';
import { GraduationCap, ShieldCheck, PhoneCall, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
  onOpenExport: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, onOpenExport, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Announcement Kicker Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-medium">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="font-semibold text-amber-300">ভর্তি উৎসব ২০২৬:</span>
            <span className="truncate">বুধবার, ২৮ অক্টোবর '২৬, সকাল ৯:৩০ মি. — নতুন শিক্ষাবর্ষের বিশেষ আয়োজন!</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs shrink-0">
            <span className="text-emerald-200">হটলাইন: 01336-559955</span>
            <span aria-hidden="true" className="text-emerald-700">|</span>
            <button
              onClick={onOpenExport}
              className="text-amber-300 hover:text-white transition-colors cursor-pointer"
              title="এক ক্লিকে সিঙ্গেল-ফাইল HTML কোড ডাউনলোড"
            >
              সিঙ্গেল HTML কোড
            </button>
            <span aria-hidden="true" className="text-emerald-700">|</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>এডমিন লগইন</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo('hero');
            }}
            className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 to-emerald-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-emerald-950 font-sans">
                খুলনা লিজেন্ড স্কুল
              </span>
              <span className="text-[11px] text-stone-500 font-medium tracking-wider -mt-1 uppercase">
                Khulna Legend School
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <button
              onClick={() => onScrollTo('festival')}
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              ভর্তি উৎসব ২০২৬
            </button>
            <button
              onClick={() => onScrollTo('features')}
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              আমাদের বৈশিষ্ট্যসমূহ
            </button>
            <button
              onClick={() => onScrollTo('admissions')}
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              ২০২৭ শিক্ষাবর্ষে ভর্তি
            </button>
            <button
              onClick={() => onScrollTo('contact')}
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              যোগাযোগ ও হটলাইন
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onScrollTo('apply-form')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 active:scale-98 transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              অনলাইন ভর্তি আবেদন
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3">
          <button
            onClick={() => {
              onScrollTo('festival');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 px-3 text-stone-800 hover:bg-emerald-50 rounded-md font-medium text-sm"
          >
            ভর্তি উৎসব ২০২৬
          </button>
          <button
            onClick={() => {
              onScrollTo('features');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 px-3 text-stone-800 hover:bg-emerald-50 rounded-md font-medium text-sm"
          >
            আমাদের বৈশিষ্ট্যসমূহ
          </button>
          <button
            onClick={() => {
              onScrollTo('admissions');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 px-3 text-stone-800 hover:bg-emerald-50 rounded-md font-medium text-sm"
          >
            ২০২৭ শিক্ষাবর্ষে ভর্তি
          </button>
          <button
            onClick={() => {
              onScrollTo('contact');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 px-3 text-stone-800 hover:bg-emerald-50 rounded-md font-medium text-sm"
          >
            যোগাযোগ ও হেল্পলাইন
          </button>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-emerald-800 bg-emerald-50 rounded-md"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>এডমিন ড্যাশবোর্ড (admin123)</span>
            </button>
            <button
              onClick={() => {
                onOpenExport();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-center text-stone-500 py-1"
            >
              সিঙ্গেল ফাইল HTML ডাউনলোড ও গাইড
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
