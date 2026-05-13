"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function PartnersStrip() {
  const { t } = useLanguage();

  const messages = [
    t("Public-data digitization", "Нээлттэй өгөгдлийн дижитал шилжилт"),
    t(
      "Geoscience-led AI workflows",
      "Геошинжлэх ухаанд суурилсан AI ажлын урсгал"
    ),
    t("English-ready reporting", "Англи хэл дээр бэлэн тайлагнал"),
    t(
      "Transparent target screening",
      "Ил тод бай сонголт"
    ),
    t(
      "Government-friendly communication",
      "Төрийн байгууллагад ойлгомжтой харилцаа"
    ),
    t(
      "Secure enterprise deployment",
      "Аюулгүй enterprise нэвтрүүлэлт"
    ),
    t(
      "Cross-disciplinary collaboration",
      "Салбар хоорондын хамтын ажиллагаа"
    ),
    t(
      "Explainable mineral intelligence",
      "Тайлбарлах боломжтой ашигт малтмалын intelligence"
    ),
  ];

  const doubled = [...messages, ...messages];

  return (
    <section className="section-surface py-20">
      <FadeIn>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
          {t(
            "Built to support exploration teams and public-sector stakeholders",
            "Хайгуулын баг болон төрийн байгууллагуудыг дэмжихээр бүтээгдсэн"
          )}
        </p>
      </FadeIn>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8f9fa]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f8f9fa]" />

        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 whitespace-nowrap">
          {doubled.map((label, i) => (
            <span
              key={i}
              className="text-base font-semibold tracking-wide text-[#111]/40"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
