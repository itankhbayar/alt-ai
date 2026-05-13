"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function WhySection() {
  const { t } = useLanguage();

  const items = [
    {
      num: "01",
      title: t("Integrated evidence base", "Нэгдсэн нотолгооны суурь"),
      body: t(
        "We have built a first-of-its-kind geological database for Mongolia — aggregating public surveys, private datasets, satellite imagery, and field data into a unified, indexed platform that powers every prediction.",
        "Монголд анх удаа бий болсон нэгдсэн геологийн мэдээллийн сан — нийтийн болон хувийн өгөгдөл, хиймэл дагуулын зураг, талбайн мэдээллийг нэгтгэн бүх таамаглалыг дэмждэг."
      ),
    },
    {
      num: "02",
      title: t("Models grounded in geology", "Геологид суурилсан загварууд"),
      body: t(
        "Our machine learning models are not generic. Each algorithm is trained on specific deposit types — porphyry copper, orogenic gold, VMS, pegmatite — ensuring predictions are geologically meaningful.",
        "Манай загварууд ерөнхий биш — порфир зэс, оороген алт, VMS, пегматит зэрэг ордын төрөл тус бүр дээр сургагдсан тул үр дүн нь геологийн хувьд утга учиртай."
      ),
    },
    {
      num: "03",
      title: t("Human review remains central", "Хүний хяналт чухал хэвээр"),
      body: t(
        "Our team combines decades of field geology experience with deep expertise in machine learning. Every model is validated by geoscientists who understand the subsurface, not just the data.",
        "Манай баг геологийн олон жилийн туршлага болон машин сургалтын гүн мэдлэгийг хослуулдаг. Бүх загварыг геологичид баталгаажуулдаг."
      ),
    },
    {
      num: "04",
      title: t("Security and control", "Аюулгүй байдал ба хяналт"),
      body: t(
        "Your proprietary data stays yours. We use anonymized, aggregated data to improve our models while keeping your project-specific information fully confidential under enterprise-grade encryption.",
        "Таны өгөгдөл таных хэвээр байна. Бид нууцлалыг бүрэн хадгалж, зөвхөн нэргүйжүүлсэн өгөгдлийг ашиглан загвараа сайжруулдаг."
      ),
    },
  ];

  return (
    <section className="section-light py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("Why Organizations Choose Alt AI", "ЯАГААД БАЙГУУЛЛАГУУД ALT AI-Г СОНГОДОГ ВЭ")}
          </p>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#111] md:text-6xl">
            {t("Built to be credible, understandable, and practical.", "Найдвартай, ойлгомжтой, практик шийдэл.")}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#6b7280]">
            {t(
              "For projects that involve multiple stakeholders, technical quality is not enough on its own. The system must also be reviewable, communicable, and secure.",
              "Олон тал оролцсон төслүүдэд зөвхөн техникийн чанар хангалтгүй — мэдээлэл нь шалгах боломжтой, ойлгомжтой, аюулгүй байх шаардлагатай."
            )}
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {items.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.1}>
              <div>
                <span className="text-sm font-bold text-brand">
                  [{item.num}]
                </span>
                <h3 className="mt-3 text-xl font-bold text-[#111]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
