export async function POST() {
  const redirectUrl = "https://ats-checker-lake.vercel.app/result?paid=true";
  return Response.json({
    url: `https://mbq.lemonsqueezy.com/checkout/buy/9dc8a7bb-3644-4f69-a626-2abb6562bf60?redirect=${encodeURIComponent(redirectUrl)}`,
  });
}
