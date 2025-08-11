"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award, TrendingUp, Shield, Gauge } from "lucide-react";

function HeroSlider() {
  const { t } = useLocale();
  const slides = [
    {
      src: "https://www.theirishfield.ie/WEBFILES/791561-297503.jpg",
      alt: t("slider_alt_overhead"),
      caption: t("slider_caption_overhead"),
    },
  
    {
      src: "https://pbs.twimg.com/media/E_Y-RM0X0AYO31w?format=jpg&name=medium",
      alt: t("slider_alt_vehicle"),
      caption: t("slider_caption_adaptation"),
    },
    {
      src: "https://assets.newatlas.com/dims4/default/39eceae/2147483647/strip/true/crop/2048x1152+0+192/resize/1200x675!/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fb4%2F28%2F0d20cb314b15a39ced78ab7b0120%2F20414069-910227039118703-5313525660489278392-o.jpg",
      alt: t("slider_alt_safety"),
      caption: t("slider_caption_safety"),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 700px"
          />
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <div className="text-sm opacity-90">{slides[index].caption}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 grid place-items-center"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 grid place-items-center"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLocale();
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_40rem_at_10%_0%,rgba(99,102,241,0.12),transparent),radial-gradient(40rem_30rem_at_90%_10%,rgba(16,185,129,0.12),transparent)]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight"
            >
              {t("about")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="opacity-80 max-w-2xl mt-4 text-lg"
            >
              {t("about_intro")}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="rounded-xl border border-white/10 p-5 bg-white/[0.02]">
                <div className="text-sm opacity-60">{t("about_mission_title")}</div>
                <div className="mt-1 font-semibold">{t("about_mission_desc")}</div>
              </div>
              <div className="rounded-xl border border-white/10 p-5 bg-gradient-to-br from-emerald-500/10 to-indigo-500/10">
                <div className="text-sm opacity-60">{t("about_vision_title")}</div>
                <div className="mt-1 font-semibold">{t("about_vision_desc")}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Hero Slider */}
            <HeroSlider />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-white/10 p-6 md:p-10 bg-white/[0.02] grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("royal_visit_title")}</h2>
            <p className="opacity-80 leading-relaxed">{t("royal_visit_desc")}</p>
          </div>
          <div className="relative h-72 md:h-80 rounded-xl overflow-hidden border border-white/10">
            <Image
              src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/26/thumbs_b_c_5053fbe78a8997cad30ac60f3d5c1cef.jpg"
              alt="Kraliçe II. Elizabeth ziyareti"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* Slider component (scoped to this file) */}
      

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center"
        >
          {t("values_title")}
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: t("values_innovation_title"), desc: t("values_innovation_desc"), Icon: TrendingUp },
            { title: t("values_security_title"), desc: t("values_security_desc"), Icon: Shield },
            { title: t("values_quality_title"), desc: t("values_quality_desc"), Icon: Award },
            { title: t("values_sustainability_title"), desc: t("values_sustainability_desc"), Icon: Gauge },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:bg-white/[0.05] transition text-center"
            >
              <v.Icon className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm opacity-70">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-white/10 p-8 bg-white/[0.02] hover:bg-white/[0.05] transition"
        >
          <h2 className="text-2xl font-semibold mb-6">{t("founder_title")}</h2>
          <p className="opacity-80 leading-relaxed mb-6">{t("founder_desc1")}</p>
          <p className="opacity-80 leading-relaxed mb-6">{t("founder_desc2")}</p>
          <a
            href="https://en.wikipedia.org/wiki/Mehmet_Kurt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition"
          >
            {t("read_on_wikipedia")} <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6"
        >
          <div className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10">
            <h3 className="font-semibold mb-3">{t("kurtsystems_vision_title")}</h3>
            <p className="opacity-80 leading-relaxed">{t("kurtsystems_vision_desc")}</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.02]">
            <h3 className="font-semibold mb-3">{t("future_goals_title")}</h3>
            <ul className="opacity-80 space-y-2 text-sm">
              <li>• {t("future_goal_leadership")}</li>
              <li>• {t("future_goal_new_sports")}</li>
              <li>• {t("future_goal_ai_analytics")}</li>
              <li>• {t("future_goal_sustainable")}</li>
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          {t("about_logo_title")}
        </motion.h2>
        <div className="flex items-center justify-center">
          <Image
            src="https://kingwoodstud.com/wp-content/uploads/2024/07/logo.png"
            alt="Kingwood Stud Logo"
            width={220}
            height={88}
            className="rounded-lg border border-white/10 p-4 bg-white/[0.02]"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          {t("about_contact_heading")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="opacity-80 max-w-2xl mx-auto text-center mb-6"
        >
          {t("about_contact_desc")}
        </motion.p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/contact" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition shadow-lg">{t("contact")}</Link>
          <Link href="/esports" className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition">{t("esports")}</Link>
        </div>
      </section>
    </main>
  );
}


