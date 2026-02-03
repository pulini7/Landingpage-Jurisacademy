
import React from 'react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Dr. Roberto Mendes',
    role: 'Sócio-Diretor | Mendes Adv',
    content: 'O investimento na JurisAcademy se pagou na primeira semana. Implementamos o módulo de fluxos automatizados e conseguimos dobrar nossa demanda de contencioso sem contratar novos estagiários.',
    avatar: 'https://i.pravatar.cc/150?u=r1',
    result: 'Redução de 70% no tempo de peticionamento'
  },
  {
    id: '2',
    name: 'Dra. Luísa Porto',
    role: 'Especialista em Direito Digital',
    content: 'O que mais me impressionou foi a segurança ética. A JurisAcademy ensina como usar a IA como uma extensão do seu cérebro jurídico, respeitando todos os limites da OAB.',
    avatar: 'https://i.pravatar.cc/150?u=l1',
    result: 'Aumento de 45% no ticket médio'
  },
  {
    id: '3',
    name: 'Dr. Fábio Silva',
    role: 'Advogado Autônomo',
    content: 'Eu estava prestes a desistir da profissão por causa do excesso de burocracia. A IA devolveu minha paixão pelo Direito. Hoje sou um advogado estratégico, não um digitador.',
    avatar: 'https://i.pravatar.cc/150?u=f1',
    result: 'Faturamento recorde em 6 meses'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-10 md:mb-12 reveal">
        <p className="font-mono text-cyber-400 text-[10px] uppercase tracking-[0.4em] mb-2">Relatos de Performance</p>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Pioneiros da <span className="text-cyber-400">Nova Era.</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div 
            key={t.id} 
            className="group bg-slate-900/40 border border-white/5 p-8 rounded-[2rem] hover:bg-slate-900/60 transition-all duration-500 reveal relative overflow-hidden"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-12 h-12 text-cyber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.0953 12.2223 17.0049 11.1558 17.1645L14.017 21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V15C4.017 16.0953 3.22234 17.0049 2.15576 17.1645L5.017 21Z"/></svg>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-cyber-400/30" />
              <div>
                <p className="font-bold text-white text-xs">{t.name}</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-6 italic">"{t.content}"</p>
            
            <div className="pt-4 border-t border-white/5">
              <span className="text-[9px] font-black uppercase text-cyber-400 tracking-widest">Resultado Real:</span>
              <p className="text-white font-bold text-xs mt-1">{t.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
