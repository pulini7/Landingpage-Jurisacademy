
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const words = [
    "ENGENHARIA DE PROMPTS FORENSES.",
    "AUTOMAÇÃO DE PETIÇÕES ESTRATÉGICAS.",
    "ANÁLISE DE PROVAS VIA IA MULTIMODAL.",
    "ESCALA JURÍDICA SEM CONTRATAÇÕES.",
    "O CÓDIGO DA NOVA ELITE JURÍDICA."
  ];
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[textIndex % words.length];
      if (isDeleting) {
        setCurrentWord(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentWord(prev => fullWord.substring(0, prev.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && currentWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setTextIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center pt-24 md:pt-32 pb-12 overflow-hidden bg-[#020617]">
      {/* Background Decorative HUD Elements */}
      <div className="absolute top-32 left-10 hidden xl:flex flex-col font-mono text-[8px] text-cyber-400 opacity-20 gap-2 pointer-events-none">
        <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyber-400 rounded-full"></span> SYSTEM_CORE: AI_LEGAL_OS</p>
        <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyber-400 rounded-full"></span> NEURAL_SYNC: ACTIVE</p>
        <div className="h-[2px] w-48 bg-white/5 relative overflow-hidden mt-2">
            <div className="absolute inset-0 bg-cyber-400/40 animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal space-y-8 md:space-y-12 flex flex-col items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyber-400/5 border border-cyber-400/10 rounded-full mb-2 backdrop-blur-sm">
                <span className="w-2 h-2 bg-cyber-400 rounded-full animate-pulse shadow-[0_0_12px_#22d3ee]"></span>
                <p className="text-[10px] font-black text-cyber-400 uppercase tracking-[0.45em]">PROTOCOLO_IA_FORENSE: 2025_RELEASE</p>
              </div>
              
              <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter text-[#f1f5f9] uppercase leading-[0.85] drop-shadow-2xl">
                Algoritmize sua <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-400 via-blue-400 to-indigo-500 italic">Advocacia.</span>
              </h1>
            </div>

            <div className="h-14 md:h-20 flex justify-center">
              <div className="px-8 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-2xl flex items-center group shadow-inner">
                <p className="text-sm sm:text-xl md:text-2xl font-mono text-cyber-400 font-bold uppercase tracking-widest flex items-center">
                  <span className="mr-4 text-slate-700 font-black group-hover:text-cyber-400 transition-colors">>></span>
                  {currentWord}
                  <span className="w-2.5 h-8 md:h-10 bg-cyber-400 ml-3 animate-pulse"></span>
                </p>
              </div>
            </div>

            <p className="text-base md:text-2xl text-slate-400 max-w-4xl leading-relaxed font-medium mx-auto px-4">
              Deixe de ser um digitador de luxo e torne-se um <span className="text-white font-bold border-b-2 border-cyber-400/30">Engenheiro Jurídico.</span> Domine a Inteligência Artificial para processar em minutos o que antes levava semanas de esforço manual.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 w-full justify-center px-4">
              <a 
                href="#cursos" 
                className="group relative bg-cyber-400 text-black px-12 md:px-20 py-6 md:py-7 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.25em] transition-all hover:scale-105 shadow-[0_25px_65px_rgba(34,211,238,0.35)] overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                Ativar Protocolo de Performance
              </a>
              <a 
                href="#roi" 
                className="group px-12 md:px-20 py-6 md:py-7 border border-white/10 bg-white/5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.25em] text-white hover:bg-white/10 hover:border-white/30 transition-all text-center backdrop-blur-xl shadow-2xl"
              >
                Simulador de Escala IA
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 opacity-30 mt-6 grayscale">
               <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 text-cyber-400 flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[11px] text-white font-black uppercase tracking-[0.2em]">Formação Vitalícia</span>
               </div>
               <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 text-cyber-400 flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[11px] text-white font-black uppercase tracking-[0.2em]">Sigilo Forense Garantido</span>
               </div>
               <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 text-cyber-400 flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[11px] text-white font-black uppercase tracking-[0.2em]">Mentoria em Tempo Real</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
