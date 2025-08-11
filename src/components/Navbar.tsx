"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Instagram, Facebook, Twitter, X } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale } = useLocale();
  const prefersReducedMotion = useReducedMotion();
  
  // E-Sports sayfasında ULF logosu, diğer sayfalarda Kurtsystems logosu
  // Make decision based on path without causing layout thrash
  const isEsports = /\/esports(\/|$)/.test(pathname || "");
  const logoSrc = isEsports ? "/ulflogo.png" : "/kurtsytemlogo.png";
  const logoAlt = pathname === "/esports" ? "ULF E-Sports Logo" : "Kurtsystems Logo";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b ${isEsports ? 'bg-black border-white/10' : 'bg-black sm:bg-background/70 sm:backdrop-blur border-b border-foreground/10'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center" aria-label="Home">
          <AnimatePresence mode="wait">
            <motion.div
               key={isEsports ? "esports" : "default"}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8, rotate: -10 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ 
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              <Image 
                src={logoSrc} 
                alt={logoAlt}
                width={120}
                height={120}
                priority
                sizes="120px"
                className="rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link href={`/${locale}`} className={`hover:opacity-80 transition ${isEsports ? 'text-white' : 'text-foreground'}`}>{t("home")}</Link>
          <Link href={`/${locale}/about`} className={`hover:opacity-80 transition ${isEsports ? 'text-white' : 'text-foreground'}`}>{t("about")}</Link>
          <Link href={`/${locale}/contact`} className={`hover:opacity-80 transition ${isEsports ? 'text-white' : 'text-foreground'}`}>{t("contact")}</Link>
          <Link href={`/${locale}/esports`} className={`hover:opacity-80 transition ${isEsports ? 'text-white' : 'text-foreground'}`}>{t("esports")}</Link>
          <motion.div
            className="relative bg-black/40 border border-white/20 rounded-full p-1"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
                          <motion.a
                href={locale === "tr" ? (pathname.replace(/^\/tr/, "/en") || "/en") : (pathname.replace(/^\/en/, "/tr") || "/tr")}
                className="relative flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                aria-label="Toggle language"
              >
              <motion.div
                className="absolute inset-0 bg-white text-black rounded-full"
                initial={false}
                animate={prefersReducedMotion ? { width: "50%" } : { x: locale === "tr" ? 0 : "100%", width: "50%" }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.6
                }}
              />
              <motion.span
                className="relative z-10 w-6 text-center"
                animate={prefersReducedMotion ? undefined : { color: locale === "tr" ? "#000" : "#fff" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {t("tr")}
              </motion.span>
              <motion.span
                className="relative z-10 w-6 text-center"
                animate={prefersReducedMotion ? undefined : { color: locale === "tr" ? "#fff" : "#000" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {t("en")}
              </motion.span>
            </motion.a>
          </motion.div>
          <div className="flex items-center gap-3">
            <a aria-label="Instagram" className={`hover:opacity-80 ${isEsports ? 'text-white' : 'text-foreground'}`} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kurtsystems/?hl=en">
              <Instagram className="w-5 h-5" />
            </a>
            <a aria-label="Facebook" className={`hover:opacity-80 ${isEsports ? 'text-white' : 'text-foreground'}`} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kurtsystems/">
              <Facebook className="w-5 h-5" />
            </a>
            <a aria-label="X (Twitter)" className={`hover:opacity-80 ${isEsports ? 'text-white' : 'text-foreground'}`} target="_blank" rel="noopener noreferrer" href="https://x.com/kurtsystems1?lang=en">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
         <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="relative w-6 h-6"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-white rounded-full top-2"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-white rounded-full top-4"
            />
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 sm:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 h-full w-80 bg-black border-l border-white/10 z-50 sm:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Image 
                    src={logoSrc} 
                    alt={logoAlt}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <span className="font-semibold text-white">
                    {pathname === "/esports" ? "ULF E-Sports" : "Kurtsystems"}
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-4">
                  <motion.a 
                    href={`/${locale}`}
                    onClick={closeMenu}
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-white font-medium"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {t("home")}
                  </motion.a>
                  <motion.a
                    href={`/${locale}/about`}
                    onClick={closeMenu}
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-white font-medium"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {t("about")}
                  </motion.a>
                  <motion.a
                    href={`/${locale}/contact`}
                    onClick={closeMenu}
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-white font-medium"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t("contact")}
                  </motion.a>
                  <motion.a
                    href={`/${locale}/esports`}
                    onClick={closeMenu}
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-white font-medium"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {t("esports")}
                  </motion.a>
                  <motion.div
                    className="relative bg-black/40 border border-white/20 rounded-full p-1 mx-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <motion.a
                      href={locale === "tr" ? (pathname.replace(/^\/tr/, "/en") || "/en") : (pathname.replace(/^\/en/, "/tr") || "/tr")}
                      onClick={closeMenu}
                      className="relative flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors"
                      aria-label="Toggle language"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white text-black rounded-full"
                        initial={false}
                        animate={{
                          x: locale === "tr" ? 0 : "100%",
                          width: "50%"
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                          mass: 0.6
                        }}
                      />
                      <motion.span
                        className="relative z-10 w-6 text-center"
                        animate={{
                          color: locale === "tr" ? "#000" : "#fff"
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        {t("tr")}
                      </motion.span>
                      <motion.span
                        className="relative z-10 w-6 text-center"
                        animate={{
                          color: locale === "tr" ? "#fff" : "#000"
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        {t("en")}
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </div>
              </nav>

              {/* Social Links */}
              <div className="p-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-white/70 mb-4">{t("social")}</h3>
                <div className="flex items-center gap-4">
                  <motion.a
                    aria-label="Instagram"
                    className="p-3 rounded-lg hover:bg-white/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/kurtsystems/?hl=en"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    aria-label="Facebook"
                    className="p-3 rounded-lg hover:bg-white/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/kurtsystems/"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    aria-label="X (Twitter)"
                    className="p-3 rounded-lg hover:bg-white/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.com/kurtsystems1?lang=en"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
