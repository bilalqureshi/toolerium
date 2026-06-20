export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const returnUrl = body.returnUrl || "https://linkedin-profile-optimizer.vercel.app/result?paid=true";

    // TODO: Replace with your Lemon Squeezy product checkout URL after creating the product
    const checkoutBase = "LEMON_SQUEEZY_CHECKOUT_URL_HERE";

    return Response.json({
      url: `${checkoutBase}?redirect=${encodeURIComponent(returnUrl)}`,
    });
  } catch {
    return Response.json({ error: "Could not create checkout." }, { status: 500 });
  }
}
