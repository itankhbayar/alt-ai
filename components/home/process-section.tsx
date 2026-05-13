"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function ProcessSection() {
  const { lang, t } = useLanguage();

  const steps = [
    {
      title: t("Collect and standardize data", "Өгөгдөл цуглуулах, стандартчилах"),
      body: t(
        "We organize drill holes, geochemistry, geophysics, mapping, and satellite layers into one structured dataset.",
        "Өрөмдлөг, геохими, геофизик, зураглал болон хиймэл дагуулын мэдээллийг нэг бүтэцтэй өгөгдөл болгон нэгтгэнэ."
      ),
    },
    {
      title: t("Run deposit-specific models", "Ордын төрөлд тохирсон загвар ажиллуулах"),
      body: t(
        "Each workflow is tuned to the mineral system being evaluated so outputs remain geologically meaningful.",
        "Ашигт малтмалын систем тус бүрт тохируулсан загваруудыг ашиглан геологийн утга агуулгатай үр дүн гаргана."
      ),
    },
    {
      title: t("Review explainable targets", "Тайлбарлах боломжтой зорилтот бүсүүдийг шалгах"),
      body: t(
        "Teams can see what data influenced each target, not only the final score or ranking.",
        "Зөвхөн эцсийн үнэлгээг биш, тухайн зорилтот бүсэд ямар өгөгдөл нөлөөлснийг харах боломжтой."
      ),
    },
    {
      title: t("Produce decision-ready reports", "Шийдвэр гаргахад бэлэн тайлан гаргах"),
      body: t(
        "Results can be presented in clear English for technical teams, executives, and public-sector stakeholders.",
        "Үр дүнг техникийн баг, удирдлага болон төрийн байгууллагуудад ойлгомжтой англи хэлээр танилцуулна."
      ),
    },
  ];

  return (
    <section className="section-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("How It Works", "ХЭРХЭН АЖИЛЛАДАГ ВЭ")}
          </p>
          <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-[#111] md:text-5xl">
            {t(
              "A workflow built for technical teams and decision-makers.",
              "Техникийн баг болон шийдвэр гаргагчдад зориулсан ажлын урсгал"
            )}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#6b7280]">
            {t(
              "The platform is designed to be understandable at every step. Exploration teams can work with detailed geoscience outputs, while regulators, ministry teams, and partners can review clear summaries without needing a machine-learning background.",
              "Платформ нь алхам бүр дээр ойлгомжтой байхаар бүтээгдсэн. Хайгуулын багууд нарийвчилсан геологийн үр дүнтэй ажиллах боломжтой бол, зохицуулагчид болон түншүүд машин сургалтын мэдлэггүйгээр товч ойлголтыг харах боломжтой."
            )}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-0">
          {/* Mobile: diagram first; desktop: steps left, diagram right */}
          <div className="order-2 flex min-h-0 flex-col gap-6 lg:order-1">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.06}>
                <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {lang === 'mn' ? `АЛХАМ ${index + 1}` : `Step ${index + 1}`}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-[#111]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn
            delay={0.08}
            className="order-1 lg:sticky lg:top-28 lg:order-2 lg:self-start"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[#e5e7eb] bg-[#111] p-3 shadow-[0_24px_60px_rgba(17,17,17,0.12)] md:p-4">
              <Image
                src="/illustrations/workflow-overview.svg"
                alt="Diagram showing data ingestion, model processing, explainable outputs, and reporting."
                width={1200}
                height={780}
                className="h-auto w-full rounded-[1.25rem]"
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority={false}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
