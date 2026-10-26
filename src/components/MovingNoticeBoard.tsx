import React, { useState } from 'react';
import { Bell, Sparkles, ChevronRight, X, Calendar, FileText, ExternalLink, ArrowRight } from 'lucide-react';

interface NoticeItem {
  id: string;
  category: 'ভর্তি উৎসব' | 'ভর্তি বিজ্ঞপ্তি' | 'একাডেমিক' | 'সাংস্কৃতিক' | 'জরুরি তথ্য';
  title: string;
  date: string;
  fullDetails: string;
}

const NOTICES: NoticeItem[] = [
  {
    id: 'not-1',
    category: 'ভর্তি উৎসব',
    title: 'ভর্তি উৎসব ২০২৬: আগামী বুধবার, ২৮ অক্টোবর সকাল ৯:৩০ টায় স্কুল প্রাঙ্গণে বর্ণাঢ্য আয়োজন। সবাইকে সাদর আমন্ত্রণ।',
    date: '২৮ অক্টোবর ২০২৬',
    fullDetails: 'খুলনা লিজেন্ড স্কুলের বার্ষিক ভর্তি উৎসব ২০২৬ আগামী বুধবার সকাল ৯:৩০ মিনিটে শুরু হবে। অনুষ্ঠানে শিক্ষার্থীদের ক্যালিগ্রাফি প্রদর্শনী, সুমধুর আযান ও কুরআন তেলাওয়াত প্রতিযোগিতা এবং স্পট অ্যাডমিশন বিশেষ ছাড় ও উপহার সামগ্রী বিতরণ করা হবে।'
  },
  {
    id: 'not-2',
    category: 'ভর্তি বিজ্ঞপ্তি',
    title: '২০২৭ শিক্ষাবর্ষে প্লে, নার্সারি, কেজি থেকে ৮ম শ্রেণি ও হিফজুল কুরআন বিভাগে সীমিত আসনে ভর্তি চলছে।',
    date: '২০২৭ শিক্ষাবর্ষ',
    fullDetails: 'প্লে থেকে ৮ম শ্রেণি পর্যন্ত বাংলা ও ইংলিশ ভার্সন সমন্বিত যুগোপযোগী কারিকুলাম এবং অভিজ্ঞ হাফেজদের পরিচালনায় হিফজুল কুরআন বিভাগে নতুন শিক্ষাবর্ষের ভর্তি ফরম বিতরণ চলছে। অনলাইন ফরম পূরণ করে অগ্রাধিকারের সাথে ভর্তি নিশ্চিত করুন।'
  },
  {
    id: 'not-3',
    category: 'সাংস্কৃতিক',
    title: 'লিজেন্ড কালচারাল একাডেমির অধীনে নিয়মিত ক্যালিগ্রাফি, সুন্দর হাতের লেখা ও বক্তৃতা অনুশীলন কার্যক্রম চালু।',
    date: 'চলতি সেশন',
    fullDetails: 'শিশুদের জড়তাহীন বক্তব্য ও উপস্থাপনা এবং আরবি-বাংলা-ইংরেজি হস্তলিপির বিশেষ দক্ষতা বৃদ্ধির জন্য কালচারাল একাডেমির ক্লাস সপ্তাহের প্রতি বৃহস্পতি ও শুক্রবার অনুষ্ঠিত হয়।'
  },
  {
    id: 'not-4',
    category: 'একাডেমিক',
    title: 'ভর্তি উৎসবের দিন উপস্থিত শিক্ষার্থীদের জন্য ভর্তি ফিতে আকর্ষণীয় ছাড় ও ফ্রি স্টাডি কিট উপহার।',
    date: '২৮ অক্টোবর ২০২৬',
    fullDetails: 'উৎসবে স্পট অ্যাডমিশন গ্রহণকারী প্রথম ৫০ জন শিক্ষার্থীর জন্য আকর্ষণীয় স্কুল ব্যাগ, ডায়রি ও শিক্ষা উপকরণ কিট উপহার হিসেবে প্রদান করা হবে।'
  },
  {
    id: 'not-5',
    category: 'জরুরি তথ্য',
    title: 'ক্যাম্পাস হেল্পলাইন: ০১৩৩৬-৫৫৯৯৫৫ / ০১৯০৩-৮৮০২৫৫ (মুজগুন্নী আ/এ, উল্লাস পার্ক রোড, খালিশপুর, খুলনা)।',
    date: '২৪/৭ সাপোর্ট',
    fullDetails: 'অভিভাবকবৃন্দ সরাসরি ক্যাম্পাস পরিদর্শন করতে পারেন শনিবার থেকে বৃহস্পতিবার সকাল ৮:০০ থেকে বিকাল ৪:০০ টা পর্যন্ত।'
  }
];

interface MovingNoticeBoardProps {
  onApplyClick: () => void;
  onFestivalClick: () => void;
}

export const MovingNoticeBoard: React.FC<MovingNoticeBoardProps> = ({ onApplyClick, onFestivalClick }) => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      {/* Moving Ticker Strip */}
      <div 
        className="bg-amber-400 text-stone-900 border-b border-amber-500 overflow-hidden relative shadow-sm"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto flex items-center">
          
          {/* Label Badge */}
          <div className="bg-emerald-950 text-white px-4 py-2.5 flex items-center gap-2 shrink-0 z-10 shadow-md">
            <Bell className="w-4 h-4 text-amber-300 animate-bounce" />
            <span className="font-extrabold text-xs sm:text-sm tracking-wide whitespace-nowrap">
              চলমান নোটিশ বোর্ড
            </span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </div>

          {/* Marquee Scrolling Content */}
          <div className="flex-1 overflow-hidden relative py-2 px-3">
            <div 
              className={`flex items-center gap-12 whitespace-nowrap transition-transform duration-300 ${
                isPaused ? '' : 'animate-marquee'
              }`}
              style={{
                display: 'inline-flex',
                animation: isPaused ? 'none' : 'marquee 32s linear infinite'
              }}
            >
              {NOTICES.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedNotice(item)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:text-emerald-950 hover:underline cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-bold bg-emerald-900 text-amber-300 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span>{item.title}</span>
                  <span className="text-emerald-950 font-bold ml-2">✦</span>
                </div>
              ))}
              {/* Duplicate for infinite seamless scroll */}
              {NOTICES.map((item, idx) => (
                <div
                  key={`dup-${idx}`}
                  onClick={() => setSelectedNotice(item)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:text-emerald-950 hover:underline cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-bold bg-emerald-900 text-amber-300 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span>{item.title}</span>
                  <span className="text-emerald-950 font-bold ml-2">✦</span>
                </div>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="px-3 py-1 shrink-0 z-10 hidden sm:block">
            <button
              onClick={() => setShowAllModal(true)}
              className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs"
            >
              সকল নোটিশ
            </button>
          </div>

        </div>
      </div>

      {/* Keyframe style for the marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Single Notice Detail Modal */}
      {selectedNotice && (
        <div 
          onClick={() => setSelectedNotice(null)}
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 border border-stone-200 shadow-2xl animate-in zoom-in-95"
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900">
                  {selectedNotice.category}
                </span>
                <span className="text-xs text-stone-500">{selectedNotice.date}</span>
              </div>
              <button 
                onClick={() => setSelectedNotice(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-stone-900 leading-snug">
                {selectedNotice.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                {selectedNotice.fullDetails}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-200">
              <button
                onClick={() => {
                  setSelectedNotice(null);
                  if (selectedNotice.category === 'ভর্তি উৎসব') {
                    onFestivalClick();
                  } else {
                    onApplyClick();
                  }
                }}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>বিস্তারিত পেজে যান</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* All Notices List Modal */}
      {showAllModal && (
        <div 
          onClick={() => setShowAllModal(false)}
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 border border-stone-200 shadow-2xl max-h-[85vh] flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">খুলনা লিজেন্ড স্কুল নোটিশ বোর্ড</h3>
                  <p className="text-xs text-stone-500">প্রশাসনিক ও একাডেমিক সর্বশেষ বিজ্ঞপ্তিসমূহ</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAllModal(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {NOTICES.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowAllModal(false);
                    setSelectedNotice(item);
                  }}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all cursor-pointer space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-stone-400">{item.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2">
                    {item.fullDetails}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500">সর্বমোট {NOTICES.length} টি সক্রিয় বিজ্ঞপ্তি</span>
              <button
                onClick={() => setShowAllModal(false)}
                className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-xl text-xs font-semibold cursor-pointer"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
