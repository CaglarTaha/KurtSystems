"use client";
import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  durationMs?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

export default function AnimatedNumber({
  value,
  durationMs = 1500,
  className,
  prefix = "",
  suffix = "",
}: AnimatedNumberProps) {
  const motion = useMotionValue(0);
  const rounded = useTransform(motion, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(motion, value, { duration: durationMs / 1000 });
    return () => controls.stop();
  }, [motion, value, durationMs]);

  return (
    <span className={className}>
      {prefix}
      <span aria-live="polite">{Math.round((rounded as unknown as { get: () => number }).get())}</span>
      {suffix}
    </span>
  );
}


