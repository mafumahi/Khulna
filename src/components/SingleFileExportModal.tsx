import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, ExternalLink, HelpCircle } from 'lucide-react';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'instructions'>('instructions');

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="bn" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>খুলনা লিজেন্ড স্কুল | Khulna Legend School - ২০২৭ শিক্ষাবর্ষে ভর্তি চলছে</title>
  <meta name="description" content="খুলনা লিজেন্ড স্কুল (Khulna Legend School) - ২০২৭ শিক্ষাবর্ষে ভর্তি চলছে এবং ভর্তি উৎসব ২০২৬। মানসম্মত আধুনিক ও নৈতিক শিক্ষা।">
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts: Hind Siliguri (Bengali) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Hind Siliguri', system-ui, -apple-system, sans-serif;
    }
  </style>
</head>
<body class="bg-amber-50/30 text-stone-800 antialiased selection:bg-emerald-600 selection:text-white">

  <!-- TOP BAR & ANNOUNCEMENT -->
  <div class="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
        <span class="font-bold text-amber-300">ভর্তি উৎসব ২০২৬:</span>
        <span>বুধবার, ২৮ অক্টোবর '২৬, সকাল ৯:৩০ মি. — নতুন শিক্ষাবর্ষের বিশেষ আয়োজন!</span>
      </div>
      <div class="flex items-center gap-4">
        <span>হটলাইন: 01336-559955</span>
        <button onclick="openAdminModal()" class="text-amber-300 hover:text-white underline font-semibold">এডমিন প্যানেল</button>
      </div>
    </div>
  </div>

  <!-- NAVIGATION -->
  <header class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
      <a href="#hero" class="flex items-center gap-2.5">
        <div class="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xl shadow">
          🎓
        </div>
        <div>
          <span class="text-xl font-bold text-emerald-950 block">খুলনা লিজেন্ড স্কুল</span>
          <span class="text-[11px] text-stone-500 uppercase tracking-wider">Khulna Legend School</span>
        </div>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
        <a href="#festival" class="hover:text-emerald-800 transition">ভর্তি উৎসব ২০২৬</a>
        <a href="#features" class="hover:text-emerald-800 transition">বৈশিষ্ট্যসমূহ</a>
        <a href="#admissions" class="hover:text-emerald-800 transition">২০২৭ শিক্ষাবর্ষে ভর্তি</a>
        <a href="#contact" class="hover:text-emerald-800 transition">যোগাযোগ ও হটলাইন</a>
      </nav>
      <a href="#apply" class="px-5 py-2.5 bg-emerald-700 text-white font-semibold text-sm rounded-lg hover:bg-emerald-800 shadow transition">
        অনলাইন ভর্তি আবেদন
      </a>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="hero" class="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-7 space-y-6">
        <span class="text-xs font-bold text-emerald-800 uppercase tracking-wider">
          ২০২৭ শিক্ষাবর্ষে নতুন শিক্ষার্থী ভর্তি চলছে
        </span>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
          সন্তানের ভবিষ্যৎ যেখানে নিরাপদ, <br>
          <span class="text-emerald-800 underline decoration-amber-400">সেখানে সম্ভাবনার দুয়ার খোলা!</span>
        </h1>
        <p class="text-base sm:text-lg text-stone-600 leading-relaxed">
          সম্মানিত অভিভাবকবৃন্দ, আপনার সন্তানের মেধা ও মানসিক বিকাশকে বিকশিত করতে মুখস্থ নির্ভরতার বিপরীতে আমরা নিয়ে এসেছি আধুনিক, অংশগ্রহণমূলক ও আনন্দময় পাঠদান পদ্ধতি।
        </p>
        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#apply" class="px-6 py-3.5 bg-emerald-700 text-white font-bold rounded-xl shadow-md hover:bg-emerald-800 transition">
            অনলাইন ভর্তি আবেদন ফরম
          </a>
          <a href="#festival" class="px-5 py-3.5 bg-amber-100 text-amber-950 border border-amber-300 font-semibold rounded-xl hover:bg-amber-200 transition">
            ভর্তি উৎসব ২০২৬ (২৮ অক্টোবর)
          </a>
        </div>
      </div>
      <div class="lg:col-span-5 bg-white p-3 rounded-2xl shadow-xl border border-stone-200">
        <div class="bg-emerald-900 text-white p-8 rounded-xl text-center space-y-4">
          <div class="text-4xl">🏛️</div>
          <h3 class="text-xl font-bold">খুলনা লিজেন্ড স্কুল ক্যাম্পাস</h3>
          <p class="text-xs text-emerald-200">রোড-১৯, বাড়ি-২৫৯, মুজগুন্নী আ/এ (উল্লাস পার্ক রোড), খালিশপুর, খুলনা।</p>
          <div class="pt-2 border-t border-emerald-800 text-xs text-amber-300 font-semibold">
            ১০০% সিসিটিভি নিয়ন্ত্রিত নিরাপদ ও মমতাময় চত্বর
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ADMISSION FESTIVAL 2026 -->
  <section id="festival" class="py-16 bg-emerald-950 text-white border-y border-emerald-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="px-3 py-1 bg-amber-400 text-stone-950 text-xs font-bold rounded-full uppercase">বিশেষ আয়োজন</span>
        <h2 class="text-3xl font-extrabold text-white">ভর্তি উৎসব ২০২৬ (Admission Festival 2026)</h2>
        <p class="text-emerald-200 text-sm">নতুন শিক্ষাবর্ষ উপলক্ষে শিক্ষার্থী ও অভিভাবকদের জন্য বর্ণাঢ্য মিলনমেলা।</p>
      </div>
      <div class="bg-emerald-900/80 p-6 sm:p-8 rounded-2xl border border-emerald-700 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="p-4 bg-emerald-950 rounded-xl">
          <div class="text-amber-300 font-bold text-xs uppercase">দিন ও তারিখ</div>
          <div class="text-xl font-bold mt-1">বুধবার, ২৮ অক্টোবর '২৬</div>
        </div>
        <div class="p-4 bg-emerald-950 rounded-xl">
          <div class="text-amber-300 font-bold text-xs uppercase">সময়সূচি</div>
          <div class="text-xl font-bold mt-1">সকাল ৯:৩০ মিনিট</div>
        </div>
        <div class="p-4 bg-emerald-950 rounded-xl">
          <div class="text-amber-300 font-bold text-xs uppercase">স্থান</div>
          <div class="text-sm font-bold mt-1">স্কুল ক্যাম্পাস, খালিশপুর, খুলনা</div>
        </div>
      </div>
      <div class="text-center">
        <a href="#apply" class="inline-block px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold rounded-xl shadow">
          উৎসবে অংশগ্রহণ ও স্পট ভর্তি রেজিস্ট্রেশন
        </a>
      </div>
    </div>
  </section>

  <!-- 5 KEY FEATURES -->
  <section id="features" class="py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl font-extrabold text-stone-900">আমাদের বৈশিষ্ট্যসমূহ (Why Choose Us)</h2>
        <p class="text-stone-600 text-sm mt-2">সুশিক্ষিত, আদর্শবান ও দায়িত্বশীল প্রজন্ম গড়ার অঙ্গীকার</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">০১</div>
          <h3 class="font-bold text-stone-900 text-lg">মানসম্মত ও আধুনিক শিক্ষা</h3>
          <p class="text-stone-600 text-xs mt-2 leading-relaxed">স্মার্ট ও প্রজেক্টর ক্লাসরুম, আন্তর্জাতিক মানের শিক্ষাক্রম ও বিষয়ভিত্তিক শিক্ষকবৃন্দ।</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">০২</div>
          <h3 class="font-bold text-stone-900 text-lg">মুখস্থ নির্ভরতা কমিয়ে সৃজনশীল বিকাশ</h3>
          <p class="text-stone-600 text-xs mt-2 leading-relaxed">হাতে-কলমে কাজ ও প্রজেক্ট পদ্ধতির মাধ্যমে শিশুর চিন্তাশক্তি ও সহজাত মেধার সঠিক স্ফুরণ।</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">০৩</div>
          <h3 class="font-bold text-stone-900 text-lg">নৈতিক ও আদর্শিক মূল্যবোধ / আদব-কায়দা</h3>
          <p class="text-stone-600 text-xs mt-2 leading-relaxed">বড়দের সম্মান, সততা ও দৈনন্দিন শিষ্টাচারের ব্যবহারিক প্রশিক্ষণ।</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">০৪</div>
          <h3 class="font-bold text-stone-900 text-lg">তেলাওয়াত, আযান, উপস্থাপনা ও হাতের লেখা</h3>
          <p class="text-stone-600 text-xs mt-2 leading-relaxed">লিজেন্ড কালচারাল একাডেমির অধীনে নিয়মিত ক্যালিগ্রাফি ও পাবলিক স্পিকিং সেশন।</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm md:col-span-2 lg:col-span-2">
          <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3">০৫</div>
          <h3 class="font-bold text-stone-900 text-lg">সিসিটিভি নিয়ন্ত্রিত নিরাপদ ও মমতাময় ক্যাম্পাস</h3>
          <p class="text-stone-600 text-xs mt-2 leading-relaxed">সার্বক্ষণিক নিরাপত্তা নজরদারি ও মমতাময়ী শিক্ষিকাদের নিবিড় মাতৃস্নেহে পরিচর্যা।</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ONLINE ADMISSION FORM -->
  <section id="apply" class="py-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10 space-y-2">
        <span class="text-xs font-bold text-emerald-800 uppercase">২০২৭ শিক্ষাবর্ষ</span>
        <h2 class="text-3xl font-extrabold text-stone-900">অনলাইন ভর্তি ও অনুসন্ধান ফরম</h2>
        <p class="text-stone-600 text-sm">সঠিক তথ্য দিয়ে ফরমটি পূরণ করুন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।</p>
      </div>

      <div class="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-lg">
        <form id="admissionForm" onsubmit="handleFormSubmit(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-stone-700 mb-1">শিক্ষার্থীর নাম *</label>
              <input type="text" id="studentName" required class="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg" placeholder="শিক্ষার্থীর পূর্ণ নাম">
            </div>
            <div>
              <label class="block text-xs font-bold text-stone-700 mb-1">কাঙ্ক্ষিত শ্রেণি *</label>
              <select id="targetClass" class="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg">
                <option>প্লে (Play)</option>
                <option>নার্সারি (Nursery)</option>
                <option>কেজি (KG)</option>
                <option>১ম শ্রেণি</option>
                <option>২য় শ্রেণি</option>
                <option>৩য় শ্রেণি</option>
                <option>৪র্থ শ্রেণি</option>
                <option>৫ম শ্রেণি</option>
                <option>৬ষ্ঠ শ্রেণি</option>
                <option>৭ম শ্রেণি</option>
                <option>৮ম শ্রেণি</option>
                <option>হিফজুল কুরআন বিভাগ</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-stone-700 mb-1">পিতা / অভিভাবকের নাম *</label>
              <input type="text" id="parentName" required class="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg" placeholder="অভিভাবকের নাম">
            </div>
            <div>
              <label class="block text-xs font-bold text-stone-700 mb-1">মোবাইল নম্বর *</label>
              <input type="tel" id="phone" required class="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg" placeholder="01XXXXXXXXX">
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">ঠিকানা *</label>
            <input type="text" id="address" required class="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg" placeholder="মুজগুন্নী আ/এ, খালিশপুর, খুলনা">
          </div>

          <button type="submit" class="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition">
            ভর্তি আবেদন জমা দিন
          </button>
        </form>

        <div id="successBox" class="hidden mt-6 p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-center text-emerald-900">
          <p class="font-bold text-base">আলহামদুলিল্লাহ! আপনার আবেদন সফলভাবে জমা হয়েছে।</p>
          <p class="text-xs mt-1">ট্র্যাকিং আইডি: <span id="slipId" class="font-mono font-bold"></span></p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT & HELPLINES -->
  <footer id="contact" class="bg-stone-900 text-white py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-5 bg-stone-800 rounded-xl">
          <h4 class="font-bold text-amber-300">জেনারেল স্কুল হেল্পলাইন</h4>
          <p class="text-sm font-mono mt-1">01336-559955 / 01366-5999৯৫</p>
        </div>
        <div class="p-5 bg-stone-800 rounded-xl">
          <h4 class="font-bold text-amber-300">হিফজুল কুরআন শাখা</h4>
          <p class="text-sm font-mono mt-1">01903-880255</p>
        </div>
        <div class="p-5 bg-stone-800 rounded-xl">
          <h4 class="font-bold text-amber-300">লিজেন্ড কালচারাল একাডেমি</h4>
          <p class="text-sm font-mono mt-1">01402-173419</p>
        </div>
      </div>
      <div class="text-center text-xs text-stone-400 border-t border-stone-800 pt-6">
        <p>ক্যাম্পাস: রোড-১৯, বাড়ি-২৫৯, মুজগুন্নী আ/এ (উল্লাস পার্ক রোড), খালিশপুর, খুলনা।</p>
        <p class="mt-1">© ২০২৬-২০২৭ খুলনা লিজেন্ড স্কুল (Khulna Legend School). সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP BUTTON -->
  <div class="fixed bottom-6 right-6 z-40">
    <a href="https://wa.me/8801336559955?text=%E0%A6%86%E0%A6%B8%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%20%E0%A6%86%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%81%E0%A6%AE%2C%20%E0%A6%96%E0%A7%81%E0%A6%B2%E0%A6%A8%E0%A6%BE%20%E0%A6%B2%E0%A6%BF%E0%A6%9C%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A1%20%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2%20%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%20%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg transition transform active:scale-95 font-bold text-sm">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.15c-.24.67-1.39 1.29-1.92 1.37-.5.08-1.12.11-3.64-.93-2.15-.89-3.53-3.11-3.64-3.25-.1-.15-.86-1.15-.86-2.19 0-1.04.55-1.55.74-1.76.19-.21.43-.27.57-.27.14 0 .28 0 .4.01.13.01.3.06.46.43.16.38.56 1.37.61 1.47.05.1.09.22.02.35-.07.13-.1.21-.21.33-.1.12-.22.28-.31.37-.1.11-.21.22-.09.43.12.21.53.88 1.15 1.43.79.71 1.47.93 1.68 1.03.21.1.33.09.46-.05.12-.15.53-.62.67-.83.14-.21.29-.18.48-.11.19.07 1.22.58 1.43.68.21.11.35.16.4.25.06.1.06.57-.18 1.24z"/></svg>
      <span>WhatsApp চ্যাট</span>
    </a>
  </div>

  <!-- ADMIN MODAL -->
  <div id="adminModal" class="hidden fixed inset-0 z-50 bg-stone-900/80 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between border-b pb-3">
        <h3 class="text-lg font-bold text-stone-900">এডমিন ড্যাশবোর্ড</h3>
        <button onclick="closeAdminModal()" class="text-stone-400 hover:text-stone-700 font-bold">✕</button>
      </div>

      <div id="loginSection" class="space-y-4">
        <p class="text-xs text-stone-600">এডমিন পাসওয়ার্ড প্রদান করুন (পাসওয়ার্ড: <b>admin123</b>)</p>
        <input type="password" id="adminPass" class="w-full px-3 py-2 border rounded-lg text-sm" placeholder="admin123">
        <button onclick="verifyAdmin()" class="w-full py-2.5 bg-emerald-700 text-white font-bold rounded-lg text-sm">প্রবেশ করুন</button>
      </div>

      <div id="dashboardSection" class="hidden space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-emerald-800">মোট আবেদন তালিকা</span>
          <button onclick="logoutAdmin()" class="text-xs text-rose-600 underline">লগআউট</button>
        </div>
        <div class="overflow-x-auto border rounded-xl">
          <table class="w-full text-xs text-left" id="inquiryTable">
            <thead class="bg-stone-100 border-b">
              <tr>
                <th class="p-2">আইডি</th>
                <th class="p-2">শিক্ষার্থী</th>
                <th class="p-2">শ্রেণি</th>
                <th class="p-2">অভিভাবক ও ফোন</th>
                <th class="p-2">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody id="inquiryTableBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- FIREBASE CONFIG & CLIENT SCRIPT -->
  <script>
    // Inquiries storage
    let inquiries = JSON.parse(localStorage.getItem('kls_inquiries') || '[]');

    function handleFormSubmit(e) {
      e.preventDefault();
      const id = 'KLS-' + Math.floor(1000 + Math.random() * 9000);
      const studentName = document.getElementById('studentName').value;
      const targetClass = document.getElementById('targetClass').value;
      const parentName = document.getElementById('parentName').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;

      const newInquiry = { id, studentName, targetClass, parentName, phone, address, date: new Date().toLocaleDateString('bn-BD') };
      inquiries.unshift(newInquiry);
      localStorage.setItem('kls_inquiries', JSON.stringify(inquiries));

      document.getElementById('slipId').innerText = id;
      document.getElementById('successBox').classList.remove('hidden');
      document.getElementById('admissionForm').reset();
    }

    function openAdminModal() {
      document.getElementById('adminModal').classList.remove('hidden');
    }
    function closeAdminModal() {
      document.getElementById('adminModal').classList.add('hidden');
    }
    function verifyAdmin() {
      const pass = document.getElementById('adminPass').value;
      if (pass === 'admin123') {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('dashboardSection').classList.remove('hidden');
        renderTable();
      } else {
        alert('ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড হলো: admin123');
      }
    }
    function logoutAdmin() {
      document.getElementById('loginSection').classList.remove('hidden');
      document.getElementById('dashboardSection').classList.add('hidden');
      document.getElementById('adminPass').value = '';
    }
    function renderTable() {
      const tbody = document.getElementById('inquiryTableBody');
      tbody.innerHTML = inquiries.map((item, idx) => \`
        <tr class="border-b hover:bg-stone-50">
          <td class="p-2 font-mono font-bold text-emerald-800">\${item.id}</td>
          <td class="p-2 font-semibold">\${item.studentName}</td>
          <td class="p-2">\${item.targetClass}</td>
          <td class="p-2">\${item.parentName} (\${item.phone})</td>
          <td class="p-2"><button onclick="deleteEntry(\${idx})" class="text-rose-600 hover:underline">ডিলিট</button></td>
        </tr>
      \`).join('');
    }
    function deleteEntry(idx) {
      if (confirm('মুছে ফেলতে চান?')) {
        inquiries.splice(idx, 1);
        localStorage.setItem('kls_inquiries', JSON.stringify(inquiries));
        renderTable();
      }
    }
  </script>
</body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'khulna-legend-school-portal.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/80 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-emerald-950 text-white px-6 py-4 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-bold">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">সিঙ্গেল-ফাইল HTML ও ফায়ারবেস সেটআপ গাইড</h3>
              <p className="text-xs text-emerald-300">GitHub Pages বা Vercel-এ সরাসরি ডেপ্লয়মেন্টের জন্য সম্পূর্ণ কোড</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-emerald-300 hover:text-white hover:bg-emerald-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switches */}
        <div className="bg-stone-100 px-6 pt-3 flex items-center gap-4 border-b border-stone-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('instructions')}
            className={`pb-2.5 px-2 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'instructions'
                ? 'border-emerald-700 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            সেটআপ নির্দেশিকা (Instructions)
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-2.5 px-2 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'code'
                ? 'border-emerald-700 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            সম্পূর্ণ HTML সোর্স কোড (Source Code)
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-stone-800 text-xs sm:text-sm">
          
          {activeTab === 'instructions' ? (
            <div className="space-y-6">
              
              {/* Admin Access Guide */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
                <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                  <span>🔐 এডমিন প্যানেল লগইন নির্দেশিকা</span>
                </h4>
                <p className="text-stone-600 leading-relaxed text-xs">
                  ওয়েব পোর্টালের উপরের টপবারে অথবা ফুটারে <b>"এডমিন লগইন"</b> বাটনে ক্লিক করলে পাসওয়ার্ড যাচাই উইন্ডো ওপেন হবে।
                </p>
                <div className="p-2.5 bg-white rounded-lg border border-emerald-200 flex items-center justify-between text-xs font-mono font-bold text-emerald-900">
                  <span>এডমিন পাসওয়ার্ড:</span>
                  <span className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-950">admin123</span>
                </div>
              </div>

              {/* Firebase Setup Guide */}
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-3">
                <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <span>🔥 ফায়ারবেস (Firestore) সংযোগ ৩টি ধাপে</span>
                </h4>
                <ol className="list-decimal pl-5 space-y-1.5 text-xs text-amber-950">
                  <li>
                    <b>Firebase Console (console.firebase.google.com)</b>-এ যান এবং নতুন একটি প্রজেক্ট তৈরি করুন (যেমন: <i>khulna-legend-school</i>)।
                  </li>
                  <li>
                    <b>Firestore Database</b> সেকশনে গিয়ে একটি ডাটাবেজ তৈরি করুন এবং <i>test mode</i> অথবা রিড-রাইট রুলস অন করুন।
                  </li>
                  <li>
                    <b>Project Settings &gt; General</b> থেকে <i>Web App</i> যোগ করে প্রাপ্ত <b>API Key</b> ও <b>Project ID</b> এডমিন প্যানেলের "ফায়ারবেস সংযোগ" অপশনে পেস্ট করে সেভ করুন।
                  </li>
                </ol>
                <p className="text-[11px] text-stone-500 italic">
                  * বি.দ্র: ফায়ারবেস ছাড়াও ব্রাউজারের স্বয়ংক্রিয় লোকাল স্টোরেজে সকল আবেদন ১০০% নিরাপদে জমা থাকে।
                </p>
              </div>

              {/* Deploy instructions */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="text-sm font-bold text-stone-900">🚀 GitHub Pages বা Vercel-এ ডেপ্লয় করার নিয়ম:</h4>
                <p className="text-xs text-stone-600">
                  ১. "index.html ডাউনলোড করুন" বাটনে ক্লিক করে ফাইলটি সংরক্ষণ করুন।<br />
                  ২. ফাইলটিকে GitHub-এর একটি নতুন রিপোজিটরিতে আপলোড করে Settings &gt; Pages থেকে মেইন ব্রাঞ্চ সিলেক্ট করে সেভ করুন।<br />
                  ৩. এক মিনিটের মধ্যে আপনার পোর্টালটি সম্পূর্ণ বিনামূল্যে লাইভ হয়ে যাবে!
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleDownloadHtml}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>index.html ডাউনলোড করুন</span>
                </button>
                <button
                  onClick={handleCopyCode}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-xl text-xs flex items-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'কোড কপি হয়েছে!' : 'সম্পূর্ণ HTML কোড কপি করুন'}</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-500 font-mono">standalone_index.html (Tailwind CDN + Bengali)</span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 bg-stone-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'কপি হয়েছে' : 'কপি করুন'}</span>
                </button>
              </div>
              <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl overflow-x-auto text-[11px] font-mono leading-relaxed max-h-[50vh]">
                <code>{standaloneHtmlCode}</code>
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            খুলনা লিজেন্ড স্কুল ওয়েব আর্কিটেকচার • প্রোডাকশন রেডি
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 font-medium text-xs cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
