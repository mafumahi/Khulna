import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'event' | 'campus';
  categoryLabel: string;
  imageSrc: string;
  description: string;
  date: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'খুলনা লিজেন্ড স্কুল প্রধান ক্যাম্পাস প্রাঙ্গণ',
    category: 'campus',
    categoryLabel: 'ক্যাম্পাস জীবন',
    imageSrc: '/src/assets/images/hero_school_campus_1792983871256.jpg',
    description: 'সবুজ চত্বর, সুপরিসর আর্কিটেকচারাল ভবন এবং সিসিটিভি নিয়ন্ত্রিত নিরাপদ শিক্ষাঙ্গন।',
    date: 'সেশন ২০২৬-২০২৭'
  },
  {
    id: 'gal-2',
    title: 'সৃজনশীল প্রাথমিক ক্লাসরুম ও অ্যাক্টিভিটি',
    category: 'classroom',
    categoryLabel: 'শ্রেণিকক্ষ ও পাঠদান',
    imageSrc: '/src/assets/images/classroom_creative_learning_1792983872162.jpg',
    description: 'মুখস্থ নয়, হাতে-কলমে প্রজেক্ট ও আনন্দময় পরিবেশে শিক্ষার্থীদের মেধা বিকাশ।',
    date: 'দৈনন্দিন পাঠদান'
  },
  {
    id: 'gal-3',
    title: 'বিজ্ঞান ও রোবোটিক্স ল্যাব পর্যবেক্ষণ',
    category: 'classroom',
    categoryLabel: 'শ্রেণিকক্ষ ও পাঠদান',
    imageSrc: '/src/assets/images/science_stem_activity_1792985908891.jpg',
    description: 'শিশুদের কৌতুহল জাগিয়ে তুলতে বাস্তবমুখী বিজ্ঞান মডেল ও এক্সপেরিমেন্ট সেশন।',
    date: 'সায়েন্স অ্যান্ড টেক ফেয়ার'
  },
  {
    id: 'gal-4',
    title: 'তাজবিদ সহ কুরআন তেলাওয়াত ও ক্যালিগ্রাফি',
    category: 'classroom',
    categoryLabel: 'শ্রেণিকক্ষ ও পাঠদান',
    imageSrc: '/src/assets/images/cultural_quran_calligraphy_1792983872905.jpg',
    description: 'হিফজুল কুরআন বিভাগ ও লিজেন্ড কালচারাল একাডেমির নিয়মিত ক্যালিগ্রাফি প্রশিক্ষণ।',
    date: 'হিফজ ও ইসলামিক উইং'
  },
  {
    id: 'gal-5',
    title: 'মঞ্চে সাবলীল বক্তৃতা ও বার্ষিক সাংস্কৃতিক উৎসব',
    category: 'event',
    categoryLabel: 'ইভেন্ট ও উৎসব',
    imageSrc: '/src/assets/images/speech_presentation_stage_1792985908120.jpg',
    description: 'শিশুদের জড়তা দূর করতে মিলনায়তনে নিয়মিত উপস্থিত বক্তৃতা ও উপস্থাপনা প্রতিযোগিতা।',
    date: 'বার্ষিক সাংস্কৃতিক উৎসব'
  },
  {
    id: 'gal-6',
    title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ও অ্যাথলেটিক্স দৌড়',
    category: 'campus',
    categoryLabel: 'ক্যাম্পাস জীবন',
    imageSrc: '/src/assets/images/annual_sports_event_1792985908087.jpg',
    description: 'সুস্থ দেহ ও প্রফুল্ল মনের জন্য উন্মুক্ত খেলার মাঠে শিশুদের প্রাণবন্ত দৌড় প্রতিযোগিতা।',
    date: 'বার্ষিক ক্রীড়া উৎসব'
  }
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'classroom' | 'event' | 'campus'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            <span>আমাদের আনন্দময় আঙিনা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            স্কুল ফটো গ্যালারি (Campus Photo Gallery)
          </h2>
          <p className="text-base text-stone-600">
            শ্রেণিকক্ষের বাস্তবমুখী শিক্ষা, বার্ষিক ক্রীড়া-উৎসব ও শিক্ষার্থীদের সাংস্কৃতিক আত্মবিশ্বাসের খণ্ডচিত্র।
          </p>
        </div>

        {/* Filter Segmented Control (Interactive Functional Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            সকল ছবি ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter('classroom')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'classroom'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            শ্রেণিকক্ষ ও পাঠদান
          </button>
          <button
            onClick={() => setFilter('event')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'event'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            ইভেন্ট ও উৎসব
          </button>
          <button
            onClick={() => setFilter('campus')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'campus'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            ক্যাম্পাস জীবন ও খেলাধুলা
          </button>
        </div>

        {/* Responsive Grid Layout (2-col on mobile, 3-col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all cursor-pointer flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle scrim overlay on hover */}
                <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5 text-emerald-800" />
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-900 shadow-xs">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span>{item.date}</span>
                  <span className="font-semibold text-emerald-700 group-hover:underline">বড় করে দেখুন →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-800 animate-in zoom-in-95"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="max-h-[65vh] bg-stone-950 flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].imageSrc}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="p-6 bg-white space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span className="font-bold text-emerald-800 uppercase tracking-wide">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <span>{lightboxIndex + 1} / {filteredItems.length}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
