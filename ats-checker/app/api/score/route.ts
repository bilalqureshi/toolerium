import { getClaudeClient } from "@/lib/claude";

export async function POST(req: Request) {
  const { resume, job } = await req.json();

  const response = await getClaudeClient().messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: `Analyze this resume against the job description.
Respond ONLY with valid JSON, no markdown, no explanation.

{
  "score": number between 0-100,
  "missing_keywords": ["keyword1", "keyword2"],
  "suggestions": ["suggestion1", "suggestion2", "suggestion3"]
}

Resume:
${resume}

Job Description:
${job}`,
      },
    ],
  });

  const text = response.content[0].type === "text" ? response.content[0].text.trim() : "";
  const clean = text.replace(/```json|```/g, "").trim();
  return Response.json(JSON.parse(clean));
}
