import { getAIClient, AI_MODEL } from "@/lib/claude";

export async function POST(req: Request) {
  try {
    const { role, company, jobDescription } = await req.json();

    if (!role?.trim()) {
      return Response.json({ error: "Role is required." }, { status: 400 });
    }

    if (!jobDescription?.trim()) {
      return Response.json({ error: "Job description is required." }, { status: 400 });
    }

    const completion = await getAIClient().chat.completions.create({
      model: AI_MODEL,
      max_tokens: 4000,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: `Generate 15 interview questions with full STAR method answers for this role. These are the paid results.
Respond ONLY with valid JSON — no markdown, no explanation, no code fences.

{
  "questions": [
    {
      "question": <string>,
      "type": <"Behavioral" | "Situational" | "Technical" | "Motivational">,
      "star_answer": {
        "situation": <string, 1-2 sentences setting the scene — generic enough to adapt>,
        "task": <string, 1 sentence describing what needed to be done>,
        "action": <string, 2-3 sentences describing specific actions taken — use "I" not "we">,
        "result": <string, 1-2 sentences with measurable outcome where possible>
      },
      "follow_ups": [<string>, <string>]
    }
  ]
}

Rules:
- Generate exactly 15 questions
- Cover a mix: 5-6 behavioral, 3-4 situational, 3 technical/role-specific, 2 motivational
- STAR answers should be realistic templates the candidate can adapt — not vague platitudes
- Actions should be specific: mention frameworks, processes, or decisions relevant to the role
- Results should include metrics or concrete outcomes where possible
- Follow-ups are the 2 most common follow-up questions for each question
- Questions must be specific to this job description — not generic

Role: ${role}
${company?.trim() ? `Company: ${company}` : ""}

Job Description:
${jobDescription.slice(0, 3000)}`,
        },
      ],
    });

    const text = completion.choices[0].message.content ?? "";
    const parsed = JSON.parse(text);

    if (!parsed.questions || !Array.isArray(parsed.questions)) {
      throw new Error("Invalid response from AI.");
    }

    return Response.json(parsed);
  } catch (err) {
    console.error("Generate error:", err);
    return Response.json(
      { error: "Failed to generate interview pack. Please try again." },
      { status: 500 }
    );
  }
}
