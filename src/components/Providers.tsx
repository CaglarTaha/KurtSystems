"use client";
import React from "react";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Providers({ children, locale = "tr" }: { children: React.ReactNode; locale?: "tr" | "en" }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </LocaleProvider>
  );
}
