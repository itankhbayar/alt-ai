"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function AboutStats() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "10+",
      label: t(
        "Mineral system-specific AI models",
        "Ашигт малтмалын системд суурилсан AI загварууд"
      ),
    },
    {
      value: "22",
      label: t(
        "Geoscience and AI experts",
        "Геошинжлэх ухаан болон AI-ийн мэргэжилтнүүд"
      ),
    },
    {
      value: "38",
      label: t("Exploration partners", "Хайгуулын түншүүд"),
    },
    {
      value: "5x",
      label: t(
        "Faster target identification",
        "Илүү хурдан бай тодорхойлолт"
      ),
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {stats.map((s, i) => (
            <FadeIn key={s.value} delay={i * 0.08}>
              <div>
                <p className="text-5xl font-bold text-[#111] md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#777]">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
