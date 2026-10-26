import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, CheckCircle2 } from 'lucide-react';

interface DepartmentOption {
  id: string;
  name: string;
  number: string;
  desc: string;
}

const DEPARTMENTS: DepartmentOption[] = [
  {
    id: 'general',
    name: 'জেনারেল স্কুল হেল্পলাইন',
    number: '8801336559955',
    desc: 'প্লে - ৮ম শ্রেণির ভর্তি ও তথ্য'
  },
  {
    id: 'hifz',
    name: 'হিফজুল কুরআন বিভাগ',
    number: '8801903880255',
    desc: 'তাজবিদ ও হিফজ সংক্রান্ত পরামর্শ'
  },
  {
    id: 'cultural',
    name: 'কালচারাল একাডেমি',
    number: '8801402173419',
    desc: 'বক্তৃতা ও সুন্দর হাতের লেখা'
  }
];

const QUICK_MESSAGES = [
  'আসসালামু আলাইকুম, ২০২৭ শিক্ষাবর্ষে ভর্তির নিয়ম ও ফি জানতে চাই।',
  '২৮ অক্টোবর ২০২৬ ভর্তি উৎসবের রেজিস্ট্রেশন সংক্রান্ত তথ্য চাই।',
  'স্কুলের ক্যাম্পাস ভিজিট করার সময়সূচি জানতে চাই।'
];

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<DepartmentOption>(DEPARTMENTS[0]);
  const [customMessage, setCustomMessage] = useState(QUICK_MESSAGES[0]);

  const handleStartChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const encodedText = encodeURIComponent(customMessage.trim() || 'আসসালামু আলাইকুম, খুলনা লিজেন্ড স্কুল সম্পর্কে জানতে চাই।');
    const waUrl = `https://wa.me/${selectedDept.number}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popup Panel */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-emerald-200">
                <MessageCircle className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">খুলনা লিজেন্ড স্কুল</h4>
                <p className="text-[11px] text-emerald-200">অনলাইন সহায়তা ডেস্ক • WhatsApp</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3.5 text-xs text-stone-700 bg-stone-50/50">
            
            {/* Department selector */}
            <div>
              <label className="block text-[11px] font-bold text-stone-600 mb-1.5 uppercase tracking-wide">
                বিভাগ নির্বাচন করুন:
              </label>
              <div className="space-y-1.5">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => setSelectedDept(dept)}
                    className={`w-full text-left p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedDept.id === dept.id
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold'
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <div>
                      <div className="text-xs">{dept.name}</div>
                      <div className="text-[10px] text-stone-400 font-normal">{dept.desc}</div>
                    </div>
                    {selectedDept.id === dept.id && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick question presets */}
            <div>
              <label className="block text-[11px] font-bold text-stone-600 mb-1.5 uppercase tracking-wide">
                দ্রুত বার্তা নির্বাচন করুন:
              </label>
              <div className="space-y-1.5">
                {QUICK_MESSAGES.map((msg, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCustomMessage(msg)}
                    className={`w-full text-left p-2 rounded-lg text-[11px] leading-snug border transition-all cursor-pointer ${
                      customMessage === msg
                        ? 'bg-white border-emerald-400 text-emerald-900 shadow-xs'
                        : 'bg-white/80 border-stone-200 text-stone-600 hover:bg-white'
                    }`}
                  >
                    "{msg}"
                  </button>
                ))}
              </div>
            </div>

            {/* Message input */}
            <div>
              <textarea
                rows={2}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="আপনার বার্তা বা প্রশ্ন লিখুন..."
                className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 resize-none"
              />
            </div>

            {/* Submit / Chat Trigger */}
            <button
              onClick={() => handleStartChat()}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp চ্যাট শুরু করুন</span>
            </button>

            <div className="text-center text-[10px] text-stone-400 pt-1">
              সাধারণত ১০-১৫ মিনিটের মধ্যে উত্তর প্রদান করা হয়
            </div>

          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer"
      >
        <div className="w-7 h-7 flex items-center justify-center">
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap pr-1">
          {isOpen ? 'চ্যাট বন্ধ করুন' : 'WhatsApp চ্যাট'}
        </span>
      </button>

    </div>
  );
};
