import { getClaudeClient } from "@/lib/claude";

export async function POST(req: Request) {
  try {
    const { headline, about, targetRole, skills } = await req.json();

    if (!headline?.trim() && !about?.trim()) {
      return Response.json(
        { error: "Please provide at least a headline or About section." },
        { status: 400 }
      );
    }

    if (!targetRole?.trim()) {
      return Response.json(
        { error: "Please provide a target role." },
        { status: 400 }
      );
    }

    const response = await getClaudeClient().messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `Analyze this LinkedIn profile for the target role. Be honest and specific.
Respond ONLY with valid JSON — no markdown, no explanation, no code fences.

{
  "score": <integer 0-100>,
  "verdict": <"Strong" | "Needs Work" | "Weak">,
  "improvements": [<string>, <string>, <string>],
  "missing_keywords": [<string>, ...]
}

Rules:
- score: realistic assessment of recruiter appeal and keyword match for the target role
- verdict: "Strong" for 70+, "Needs Work" for 40-69, "Weak" for below 40
- improvements: exactly 3 specific, actionable tips (not generic advice)
- missing_keywords: role-relevant keywords and phrases absent from the profile (5-10 items)

Target Role: ${targetRole}
${skills?.trim() ? `Key skills they want to highlight: ${skills}` : ""}

Current Headline:
${headline || "(not provided)"}

Current About / Summary:
${about || "(not provided)"}`,
        },
      ],
    });

    const text =
      response.content[0].type === "text"
        ? response.content[0].text.trim()
        : "";
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    return Response.json(parsed);
  } catch (err) {
    console.error("Analyze error:", err);
    return Response.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 }
    );
  }
}
