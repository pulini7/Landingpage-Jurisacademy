
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Fundamentals from './components/Fundamentals';
import Features from './components/Features';
import Comparison from './components/Comparison';
import ROICalculator from './components/ROICalculator';
import LearningRoadmap from './components/LearningRoadmap';
import CourseList from './components/CourseList';
import LeadCapture from './components/LeadCapture';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyber-400 selection:text-black overflow-x-hidden bg-[#020617]">
      {/* HUD Global Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[110] border-[15px] border-transparent">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[7px] text-cyber-400/10 tracking-[1.5em] uppercase hidden lg:block">
          ENCRYPTION_LAYER_ACTIVE_SYNC_v3.2
        </div>
        <div className="absolute bottom-16 right-10 rotate-90 origin-bottom-right font-mono text-[7px] text-cyber-400/10 tracking-[0.8em] uppercase hidden lg:block">
          LATENCY_COMPENSATION_STABLE
        </div>
      </div>

      <Navbar isScrolled={scrolled} />
      
      <main>
        <Hero />

        <div className="py-8">
          <Stats />
        </div>

        <section id="fundamentos" className="py-12 md:py-20 bg-black/20">
          <Fundamentals />
        </section>
        
        <section id="stack" className="relative scroll-mt-24 py-12 md:py-20">
          <Features />
        </section>

        <section id="roadmap" className="py-12 md:py-20 bg-black/40">
          <LearningRoadmap />
        </section>

        <section id="protocolos" className="reveal scroll-mt-24 py-12 md:py-20">
          <Comparison />
        </section>

        <section id="roi" className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full"></div>
          <ROICalculator />
        </section>

        <section id="cursos" className="py-16 md:py-24 relative bg-slate-950/40 scroll-mt-24">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-400/30 to-transparent"></div>
           <CourseList />
        </section>

        <section id="waitlist" className="py-12 md:py-20">
           <LeadCapture />
        </section>

        <section id="professores" className="py-12 md:py-20 relative scroll-mt-24">
           <Instructors />
        </section>

        <section id="relatos" className="py-12 md:py-20 bg-slate-950/20 scroll-mt-24">
          <div className="reveal">
            <Testimonials />
          </div>
        </section>

        <section id="faq" className="py-12 md:py-24 bg-black border-t border-white/5 scroll-mt-24">
          <div className="reveal">
            <FAQ />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
