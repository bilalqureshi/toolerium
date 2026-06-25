import { getAIClient, AI_MODEL } from "@/lib/claude";

export async function POST(req: Request) {
  const { resume, job } = await req.json();

  const completion = await getAIClient().chat.completions.create({
    model: AI_MODEL,
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: `Rewrite this resume to maximize ATS compatibility for the given job description.
- Naturally include missing keywords
- Keep professional tone
- Improve bullet points
- Keep it concise and clean
- Return plain text only, no markdown

Resume:
${resume}

Job Description:
${job}`,
      },
    ],
  });

  const text = completion.choices[0].message.content ?? "";
  return Response.json({ result: text });
}
