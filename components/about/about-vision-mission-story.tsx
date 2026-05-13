"use client";

import { FadeIn } from "@/components/shared/fade-in";

import { useLanguage } from "@/contexts/language-context";

export function AboutVisionMissionStory() {
  const { t } = useLanguage();

  const blocks = [
    {
      eyebrow: t("Vision", "АЛСЫН ХАРАА"),
      title: t("The leading mineral discovery platform", "Ашигт малтмал илрүүлэх тэргүүлэгч платформ"),
      body: t("To become the world's leading AI-Assisted Mineral Discovery Platform — transforming how exploration teams in Mongolia and beyond find what's in the ground.", "Монгол болон дэлхийн бусад бүс нутагт хайгуулын багууд газрын гүнд юу байгааг илрүүлэх арга барилыг өөрчилсөн, хиймэл оюунд суурилсан ашигт малтмал илрүүлэх дэлхийн тэргүүлэгч платформ болох."),
    },
    {
      eyebrow: t("Mission", "ЭРХЭМ ЗОРИЛГО"),
      title: t("Data into actionable intelligence", "Өгөгдлийг бодит шийдвэр болгох"),
      body: t("To convert geological data into actionable intelligence — revealing hidden patterns, building exploration confidence, enabling smarter drill decisions, and safeguarding capital through data-driven discovery.", "Геологийн өгөгдлийг бодит шийдвэр гаргахад ашиглагдах мэдээлэл болгон хувиргах — далд хэв шинжүүдийг илрүүлэх, хайгуулын итгэлийг нэмэгдүүлэх, өрөмдлөгийн илүү ухаалаг шийдвэр гаргах, өгөгдөлд суурилсан нээлтээр дамжуулан хөрөнгийг хамгаалах."),
    },
    {
      eyebrow: t("Story", "ТҮҮХ"),
      title: t("Built to solve fragmented geological analysis", "Тархай бутархай геологийн шинжилгээний асуудлыг шийдэхээр бүтээгдсэн"),
      body: t("Alt AI was founded on a simple observation: geological data is fragmented, siloed, and underutilized. Exploration teams spend months manually interpreting drill data, geochemistry, and geophysics — often reaching conclusions that AI could surface in days. We brought together geoscientists and machine learning engineers to build a platform that learns from the earth's repeatable mineral systems, so teams can explore with clarity instead of guesswork.", "Бид геошинжлэх ухааны мэргэжилтнүүд болон машин сургалтын инженерүүдийг нэгтгэж, дэлхийн давтагддаг ашигт малтмалын системүүдээс суралцдаг платформыг бүтээсэн. Ингэснээр багууд таамаглалаар биш, тодорхой ойлголт дээр үндэслэн хайгуул хийх боломжтой болсон."),
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {blocks.map((block, i) => (
          <FadeIn key={block.eyebrow} delay={i * 0.1}>
            <div
              className={`py-16 ${
                i < blocks.length - 1 ? "border-b border-[#e5e7eb]" : ""
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-widest text-brand">
                {block.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold text-[#111] md:text-3xl">
                {block.title}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#555]">
                {block.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
