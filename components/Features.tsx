
import React from 'react';

const Features: React.FC = () => {
  const benefits = [
    {
      title: "Agentes Autônomos",
      description: "Crie robôs jurídicos que executam tarefas repetitivas, como triagem de provas e monitoramento de diários oficiais.",
      icon: "01"
    },
    {
      title: "Busca Semântica",
      description: "Domine IAs de busca que encontram jurisprudência por conceito, não apenas por palavras-chave limitadas.",
      icon: "02"
    },
    {
      title: "Multimodalidade",
      description: "Use IA para analisar vídeos de audiências, extrair dados de áudios e refatorar documentos escaneados.",
      icon: "03"
    },
    {
      title: "Ética Sistêmica",
      description: "Garanta a segurança dos dados dos seus clientes em qualquer ferramenta, com protocolos de sigilo avançados.",
      icon: "04"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto mb-5 md:mb-6 space-y-1 reveal">
        <p className="font-mono text-cyber-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">Além dos Chatbots</p>
        <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
          Domine o Ecossistema de <br className="sm:hidden" /><span className="text-cyber-400">Poder Tecnológico</span>.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {benefits.map((benefit, idx) => (
          <div 
            key={idx} 
            className="group relative p-5 md:p-6 bg-slate-900/40 border border-white/5 hover:border-cyber-400/30 transition-all duration-500 reveal rounded-2xl md:rounded-3xl overflow-hidden"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <div className="corner-bracket corner-tl"></div>
            <div className="corner-bracket corner-tr"></div>
            <div className="scan-line"></div>

            <div className="font-mono text-xl font-black text-cyber-400/20 group-hover:text-cyber-400 transition-colors mb-1">
              {benefit.icon}
            </div>
            <h3 className="text-xs font-bold mb-1.5 text-white uppercase tracking-tight">{benefit.title}</h3>
            <p className="text-slate-500 leading-relaxed text-[10px] md:text-[11px]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
