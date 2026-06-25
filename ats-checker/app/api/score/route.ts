import { getAIClient, AI_MODEL } from "@/lib/claude";

export async function POST(req: Request) {
  const { resume, job } = await req.json();

  const completion = await getAIClient().chat.completions.create({
    model: AI_MODEL,
    max_tokens: 1000,
    response_format: { type: "json_object" },
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

  const text = completion.choices[0].message.content ?? "";
  return Response.json(JSON.parse(text));
}
