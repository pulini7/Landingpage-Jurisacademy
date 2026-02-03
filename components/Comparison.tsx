
import React from 'react';

const COMPARISON_DATA = [
  {
    feature: "Escopo de Conteúdo",
    lvl1: "Módulo 01",
    lvl2: "Módulo 01 + 02",
    lvl3: "SISTEMA COMPLETO (01+02+03)"
  },
  {
    feature: "Objetivo Central",
    lvl1: "Tirar o medo e evitar erro",
    lvl2: "Ganhar tempo e produtividade",
    lvl3: "Criar vantagem competitiva"
  },
  {
    feature: "Foco Técnico",
    lvl1: "Ética, LGPD e Prompt Base",
    lvl2: "Petições e Contratos",
    lvl3: "Automação e Agentes"
  },
  {
    feature: "Resultado Final",
    lvl1: "Uso seguro e sem receio",
    lvl2: "Trabalho rápido e qualidade",
    lvl3: "Diferencial estratégico real"
  }
];

const Comparison: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-5 md:mb-6 reveal">
        <p className="font-mono text-cyber-400 text-[10px] uppercase tracking-[0.5em] mb-1">Matriz_de_Diferenciação_v6</p>
        <h2 className="text-xl md:text-3xl font-black mb-1 uppercase tracking-tighter leading-none">
          A Anatomia da <span className="text-cyber-400 italic">Evolução.</span>
        </h2>
        <p className="text-slate-500 text-[10px] md:text-xs max-w-xl mx-auto font-medium">
          Entenda como cada protocolo se empilha para formar o Kernel Definitivo do advogado tecnológico.
        </p>
      </div>

      <div className="max-w-6xl mx-auto reveal">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-3 text-left font-mono text-[9px] text-slate-500 uppercase tracking-widest">Protocolo_Habilidade</th>
                <th className="p-3 text-center">
                  <span className="text-white/40 font-black text-[9px] uppercase block">Básico</span>
                </th>
                <th className="p-3 text-center bg-cyber-400/5">
                  <span className="text-cyber-400 font-black text-[9px] uppercase block">Intermediário</span>
                </th>
                <th className="p-3 text-center">
                  <span className="text-white font-black text-[9px] uppercase block">Avançado</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-bold text-[9px] text-slate-400 uppercase tracking-tight">{row.feature}</td>
                  <td className="p-3 text-center text-[9px] text-white/40 font-medium">{row.lvl1}</td>
                  <td className="p-3 text-center text-[9px] text-cyber-400 font-black bg-cyber-400/5 border-x border-cyber-400/10">{row.lvl2}</td>
                  <td className="p-3 text-center text-[9px] text-white/80 font-bold">{row.lvl3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
