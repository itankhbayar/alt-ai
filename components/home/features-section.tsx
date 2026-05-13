"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      title: "Alt Predict",
      description: t(
        "Alt Predict combines multiple geological datasets and compares them against deposit-type models to produce prospectivity maps, ranked target areas, and clear screening outputs for follow-up work.",
        "Alt Predict нь олон төрлийн геологийн өгөгдлийг нэгтгэн, ордын төрлийн загваруудтай харьцуулж, хайгуулын боломжийн зураглал, зорилтот бүсийн зэрэглэл, дараагийн шатанд хэрэглэх тодорхой үр дүнг гаргадаг."
      ),
      tags: [
        t("Prospectivity mapping", "Хайгуулын боломжийн зураглал"),
        t("Target ranking", "Зорилтот бүсийн зэрэглэл"),
        t("Geospatial screening", "Геоорон зайн үнэлгээ"),
        t("Deposit-type models", "Ордын төрлийн загварууд")
      ],
    },
    {
      title: "Alt DORA",
      description: t(
        "Alt DORA helps interpret drill core imagery and related visual datasets at scale, allowing teams to identify lithology, alteration, and mineralization patterns more consistently across large programs.",
        "Alt DORA нь өрөмдлөгийн цөмийн зураг болон дүрслэлийн өгөгдлийг өргөн хэмжээнд тайлбарлахад тусалж, чулуулгийн төрөл, өөрчлөлт, эрдэсжилтийг илүү тогтвортой илрүүлэх боломж олгодог."
      ),
      tags: [
        t("Computer vision", "Компьютер хараа"),
        t("Core review", "Цөмийн зураглал"),
        t("Pattern detection", "Хэв шинж илрүүлэлт"),
        t("Scalable logging", "Өргөн цар хүрээтэй бүртгэл")
      ],
    },
    {
      title: "Alt Present",
      description: t(
        "Alt Present turns technical outputs into maps, visuals, and summaries that are easier to share with management teams, investors, and public stakeholders who need clear English communication.",
        "Alt Present нь техникийн үр дүнг зураглал, дүрслэл, тайлан болгон хувиргаж, удирдлага, хөрөнгө оруулагчид болон олон нийтэд ойлгомжтой байдлаар хүргэхэд зориулагдсан."
      ),
      tags: [
        t("3D visualization", "3D дүрслэл"),
        t("English reporting", "Англи хэл дээрх тайлан"),
        t("Interactive maps", "Интерактив зураг"),
        t("Decision support", "Шийдвэр гаргалтын дэмжлэг")
      ],
    },
  ];

  return (
    <section className="section-dark py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("Our Platform", "МАНАЙ ПЛАТФОРМ")}
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
            {t("Three tools. One discovery engine.", "Гурван технологи. Хязгааргүй нээлт")}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#9ca3af]">
            {t(
              "Each part of the platform solves a different problem: target generation, visual interpretation, and communication. Together, they help technical results move more smoothly from raw data to explainable decisions.",
              "Платформын хэсэг бүр өөр өөр асуудлыг шийддэг: зорилтот бүс тодорхойлох, дүрслэлээр тайлбарлах, мэдээллийг дамжуулах. Эдгээр нь хамтдаа өгөгдлөөс ойлгомжтой шийдвэр хүртэлх үйл явцыг илүү хялбар болгодог."
            )}
          </p>
        </FadeIn>

        <div className="mt-20 flex flex-col gap-10 md:gap-14">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[#9ca3af]">
                  {f.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand/35 px-4 py-1.5 text-xs font-medium text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
