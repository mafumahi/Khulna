import React from 'react';
import { CheckCircle2, FileText, UserCheck, Sparkles, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { AVAILABLE_CLASSES } from '../data/initialData';

interface AdmissionsInfoProps {
  onApplyClick: () => void;
}

export const AdmissionsInfo: React.FC<AdmissionsInfoProps> = ({ onApplyClick }) => {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>সেশন ২০২৭ • সীমিত আসন</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            ২০২৭ শিক্ষাবর্ষে ভর্তি চলছে (Admissions Open)
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            খুলনা লিজেন্ড স্কুলে প্রাক-প্রাথমিক থেকে ৮ম শ্রেণি এবং হিফজুল কুরআন বিভাগে ২০২৭ শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হয়েছে। প্রতিটি শ্রেণিতে আসন সংখ্যা সীমিত।
          </p>
        </div>

        {/* 3 Special Academic Wings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-gradient-to-b from-stone-50 to-white p-7 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                শাখা ০১ • মূল স্কুল
              </span>
              <h3 className="text-xl font-bold text-stone-900">
                জেনারেল স্কুল বিভাগ
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                প্লে, নার্সারি, কেজি থেকে ৮ম শ্রেণি পর্যন্ত জাতীয় শিক্ষাক্রমের আলোকে যুগোপযোগী ইংলিশ স্পোকেন, কম্পিউটার ও বিজ্ঞান ভিত্তিক সৃজনশীল পাঠদান।
              </p>
              <ul className="text-xs text-stone-700 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>দৈনিক ক্লাসেই পড়া মুখস্থ ও হোমওয়ার্ক সমাধান</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ডিজিটাল ডায়রি ও নিয়মিত অভিভাবক সমাবেশ</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>আসন সংখ্যা: সীমিত</span>
              <span className="text-stone-400">সকাল ৮:০০ - দুপুর ১:০০</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-amber-50/40 to-white p-7 rounded-2xl border border-amber-200/70 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                শাখা ০২ • বিশেষায়িত দ্বীনি বিভাগ
              </span>
              <h3 className="text-xl font-bold text-stone-900">
                হিফজুল কুরআন বিভাগ
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                আন্তর্জাতিক ক্বারীদের নিয়মে বিশুদ্ধ তাজবিদসহ নাজেরা ও হিফজুল কুরআন সমাপন। জেনারেল শিক্ষার (বাংলা, ইংরেজি, গণিত) সমন্বিত সুষম রুটিন।
              </p>
              <ul className="text-xs text-stone-700 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>অভিজ্ঞ হাফেজ শিক্ষকদের নিবিড় তত্ত্বাবধান</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>মানসিক চাপমুক্ত হৃদয়গ্রাহী পরিবেশ</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-900">
              <span>হটলাইন: 01903-880255</span>
              <span className="text-stone-400">অনাবাসিক ও ডে-কেয়ার</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-blue-50/40 to-white p-7 rounded-2xl border border-blue-200/70 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">
                শাখা ০৩ • দক্ষতা উন্নয়ন
              </span>
              <h3 className="text-xl font-bold text-stone-900">
                লিজেন্ড কালচারাল একাডেমি
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                সুন্দর হাতের লেখা (ক্যালিগ্রাফি), সাবলীল বাচনভঙ্গি ও বক্তৃতা, শুদ্ধ উচ্চারণ এবং হামদ-নাশিদ চর্চার বিশেষায়িত আফটার-স্কুল প্রশিক্ষণ উইং।
              </p>
              <ul className="text-xs text-stone-700 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>মঞ্চ ভীতি দূরীকরণ ও পাবলিক স্পিকিং</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>বাংলা ও ইংরেজি হ্যান্ডরাইটিং মাস্টারি</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-blue-900">
              <span>হটলাইন: 01402-173419</span>
              <span className="text-stone-400">সাপ্তাহিক ও সান্ধ্যকালীন</span>
            </div>
          </div>

        </div>

        {/* Admission Steps & Requirements Bento Grid */}
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-10 border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: 3 Easy Steps */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <span>ভর্তি প্রক্রিয়া (৩টি সহজ ধাপ)</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-stone-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    ১
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">আবেদন ফরম পূরণ</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      ওয়েবসাইটে নিচে দেওয়া অনলাইন ফরমটি পূরণ করুন অথবা সরাসরি স্কুল অফিস থেকে ভর্তি ফরম সংগ্রহ করুন।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-stone-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    ২
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">সৌজন্য সাক্ষাৎ ও মেধা মূল্যায়ন</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      শিশুর বয়স ও শ্রেণির উপযোগী সহজ, আনন্দদায়ক ও চাপমুক্ত সৌজন্য পরিচিতি পর্ব।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-stone-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    ৩
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">ভর্তি নিশ্চিতকরণ ও স্টাডি কিট গ্রহণ</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      প্রয়োজনীয় কাগজপত্র জমাদান, নির্ধারিত ফি পরিশোধ সাপেক্ষে আইডি কার্ড ও স্টাডি কিট বুঝে নেওয়া।
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onApplyClick}
                  className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-sm inline-flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>এখনই অনলাইন ফরম পূরণ করুন</span>
                </button>
              </div>
            </div>

            {/* Right: Required Documents */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
              <h4 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>ভর্তির জন্য প্রয়োজনীয় কাগজপত্র</span>
              </h4>

              <ul className="text-xs text-stone-600 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>শিক্ষার্থীর ডিজিটাল জন্ম নিবন্ধন সনদের স্পষ্ট ফটোকপি (১ কপি)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>শিক্ষার্থীর সদ্য তোলা পাসপোর্ট সাইজের রঙিন ছবি (৩ কপি)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>পিতা ও মাতার জাতীয় পরিচয়পত্র (NID) এর ফটোকপি (১ কপি করে)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>পূর্ববর্তী বিদ্যালয়ের প্রত্যয়নপত্র বা রিপোর্ট কার্ড (যদি প্রযোজ্য হয়)</span>
                </li>
              </ul>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  ভর্তি সংক্রান্ত যে কোনো পরামর্শ বা ফি কাঠামোর বিস্তারিত জানতে আমাদের হেল্পলাইনে সরাসরি কল করুন।
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
