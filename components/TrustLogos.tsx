
import React from 'react';

const TrustLogos: React.FC = () => {
  return (
    <div className="bg-transparent py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10">
          <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.6em]">Nossas diretrizes seguem as maiores instituições</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale hover:opacity-50 transition-opacity duration-700">
            {/* Logos Monocromáticos e Minimalistas */}
            <span className="text-2xl font-black text-white tracking-tighter">OAB</span>
            <span className="text-2xl font-serif font-bold text-white italic">FGV</span>
            <span className="text-2xl font-sans font-black text-white tracking-widest italic uppercase">STJ</span>
            <span className="text-2xl font-mono font-bold text-white tracking-tighter">PUC</span>
            <span className="text-2xl font-black text-white tracking-tighter uppercase">USP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustLogos;
