
import React from 'react';

const STEPS = [
  {
    lvl: '01',
    title: 'Protocolo: Entender',
    desc: 'Construção da base ética e técnica. Remova o receio tecnológico e aprenda a operar IAs com total segurança profissional.',
    icon: '⚡'
  },
  {
    lvl: '02',
    title: 'Protocolo: Produzir',
    desc: 'Aceleração de entrega. Implemente prompts de elite e automação de peças para dobrar sua produtividade sem perder qualidade.',
    icon: '🤖'
  },
  {
    lvl: '03',
    title: 'Protocolo: Dominar',
    desc: 'Vantagem Competitiva. Use a IA para gestão, escala estratégica e diferenciação real no mercado jurídico moderno.',
    icon: '🏛️'
  }
];

const LearningRoadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-10 reveal">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">O Caminho da <span className="text-cyber-400">Transformação.</span></h2>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-1">Sua Jornada Evolutiva na JurisAcademy</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-400/30 to-transparent md:-translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-16">
          {STEPS.map((step, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal`}>
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-black border-2 border-cyber-400 rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center text-[10px] font-black text-cyber-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                {step.lvl}
              </div>

              <div className={`pl-12 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl hover:border-cyber-400/20 transition-all group">
                  <div className="text-xl mb-3 opacity-50 group-hover:opacity-100 transition-opacity">{step.icon}</div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyber-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;
