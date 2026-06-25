import Groq from "groq-sdk";

let groq: Groq | null = null;

export function getAIClient() {
  if (!groq) {
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });
  }
  return groq;
}

export const AI_MODEL = "llama-3.3-70b-versatile";
