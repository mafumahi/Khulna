import React, { useState } from 'react';
import { Send, CheckCircle2, Printer, RefreshCw, User, Phone, MapPin, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { AVAILABLE_CLASSES, SCHOOL_INFO } from '../data/initialData';
import { storageService } from '../services/storage';
import { AdmissionInquiry, BranchType } from '../types';

interface AdmissionFormProps {
  onInquirySubmitted?: (inquiry: AdmissionInquiry) => void;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({ onInquirySubmitted }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'ছেলে' as 'ছেলে' | 'মেয়ে',
    targetClass: 'প্লে (Play)',
    branch: 'general' as BranchType,
    parentName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    notes: 'ভর্তি উৎসব ২০২৬-এ উপস্থিত থাকতে আগ্রহী।'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<AdmissionInquiry | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) {
      errs.studentName = 'শিক্ষার্থীর নাম আবশ্যক';
    }
    if (!formData.parentName.trim()) {
      errs.parentName = 'পিতা বা অভিভাবকের নাম আবশ্যক';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'মোবাইল নম্বর আবশ্যক';
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      errs.phone = 'সঠিক ১১ ডিজিটের মোবাইল নম্বর লিখুন (যেমন: 01712345678)';
    }
    if (!formData.address.trim()) {
      errs.address = 'বর্তমান ঠিকানা প্রদান করুন';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = storageService.addInquiry({
        studentName: formData.studentName.trim(),
        gender: formData.gender,
        targetClass: formData.targetClass,
        branch: formData.branch,
        parentName: formData.parentName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        address: formData.address.trim(),
        previousSchool: formData.previousSchool.trim() || undefined,
        notes: formData.notes.trim() || undefined
      });

      setSubmittedInquiry(created);
      setIsSubmitting(false);
      if (onInquirySubmitted) onInquirySubmitted(created);
    }, 400);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const handleResetForm = () => {
    setSubmittedInquiry(null);
    setFormData({
      studentName: '',
      gender: 'ছেলে',
      targetClass: 'প্লে (Play)',
      branch: 'general',
      parentName: '',
      phone: '',
      email: '',
      address: '',
      previousSchool: '',
      notes: ''
    });
    setErrors({});
  };

  return (
    <section id="apply-form" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 border border-emerald-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>অনলাইন ভর্তি ও অনুসন্ধান পোর্টাল</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            অনলাইন ভর্তি ও তথ্য অনুসন্ধান ফরম
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            আপনার সন্তানের জন্য নিচে দেওয়া ফরমটি নির্ভুলভাবে পূরণ করুন। আবেদন জমা হওয়ার সাথে সাথে আপনি একটি ট্র্যাকিং স্লিপ পাবেন এবং আমাদের প্রতিনিধি অতি দ্রুত আপনার সাথে যোগাযোগ করবেন।
          </p>
        </div>

        {/* Confirmation Slip State */}
        {submittedInquiry ? (
          <div className="bg-white text-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400/80 animate-in fade-in zoom-in-95 duration-300 print:border-none print:shadow-none print:p-0">
            
            {/* Header of Receipt */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-stone-200 pb-6 gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">
                  ভর্তি আবেদন প্রাপ্তিস্বীকার পত্র
                </span>
                <h3 className="text-2xl font-bold text-stone-900">
                  খুলনা লিজেন্ড স্কুল (Khulna Legend School)
                </h3>
                <p className="text-xs text-stone-500">
                  {SCHOOL_INFO.address.fullBn}
                </p>
              </div>

              <div className="text-center sm:text-right bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                <span className="text-[11px] font-semibold text-emerald-800 block">ট্র্যাকিং নম্বর (ID)</span>
                <span className="text-lg font-mono font-bold text-emerald-950 tracking-wider">
                  {submittedInquiry.id}
                </span>
              </div>
            </div>

            {/* Success alert message */}
            <div className="my-6 p-4 rounded-xl bg-emerald-100/70 border border-emerald-300 flex items-center gap-3 text-emerald-900">
              <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold">আলহামদুলিল্লাহ! আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে।</span>
                <p className="text-emerald-800 text-xs mt-0.5">
                  আগামী ২৪ ঘণ্টার মধ্যে আমাদের শিক্ষা কাউন্সিলর আপনার দেওয়া মোবাইল নম্বরে যোগাযোগ করবেন।
                </p>
              </div>
            </div>

            {/* Application Data Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-stone-50 p-5 rounded-2xl border border-stone-200">
              <div>
                <span className="text-stone-500 block text-xs">শিক্ষার্থীর নাম:</span>
                <span className="font-bold text-stone-900">{submittedInquiry.studentName} ({submittedInquiry.gender})</span>
              </div>
              <div>
                <span className="text-stone-500 block text-xs">কাঙ্ক্ষিত শ্রেণি:</span>
                <span className="font-bold text-emerald-800">{submittedInquiry.targetClass}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-xs">পিতা / অভিভাবকের নাম:</span>
                <span className="font-semibold text-stone-900">{submittedInquiry.parentName}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-xs">মোবাইল নম্বর:</span>
                <span className="font-mono font-bold text-stone-900">{submittedInquiry.phone}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-stone-500 block text-xs">ঠিকানা:</span>
                <span className="text-stone-800">{submittedInquiry.address}</span>
              </div>
              {submittedInquiry.notes && (
                <div className="sm:col-span-2 pt-2 border-t border-stone-200">
                  <span className="text-stone-500 block text-xs">মন্তব্য / আগ্রহ:</span>
                  <span className="text-stone-700 italic">{submittedInquiry.notes}</span>
                </div>
              )}
            </div>

            {/* Important instructions */}
            <div className="mt-6 text-xs text-stone-600 bg-amber-50/60 p-4 rounded-xl border border-amber-200">
              <p className="font-bold text-amber-950 mb-1">গুরুত্বপূর্ণ নির্দেশনা:</p>
              <p>১. বুধবার, ২৮ অক্টোবর '২৬ সকাল ৯:৩০ টায় খুলনা লিজেন্ড স্কুলের ভর্তি উৎসবে উপস্থিত হয়ে এই স্লিপ দেখালে স্পট অ্যাডমিশনে অগ্রাধিকার পাবেন।</p>
              <p>২. যে কোনো তথ্যের জন্য সরাসরি কল করুন: <span className="font-bold text-stone-900">01336-559955</span></p>
            </div>

            {/* Actions: Print and Reset */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200 print:hidden">
              <button
                onClick={handlePrintSlip}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl cursor-pointer shadow-sm transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>স্লিপ প্রিন্ট / সংরক্ষণ</span>
              </button>

              <button
                onClick={handleResetForm}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 text-xs font-semibold rounded-xl cursor-pointer transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>নতুন আরেকটি আবেদন করুন</span>
              </button>
            </div>

          </div>
        ) : (
          /* Form Entry State */
          <div className="bg-white text-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-800/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Student Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
                    শিক্ষার্থীর পূর্ণ নাম <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="যেমন: রায়ান মাহমুদ"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                        errors.studentName ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                      } focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
                    লিঙ্গ নির্বাচন <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: 'ছেলে' })}
                      className={`py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        formData.gender === 'ছেলে'
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      ছেলে
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: 'মেয়ে' })}
                      className={`py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        formData.gender === 'মেয়ে'
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      মেয়ে
                    </button>
                  </div>
                </div>

                {/* Target Class */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
                    কাঙ্ক্ষিত শ্রেণি <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.targetClass}
                    onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all cursor-pointer"
                  >
                    {AVAILABLE_CLASSES.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Branch Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
                    আগ্রহের বিভাগ / শাখা <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value as BranchType })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="general">জেনারেল স্কুল বিভাগ (প্লে - ৮ম শ্রেণি)</option>
                    <option value="hifz">হিফজুল কুরআন বিভাগ (তাজবিদ সহ)</option>
                    <option value="cultural">লিজেন্ড কালচারাল একাডেমি (বক্তৃতা ও হাতের লেখা)</option>
                    <option value="daycare">ডে-কেয়ার ও স্পেশাল কোচিং</option>
                  </select>
                </div>

                {/* Parent / Guardian Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
                    পিতা / অভিভাবকের নাম <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="যেমন: মাহমুদুল হাসান"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                      errors.parentName ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all`}
                  />
                  {errors.parentName && (
                    <p className="text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
                    মোবাইল নম্বর <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                      errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-mono`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide">
                  বর্তমান ঠিকানা (খুলনা বা পার্শ্ববর্তী এলাকা) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="বাড়ি/রোড নং, এলাকা, থানা (যেমন: মুজগুন্নী আ/এ, খালিশপুর, খুলনা)"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                    errors.address ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all`}
                />
                {errors.address && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>

              {/* Extra Optional Row: Previous School & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-stone-600">
                    পূর্ববর্তী বিদ্যালয়ের নাম (যদি থাকে)
                  </label>
                  <input
                    type="text"
                    placeholder="আগের স্কুলের নাম"
                    value={formData.previousSchool}
                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-stone-600">
                    অভিভাবকের মন্তব্য / বিশেষ আগ্রহ
                  </label>
                  <input
                    type="text"
                    placeholder="যেমন: ভর্তি উৎসবের দিন ক্যাম্পাসে উপস্থিত হব"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-base font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 active:scale-99 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>আবেদন সংরক্ষণ করা হচ্ছে...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-stone-900" />
                      <span>ভর্তি আবেদন ও তথ্য অনুসন্ধান জমা দিন</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-stone-500 mt-3">
                  * আপনার দেওয়া সকল তথ্য খুলনা লিজেন্ড স্কুলের সিস্টেমে গোপনীয় ও সুরক্ষিত থাকবে।
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
