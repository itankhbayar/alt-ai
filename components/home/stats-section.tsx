"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "10+",
      label: t(
        "Mineral system models structured around different deposit types",
        "Ордын төрөлд суурилсан ашигт малтмалын системийн загварууд"
      ),
    },
    {
      value: "4",
      label: t(
        "Core data domains unified: geological, geochemical, geophysical, and remote sensing",
        "Нэгдсэн өгөгдлийн үндсэн төрөл: геологи, геохими, геофизик, алсын зайны тандалт"
      ),
    },
    {
      value: "3",
      label: t(
        "Connected platform tools covering targeting, interpretation, and reporting",
        "Зорилтот бүс, тайлбар, тайлагнал хамарсан платформын үндсэн хэрэгслүүд"
      ),
    },
    {
      value: "1",
      label: t(
        "Explainable workflow for technical teams, management, and government stakeholders",
        "Техникийн баг, удирдлага болон төрийн байгууллагад ойлгомжтой нэгтгэсэн ажлын урсгал"
      ),
    },
  ];

  return (
    <section className="section-dark py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("At A Glance", "ЕРӨНХИЙ ТОЙМ")}
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
            {t("A simpler way to understand the platform.", "Платформыг ойлгох илүү энгийн арга")}
          </h2>
        </FadeIn>

        <div className="mt-20 grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          {stats.map((s, i) => (
            <FadeIn key={s.value} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#9ca3af]">
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
