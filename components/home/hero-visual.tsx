"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  { title: "Data layers", body: "Geology, geochemistry, geophysics, satellite imagery." },
  { title: "Model outputs", body: "Ranked targets, probability surfaces, explainable factors." },
  { title: "Reporting", body: "Maps and summaries that non-technical stakeholders can read." },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem]">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-[#e5e7eb] bg-white p-4 shadow-[0_30px_80px_rgba(17,17,17,0.08)]"
      >
        <Image
          src="/illustrations/hero-geology.svg"
          alt="Illustration of geological datasets, AI target ranking, and reporting outputs."
          width={1200}
          height={900}
          className="h-auto w-full rounded-[1.5rem]"
          priority
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-6 grid gap-3 px-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-[#e5e7eb] bg-white/95 p-4 shadow-[0_12px_30px_rgba(17,17,17,0.08)] backdrop-blur"
          >
            <p className="text-sm font-semibold text-[#111]">{card.title}</p>
            <p className="mt-2 text-xs leading-6 text-[#6b7280]">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
