"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function MilestonesHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f8f9fa] pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-brand">
            {t("Roadmap", "ТӨЛӨВЛӨГӨӨ")}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-[#111] md:text-6xl">
            {t(
              "Building the future of mineral discovery.",
              "Ашигт малтмал нээлтийн ирээдүйг бүтээх нь"
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#555]">
            {t(
              "A realistic development timeline for building an AI-Assisted Mineral Discovery Platform — from data foundation to public launch.",
              "Өгөгдлийн сууриас эхлээд олон нийтэд нээлт хийх хүртэлх хиймэл оюунд суурилсан ашигт малтмалын нээлтийн платформыг хөгжүүлэх бодит цагийн хуваарь."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
