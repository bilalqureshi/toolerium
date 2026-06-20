export async function POST() {
  const redirectUrl = "https://ats-checker-lake.vercel.app/result?paid=true";
  return Response.json({
    url: `https://mbq.lemonsqueezy.com/checkout/buy/adecbd7b-6043-4bcd-bc54-6cc24dd13f42?redirect=${encodeURIComponent(redirectUrl)}`,
  });
}
