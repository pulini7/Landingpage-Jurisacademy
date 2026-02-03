
import React from 'react';

const STATS = [
  { label: 'ADVOGADOS_SINCRONIZADOS', value: '5.247', sub: 'Rede Ativa de Elite', progress: 95 },
  { label: 'PEÇAS_PROCESSADAS', value: '128K+', sub: 'Produção em Escala Real', progress: 88 },
  { label: 'HORAS_RECAPTURADAS', value: '450K+', sub: 'Tempo Devolvido ao Sócio', progress: 92 },
  { label: 'TAXA_DE_PRECISÃO', value: '94.2%', sub: 'Validação Jurisprudencial', progress: 98 }
];

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-950/50 border border-white/5 backdrop-blur-xl py-8 md:py-12 rounded-[2rem] md:rounded-[3.5rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-400/20 to-transparent"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-8">
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-4 reveal" style={{ transitionDelay: `${i*0.1}s` }}>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-cyber-400/60 uppercase tracking-widest">#{stat.label}</p>
                <p className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none italic">
                  {stat.value}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-cyber-400 opacity-60 transition-all duration-1000 ease-out" style={{ width: `${stat.progress}%` }}></div>
                </div>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
