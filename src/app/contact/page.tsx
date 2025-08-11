"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter } from "lucide-react";


export default function ContactPage() {
  const [status, setStatus] = useState<string>("");
  const { t } = useLocale();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    // Demo: simply show message
    setStatus(t("contact_thank_you"));
    form.reset();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-16">
      <header className="grid gap-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        >
          {t("contact_title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="opacity-80 max-w-3xl mx-auto text-lg"
        >
          {t("contact_intro")}
        </motion.p>
      </header>

      <section className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-white/10 p-8 bg-white/[0.02] hover:bg-white/[0.05] transition"
        >
          <h2 className="text-2xl font-semibold mb-6">{t("send_message")}</h2>
          <form onSubmit={onSubmit} className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">{t("name_label")}</label>
                <input 
                  name="name" 
                  required 
                  className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-white/40 transition" 
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t("email_label")}</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-white/40 transition" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">{t("subject_label")}</label>
              <select 
                name="subject" 
                className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-white/40 transition"
              >
                <option value="">{t("subject_choose")}</option>
                <option value="business">{t("subject_business")}</option>
                <option value="sponsorship">{t("subject_sponsorship")}</option>
                <option value="esports">{t("subject_esports")}</option>
                <option value="technology">{t("subject_technology")}</option>
                <option value="other">{t("subject_other")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">{t("message_label")}</label>
              <textarea 
                name="message" 
                rows={6} 
                required 
                className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-white/40 transition resize-none" 
              />
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t("send")}
            </button>
            {status && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm opacity-80 text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6"
        >
          <div className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 hover:bg-gradient-to-br hover:from-emerald-500/15 hover:to-indigo-500/15 transition">
            <h3 className="font-semibold mb-4">{t("contact_info")}</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-60" />
                <span className="text-sm opacity-80">info@kurtsystems.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-60" />
                <span className="text-sm opacity-80">+90 (XXX) XXX XX XX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 opacity-60" />
                <span className="text-sm opacity-80">İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 opacity-60" />
                <span className="text-sm opacity-80">Pzt - Cmt: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:bg-white/[0.05] transition">
            <h3 className="font-semibold mb-4">{t("social")}</h3>
            <div className="grid gap-3">
              <a 
                className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-white/30 transition"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.instagram.com/kurtsystems/?hl=en"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@kurtsystems</span>
              </a>
              <a 
                className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-white/30 transition"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.facebook.com/kurtsystems/"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Kurtsystems</span>
              </a>
              <a 
                className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-white/30 transition"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://x.com/kurtsystems1?lang=en"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-sm">@kurtsystems1</span>
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:bg-white/[0.05] transition">
            <h3 className="font-semibold mb-4">{t("esports_contact")}</h3>
            <div className="grid gap-3 text-sm opacity-80">
              <p>ULF E-Sports takımı için:</p>
              <a 
                className="underline underline-offset-4 hover:opacity-80 transition"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://x.com/ulfesports_gg?lang=en"
              >
                X - ULF E-Sports
              </a>
              <a 
                className="underline underline-offset-4 hover:opacity-80 transition"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://lolesports.com/teams/ulf-esports"
              >
                LoL Esports Profili
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ removed as requested */}

      <section className="text-center grid gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          {t("quick_access")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a href="/" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition shadow-lg">{t("home")}</a>
          <a href="/about" className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition">{t("about")}</a>
          <a href="/esports" className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition">{t("esports")}</a>
        </motion.div>
      </section>
    </main>
  );
}


