import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, Building, HeartHandshake } from 'lucide-react';
import { SCHOOL_INFO } from '../data/initialData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">
            যোগাযোগ ও সার্বক্ষণিক তথ্য সেবা
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            ক্যাম্পাস ঠিকানা ও শাখাভিত্তিক হটলাইন
          </h2>
          <p className="text-base text-stone-600">
            আপনার যে কোনো জিজ্ঞাসায় অথবা সরাসরি ক্যাম্পাস পরিদর্শনের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* 3 Hotlines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* General School Hotline */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-emerald-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-800 uppercase block">
              জেনারেল স্কুল শাখা
            </span>
            <h3 className="text-xl font-bold text-stone-900 mt-1 mb-2">
              স্কুল হটলাইন (General Desk)
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              প্লে থেকে ৮ম শ্রেণির ভর্তি তথ্য ও সাধারণ পরামর্শ
            </p>

            <div className="space-y-2 font-mono">
              <a
                href="tel:01336559955"
                className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-emerald-50 text-stone-900 hover:text-emerald-900 text-sm font-bold border border-stone-200 transition-colors"
              >
                <span>01336-559955</span>
                <span className="text-xs font-sans font-medium text-emerald-700">কল করুন →</span>
              </a>
              <a
                href="tel:01366599995"
                className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-emerald-50 text-stone-900 hover:text-emerald-900 text-sm font-bold border border-stone-200 transition-colors"
              >
                <span>01366-5999৯৫</span>
                <span className="text-xs font-sans font-medium text-emerald-700">কল করুন →</span>
              </a>
            </div>
          </div>

          {/* Hifzul Quran Branch */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Building className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-amber-800 uppercase block">
              হিফজুল কুরআন বিভাগ
            </span>
            <h3 className="text-xl font-bold text-stone-900 mt-1 mb-2">
              হিফজুল কুরআন শাখা
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              তাজবিদ সহ নাজেরা ও হিফজ কোর্সের বিস্তারিত
            </p>

            <div className="space-y-2 font-mono">
              <a
                href="tel:01903880255"
                className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/50 hover:bg-amber-100/60 text-stone-900 hover:text-amber-900 text-sm font-bold border border-amber-200 transition-colors"
              >
                <span>01903-880255</span>
                <span className="text-xs font-sans font-medium text-amber-800">কল করুন →</span>
              </a>
              <div className="p-2 text-xs text-stone-500 font-sans">
                সকাল ৭:০০ থেকে রাত ৮:০০ পর্যন্ত সেবা চালু
              </div>
            </div>
          </div>

          {/* Legend Cultural Academy */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-blue-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-blue-800 uppercase block">
              দক্ষতা উন্নয়ন একাডেমি
            </span>
            <h3 className="text-xl font-bold text-stone-900 mt-1 mb-2">
              লিজেন্ড কালচারাল একাডেমি
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              বক্তৃতা, সুন্দর হাতের লেখা ও উপস্থাপনা কোর্স
            </p>

            <div className="space-y-2 font-mono">
              <a
                href="tel:01402173419"
                className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/50 hover:bg-blue-100/60 text-stone-900 hover:text-blue-900 text-sm font-bold border border-blue-200 transition-colors"
              >
                <span>01402-173419</span>
                <span className="text-xs font-sans font-medium text-blue-800">কল করুন →</span>
              </a>
              <div className="p-2 text-xs text-stone-500 font-sans">
                বিকাল ৩:০০ থেকে সন্ধ্যা ৭:০০ পর্যন্ত
              </div>
            </div>
          </div>

        </div>

        {/* Address and Directions Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">প্রধান ক্যাম্পাস লোকেশন</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                    খুলনা লিজেন্ড স্কুল
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-stone-800 font-medium text-sm leading-relaxed">
                {SCHOOL_INFO.address.fullBn}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600 pt-2">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">অফিস পরিদর্শনের সময়:</span>
                    <span>শনিবার হতে বৃহস্পতিবার (সকাল ৮:০০ - বিকাল ৪:০০)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">ল্যান্ডমার্ক:</span>
                    <span>মুজগুন্নী উল্লাস পার্ক রোডের সন্নিকটে</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="lg:col-span-5 bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-4 text-center">
              <h4 className="text-lg font-bold text-white">
                সরাসরি হোয়াটসঅ্যাপে কথা বলুন
              </h4>
              <p className="text-xs text-emerald-200 leading-relaxed">
                ভর্তি ফি, সিলেবাস বা অন্য যে কোনো বিষয়ে বার্তা পাঠিয়ে তাৎক্ষণিক রিপ্লাই পেতে পারেন।
              </p>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="https://wa.me/8801336559955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp এ মেসেজ দিন (01336-559955)</span>
                </a>

                <a
                  href="tel:01336559955"
                  className="w-full py-2.5 px-4 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 font-semibold text-xs rounded-xl border border-emerald-700 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>জরুরি হেল্পলাইনে কল করুন</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
