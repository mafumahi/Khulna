import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Gift, Trophy, Palette, Mic2, Sparkles, CheckCircle2 } from 'lucide-react';
import { FESTIVAL_DATE, SCHOOL_INFO } from '../data/initialData';

interface FestivalNoticeProps {
  onRegisterClick: () => void;
}

export const FestivalNotice: React.FC<FestivalNoticeProps> = ({ onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(FESTIVAL_DATE).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Event day or past
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Bengali numerals helper
  const toBengaliNumber = (num: number) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(d => bengaliDigits[parseInt(d, 10)] ?? d).join('');
  };

  return (
    <section id="festival" className="py-16 bg-gradient-to-b from-amber-50/50 via-white to-emerald-50/30 border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>বিশেষ আমন্ত্রণপত্র ও বিজ্ঞপ্তি</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            ভর্তি উৎসব ২০২৬ (Admission Festival)
          </h2>

          <p className="text-base text-stone-600">
            নতুন প্রজন্মের সম্ভাবনাময় ভবিষ্যতের সঙ্গী হতে আপনাকে ও আপনার কোমলমতি সন্তানকে খুলনা লিজেন্ড স্কুলের বার্ষিক মহোৎসবে সাদর আমন্ত্রণ!
          </p>
        </div>

        {/* Featured Festival Banner Card */}
        <div className="mt-10 bg-emerald-950 text-white rounded-2xl shadow-xl overflow-hidden border border-emerald-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
            
            {/* Event Time & Schedule details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-amber-300 text-sm font-semibold tracking-wide uppercase">
                  অনিবার্য শুভদিন
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                  বুধবার, ২৮ অক্টোবর '২৬ — সকাল ৯:৩০ মি.
                </h3>
                <p className="text-emerald-200/90 text-sm leading-relaxed">
                  স্কুলের প্রধান মিলনায়তন ও উন্মুক্ত প্রাঙ্গণে অনুষ্ঠিত হবে শিক্ষার্থী-অভিভাবক মিলনমেলা, মনোজ্ঞ উপস্থাপনা ও স্পট ভর্তি উৎসব।
                </p>
              </div>

              {/* Key Location & Time Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-emerald-900/60 p-3.5 rounded-xl border border-emerald-800">
                  <Clock className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-200 uppercase">সময়সূচি</h4>
                    <p className="text-sm font-bold text-white">সকাল ৯:৩০ মিনিট থেকে শুরু</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-emerald-900/60 p-3.5 rounded-xl border border-emerald-800">
                  <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-200 uppercase">অনুষ্ঠানস্থল</h4>
                    <p className="text-xs font-bold text-white leading-snug">
                      রোড-১৯, বাড়ি-২৫৯, মুজগুন্নী আ/এ, খালিশপুর
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onRegisterClick}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold rounded-xl shadow-md transition-all active:scale-98 cursor-pointer flex items-center gap-2"
                >
                  <Gift className="w-4 h-4 text-stone-900" />
                  <span>উৎসবে অংশগ্রহণ ও স্পট ভর্তি বুকিং</span>
                </button>
                <span className="text-xs text-emerald-300">
                  * উৎসবে অংশগ্রহণকারী প্রথম ৫০ জন শিক্ষার্থীর জন্য বিশেষ শিক্ষামূলক উপহার কিট
                </span>
              </div>

            </div>

            {/* Countdown Box */}
            <div className="lg:col-span-5 bg-emerald-900/80 rounded-xl p-6 border border-emerald-700/60 text-center space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                উৎসব শুরু হতে বাকি
              </span>

              <div className="grid grid-cols-4 gap-2.5">
                <div className="bg-emerald-950/90 rounded-lg p-2.5 border border-emerald-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 tabular-nums">
                    {toBengaliNumber(timeLeft.days)}
                  </span>
                  <span className="block text-[11px] text-emerald-200 mt-1 font-medium">দিন</span>
                </div>
                <div className="bg-emerald-950/90 rounded-lg p-2.5 border border-emerald-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                    {toBengaliNumber(timeLeft.hours)}
                  </span>
                  <span className="block text-[11px] text-emerald-200 mt-1 font-medium">ঘণ্টা</span>
                </div>
                <div className="bg-emerald-950/90 rounded-lg p-2.5 border border-emerald-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                    {toBengaliNumber(timeLeft.minutes)}
                  </span>
                  <span className="block text-[11px] text-emerald-200 mt-1 font-medium">মিনিট</span>
                </div>
                <div className="bg-emerald-950/90 rounded-lg p-2.5 border border-emerald-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 tabular-nums">
                    {toBengaliNumber(timeLeft.seconds)}
                  </span>
                  <span className="block text-[11px] text-emerald-200 mt-1 font-medium">সেকেন্ড</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-emerald-200 border-t border-emerald-800/80 space-y-1">
                <p className="font-semibold text-amber-300">ভর্তি উৎসবের আকর্ষণ:</p>
                <p>সরাসরি অধ্যক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলীর সাথে উন্মুক্ত পরামর্শ ও ক্যারিয়ার গাইডলাইন।</p>
              </div>
            </div>

          </div>
        </div>

        {/* Festival Highlights Bento Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Palette className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-stone-900 mb-2">
              ক্যালিগ্রাফি ও হস্তলিপি প্রদর্শনী
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              শিক্ষার্থীদের নিজ হাতে আঁকা আরবি ক্যালিগ্রাফি ও বাংলা-ইংরেজি দৃষ্টিনন্দন হাতের লেখার উন্মুক্ত গ্যালারি ও লাইভ প্রদর্শনী।
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Mic2 className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-stone-900 mb-2">
              আযান, তেলাওয়াত ও বক্তৃতা মঞ্চ
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              শিশুদের আত্মবিশ্বাস বৃদ্ধির জন্য আয়োজিত হবে সুমধুর আযান ও কুরআন তেলাওয়াত এবং সুন্দর উপস্থাপনার প্রতিযোগিতা।
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
              <Trophy className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-stone-900 mb-2">
              স্পট অ্যাডমিশন ও বিশেষ ছাড়
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              উৎসবের দিন তাৎক্ষণিক ভর্তি ইচ্ছুকদের জন্য থাকবে ভর্তি ফিতে আকর্ষণীয় ছাড় এবং উপহারস্বরূপ মানসম্মত শিক্ষা উপকরণ সেট।
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
