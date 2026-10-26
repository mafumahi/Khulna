import { AdmissionInquiry } from '../types';

export const SCHOOL_INFO = {
  nameBn: 'খুলনা লিজেন্ড স্কুল',
  nameEn: 'Khulna Legend School',
  tagline: 'সন্তানের ভবিষ্যৎ যেখানে নিরাপদ, সেখানে সম্ভাবনার দুয়ার খোলা!',
  subquote: 'মানসম্মত আধুনিক শিক্ষা ও নৈতিক মূল্যবোধের সমন্বয়ে আগামী প্রজন্মের যোগ্য ও মানবিক নেতৃত্ব গড়ার আস্থার ঠিকানা।',
  established: '২০২২',
  address: {
    road: 'রোড-১৯, বাড়ি-২৫৯',
    area: 'মুজগুন্নী আ/এ (উল্লাস পার্ক রোড)',
    thana: 'খালিশপুর',
    city: 'খুলনা',
    fullBn: 'রোড-১৯, বাড়ি-২৫৯, মুজগুন্নী আ/এ (উল্লাস পার্ক রোড), খালিশপুর, খুলনা।'
  },
  helplines: [
    {
      id: 'general',
      titleBn: 'জেনারেল স্কুল হেল্পলাইন',
      titleEn: 'General School Helpline',
      numbers: ['01336-559955', '01366-599995'],
      hours: 'সকাল ৮:০০ - বিকাল ৪:৩০',
      color: 'emerald'
    },
    {
      id: 'hifz',
      titleBn: 'হিফজুল কুরআন বিভাগ',
      titleEn: 'Hifzul Quran Branch',
      numbers: ['01903-880255'],
      hours: 'সকাল ৭:০০ - রাত ৮:০০',
      color: 'amber'
    },
    {
      id: 'cultural',
      titleBn: 'লিজেন্ড কালচারাল একাডেমি',
      titleEn: 'Legend Cultural Academy',
      numbers: ['01402-173419'],
      hours: 'বিকাল ৩:০০ - সন্ধ্যা ৭:০০',
      color: 'blue'
    }
  ]
};

export const FESTIVAL_DATE = '2026-10-28T09:30:00'; // বুধবার, ২৮ অক্টোবর '২৬, সকাল ৯:৩০ মি.

export const INITIAL_INQUIRIES: AdmissionInquiry[] = [
  {
    id: 'KLS-2027-1001',
    studentName: 'রায়ান মাহমুদ',
    gender: 'ছেলে',
    targetClass: '১ম শ্রেণি',
    branch: 'general',
    parentName: 'মাহমুদুল হাসান',
    phone: '01712-345678',
    email: 'mahmud.h@gmail.com',
    address: 'মুজগুন্নী মেইন রোড, খালিশপুর, খুলনা',
    previousSchool: 'লিটল স্টার কিন্ডারগার্টেন',
    notes: 'ভর্তি উৎসবের দিন ক্যাম্পাসে সরাসরি এসে ভর্তি হতে আগ্রহী।',
    status: 'ভর্তি নিশ্চিত',
    createdAt: '2026-10-24T10:15:00.000Z',
    adminNotes: 'অভিভাবকের সাথে কথা হয়েছে। প্রথম কিস্তি পরিশোধিত।'
  },
  {
    id: 'KLS-2027-1002',
    studentName: 'তাসমিয়া জাহান আনিসা',
    gender: 'মেয়ে',
    targetClass: 'নার্সারি',
    branch: 'general',
    parentName: 'ফারুক আহমেদ',
    phone: '01911-223344',
    email: 'faruk.khulna@yahoo.com',
    address: 'বয়রা বাজার মোড়, খুলনা',
    previousSchool: 'প্লে হোম',
    notes: 'স্কুল ভ্যান বা যাতায়াত সুবিধার তথ্য জানতে চাই।',
    status: 'যোগাযোগ সম্পন্ন',
    createdAt: '2026-10-24T14:40:00.000Z',
    adminNotes: 'ভ্যান রুট ২-এর শিডিউল ফোন কলে বুঝিয়ে দেওয়া হয়েছে।'
  },
  {
    id: 'KLS-2027-1003',
    studentName: 'মুহাম্মদ আব্দুল্লাহ',
    gender: 'ছেলে',
    targetClass: 'হিফজুল কুরআন বিভাগ',
    branch: 'hifz',
    parentName: 'মাওলানা নজরুল ইসলাম',
    phone: '01815-998877',
    address: 'দৌলতপুর, খুলনা',
    previousSchool: 'মাদরাসাতুত তাওহীদ',
    notes: 'তাজবিদ সহ নাজেরা সম্পন্ন করেছে, হিফজ শুরু করতে চায়।',
    status: 'নতুন',
    createdAt: '2026-10-25T09:20:00.000Z',
    adminNotes: ''
  },
  {
    id: 'KLS-2027-1004',
    studentName: 'আরিয়ান রহমান',
    gender: 'ছেলে',
    targetClass: 'কেজি',
    branch: 'cultural',
    parentName: 'মোঃ শফিকুর রহমান',
    phone: '01552-667788',
    address: 'খালিশপুর হাউজিং এস্টেট, খুলনা',
    notes: 'সুন্দর হাতের লেখা ও বক্তৃতা ক্লাসে অতিরিক্ত জোর দিতে চাই।',
    status: 'নতুন',
    createdAt: '2026-10-25T11:05:00.000Z',
    adminNotes: ''
  }
];

export const SCHOOL_FEATURES = [
  {
    number: '০১',
    title: 'মানসম্মত ও আধুনিক শিক্ষা',
    subtitle: 'Quality & Modern Education',
    description: 'ডিজিটাল প্রজেক্টর ও মাল্টিমিডিয়া ক্লাসরুমের মাধ্যমে যুগোপযোগী পাঠদান। আধুনিক কারিকুলাম ও আন্তর্জাতিক মানের সিলেবাস অনুযায়ী পাঠ পরিচালনা।',
    highlight: 'স্মার্ট ক্লাসরুম ও অ্যাক্টিভিটি ল্যাব'
  },
  {
    number: '০২',
    title: 'মুখস্থ নির্ভরতা কমিয়ে সৃজনশীল বিকাশ',
    subtitle: 'Creative Development',
    description: 'তোতাপাখির মতো মুখস্থ না করিয়ে বাস্তব অভিজ্ঞতা ও হাতে-কলমে প্রজেক্টের মাধ্যমে বিষয়বস্তু অনুধাবন। প্রতিটি শিশুর স্বাভাবিক বুদ্ধিমত্তা বিকাশ।',
    highlight: 'হাতে-কলমে বিজ্ঞান ও শিল্পকর্ম'
  },
  {
    number: '০৩',
    title: 'নৈতিক ও আদর্শিক মূল্যবোধ / আদব-কায়দা',
    subtitle: 'Moral & Ethical Values',
    description: 'বড়দের শ্রদ্ধা, ছোটদের স্নেহ, সত্যবাদিতা এবং দৈনন্দিন জীবনের সুন্নতি আদব ও আচরণিক শৃঙ্খলা গঠনে বিশেষ নজরদারি ও নিয়মিত কাউন্সেলিং।',
    highlight: 'প্রতিদিনের বাস্তব আমল ও মূল্যবোধ চর্চা'
  },
  {
    number: '০৪',
    title: 'তেলাওয়াত, আযান, উপস্থাপনা, বক্তৃতা ও সুন্দর হাতের লেখা',
    subtitle: 'Holistic Cultural Excellence',
    description: 'শুদ্ধ কুরআন তেলাওয়াত, প্রাঞ্জল কণ্ঠে আযান, মঞ্চে জড়তাহীন বক্তৃতা-উপস্থাপনা এবং বাংলা ও ইংরেজি অক্ষরের দৃষ্টিনন্দন হস্তলিপি নিশ্চিতকরণ।',
    highlight: 'লিজেন্ড কালচারাল একাডেমি প্রশিক্ষণ'
  },
  {
    number: '০৫',
    title: 'সিসিটিভি নিয়ন্ত্রিত নিরাপদ ও মমতাময় ক্যাম্পাস',
    subtitle: 'CCTV Secured & Caring Campus',
    description: 'সার্বক্ষণিক সিসিটিভি ক্যামেরা ও নিরাপত্তা প্রহরী সম্বলিত সুরক্ষিত চত্বর। প্রশিক্ষিত ও মমতাময়ী শিক্ষক-শিক্ষিকা কর্তৃক মাতৃস্নেহে পরিচর্যা।',
    highlight: '২৪/৭ সিসিটিভি ও স্বাস্থ্যকর পরিবেশ'
  }
];

export const AVAILABLE_CLASSES = [
  'প্লে (Play)',
  'নার্সারি (Nursery)',
  'কেজি (KG)',
  '১ম শ্রেণি (Class 1)',
  '২য় শ্রেণি (Class 2)',
  '৩য় শ্রেণি (Class 3)',
  '৪র্থ শ্রেণি (Class 4)',
  '৫ম শ্রেণি (Class 5)',
  '৬ষ্ঠ শ্রেণি (Class 6)',
  '৭ম শ্রেণি (Class 7)',
  '৮ম শ্রেণি (Class 8)',
  'হিফজুল কুরআন বিভাগ (Hifz Dept.)'
];
