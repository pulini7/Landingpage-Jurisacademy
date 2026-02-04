
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAICounselorResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Você é a JURIS-AI, a interface inteligente da JurisAcademy. 
        Seu tom é técnico, futurista e altamente eficiente. Use analogias entre direito e computação.
        Ex: 'Otimizar o código processual', 'Debugar uma petição', 'Refatorar um argumento'.
        Não seja excessivamente amigável; seja preciso. 
        Mencione que nossos sistemas de formação (LVL_01, LVL_02, LVL_03) estão prontos para processar a carreira do usuário.`,
        temperature: 0.5,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return "ERRO_DE_SISTEMA: Falha na conexão com o kernel neural. Reprocesse sua consulta.";
  }
};
