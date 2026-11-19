import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Data della pubblicazione: serve per mostrare subito l'orario (estivo/invernale) giusto
  env: { NEXT_PUBLIC_BUILD_DATE: new Date().toISOString() },
  experimental: {
    // 404 unica per gli indirizzi che non esistono (il layout principale dipende dalla lingua)
    globalNotFound: true,
  },
  async redirects() {
    // Il nome standard è /llms.txt; anche /llm.txt porta lì
    return [
      { source: "/llm.txt", destination: "/llms.txt", permanent: true },
      // Alcuni browser cercano ancora /favicon.ico: lo mandiamo all'icona del sito
      { source: "/favicon.ico", destination: "/icon.svg", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
