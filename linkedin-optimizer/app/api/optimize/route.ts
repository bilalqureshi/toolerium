import { getAIModel } from "@/lib/claude";

export async function POST(req: Request) {
  try {
    const { headline, about, targetRole, skills } = await req.json();

    if (!targetRole?.trim()) {
      return Response.json(
        { error: "Target role is required." },
        { status: 400 }
      );
    }

    const model = getAIModel(true);
    const result = await model.generateContent(`Rewrite this LinkedIn profile to maximize recruiter appeal and LinkedIn search visibility for the target role.
Respond ONLY with valid JSON — no markdown, no explanation, no code fences.

{
  "headline": <string, max 220 characters, punchy and keyword-rich>,
  "about": <string, full rewritten About section, 3-5 paragraphs, first-person, keyword-rich, ends with a call to action>,
  "recommended_skills": [<string>, ...]
}

Rules:
- headline: include the target role title, 1-2 key skills, and a value proposition. Max 220 chars.
- about: write in first person, naturally weave in missing keywords, start with a hook, end with "Feel free to connect or reach out at [email]."
- recommended_skills: 8-12 LinkedIn skills to add for maximum search visibility for this role
- Do not invent experience or credentials not implied by the existing profile

Target Role: ${targetRole}
${skills?.trim() ? `Skills to highlight: ${skills}` : ""}

Current Headline:
${headline || "(not provided)"}

Current About / Summary:
${about || "(not provided)"}`);

    const text = result.response.text().trim();
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    return Response.json(parsed);
  } catch (err) {
    console.error("Optimize error:", err);
    return Response.json(
      { error: "Optimization failed. Please try again." },
      { status: 500 }
    );
  }
}
