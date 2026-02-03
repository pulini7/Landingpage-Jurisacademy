
import React from 'react';

const Fundamentals: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto bg-slate-900/40 border border-white/5 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 relative overflow-hidden reveal">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-400/50 to-transparent"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyber-400/5 blur-[100px] rounded-full"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-cyber-400 uppercase tracking-[0.5em] font-black">Infraestrutura_Jurídica_v2.5</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                Instalamos seu <br /> <span className="text-cyber-400 italic">Mainframe de IA.</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Esqueça o uso superficial de ferramentas de chat. Na JurisAcademy, você aprende a construir um **Mainframe de Inteligência Artificial**. Dominamos a lógica por trás de diferentes arquiteturas neurais para que você opere qualquer ferramenta de ponta com precisão cirúrgica.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-400 rounded-full"></div>
                  <h4 className="font-black text-xs text-white uppercase tracking-widest">Agnosticismo Tecnológico</h4>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">Não ensinamos botões, ensinamos fundamentos. Esteja pronto para o GPT-5, Claude 4 ou qualquer inovação que surja.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-400 rounded-full"></div>
                  <h4 className="font-black text-xs text-white uppercase tracking-widest">Pipeline de Automação</h4>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">Conecte IAs ao seu fluxo real de peticionamento, análise de provas e gestão estratégica de processos.</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#cursos" className="inline-flex items-center gap-3 text-cyber-400 font-black text-[10px] uppercase tracking-widest group/btn">
                <span>Explorar Matriz de Aprendizado</span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-6">
            <div className="relative group/video">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-400 to-blue-600 rounded-3xl blur opacity-20 group-hover/video:opacity-40 transition-opacity"></div>
              
              <div className="relative aspect-video w-full bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe 
                  className="w-full h-full opacity-80 group-hover/video:opacity-100 transition-opacity"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0" 
                  title="JurisAcademy Briefing"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="corner-bracket corner-tl opacity-40"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/5 rounded-full font-mono text-[7px] text-cyber-400/60 uppercase tracking-widest">
                    Briefing_Técnico_v4.2
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-black/40 border border-white/10 rounded-3xl p-6 overflow-hidden group">
              <div className="scan-line"></div>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[8px] font-black text-cyber-400 uppercase tracking-widest mb-1">Status do Ecossistema</p>
                    <p className="text-lg font-black text-white uppercase tracking-tighter leading-none">Vantagem Algorítmica</p>
                  </div>
                  <span className="font-mono text-cyber-400 text-sm font-black">+450% Eficiência</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <p className="text-[9px] font-bold text-white uppercase tracking-tighter italic">Engenharia</p>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <p className="text-[9px] font-bold text-white uppercase tracking-tighter italic">Automação</p>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <p className="text-[9px] font-bold text-white uppercase tracking-tighter italic">Estratégia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
