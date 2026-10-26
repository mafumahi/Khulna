import React from 'react';
import { GraduationCap, ShieldCheck, PhoneCall, Clock, MapPin, Sparkles, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/initialData';

interface NavbarProps {
  onOpenAdmin: () => void;
  onOpenExport?: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, onScrollTo }) => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-stone-200">
      
      {/* 1. Top Institutional Info & Hotlines Strip */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-amber-300 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ভর্তি উৎসব ২০২৬:</span>
            </span>
            <span className="text-stone-200 truncate">
              বুধবার, ২৮ অক্টোবর '২৬, সকাল ৯:৩০ মি. (ক্যাম্পাস প্রাঙ্গণ)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>হটলাইন: </span>
              <a href="tel:01336559955" className="font-bold text-white hover:underline">
                01336-559955
              </a>
            </div>
            <span className="text-emerald-800 hidden sm:inline">|</span>
            <div className="hidden md:flex items-center gap-1 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>সকাল ৮:০০ - বিকাল ৪:০০</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Brand Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & School Titles */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo('hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-900 via-emerald-800 to-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
              <GraduationCap className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-950 font-sans leading-none">
                খুলনা লিজেন্ড স্কুল
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-amber-800 tracking-wider uppercase font-sans">
                  Khulna Legend School
                </span>
                <span className="text-stone-300 text-xs">·</span>
                <span className="text-xs text-stone-500 hidden sm:inline">
                  খালিশপুর, খুলনা
                </span>
              </div>
            </div>
          </a>

          {/* Quick Apply CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onScrollTo('apply-form')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-98 transition-all rounded-xl shadow-md cursor-pointer whitespace-nowrap"
            >
              <Send className="w-4 h-4 text-amber-300" />
              <span>ভর্তি আবেদন করুন</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Prominent Header Navigation Bar (মেনু লিস্ট সরাসরি হেডারে স্থাপিত - সাইড ড্রয়ারের পরিবর্তে) */}
      <nav className="bg-emerald-900 text-white border-t border-emerald-800/80 shadow-inner">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-between overflow-x-auto scrollbar-none py-1 gap-1 sm:gap-2">
            
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => onScrollTo('hero')}
                className="px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-emerald-800 hover:text-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                মূল পাতা
              </button>
              <button
                onClick={() => onScrollTo('festival')}
                className="px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-emerald-800 text-amber-300 hover:text-white rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                ভর্তি উৎসব ২০২৬
              </button>
              <button
                onClick={() => onScrollTo('features')}
                className="px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-emerald-800 hover:text-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                আমাদের বৈশিষ্ট্যসমূহ
              </button>
              <button
                onClick={() => onScrollTo('gallery')}
                className="px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-emerald-800 hover:text-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                ফটো গ্যালারি
              </button>
              <button
                onClick={() => onScrollTo('admissions')}
                className="px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-emerald-800 hover:text-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                ২০২৭ শিক্ষাবর্ষে ভর্তি
              </button>
              <button
                onClick={() => onScrollTo('contact')}
                className="px-3 py-2 text-xs sm:text-sm font-semibold hover:bg-emerald-800 hover:text-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                যোগাযোগ ও হটলাইন
              </button>
            </div>

            {/* Admin entry in header */}
            <div className="shrink-0 pl-2 border-l border-emerald-800">
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:text-white hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                title="প্রশাসনিক এডমিন পোর্টাল"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>এডমিন</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

    </header>
  );
};
