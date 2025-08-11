"use client";
import { useLocale } from "@/contexts/LocaleContext";

export default function KvkkPage() {
  const { t } = useLocale();
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-4">{t("kvkk_title")}</h1>
      <p className="opacity-80 mb-6">{t("kvkk_intro")}</p>

      <section className="grid gap-3">
        <h2 className="text-xl font-semibold">{t("kvkk_scope_title")}</h2>
        <p className="opacity-80">{t("kvkk_scope_desc")}</p>
      </section>

      <section className="grid gap-3 mt-8">
        <h2 className="text-xl font-semibold">{t("kvkk_ads_title")}</h2>
        <p className="opacity-80">{t("kvkk_ads_desc")}</p>
      </section>

      <section className="grid gap-3 mt-8">
        <h2 className="text-xl font-semibold">{t("kvkk_rights_title")}</h2>
        <p className="opacity-80">{t("kvkk_rights_desc")}</p>
      </section>
    </main>
  );
}


