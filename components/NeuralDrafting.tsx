
import React, { useState, useEffect, useRef } from 'react';

const NeuralDrafting: React.FC = () => {
  const [isRefactoring, setIsRefactoring] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const triggerRefactor = () => {
    if (isRefactoring) return;
    setIsRefactoring(true);
    setProgress(0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(triggerRefactor, 800);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isRefactoring && progress < 100) {
      const timer = setTimeout(() => setProgress(prev => prev + 1), 15);
      return () => clearTimeout(timer);
    }
  }, [isRefactoring, progress]);

  const steps = [
    {
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      label: "INPUT_TRADICIONAL",
      desc: "Análise de petições densas e confusas que os juízes ignoram por falta de clareza."
    },
    {
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      label: "MASTER_PROMPTING",
      desc: "Você aprende a comandar GPT-4 e Claude para extrair a essência jurídica sem ruídos."
    },
    {
      img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
      label: "OUTPUT_ESTRATEGICO",
      desc: "O resultado: argumentos afiados em um layout focado na decisão favorável do juiz."
    }
  ];

  return (
    <div className="container mx-auto px-6" ref={sectionRef} id="neural-drafting-section">
      <div className="max-w-4xl mx-auto text-center mb-10 reveal">
        <p className="font-mono text-cyber-400 text-xs uppercase tracking-[0.4em] mb-3">Protocolo de Escrita</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
          Petições Diretas e <br className="sm:hidden" /><span className="text-cyber-400 italic">Vencedoras.</span>
        </h2>
        <p className="text-slate-500 text-xs md:text-sm mt-4 leading-relaxed">
          Ensino você a dominar as IAs mais potentes do mundo (GPT-4, Claude, Gemini) para refatorar seus processos.
        </p>
      </div>

      {/* Galeria Explicativa com Imagens */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 reveal">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
            <div className="aspect-video overflow-hidden">
               <img src={step.img} alt={step.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
            </div>
            <div className="p-5 relative z-10">
               <p className="font-mono text-[9px] text-cyber-400 font-bold mb-2 tracking-widest">{step.label}</p>
               <p className="text-slate-400 text-[11px] leading-relaxed">{step.desc}</p>
            </div>
            {/* HUD Decoration */}
            <div className="corner-bracket corner-tl opacity-20"></div>
            <div className="corner-bracket corner-br opacity-20"></div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className={`relative bg-cyber-400/5 border transition-all duration-700 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 flex flex-col justify-between overflow-hidden reveal ${isRefactoring ? 'border-cyber-400 shadow-[0_0_80px_rgba(34,211,238,0.1)]' : 'border-white/5'}`}>
          <div className="space-y-6 md:space-y-8 relative z-10">
            <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4">
              <div className="px-3 py-1 bg-cyber-400/10 border border-cyber-400/20 rounded-full font-mono text-[8px] text-cyber-400 font-bold uppercase tracking-widest">
                Metodologia JurisAcademy v4.2
              </div>
            </div>
            
            {!isRefactoring ? (
              <div className="h-40 flex items-center justify-center border-2 border-dashed border-white/5 rounded-2xl">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-4 border-white/5 border-t-cyber-400 rounded-full animate-spin"></div>
                  <p className="text-[8px] text-slate-600 font-black uppercase tracking-[0.4em]">Iniciando Protocolo Master...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 font-mono text-cyan-50/90 text-xs md:text-sm leading-relaxed">
                <p className={`transition-all duration-700 delay-100 ${progress > 10 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <span className="text-cyber-400 font-bold"># GPT-4_CMD:</span> EXECUTANDO PROMPT ESTRUTURADO...
                </p>
                <div className={`p-6 bg-cyber-400/10 rounded-2xl border border-cyber-400/20 transition-all duration-700 delay-300 ${progress > 40 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <p className="text-cyber-400 font-black mb-2 uppercase text-[9px] tracking-widest">Draft de Alta Performance:</p>
                  <p className="text-base md:text-lg text-white font-medium tracking-tight leading-tight">
                    Com base no <span className="text-cyber-400">Art. 186 do Código Civil</span> e na jurisprudência consolidada, o pleito torna-se incontestável sob a ótica da <span className="text-cyber-400">Engenharia Jurídica</span> aplicada.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-cyber-400/20 pt-6 relative z-10">
            <div className="space-y-2 flex-1 max-w-xs">
              <div className="flex justify-between items-end">
                <span className="text-[8px] text-cyber-400 font-black uppercase tracking-widest">Redigindo via Claude 3.5</span>
                <span className="text-[10px] font-mono text-cyber-400 font-black">{progress}%</span>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyber-400 shadow-[0_0_15px_#22d3ee] transition-all duration-100 ease-out" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <div className="hidden sm:block ml-8">
               <p className="text-[8px] text-white/20 font-black uppercase tracking-widest italic">Multi-Model_Sync</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralDrafting;
