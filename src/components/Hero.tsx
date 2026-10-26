import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, Calendar, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SCHOOL_INFO } from '../data/initialData';

interface HeroProps {
  onApplyClick: () => void;
  onFestivalClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onFestivalClick }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: High-Impact Typography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context meta header */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>২০২৭ শিক্ষাবর্ষে নতুন শিক্ষার্থী ভর্তি কার্যক্রম শুরু</span>
            </div>

            {/* Marquee Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.2] text-balance">
              সন্তানের ভবিষ্যৎ যেখানে নিরাপদ,{' '}
              <span className="text-emerald-800 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                সেখানে সম্ভাবনার দুয়ার খোলা!
              </span>
            </h1>

            {/* Welcoming Narrative & Parent Promise */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              সম্মানিত অভিভাবকবৃন্দ, আপনার সন্তানের মেধা ও মানসিক বিকাশকে বিকশিত করতে মুখস্থ নির্ভরতার বিপরীতে আমরা নিয়ে এসেছি আধুনিক, অংশগ্রহণমূলক ও আনন্দময় পাঠদান পদ্ধতি। দ্বীনি শিষ্টাচার, সুন্নতি আমল, প্রাঞ্জল ভাষার শুদ্ধ চর্চা এবং মমতাময় শিক্ষকমণ্ডলীর নিবিড় তদারকিতে প্রতিটি শিশু এখানে হয়ে উঠবে ভবিষ্যতের অনুকরণীয় লিজেন্ড।
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onApplyClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
              >
                <span>অনলাইন ভর্তি আবেদন ফরম</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onFestivalClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-semibold text-stone-800 bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300 rounded-xl transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>ভর্তি উৎসব ২০২৬ (২৮ অক্টোবর)</span>
              </button>
            </div>

            {/* Direct Helpline snippet */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>সরাসরি তথ্য পেতে কল করুন:</span>
                <a href="tel:01336559955" className="font-bold text-emerald-900 hover:underline">
                  01336-559955
                </a>
              </div>
              <span className="text-stone-300 hidden sm:inline">|</span>
              <div className="text-stone-500">
                মুজগুন্নী আ/এ, খালিশপুর, খুলনা
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-white p-2">
              <img
                src="/src/assets/images/hero_school_campus_1792983871256.jpg"
                alt="খুলনা লিজেন্ড স্কুল ক্যাম্পাস প্রাঙ্গণ"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-xl"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-stone-100">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">
                      নিরাপদ ও আধুনিক বিদ্যাপীঠ
                    </h3>
                    <p className="text-xs text-stone-500">
                      সিসিটিভি সার্বক্ষণিক নজরদারি ও মমতাময় পারিবারিক পরিবেশ
                    </p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-200/50 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>

        {/* 4-Column Key Metrics / Trust Bar */}
        <div className="mt-14 pt-8 border-t border-stone-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-800">
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">ক্যাম্পাস নিরাপত্তা</span>
            <span className="text-xl sm:text-2xl font-bold font-sans">১০০% সিসিটিভি</span>
            <span className="text-xs text-stone-500">সার্বক্ষণিক মনিটরিং ও সুরক্ষা ব্যবস্থা</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">শিক্ষাদর্শন</span>
            <span className="text-xl sm:text-2xl font-bold font-sans">সৃজনশীল পাঠ</span>
            <span className="text-xs text-stone-500">মুখস্থ নির্ভরতা কমিয়ে মনন বিকাশ</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">বিশেষ বিভাগ</span>
            <span className="text-xl sm:text-2xl font-bold font-sans">হিফজ ও কালচারাল</span>
            <span className="text-xs text-stone-500">তাজবিদসহ কুরআন ও বক্তৃতা অনুশীলন</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">সেশন</span>
            <span className="text-xl sm:text-2xl font-bold font-sans">২০২৭ ভর্তি চলছে</span>
            <span className="text-xs text-stone-500">প্লে থেকে ৮ম ও হিফজুল কুরআন</span>
          </div>
        </div>

      </div>
    </section>
  );
};
