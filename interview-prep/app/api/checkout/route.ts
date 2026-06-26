export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const returnUrl = body.returnUrl || "https://interview-prep-six-gules.vercel.app/result?paid=true";

    const checkoutBase = "https://mbq.lemonsqueezy.com/checkout/buy/05ae0e69-fe32-4f33-916f-4c4919c78300";

    return Response.json({
      url: `${checkoutBase}?redirect=${encodeURIComponent(returnUrl)}`,
    });
  } catch {
    return Response.json({ error: "Could not create checkout." }, { status: 500 });
  }
}
