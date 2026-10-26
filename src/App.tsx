import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FestivalNotice } from './components/FestivalNotice';
import { Features } from './components/Features';
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
      {/* 3-Zone Top Navigation */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section / Welcome Banner */}
        <Hero
          onApplyClick={() => scrollToSection('apply-form')}
          onFestivalClick={() => scrollToSection('festival')}
        />

        {/* 2. Admission Festival 2026 Notice (ভর্তি উৎসব ২০২৬) */}
        <FestivalNotice
          onRegisterClick={() => scrollToSection('apply-form')}
        />

        {/* 3. Why Choose Us / Key Features (আমাদের বৈশিষ্ট্যসমূহ) */}
        <Features
          onLearnMore={() => scrollToSection('admissions')}
        />

        {/* 4. Admissions 2027 Information (২০২৭ শিক্ষাবর্ষে ভর্তি চলছে) */}
        <AdmissionsInfo
          onApplyClick={() => scrollToSection('apply-form')}
        />

        {/* 6. Online Admission / Inquiry Form */}
        <AdmissionForm
          onInquirySubmitted={(inquiry) => setLastSubmitted(inquiry)}
        />

        {/* 5. Contact & Branch-wise Helplines (যোগাযোগ ও হটলাইন) */}
        <ContactSection />
      </main>

      {/* Quiet Institutional Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* Built-in Admin Panel Modal (Strict Password admin123) */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Standalone Single-File HTML Exporter & Firebase Setup Guide */}
      <SingleFileExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      {/* Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />
    </div>
  );
}
