import { getAIModel } from "@/lib/claude";

export async function POST(req: Request) {
  const { resume, job } = await req.json();

  const model = getAIModel();
  const result = await model.generateContent(`Rewrite this resume to maximize ATS compatibility for the given job description.
- Naturally include missing keywords
- Keep professional tone
- Improve bullet points
- Keep it concise and clean
- Return plain text only, no markdown

Resume:
${resume}

Job Description:
${job}`);

  const text = result.response.text();
  return Response.json({ result: text });
}
