import React from 'react';
import { BookOpen, Sparkles, HeartHandshake, Mic, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';
import { SCHOOL_FEATURES } from '../data/initialData';

interface FeaturesProps {
  onLearnMore?: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onLearnMore }) => {
  return (
    <section id="features" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <span>কেন আপনার সন্তানকে খুলনা লিজেন্ড স্কুলে ভর্তি করাবেন?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            আমাদের অনন্য বৈশিষ্ট্যসমূহ (Key Features)
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            আমরা শুধু প্রথাগত পাঠ্যপুস্তকে সীমাবদ্ধ নই; শিশুর মানসিক বিকাশ, বুদ্ধিবৃত্তিক স্বাধীনতা এবং দ্বীনি চরিত্র গঠনে একটি স্বয়ংসম্পূর্ণ আধুনিক পরিবেশ গড়ে তুলেছি।
          </p>
        </div>

        {/* 5 Core Features List with Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Feature Cards List */}
          <div className="lg:col-span-7 space-y-5">
            {SCHOOL_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-lg flex items-center justify-center font-sans group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    {feat.number}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        {feat.title}
                      </h3>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-md">
                        {feat.highlight}
                      </span>
                    </div>

                    <p className="text-xs text-stone-400 font-medium tracking-wide">
                      {feat.subtitle}
                    </p>

                    <p className="text-sm text-stone-600 leading-relaxed pt-1">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual Proof & Real Academy Atmosphere */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Card 1: Creative Classroom */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm p-3 space-y-3">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/src/assets/images/classroom_creative_learning_1792983872162.jpg"
                  alt="সৃজনশীল ও মুখস্থহীন ক্লাসরুম"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-emerald-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                  বাস্তবমুখী পাঠদান
                </div>
              </div>
              <div className="p-2">
                <h4 className="text-base font-bold text-stone-900">
                  সৃজনশীল ও আনন্দময় ক্লাসরুম
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  শিক্ষার্থীরা দলগতভাবে প্রজেক্ট ওয়ার্ক, চিত্রাঙ্কন ও গণিত ধাঁধা সমাধানের মাধ্যমে স্বতঃস্ফূর্তভাবে শেখে।
                </p>
              </div>
            </div>

            {/* Visual Card 2: Cultural & Recitation */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm p-3 space-y-3">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/src/assets/images/cultural_quran_calligraphy_1792983872905.jpg"
                  alt="তেলাওয়াত ও ক্যালিগ্রাফি একাডেমি"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                  লিজেন্ড কালচারাল একাডেমি
                </div>
              </div>
              <div className="p-2">
                <h4 className="text-base font-bold text-stone-900">
                  তাজবিদ সহ কুরআন তেলাওয়াত ও হস্তলিপি
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  বিশেষ ক্যালিগ্রাফি প্রশিক্ষকের তত্ত্বাবধানে প্রতিটি শিশুর হাতের লেখা সুন্দর করা এবং মঞ্চে কথা বলার জড়তা দূরীকরণ।
                </p>
              </div>
            </div>

            {/* Safety badge quote */}
            <div className="p-4 rounded-xl bg-emerald-900 text-white flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold block text-sm">অভিভাবকদের মানসিক প্রশান্তি</span>
                প্রতিটি শ্রেণিকক্ষ, করিডোর ও প্রাঙ্গণ সার্বক্ষণিক সিসিটিভির মাধ্যমে অফিস থেকে তদারকি করা হয়।
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
