"use client";
import { useEffect, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

export default function CookieBanner() {
  const { t, locale } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const readCookie = () => {
      try {
        const accepted = document.cookie
          .split(";")
          .map((c) => c.trim())
          .find((c) => c.startsWith("cookie_consent="));
        if (!accepted) setVisible(true);
      } catch {
        setVisible(true);
      }
    };
    // Defer to idle to avoid blocking hydration
    if (typeof (window as any).requestIdleCallback === "function") {
      const handle = (window as any).requestIdleCallback(readCookie);
      return () => (window as any).cancelIdleCallback?.(handle);
    }
    const t = setTimeout(readCookie, 0);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `cookie_consent=accepted; Max-Age=${oneYear}; Path=/`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 z-40">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-xl border border-foreground/10 bg-background/90 backdrop-blur p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 shadow-lg">
          <div className="text-sm leading-relaxed">
            <div className="font-semibold mb-1 text-foreground">{t("cookie_consent_title")}</div>
            <div className="text-foreground/80">
              {t("cookie_consent_desc")} {" "}
              <a className="underline hover:opacity-80 text-foreground" href={`/${locale}/cookies`}>{t("learn_more")}</a>
            </div>
          </div>
          <div className="flex-1" />
          <button onClick={accept} className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
            {t("cookie_accept")}
          </button>
        </div>
      </div>
    </div>
  );
}


