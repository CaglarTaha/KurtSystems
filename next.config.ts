import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "kingwoodstud.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "assets.newatlas.com" },
      { protocol: "https", hostname: "newatlas-brightspot.s3.amazonaws.com" },
      { protocol: "https", hostname: "cdnuploads.aa.com.tr" },
      { protocol: "https", hostname: "www.telegraph.co.uk" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "www.theirishfield.ie" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "am-a.akamaihd.net" },
      { protocol: "http", hostname: "static.lolesports.com" },
      { protocol: "https", hostname: "nip.gl" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{member}}",
    },
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(svg|png|jpg|jpeg|gif|webp|ico)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
