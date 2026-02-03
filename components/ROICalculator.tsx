
import React, { useState } from 'react';

const ROICalculator: React.FC = () => {
  const [petitions, setPetitions] = useState(25);
  const [hoursPerPetition, setHoursPerPetition] = useState(6);
  const hourlyRate = 180;

  const currentHours = petitions * hoursPerPetition;
  const aiHours = Math.max(petitions * (hoursPerPetition * 0.15), 2); 
  const savedHours = currentHours - aiHours;
  const financialGain = savedHours * hourlyRate;

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto bg-slate-900/40 border border-cyber-400/20 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row reveal shadow-[0_0_50px_rgba(34,211,238,0.05)]">
        
        {/* Lado de Input */}
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 space-y-10 lg:space-y-12 bg-black/20">
          <div className="space-y-3 md:space-y-4">
            <p className="font-mono text-cyber-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">Economic Forecasting</p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
              A Matemática do <br className="hidden sm:inline" /><span className="text-cyber-400 italic">Novo Direito.</span>
            </h2>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between font-mono text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">
                <span>Peças por Mês</span>
                <span className="text-cyber-400 font-black">{petitions}</span>
              </div>
              <input 
                type="range" min="1" max="100" value={petitions}
                onChange={(e) => setPetitions(Number(e.target.value))}
                className="w-full h-1 md:h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyber-400"
              />
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between font-mono text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">
                <span>Horas / Peça (Manual)</span>
                <span className="text-cyber-400 font-black">{hoursPerPetition}h</span>
              </div>
              <input 
                type="range" min="1" max="30" value={hoursPerPetition}
                onChange={(e) => setHoursPerPetition(Number(e.target.value))}
                className="w-full h-1 md:h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyber-400"
              />
            </div>
          </div>
        </div>

        {/* Lado de Resultados / Gráfico */}
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-cyber-400/5 to-transparent relative">
          
          <div className="space-y-10 md:space-y-12 relative z-10">
            {/* Gráfico de Barras Minimalista */}
            <div className="space-y-4 md:space-y-6">
                <div className="space-y-1 md:space-y-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase">Tempo Antigo</span>
                        <span className="text-[10px] md:text-xs font-mono text-slate-400">{currentHours}h</span>
                    </div>
                    <div className="h-1.5 md:h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 w-full"></div>
                    </div>
                </div>

                <div className="space-y-1 md:space-y-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[8px] md:text-[9px] font-black text-cyber-400 uppercase">Tempo Inteligente (IA)</span>
                        <span className="text-[10px] md:text-xs font-mono text-cyber-400">{aiHours.toFixed(1)}h</span>
                    </div>
                    <div className="h-1.5 md:h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyber-400 w-[15%] shadow-[0_0_15px_#22d3ee]"></div>
                    </div>
                </div>
            </div>

            <div className="pt-6 md:pt-8 border-t border-white/5 grid grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-1">
                <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest">Produtividade</p>
                <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">+{((savedHours/currentHours)*100).toFixed(0)}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest">Horas Livres</p>
                <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">{savedHours.toFixed(0)}<span className="text-cyber-400 text-lg md:text-xl">h</span></p>
              </div>
              <div className="col-span-2 pt-2 md:pt-4">
                <p className="text-[8px] md:text-[9px] font-black text-cyber-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2">Ganho de Tempo Anual</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-lg md:text-xl text-white/20 font-black">R$</span>
                    <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">
                    {(financialGain * 12).toLocaleString('pt-BR')}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
