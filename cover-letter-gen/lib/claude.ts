import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI: GoogleGenerativeAI | null = null;

function getGenAI() {
  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  }
  return genAI;
}

export function getAIModel(jsonMode = false) {
  return getGenAI().getGenerativeModel({
    model: "gemini-2.0-flash",
    ...(jsonMode ? { generationConfig: { responseMimeType: "application/json" } } : {}),
  });
}
