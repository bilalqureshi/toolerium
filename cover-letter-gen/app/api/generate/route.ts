import { getAIClient, AI_MODEL } from "@/lib/claude";

export async function POST(req: Request) {
  const { resume, jobTitle, company, jobDescription, tone } = await req.json();

  const completion = await getAIClient().chat.completions.create({
    model: AI_MODEL,
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

  const text = completion.choices[0].message.content ?? "";
  return Response.json({ result: text });
}
