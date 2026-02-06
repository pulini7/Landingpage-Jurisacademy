import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente baseadas no modo (development/production)
  // O terceiro argumento '' garante que carregue todas as variáveis, não apenas as com prefixo VITE_
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY para compatibilidade com o código que usa @google/genai
      // Adicionamos VITE_GEMINI_API_KEY como fallback caso o usuário tenha definido assim
      'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.VITE_API_KEY || env.API_KEY || ''),
    },
    server: {
      host: true
    }
  };
});