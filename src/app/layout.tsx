import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// Global layout (no Navbar/Providers here). Those are applied per-locale in `app/[locale]/layout.tsx`.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kurtsystems",
  title: {
    default: "Kurtsystems",
    template: "%s | Kurtsystems",
  },
  description:
    "Kurtsystems - Yenilikçi teknoloji çözümleri ve üst raylı at antrenman sistemi. Güvenlik, veri odaklılık ve performans.",
  alternates: {
    languages: {
      "tr-TR": "/tr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kurtsystems",
    title: "Kurtsystems",
    description:
      "Yenilikçi üst raylı at antrenman sistemi ve teknoloji çözümleri. Güvenli, ölçülebilir ve veri odaklı.",
    images: [
      {
        url: "/mainlogo.png",
        width: 1200,
        height: 630,
        alt: "Kurtsystems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kurtsystems1",
    title: "Kurtsystems",
    description:
      "Yenilikçi üst raylı at antrenman sistemi ve teknoloji çözümleri.",
    images: ["/mainlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieLocale = (await cookies()).get("locale")?.value;
  const htmlLang = cookieLocale === "en" ? "en" : "tr";
  return (
    <html lang={htmlLang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kurtsystems",
              url: siteUrl,
              logo: new URL("/mainlogo.png", siteUrl).toString(),
              sameAs: [
                "https://www.instagram.com/kurtsystems/?hl=en",
                "https://www.facebook.com/kurtsystems/",
                "https://x.com/kurtsystems1?lang=en",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
