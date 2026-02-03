
import React, { useState } from 'react';

interface Props {
  isScrolled: boolean;
}

const Navbar: React.FC<Props> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 ${
        isScrolled ? 'bg-black/40 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-cyber-400 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] group-hover:rotate-[360deg] transition-transform duration-1000">
            <span className="text-black font-black text-2xl">J</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase tracking-tighter text-white leading-none">
              Juris<span className="text-cyber-400 italic">Academy</span>
            </span>
            <span className="text-[8px] font-mono text-slate-500 tracking-[0.4em] uppercase font-black">Forensic_Lab</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Stack', 'Cursos', 'Professores'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-cyber-400 transition-all hover:tracking-[0.5em]"
            >
              {link}
            </a>
          ))}
          <a 
            href="#cursos" 
            className="bg-white text-black px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyber-400 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Matricular Agora
          </a>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyber-400 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeWidth="2.5"/>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-3xl border-b border-white/10 p-10 space-y-8 animate-fadeInDown">
          {['Stack', 'Cursos', 'Professores'].map((link) => (
            <a key={link} onClick={() => setIsOpen(false)} href={`#${link.toLowerCase()}`} className="block text-white font-black uppercase text-sm tracking-[0.3em]">{link}</a>
          ))}
          <a 
            href="#cursos" 
            onClick={() => setIsOpen(false)}
            className="block bg-cyber-400 text-black text-center py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em]"
          >
            Matricular Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
