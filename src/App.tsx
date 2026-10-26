import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { MovingNoticeBoard } from './components/MovingNoticeBoard';
import { FestivalNotice } from './components/FestivalNotice';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { AdmissionsInfo } from './components/AdmissionsInfo';
import { AdmissionForm } from './components/AdmissionForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdmissionInquiry } from './types';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<AdmissionInquiry | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/20 text-stone-800 font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Header with Prominent Navigation Bar (মেনু লিস্ট সরাসরি হেডারে স্থাপিত) */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* 2. Moving Dynamic Notice Board (চলমান নোটিশ বোর্ড) */}
      <MovingNoticeBoard
        onApplyClick={() => scrollToSection('apply-form')}
        onFestivalClick={() => scrollToSection('festival')}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        
        {/* 3. Interactive Hero Slide Show (শুরুতেই ইন্টারেক্টিভ স্লাইড শো) */}
        <HeroSlider
          onScrollTo={scrollToSection}
        />

        {/* 4. Admission Festival 2026 Notice (ভর্তি উৎসব ২০২৬ - ২৮ অক্টোবর) */}
        <FestivalNotice
          onRegisterClick={() => scrollToSection('apply-form')}
        />

        {/* 5. Key Features (আমাদের অনন্য বৈশিষ্ট্যসমূহ) */}
        <Features
          onLearnMore={() => scrollToSection('admissions')}
        />

        {/* 6. School Photo Gallery (ফটো গ্যালারি) */}
        <Gallery />

        {/* 7. Admissions 2027 Information (২০২৭ শিক্ষাবর্ষে ভর্তি চলছে) */}
        <AdmissionsInfo
          onApplyClick={() => scrollToSection('apply-form')}
        />

        {/* 8. Online Admission / Inquiry Form (অনলাইন ভর্তি ও অনুসন্ধান ফরম) */}
        <AdmissionForm
          onInquirySubmitted={(inquiry) => setLastSubmitted(inquiry)}
        />

        {/* 9. Contact & Branch-wise Helplines (ক্যাম্পাস ঠিকানা ও হটলাইন) */}
        <ContactSection />

      </main>

      {/* 10. Clean Institutional Footer (অসামঞ্জস্যপূর্ণ কোড ও পাসওয়ার্ড মুক্ত) */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* Built-in Admin Panel Modal (পাসওয়ার্ড: admin123) */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Standalone Single-File HTML Exporter & Guide (If needed) */}
      {isExportOpen && (
        <SingleFileExportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
        />
      )}

      {/* Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />

    </div>
  );
}
