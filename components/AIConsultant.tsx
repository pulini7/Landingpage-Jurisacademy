
import React, { useState, useEffect, useRef } from 'react';
import { getAICounselorResponse } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const typingTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (response) {
      setDisplayedResponse('');
      let i = 0;
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      
      typingTimerRef.current = window.setInterval(() => {
        setDisplayedResponse(prev => prev + response.charAt(i));
        i++;
        if (i >= response.length) {
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        }
      }, 15);
    }
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setResponse(null);
    const result = await getAICounselorResponse(input);
    setResponse(result || "ERRO_CRÍTICO: Kernel de processamento indisponível.");
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto bg-[#04091a] rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 overflow-hidden flex flex-col lg:flex-row reveal shadow-2xl relative">
        <div className="scan-line opacity-5"></div>
        
        {/* Input Side: Control Terminal */}
        <div className="lg:w-[45%] p-10 lg:p-14 space-y-10 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyber-400 rounded-full"></div>
                <span className="font-mono text-[10px] text-cyber-400 uppercase tracking-[0.4em] font-black">Live_Diagnostic_Kernel</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
               Teste o Nosso <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-400 to-blue-500 italic">Cérebro Digital.</span>
             </h2>
             <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm">
               Submeta um desafio processual ou administrativo. O kernel JurisAcademy irá processar uma estratégia de automação em tempo real.
             </p>
          </div>

          <form onSubmit={handleSubmit} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-400 to-blue-600 rounded-2xl blur opacity-10 group-focus-within:opacity-30 transition-opacity"></div>
            <div className="relative">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Como reduzir o tempo de triagem de 2000 documentos em um processo?"
                className="w-full bg-black/60 border border-white/10 text-white p-6 rounded-2xl h-40 focus:outline-none focus:border-cyber-400/50 transition-all placeholder:text-slate-700 text-sm font-mono resize-none leading-relaxed"
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-4">
                 <p className="text-[8px] font-mono text-slate-600 uppercase tracking-widest hidden sm:block">Encoding: UTF-8</p>
                 <button 
                  disabled={loading}
                  className="bg-cyber-400 text-black px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Processando...
                    </>
                  ) : "Executar Consulta"}
                </button>
              </div>
            </div>
          </form>

          <div className="flex gap-6 opacity-20 items-center grayscale pointer-events-none">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Hardware_Sync: OK</span>
            <div className="flex-1 h-px bg-slate-500"></div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">v4.0.2</span>
          </div>
        </div>

        {/* Output Side: Read-Only Console */}
        <div className="lg:w-[55%] bg-black/40 p-10 lg:p-14 flex items-center justify-center relative min-h-[400px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(34,211,238,0.03)_1px,transparent_0)] bg-[size:30px_30px] pointer-events-none"></div>
          
          {displayedResponse || loading ? (
            <div className="relative w-full h-full flex flex-col">
               <div className="bg-[#020617]/80 border border-cyber-400/20 p-8 rounded-[2rem] backdrop-blur-xl flex-1 flex flex-col overflow-hidden shadow-inner">
                 <div className="flex items-center justify-between mb-6 border-b border-cyber-400/10 pb-4">
                    <div className="flex items-center gap-3">
                       <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : 'bg-cyber-400'}`}></div>
                       <span className="font-mono text-[9px] text-cyber-400 uppercase tracking-widest">
                         {loading ? "Stream_Processing..." : "Diagnostic_Complete"}
                       </span>
                    </div>
                    <p className="font-mono text-[8px] text-slate-600 uppercase">Latency: 24ms</p>
                 </div>
                 
                 <div className="flex-1 overflow-y-auto font-mono text-xs md:text-sm text-cyan-50/90 leading-relaxed space-y-4 custom-scrollbar pr-4">
                    {loading && !displayedResponse ? (
                      <div className="space-y-3">
                        <div className="h-4 bg-white/5 w-3/4 rounded animate-pulse"></div>
                        <div className="h-4 bg-white/5 w-1/2 rounded animate-pulse"></div>
                        <div className="h-4 bg-white/5 w-5/6 rounded animate-pulse"></div>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">
                        {displayedResponse}
                        <span className="inline-block w-2 h-4 bg-cyber-400 ml-1 animate-pulse"></span>
                      </div>
                    )}
                 </div>

                 {!loading && displayedResponse && (
                   <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
                      <button onClick={() => {setResponse(null); setDisplayedResponse(''); setInput('');}} className="text-[9px] font-bold text-slate-500 uppercase hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg">Resetar Terminal</button>
                      <a href="#cursos" className="text-[9px] font-black text-cyber-400 uppercase tracking-[0.2em] bg-cyber-400/10 border border-cyber-400/20 px-6 py-2 rounded-lg hover:bg-cyber-400 hover:text-black transition-all">Baixar Protocolo Completo</a>
                   </div>
                 )}
               </div>
            </div>
          ) : (
            <div className="text-center space-y-8 reveal">
              <div className="w-20 h-20 bg-white/5 rounded-full mx-auto flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                <svg className="w-10 h-10 text-white/20 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.5em]">Console_Standby</p>
                <p className="text-[8px] text-slate-600 font-mono italic">Aguardando telemetria de entrada...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
