"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f8f9fa] pt-40 pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-brand">
            {t("About Alt AI", "ALT AI-ийн ТУХАЙ")}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-[#111] md:text-6xl">
            {t(
              "We combine AI and human expertise to make discoveries faster.",
              "Бид хиймэл оюун ухаан болон хүний мэдлэгийг хослуулж, нээлтийг хурдасгадаг"
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#555]">
            {t(
              "Alt AI is building the infrastructure for modern mineral exploration — converting geological data into actionable intelligence so teams can explore with greater confidence and precision.",
              "Alt AI нь орчин үеийн ашигт малтмалын хайгуулын дэд бүтцийг бий болгож байна — геологийн өгөгдлийг бодит шийдвэр гаргахад ашиглагдах мэдээлэл болгон хувиргаж, багууд илүү итгэлтэй, нарийвчлалтай хайгуул хийх боломжийг бүрдүүлж байна."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
