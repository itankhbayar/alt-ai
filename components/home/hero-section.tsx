"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroVisual } from "@/components/home/hero-visual";
import { useLanguage } from "@/contexts/language-context";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export function HeroSection() {
  const { lang, t } = useLanguage();

  const trustPoints = [
    t("Designed for clear English reporting", "Ойлгомжтой тайлагналд зориулагдсан"),
    t("Built around Mongolia's geological context", "Монголын геологийн нөхцөлд тулгуурласан"),
    t("Structured for transparent human review", "Хүний хяналт болон ил тод байдалд зориулагдсан"),
  ];

  return (
    <section className="section-light px-6 pt-32 pb-32 md:pt-40 md:pb-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:px-10">
        <div>
          <motion.p
            {...fade(0)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand"
          >
            {t("AI-Powered Mineral Intelligence For Mongolia", "ХИЙМЭЛ ОЮУН УХААНД СУУРИЛСАН АШИГТ МАЛТМАЛЫН МЭДЭЭЛЭЛ")}
          </motion.p>

          <motion.h1
            {...fade(0.12)}
            className={`mt-8 max-w-4xl font-bold leading-[1.04] tracking-tight text-[#111] ${lang === 'mn' ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'}`}
          >
            {t("Clearer exploration decisions for companies, partners, and government.", "Оновчтой хайгуул — ухаалаг шийдвэр")}
          </motion.h1>

          <motion.p
            {...fade(0.24)}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4b5563] md:text-xl"
          >
            {t("Alt AI combines geological expertise, machine learning, and structured data systems to help identify promising mineral targets faster and explain results more clearly.", "Бид хиймэл оюун ухаан болон хүний мэдлэгийг хослуулж, нээлтийг хурдасгадаг Alt AI нь орчин үеийн ашигт малтмалын хайгуулын дэд бүтцийг бий болгож байна.")}
          </motion.p>

          <motion.p
            {...fade(0.34)}
            className="mt-5 max-w-2xl text-base leading-8 text-[#6b7280]"
          >
            {t("The platform is built to support technical exploration work while also producing clear English outputs that can be shared with investors, ministry teams, regulators, and strategic project partners.", "Геологийн өгөгдлийг бодит шийдвэр гаргахад ашиглагдах мэдээлэл болгон хувиргаж, багууд илүү итгэлтэй, нарийвчлалтай хайгуул хийх боломжийг бүрдүүлж байна.")}
          </motion.p>

          <motion.div
            {...fade(0.44)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/about"
              className="rounded-full bg-[#111] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#333]"
            >
              {t("Learn About Alt AI", "Alt AI-ийн тухай")}
            </Link>
            <Link
              href="/milestones"
              className="rounded-full border border-[#111] px-8 py-3.5 text-sm font-semibold text-[#111] transition hover:bg-[#111] hover:text-white"
            >
              {t("View Roadmap", "Төлөвлөгөө үзэх")}
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                {...fade(0.52 + index * 0.08)}
                className="rounded-2xl border border-[#e5e7eb] bg-white p-5"
              >
                <p className="text-sm font-medium leading-6 text-[#374151]">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div {...fade(0.28)} className="pb-20 lg:pb-10">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
