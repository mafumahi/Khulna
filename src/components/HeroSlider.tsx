import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Sparkles, ShieldCheck, BookOpen, Pause, Play } from 'lucide-react';

interface Slide {
  id: number;
  badge: string;
  headline: string;
  highlightedText: string;
  subtitle: string;
  imageSrc: string;
  primaryCtaText: string;
  primaryCtaAction: string;
  secondaryCtaText: string;
  secondaryCtaAction: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: '২০২৭ শিক্ষাবর্ষে ভর্তি চলছে',
    headline: 'সন্তানের ভবিষ্যৎ যেখানে নিরাপদ,',
    highlightedText: 'সেখানে সম্ভাবনার দুয়ার খোলা!',
    subtitle: 'নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে মুখস্থ নির্ভরতার বিপরীতে আনন্দময় ও সৃজনশীল পাঠদান। প্রতিটি শিশুর মানসিক বিকাশ নিশ্চিত করে গড়ে তুলছি আগামী প্রজন্মের আত্মবিশ্বাসী নেতৃত্ব।',
    imageSrc: '/src/assets/images/hero_school_campus_1792983871256.jpg',
    primaryCtaText: 'অনলাইন ভর্তি আবেদন',
    primaryCtaAction: 'apply-form',
    secondaryCtaText: 'ভর্তি উৎসব ২০২৬ (২৮ অক্টোবর)',
    secondaryCtaAction: 'festival'
  },
  {
    id: 2,
    badge: 'সৃজনশীল ও মুখস্থহীন ক্লাসরুম',
    headline: 'তোতাপাখির মতো মুখস্থ নয়,',
    highlightedText: 'বাস্তব অভিজ্ঞতা ও আনন্দময় শিক্ষা!',
    subtitle: 'স্মার্ট ক্লাসরুম, মাল্টিমিডিয়া প্রজেক্টর, হাতে-কলমে বিজ্ঞান ও শিল্পকর্ম চর্চা। আন্তরিক ও মমতাময়ী শিক্ষকমণ্ডলীর গভীর মাতৃস্নেহে গড়ে ওঠে শিশুর উজ্জ্বল ভবিষ্যৎ।',
    imageSrc: '/src/assets/images/classroom_creative_learning_1792983872162.jpg',
    primaryCtaText: 'আমাদের বৈশিষ্ট্যসমূহ',
    primaryCtaAction: 'features',
    secondaryCtaText: 'অনলাইন ফরম পূরণ',
    secondaryCtaAction: 'apply-form'
  },
  {
    id: 3,
    badge: 'হিফজুল কুরআন ও কালচারাল একাডেমি',
    headline: 'তাজবিদ সহ বিশুদ্ধ কুরআন তেলাওয়াত,',
    highlightedText: 'ক্যালিগ্রাফি ও প্রাঞ্জল উপস্থাপনা!',
    subtitle: 'আন্তর্জাতিক মানের হাফেজ ও ক্যালিগ্রাফার দ্বারা নিয়মিত প্রশিক্ষণ। মঞ্চে সাবলীল বক্তৃতা ও সুন্দর হাতের লেখা অনুশীলনের মাধ্যমে শিশুর জড়তা দূরীকরণ।',
    imageSrc: '/src/assets/images/cultural_quran_calligraphy_1792983872905.jpg',
    primaryCtaText: 'হিফজুল কুরআন বিভাগ',
    primaryCtaAction: 'admissions',
    secondaryCtaText: 'হটলাইন: 01903-880255',
    secondaryCtaAction: 'contact'
  },
  {
    id: 4,
    badge: 'সুস্থ দেহ ও প্রফুল্ল মনন',
    headline: 'প্রশস্ত খেলার মাঠ ও বিজ্ঞান ল্যাব,',
    highlightedText: '১০০% সিসিটিভি নিয়ন্ত্রিত নিরাপদ চত্বর!',
    subtitle: 'বার্ষিক ক্রীড়া প্রতিযোগিতা, রোবোটিক্স ফেয়ার ও সাংস্কৃতিক আয়োজনের মাধ্যমে শিশুদের দলগত ঐক্য ও বুদ্ধিবৃত্তিক বিকাশ নিশ্চিত করা হয়।',
    imageSrc: '/src/assets/images/annual_sports_event_1792985908087.jpg',
    primaryCtaText: 'ফটো গ্যালারি দেখুন',
    primaryCtaAction: 'gallery',
    secondaryCtaText: 'ক্যাম্পাস লোকেশন ও হেল্পলাইন',
    secondaryCtaAction: 'contact'
  }
];

interface HeroSliderProps {
  onScrollTo: (id: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onScrollTo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const toBengaliNumber = (num: number) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(d => bengaliDigits[parseInt(d, 10)] ?? d).join('');
  };

  const slide = SLIDES[currentSlide];

  return (
    <section 
      id="hero" 
      className="relative bg-stone-900 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Cross-Fade */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        {SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Deep Contrast Gradient */}
            <img
              src={s.imageSrc}
              alt={s.headline}
              className="w-full h-full object-cover scale-105 animate-in fade-in duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Dark Scrim overlay for pristine readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-stone-950/85 to-stone-900/60"></div>
          </div>
        ))}

        {/* Foreground Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            
            {/* Slide Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/60 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{slide.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] text-balance">
              {slide.headline}{' '}
              <span className="text-amber-300 underline decoration-emerald-500 decoration-wavy decoration-2 underline-offset-8">
                {slide.highlightedText}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onScrollTo(slide.primaryCtaAction)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-98 cursor-pointer"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollTo(slide.secondaryCtaAction)}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>{slide.secondaryCtaText}</span>
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-emerald-200/90 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>১০০% সিসিটিভি ক্যাম্পাস</span>
              </div>
              <span className="text-stone-600">|</span>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>সৃজনশীল ও মুখস্থহীন শিক্ষা</span>
              </div>
              <span className="text-stone-600">|</span>
              <div>
                <span>মুজগুন্নী আ/এ, খালিশপুর, খুলনা</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-emerald-800 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-emerald-800 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Carousel Controls & Indicators */}
        <div className="absolute bottom-6 right-6 sm:right-12 z-30 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            title={isPaused ? "স্লাইড শো চালু করুন" : "স্লাইড শো থামান"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-amber-400" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  index === currentSlide
                    ? 'w-6 h-2 bg-amber-400'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <span className="text-[11px] font-mono text-emerald-300 font-bold ml-1">
            {toBengaliNumber(currentSlide + 1)}/{toBengaliNumber(SLIDES.length)}
          </span>
        </div>

      </div>
    </section>
  );
};
