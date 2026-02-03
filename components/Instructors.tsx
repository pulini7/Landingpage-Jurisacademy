
import React from 'react';
import { Instructor } from '../types';

const INSTRUCTORS: Instructor[] = [
  {
    id: 'p1',
    name: 'Dr. Marcus Vinícius',
    specialty: 'Especialista em IA Jurídica',
    bio: 'Pioneiro em Engenharia de Prompts para o setor jurídico. Ex-consultor de tecnologia para cortes superiores e desenvolvedor de sistemas de automação que processam +100k petições/mês.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    initials: 'MV'
  },
  {
    id: 'p2',
    name: 'Dra. Beatriz Helena',
    specialty: 'Expert em Fluxos Autônomos',
    bio: 'Doutora em Direito Digital com foco em Inteligência Artificial. Especialista em refatoração de fluxos processuais e implementação de IA em departamentos jurídicos de escala bilionária.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    initials: 'BH'
  }
];

const Instructors: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal gap-4">
        <div className="space-y-3">
          <p className="font-mono text-cyber-400 text-xs uppercase tracking-[0.4em] md:tracking-[0.5em]">Lideranças Técnicas</p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            Os Mestres da <span className="text-cyber-400 italic">Estratégia</span>.
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {INSTRUCTORS.map((prof, idx) => (
          <div 
            key={prof.id} 
            className="group relative flex flex-col sm:flex-row bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden hover:border-cyber-400/40 transition-all duration-700 reveal"
            style={{ transitionDelay: `${idx * 0.2}s` }}
          >
            {/* Image Container */}
            <div className="sm:w-2/5 relative overflow-hidden h-64 sm:h-auto">
              <div className="absolute inset-0 bg-cyber-400/5 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src={prof.image} 
                alt={prof.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono text-[9px] text-cyber-400 font-black tracking-widest uppercase">
                  ID: {prof.initials}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="sm:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col justify-center space-y-4 md:space-y-6">
              <div>
                <span className="font-mono text-[9px] md:text-[10px] text-cyber-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] block mb-1 md:mb-2">
                  {prof.specialty}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
                  {prof.name}
                </h3>
              </div>
              
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                {prof.bio}
              </p>

              <div className="flex gap-4 pt-2 md:pt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-cyber-400/30 to-transparent self-center"></div>
                <span className="font-mono text-[8px] md:text-[9px] text-slate-600 font-black tracking-widest uppercase italic">Instrutor Verificado</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
