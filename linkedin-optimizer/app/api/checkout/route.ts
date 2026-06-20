export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const returnUrl = body.returnUrl || "https://linkedin-optimizer-livid.vercel.app/result?paid=true";

    // TODO: Replace with your Lemon Squeezy product checkout URL after creating the product
    const checkoutBase = "https://mbq.lemonsqueezy.com/checkout/buy/08c6c473-3e26-471d-8b30-646ab8747be1";

    return Response.json({
      url: `${checkoutBase}?redirect=${encodeURIComponent(returnUrl)}`,
    });
  } catch {
    return Response.json({ error: "Could not create checkout." }, { status: 500 });
  }
}
