import React from 'react';
import { GraduationCap, ShieldCheck, Heart, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/initialData';

interface FooterProps {
  onOpenAdmin: () => void;
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onScrollTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Wordmark & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-7 h-7 text-amber-300" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans block">
                  খুলনা লিজেন্ড স্কুল
                </span>
                <span className="text-xs text-stone-400 uppercase tracking-widest block -mt-0.5">
                  Khulna Legend School
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              সন্তানের ভবিষ্যৎ যেখানে নিরাপদ, সেখানে সম্ভাবনার দুয়ার খোলা! মানসম্মত আধুনিক কারিকুলাম ও দ্বীনি নৈতিক মূল্যবোধের সমন্বয়ে খুলনা বিভাগের একটি নির্ভরযোগ্য আদর্শ বিদ্যাপীঠ।
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address.fullBn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>প্রধান হেল্পলাইন: 01336-559955</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              দ্রুত লিঙ্কসমূহ
            </span>
            <ul className="text-xs space-y-2.5">
              <li>
                <button
                  onClick={() => onScrollTo('hero')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  মূল পাতা (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('festival')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  ভর্তি উৎসব ২০২৬ (Festival)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('features')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  আমাদের বৈশিষ্ট্যসমূহ (Features)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('gallery')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  ফটো গ্যালারি (Photo Gallery)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('admissions')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  ২০২৭ শিক্ষাবর্ষে ভর্তি (Admissions)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  যোগাযোগ ও হটলাইন (Helpline)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Branches */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              শাখা ও বিশেষ বিভাগসমূহ
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/80">
                <span className="font-bold text-emerald-400 block">জেনারেল স্কুল বিভাগ</span>
                <span className="text-stone-400">প্লে, নার্সারি, কেজি থেকে ৮ম শ্রেণি • 01336-559955</span>
              </div>
              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/80">
                <span className="font-bold text-amber-300 block">হিফজুল কুরআন বিভাগ</span>
                <span className="text-stone-400">তাজবিদসহ নাজেরা ও হিফজ সমাপন • 01903-880255</span>
              </div>
              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/80">
                <span className="font-bold text-blue-400 block">লিজেন্ড কালচারাল একাডেমি</span>
                <span className="text-stone-400">বক্তৃতা, সুন্দর হাতের লেখা ও ক্যালিগ্রাফি • 01402-173419</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean, Prestigious Institutional Bottom Bar (Free of debug code/passwords) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © ২০২৬-২০২৭ খুলনা লিজেন্ড স্কুল (Khulna Legend School). সর্বস্বত্ব সংরক্ষিত।
          </div>

          <div className="flex items-center gap-5">
            <span className="hover:text-stone-200 transition-colors">
              গোপনীয়তা নীতি
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="hover:text-stone-200 transition-colors">
              আচরণবিধি
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer"
              title="বিদ্যালয় প্রশাসনিক পোর্টাল"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>প্রশাসনিক প্রবেশদ্বার</span>
            </button>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>উপরে যান</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
