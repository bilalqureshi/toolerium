import { getClaudeClient } from "@/lib/claude";

export async function POST(req: Request) {
  const { resume, job } = await req.json();

  const response = await getClaudeClient().messages.create({
    model: "claude-opus-4-8",
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

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  return Response.json({ result: text });
}
