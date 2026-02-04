
import React, { useState } from 'react';
import { FAQItem } from '../types';

const FAQ_DATA: FAQItem[] = [
  {
    question: "Os cursos são cumulativos?",
    answer: "Sim! Ao adquirir o Protocolo Intermediário (PRODUZIR), você recebe automaticamente todo o conteúdo do Básico. Ao adquirir o Avançado (DOMINAR), você leva o sistema completo: Básico + Intermediário + Avançado. É a formação integral."
  },
  {
    question: "Preciso de conhecimentos avançados em tecnologia?",
    answer: "Não. Nossos cursos foram desenhados para advogados. Focamos em ferramentas de alta performance com interfaces intuitivas. Se você opera um escritório, está pronto para o upgrade."
  },
  {
    question: "A OAB permite o uso de IA?",
    answer: "Sim, desde que a responsabilidade final pelo trabalho continue sendo do advogado. Discutimos os protocolos de segurança e ética profissional em todos os módulos."
  },
  {
    question: "Qual a duração do acesso?",
    answer: "O acesso é vitalício via Hotmart, incluindo todas as atualizações de segurança e novos protocolos de conteúdo."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Perguntas <span className="text-cyber-400">Frequentes</span></h2>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Protocolos de Dúvidas</p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className={`border ${idx === 0 ? 'border-cyber-400/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'border-white/5'} rounded-2xl overflow-hidden bg-white/[0.02]`}>
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.05] transition-colors"
            >
              <span className={`text-xs font-bold uppercase tracking-tight ${idx === 0 ? 'text-cyber-400' : 'text-white'}`}>{item.question}</span>
              <svg 
                className={`w-4 h-4 text-cyber-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === idx && (
              <div className="p-5 pt-0 text-slate-400 text-[11px] leading-relaxed animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
