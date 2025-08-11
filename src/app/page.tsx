"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Shield, Gauge, Layers, Hammer, Headphones, Award, Users, Clock, TrendingUp, ChevronDown } from "lucide-react";
import AnimatedNumber from "@/components/AnimatedNumber";
import { useLocale } from "@/contexts/LocaleContext";

export default function Home() {
  const { t, locale } = useLocale();
  // Static page: ensure deterministic HTML for SEO
  // Next can statically generate this page
  // (Dynamic data is not used here)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const STATIC_STATS = {
    sessions: 1200,
    injuryReductionPercent: 30,
    teams: 15,
    sensorDataMillions: 5,
  };
  const faqItems = [
    { q: t("home_faq_q1"), a: t("home_faq_a1") },
    { q: t("home_faq_q2"), a: t("home_faq_a2") },
    { q: t("home_faq_q3"), a: t("home_faq_a3") },
  ];
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(30rem_30rem_at_80%_20%,rgba(16,185,129,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-20">
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground"
            >
              {t("hero_title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-foreground/80"
            >
              {t("hero_desc")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-4 flex-wrap"
            >
              <Link href="#features" className="px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition shadow-lg">{t("btn_explore") || "Sistemi Keşfet"}</Link>
              <Link href={`/${locale}/esports`} className="px-6 py-3 rounded-lg border border-foreground/20 hover:border-foreground/40 transition text-foreground">{t("esports")}</Link>
              <Link href={`/${locale}/about`} className="px-6 py-3 rounded-lg border border-foreground/20 hover:border-foreground/40 transition text-foreground">{t("about")}</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex items-center gap-6"
            >
              <a className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/10 hover:border-foreground/30 transition text-foreground" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kurtsystems/?hl=en">
                <span className="text-sm">Instagram</span>
              </a>
              <a className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/10 hover:border-foreground/30 transition text-foreground" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kurtsystems/">
                <span className="text-sm">Facebook</span>
              </a>
              <a className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/10 hover:border-foreground/30 transition text-foreground" target="_blank" rel="noopener noreferrer" href="https://x.com/kurtsystems1?lang=en">
                <span className="text-sm">X</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden"
          >
            <Image 
              src="/mainlogo.png" 
              alt="Kurtsystems Main Logo" 
              fill 
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover rounded-lg" 
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
        </section>

        <section id="how-it-works" className="grid gap-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-foreground"
          >
            {t("home_how_it_works")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/80 max-w-2xl mx-auto"
          >
            {t("home_intro")}
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: t("hiw_01_title"),
                desc: t("hiw_01_desc"),
              },
              {
                step: "02",
                title: t("hiw_02_title"),
                desc: t("hiw_02_desc"),
              },
              {
                step: "03",
                title: t("hiw_03_title"),
                desc: t("hiw_03_desc"),
              },
              {
                step: "04",
                title: t("hiw_04_title"),
                desc: t("hiw_04_desc"),
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-foreground/10 p-6 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition"
              >
                <div className="text-sm text-foreground/60 font-mono">{s.step}</div>
                <h3 className="mt-1 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="features" className="grid gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-foreground"
          >
            {t("home_features")}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { title: t("feat_perf_title"), desc: t("feat_perf_desc"), Icon: Gauge },
              { title: t("feat_sec_title"), desc: t("feat_sec_desc"), Icon: Shield },
              { title: t("feat_scale_title"), desc: t("feat_scale_desc"), Icon: Layers },
              { title: t("feat_uiux_title"), desc: t("feat_uiux_desc"), Icon: Hammer },
              { title: t("feat_integ_title"), desc: t("feat_integ_desc"), Icon: ExternalLink },
              { title: t("feat_support_title"), desc: t("feat_support_desc"), Icon: Headphones },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-foreground/10 p-6 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition"
              >
                <div className="flex items-center gap-3">
                  <f.Icon className="w-5 h-5 text-foreground" />
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                </div>
                <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="specs" className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-foreground/10 p-6 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition"
          >
            <h2 className="text-2xl font-semibold text-foreground">{t("specs_title")}</h2>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/80 list-disc list-inside">
              <li>{t("spec_item1")}</li>
              <li>{t("spec_item2")}</li>
              <li>{t("spec_item3")}</li>
              <li>{t("spec_item4")}</li>
              <li>{t("spec_item5")}</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-foreground/10 p-6 bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 hover:bg-gradient-to-br hover:from-emerald-500/15 hover:to-indigo-500/15 transition"
          >
            <h3 className="font-semibold text-foreground">{t("benefits_title")}</h3>
            <ul className="mt-3 grid gap-2 text-sm text-foreground/80 list-disc list-inside">
              <li>{t("benefit_1")}</li>
              <li>{t("benefit_2")}</li>
              <li>{t("benefit_3")}</li>
              <li>{t("benefit_4")}</li>
            </ul>
          </motion.div>
        </section>

        {/* Stats section temporarily removed until real static values are provided */}

        <section id="faq" className="grid gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl font-bold text-center text-foreground"
          >
            {t("home_faq")}
          </motion.h2>
          <div className="grid gap-4 w-full max-w-3xl md:max-w-4xl mx-auto">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`rounded-2xl border border-foreground/10 bg-foreground/[0.03] hover:bg-foreground/[0.05] backdrop-blur-sm transition-all ${isOpen ? "shadow-lg ring-1 ring-foreground/10" : ""}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                  >
                    <span className="font-medium text-base md:text-lg pr-4 text-foreground">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 text-foreground/80"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-sm md:text-base text-foreground/80 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        
      </div>
    </main>
  );
}
