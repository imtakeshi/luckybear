const DEFAULT_AFFILIATE_URL = "https://lb777.xyz/9FF4pl";

export function getAffiliateUrl(): string {
  const url = process.env.NEXT_PUBLIC_AFFILIATE_URL?.trim();
  return url || DEFAULT_AFFILIATE_URL;
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}
