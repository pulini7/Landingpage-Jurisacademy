
import React, { useState } from 'react';

const COURSES = [
  {
    id: 'l1',
    code: 'LVL_01',
    title: 'Protocolo Entender',
    desc: 'O alicerce da transição digital. Domine a arquitetura de prompts e os protocolos de segurança para uso ético e seguro.',
    includes: ['Arquiteturas Neurais', 'Segurança de Dados Forenses', 'Prompt Engineering Base'],
    originalPrice: '828',
    price: '497',
    color: 'text-cyber-400',
    borderColor: 'border-cyber-400/20',
    bgGlow: 'bg-cyber-400/5',
    tag: 'BOOT_SECTOR',
    hotmartUrl: 'https://pay.hotmart.com/L1',
    icon: (
      <svg className="w-16 h-16 text-cyber-400 opacity-[0.05] absolute -top-4 -left-4 group-hover:opacity-20 transition-opacity duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'l2',
    code: 'LVL_02',
    title: 'Protocolo Produzir',
    desc: 'O multiplicador de escala. Redação de peças complexas e análise multimodal de provas para dobrar seu faturamento.',
    includes: ['Tudo do Protocolo Entender', 'Redação Forense Acelerada', 'Análise Semântica de Provas'],
    originalPrice: '1661',
    price: '997',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/20',
    bgGlow: 'bg-blue-400/5',
    tag: 'POWER_UNIT',
    hotmartUrl: 'https://pay.hotmart.com/L2',
    isCumulative: true,
    icon: (
      <svg className="w-16 h-16 text-blue-400 opacity-[0.05] absolute -top-4 -left-4 group-hover:opacity-20 transition-opacity duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: 'l3',
    code: 'LVL_03',
    title: 'Protocolo Dominar',
    desc: 'O ápice da engenharia jurídica. Agentes autônomos e fluxos que trabalham enquanto você dorme.',
    includes: ['Tudo do Entender + Produzir', 'Criação de Agentes Jurídicos', 'Automação Full Workflow'],
    originalPrice: '3328',
    price: '1997',
    color: 'text-indigo-400',
    borderColor: 'border-indigo-400/40',
    bgGlow: 'bg-indigo-400/10',
    tag: 'MASTER_KERNEL',
    hotmartUrl: 'https://pay.hotmart.com/L3',
    isCumulative: true,
    isPopular: true,
    icon: (
      <svg className="w-16 h-16 text-indigo-400 opacity-[0.05] absolute -top-4 -left-4 group-hover:opacity-20 transition-opacity duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const CourseList: React.FC = () => {
  const [purchasingId, setPurchasingId] = useState<string | null>(null);

  const handleHotmartClick = (id: string, url: string) => {
    setPurchasingId(id);
    setTimeout(() => {
      setPurchasingId(null);
      window.open(url, '_blank');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 reveal gap-6">
        <div className="space-y-3">
          <p className="font-mono text-cyber-400 text-[10px] uppercase tracking-[0.5em] font-black">Escalonamento_de_Performance</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
            Selecione Seu Nível de <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-400 to-blue-600 italic">Intervenção Digital.</span>
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4 relative overflow-hidden group backdrop-blur-md">
          <div className="w-2 h-2 bg-cyber-400 rounded-full animate-ping"></div>
          <span className="font-mono text-[10px] text-white font-black uppercase tracking-widest italic">Vagas em Lote Promocional</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {COURSES.map((course, idx) => (
          <div 
            key={course.id} 
            className={`group relative bg-slate-900/20 border-2 ${course.isPopular ? course.borderColor + ' ring-1 ring-white/5' : 'border-white/5 hover:border-cyber-400/20'} rounded-[2.5rem] p-1.5 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 reveal overflow-hidden shadow-2xl`}
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            {course.isPopular && (
              <div className="absolute top-6 right-6 z-20">
                <span className="bg-white text-black px-4 py-1.5 rounded-xl font-mono text-[8px] font-black uppercase tracking-widest shadow-2xl">Recomendado</span>
              </div>
            )}
            
            <div className={`bg-[#020617] rounded-[2.2rem] p-8 md:p-10 h-full flex flex-col relative overflow-hidden ${course.isPopular ? 'border border-white/5' : ''}`}>
              {/* Scanline accelerated on hover */}
              <div className="scan-line group-hover:duration-700"></div>
              {course.icon}

              <div className="flex justify-between items-center mb-6 md:mb-8 relative z-10">
                <span className={`bg-white/5 ${course.color} px-3 py-1 rounded-lg font-mono text-[9px] md:text-[10px] font-black tracking-widest border border-white/10 backdrop-blur-sm`}>
                  {course.code}
                </span>
                <span className="text-slate-600 font-black text-[9px] md:text-[10px] tracking-[0.3em] font-mono group-hover:text-cyber-400 transition-colors">{course.tag}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:translate-x-1 transition-transform relative z-10">
                {course.title}
              </h3>
              
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8 font-medium relative z-10">
                {course.desc}
              </p>

              <div className="space-y-3.5 mb-10 relative z-10">
                {course.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${course.color}`}></div>
                    <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-tight ${i === 0 && course.isCumulative ? 'text-white' : 'text-slate-400'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto space-y-6 relative z-10">
                <div className={`relative bg-slate-900/40 p-6 md:p-8 rounded-3xl overflow-hidden border ${course.isPopular ? 'border-white/10' : 'border-white/5'} flex flex-col items-center shadow-inner`}>
                  
                  <div className="w-full space-y-0 relative z-10 mb-5 text-center">
                    <span className="text-slate-600 text-[10px] md:text-xs font-black line-through block tracking-widest uppercase mb-1.5">
                      R$ {course.originalPrice}
                    </span>
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-slate-400 font-black text-lg md:text-xl">12x R$</span>
                      <span className={`text-4xl sm:text-5xl md:text-6xl font-mono font-black text-white tracking-tighter leading-none ${course.isPopular ? 'animate-price-glow' : ''}`}>
                        {(Number(course.price) / 12).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold mt-2.5 uppercase tracking-widest">Total: R$ {course.price}</p>
                  </div>

                  <button 
                    onClick={() => handleHotmartClick(course.id, course.hotmartUrl)}
                    disabled={purchasingId === course.id}
                    className={`w-full relative py-5 px-6 rounded-2xl border-2 font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl ${
                      course.isPopular 
                      ? 'bg-cyber-400 text-black border-cyber-400 hover:bg-white hover:border-white' 
                      : 'bg-white text-black border-white hover:bg-cyber-400 hover:border-cyber-400'
                    }`}
                  >
                    {purchasingId === course.id ? (
                      <div className="flex items-center gap-3">
                         <div className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                         Sincronizando...
                      </div>
                    ) : "Garantir Acesso Imediato"}
                  </button>
                  
                  <div className="mt-6 flex flex-col items-center gap-2.5 opacity-60">
                     <div className="flex items-center gap-2.5">
                       <div className="relative flex items-center justify-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute"></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full relative"></div>
                       </div>
                       <span className="text-[8px] font-black uppercase tracking-[0.3em] text-emerald-400">Gateway Verificado & Ativo</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/></svg>
                        <span className="text-[7px] font-bold uppercase tracking-widest text-slate-500">Certificado SSL 256-Bit</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
