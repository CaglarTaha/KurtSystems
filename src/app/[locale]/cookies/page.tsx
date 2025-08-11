"use client";
import { useLocale } from "@/contexts/LocaleContext";

export default function CookiesPage() {
  const { t } = useLocale();
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-4">{t("cookies_title")}</h1>
      <p className="opacity-80 mb-6">{t("cookies_intro")}</p>

      <section className="grid gap-3">
        <h2 className="text-xl font-semibold">{t("cookies_what_title")}</h2>
        <p className="opacity-80">{t("cookies_what_desc")}</p>
      </section>

      <section className="grid gap-3 mt-8">
        <h2 className="text-xl font-semibold">{t("cookies_how_title")}</h2>
        <ul className="list-disc list-inside opacity-80 grid gap-1">
          <li>{t("cookies_usage_necessary")}</li>
          <li>{t("cookies_usage_performance")}</li>
        </ul>
      </section>

      <section className="grid gap-3 mt-8">
        <h2 className="text-xl font-semibold">{t("cookies_control_title")}</h2>
        <p className="opacity-80">{t("cookies_control_desc")}</p>
      </section>
    </main>
  );
}


