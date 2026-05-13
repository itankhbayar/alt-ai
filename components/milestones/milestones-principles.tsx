"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function MilestonesPrinciples() {
  const { t } = useLanguage();

  const principles = [
    {
      title: t("Domain-Expert-Led", "Салбарын мэргэжилтнээр удирдуулсан"),
      body: t(
        "Every AI model is built alongside experienced geoscientists who validate geological accuracy — ensuring outputs match real-world mineral system behavior.",
        "AI загвар бүрийг туршлагатай геошинжлэх ухааны мэргэжилтнүүдтэй хамтран боловсруулж, геологийн үнэн зөв байдлыг баталгаажуулдаг бөгөөд ингэснээр үр дүн нь бодит ордын системийн зан төлөвтэй нийцдэг."
      ),
    },
    {
      title: t("Iterative Partner Validation", "Давталттай түншийн баталгаажуулалт"),
      body: t(
        "We test every model iteration with real exploration data from partner companies before releasing to production — no shortcuts on geological accuracy.",
        "Бид загварын шинэчлэл бүрийг түнш компаниудын бодит хайгуулын өгөгдөл дээр туршиж баталгаажуулсны дараа үйлдвэрлэлийн орчинд нэвтрүүлдэг. Геологийн үнэн зөв байдал дээр хэзээ ч буулт хийдэггүй."
      ),
    },
    {
      title: t("Data Privacy by Design", "Өгөгдлийн нууцлалд суурилсан архитектур"),
      body: t(
        "Your proprietary exploration data remains confidential. We use anonymized aggregation to improve models while keeping project-specific information completely protected.",
        "Таны өмчийн хайгуулын өгөгдөл бүрэн нууц хэвээр хадгалагдана. Бид загвараа сайжруулахдаа нэргүйжүүлсэн нэгтгэсэн өгөгдөл ашигладаг бөгөөд төслийн онцгой мэдээллийг бүрэн хамгаалдаг."
      ),
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-brand">
            {t("How We Build", "Бид хэрхэн бүтээдэг вэ")}
          </p>
          <h2 className="mt-6 max-w-xl text-3xl font-bold text-[#111] md:text-4xl">
            {t(
              "Our approach to building a platform geoscientists can trust.",
              "Геошинжлэх ухааны мэргэжилтнүүдийн итгэлд нийцэх платформыг бий болгох арга барил."
            )}
          </h2>
        </FadeIn>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {principles.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <h3 className="text-lg font-bold text-[#111]">{p.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#555]">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
