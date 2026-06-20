import { getClaudeClient } from "@/lib/claude";

export async function POST(req: Request) {
  const { resume, jobTitle, company, jobDescription, tone } = await req.json();

  const response = await getClaudeClient().messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1500,
    messages: [
      {
        role: "user",
        content: `Write a professional cover letter for the following:

Job Title: ${jobTitle}
Company: ${company}
Tone: ${tone}

Resume:
${resume}

Job Description:
${jobDescription}

Requirements:
- 3-4 paragraphs
- Highlight relevant experience from resume
- Use keywords from job description naturally
- Match the requested tone (${tone})
- Do NOT use generic phrases like "I am writing to apply"
- Make it feel human and specific
- Return plain text only, no markdown`,
      },
    ],
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  return Response.json({ result: text });
}
