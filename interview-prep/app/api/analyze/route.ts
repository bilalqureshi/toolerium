import { getAIClient, AI_MODEL } from "@/lib/claude";

export async function POST(req: Request) {
  try {
    const { role, company, jobDescription } = await req.json();

    if (!role?.trim()) {
      return Response.json({ error: "Please provide a target role." }, { status: 400 });
    }

    if (!jobDescription?.trim() || jobDescription.trim().length < 50) {
      return Response.json(
        { error: "Please provide a job description (at least 50 characters)." },
        { status: 400 }
      );
    }

    const completion = await getAIClient().chat.completions.create({
      model: AI_MODEL,
      max_tokens: 1200,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: `Generate 3 interview questions for this role. These are the free sample questions a candidate sees before they pay.
Respond ONLY with valid JSON — no markdown, no explanation, no code fences.

{
  "sample_questions": [
    {
      "question": <string, the interview question>,
      "type": <"Behavioral" | "Situational" | "Technical" | "Motivational">,
      "why": <string, one sentence explaining why interviewers ask this for this specific role>
    }
  ]
}

Rules:
- Generate exactly 3 questions
- Make questions specific to the job description — not generic questions anyone could ask
- Mix question types (at least 2 different types)
- "why" should reference the role or a specific responsibility from the JD

Role: ${role}
${company?.trim() ? `Company: ${company}` : ""}

Job Description:
${jobDescription.slice(0, 3000)}`,
        },
      ],
    });

    const text = completion.choices[0].message.content ?? "";
    const parsed = JSON.parse(text);
    return Response.json(parsed);
  } catch (err) {
    console.error("Analyze error:", err);
    return Response.json(
      { error: "Failed to generate questions. Please try again." },
      { status: 500 }
    );
  }
}
