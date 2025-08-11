import type { Metadata } from "next";
import { translations } from "@/i18n/locales";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import PageTransition from "@/components/PageTransition";
import "../globals.css";
import { Instagram, Facebook, Twitter } from "lucide-react";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Kurtsystems",
    template: "%s | Kurtsystems",
  },
  description:
    "Kurtsystems - Innovative technology solutions and equine training system.",
  alternates: {
    languages: {
      "tr-TR": "/tr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Kurtsystems",
    images: [
      {
        url: "/mainlogo.png",
        width: 1200,
        height: 630,
        alt: "Kurtsystems",
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  return (
    <Providers locale={locale}>
      <Navbar />
      <PageTransition>
        <div className="pt-24">{children}</div>
      </PageTransition>
      <Footer locale={locale} />
      <CookieBanner />
    </Providers>
  );
}

function Footer({ locale }: { locale: "tr" | "en" }) {
  const t = (key: string) => (translations[locale] ?? translations.tr)[key] ?? key;
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Kurtsystems. {t("all_rights_reserved")}</p>
        <div className="flex items-center gap-4">
          <a className="hover:opacity-80" href={`/${locale}/cookies`}>
            <span className="text-sm underline">{t("cookies_title")}</span>
          </a>
          <a className="hover:opacity-80" href={`/${locale}/kvkk`}>
            <span className="text-sm underline">KVKK</span>
          </a>
          <a className="hover:opacity-80" href="https://www.instagram.com/kurtsystems/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 inline" />
          </a>
          <a className="hover:opacity-80" href="https://www.facebook.com/kurtsystems/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 inline" />
          </a>
          <a className="hover:opacity-80" href="https://x.com/kurtsystems1?lang=en" target="_blank" rel="noopener noreferrer" aria-label="X">
            <Twitter className="w-5 h-5 inline" />
          </a>
        </div>
      </div>
    </footer>
  );
}
