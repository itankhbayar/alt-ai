"use client";

import { FadeIn } from "@/components/shared/fade-in";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export function ValuesSection() {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t("Digitized geological knowledge", "Дижиталчилсан геологийн мэдлэг"),
      description: t(
        "We bring scattered geological information into one structured system so teams can review the same evidence base instead of working across disconnected files and tools.",
        "Бид тархай бутархай геологийн мэдээллийг нэг бүтэцтэй системд нэгтгэж, багууд салангид файл, хэрэгслүүд дээр ажиллахын оронд нэг ижил мэдээллийн суурийг ашиглах боломжийг бүрдүүлдэг."
      ),
    },
    {
      title: t("Transparent model workflows", "Ил тод ажиллагааны загвар"),
      description: t(
        "Our platform is designed to show not only where targets appear, but also what information contributed to the recommendation and how teams can verify it.",
        "Манай платформ нь зөвхөн хаана зорилтот бүс байгааг харуулаад зогсохгүй, тухайн зөвлөмжид ямар өгөгдөл нөлөөлсөн, түүнийг хэрхэн баталгаажуулах боломжтойг тодорхой харуулдаг."
      ),
    },
    {
      title: t("Decision-ready communication", "Шийдвэр гаргахад бэлэн мэдээлэл"),
      description: t(
        "Outputs can be presented in language that works for geologists, management teams, investors, and government stakeholders reviewing projects in English.",
        "Гаралтыг геологичид, удирдлагын баг, хөрөнгө оруулагчид болон төрийн байгууллагуудад ойлгомжтой(англи хэл дээр) танилцуулах боломжтой."
      ),
    },
  ];

  return (
    <section className="section-light py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("Why This Matters", "ЯАГААД ЭНЭ ЧУХАЛ ВЭ")}
          </p>
          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-[#111] md:text-6xl">
            {t(
              "Mongolia needs better exploration intelligence, not just more data.",
              "Илүү их өгөгдөл хангалтгүй — илүү ухаалаг мэдээлэл хэрэгтэй"
            )}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FadeIn delay={0.15}>
            <div>
              <p className="max-w-3xl text-lg leading-relaxed text-[#4b5563] md:text-xl">
                {t(
                  "Large volumes of geological, geochemical, geophysical, and satellite data already exist. The challenge is turning that information into clear, defensible decisions.",
                  "Геологийн, геохимийн, геофизикийн болон хиймэл дагуулын асар их хэмжээний өгөгдөл аль хэдийн бий. Харин жинхэнэ асуудал нь энэ мэдээллийг тодорхой, баталгаатай шийдвэр болгон хувиргах явдал юм."
                )}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6b7280]">
                {t(
                  "Alt AI is built to reduce fragmentation, improve target screening, and make complex exploration evidence easier to understand. That matters for companies seeking new mineral discoveries and for government institutions that need clearer technical communication around resource development.",
                  "Alt AI нь мэдээллийн тархай бутархай байдлыг бууруулж, зорилтот бүсийн үнэлгээг сайжруулж, нарийн төвөгтэй хайгуулын өгөгдлийг ойлгоход илүү хялбар болгох зорилготой. Энэ нь шинэ ашигт малтмалын орд хайж буй компаниудад төдийгүй нөөцийн хөгжлийн талаар илүү тодорхой техникийн ойлголт шаардлагатай төрийн байгууллагуудад ч чухал ач холбогдолтой."
                )}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="overflow-hidden rounded-[2rem] border border-[#e5e7eb] bg-white p-4 shadow-[0_18px_60px_rgba(17,17,17,0.06)]">
              <Image
                src="/illustrations/hero-geology.svg"
                alt="Overview image of geological data, models, and reporting."
                width={1200}
                height={900}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25}>
          <p className="mt-24 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("What Alt AI Improves", "ALT AI ЮУГ САЙЖРУУЛДАГ ВЭ")}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          {solutions.map((s, i) => (
            <FadeIn key={s.title} delay={0.25 + i * 0.1}>
              <div>
                <h3 className="text-xl font-bold text-[#111]">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
