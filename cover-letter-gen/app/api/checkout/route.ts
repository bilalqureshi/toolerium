export async function POST() {
  const redirectUrl = "https://cover-letter-gen-rho.vercel.app/?paid=true";
  return Response.json({
    url: `https://mbq.lemonsqueezy.com/checkout/buy/ac15c55f-61ad-41e1-ae46-6dbd7df825c8?redirect=${encodeURIComponent(redirectUrl)}`,
  });
}
