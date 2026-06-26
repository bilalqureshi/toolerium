export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const returnUrl = body.returnUrl || "https://interview-prep-ai.vercel.app/result?paid=true";

    // TODO: Replace with your Lemon Squeezy product checkout URL after creating the $19 product
    const checkoutBase = "https://mbq.lemonsqueezy.com/checkout/buy/INTERVIEW_PREP_PRODUCT_ID";

    return Response.json({
      url: `${checkoutBase}?redirect=${encodeURIComponent(returnUrl)}`,
    });
  } catch {
    return Response.json({ error: "Could not create checkout." }, { status: 500 });
  }
}
