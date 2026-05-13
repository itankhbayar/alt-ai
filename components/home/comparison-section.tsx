"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function ComparisonSection() {
  const { t } = useLanguage();

  const rows = [
    {
      feature: t("Data Synthesis", "Өгөгдөл нэгтгэл"),
      altai: t(
        "AI-powered synthesis of geological, geochemical, geophysical, and remote sensing data in a unified platform.",
        "Геологи, геохими, геофизик болон алсын зайн тандалтын өгөгдлийг нэг платформ дээр хиймэл оюун ухаанаар нэгтгэн боловсруулна."
      ),
      traditional: t(
        "Manual compilation across spreadsheets, GIS tools, and disconnected databases.",
        "Excel хүснэгт, GIS хэрэгсэл болон хоорондоо холбогдоогүй өгөгдлийн сангуудаас мэдээллийг гараар нэгтгэдэг."
      ),
    },
    {
      feature: t("Target Generation", "Бай тодорхойлолт"),
      altai: t(
        "Models trained by deposit type generate ranked prospectivity targets with probability scores.",
        "Ордын төрлөөр сургасан загварууд нь магадлалын үнэлгээтэй эрэмбэлэгдсэн хэтийн төлөвтэй байршлуудыг тодорхойлдог."
      ),
      traditional: t(
        "Relies on individual geologist experience and manual map interpretation.",
        "Геологичийн хувийн туршлага болон газрын зургийн гар тайлбарлалтад тулгуурладаг."
      ),
    },
    {
      feature: t("Pattern Recognition", "Хээ, хэв маяг илрүүлэлт"),
      altai: t(
        "Deep-learning algorithms detect subtle multi-layer geospatial patterns invisible to humans.",
        "Гүн сургалтын алгоритмууд нь хүний нүдэнд үл анзаарагдах олон давхаргат газарзүйн хэв маягийг илрүүлдэг."
      ),
      traditional: t(
        "Visual pattern matching limited by cognitive bias and analyst fatigue.",
        "Хүний танин мэдэхүйн хазайлт болон шинжээчийн ядаргаанаас шалтгаалан харааны хэв маяг таних чадвар хязгаарлагдмал байдаг."
      ),
    },
    {
      feature: t("Time to Discovery", "Илрүүлэлтийн хугацаа"),
      altai: t(
        "Accelerated target identification — from months down to days with automated processing.",
        "Автомат боловсруулалтын тусламжтайгаар бай тодорхойлох хугацааг сараас хэдхэн өдөр болгон хурдасгана."
      ),
      traditional: t(
        "Weeks to months of manual analysis before generating drill targets.",
        "Өрөмдлөгийн бай тодорхойлохоос өмнө хэдэн долоо хоногоос хэдэн сарын гар ажиллагаатай дүн шинжилгээ шаарддаг."
      ),
    },
    {
      feature: t("Scalability", "Өргөтгөх боломж"),
      altai: t(
        "Process hundreds of datasets simultaneously across multiple concessions.",
        "Олон лиценз, талбайн хэмжээнд хэдэн зуун өгөгдлийг зэрэг боловсруулах боломжтой."
      ),
      traditional: t(
        "Each project requires dedicated analysts and sequential processing.",
        "Төсөл бүр тусгай шинжээч болон дараалсан боловсруулалт шаарддаг."
      ),
    },
  ];

  return (
    <section className="section-light py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("Comparison", "Харьцуулалт")}
          </p>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#111] md:text-5xl">
            {t(
              "AI-assisted exploration vs fragmented manual workflows",
              "Хиймэл оюун ухааны тусламжтай хайгуул vs Хуваагдмал гар ажиллагаатай ажлын урсгал"
            )}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#6b7280]">
            {t(
              "The goal is not to replace geological judgement. It is to reduce fragmentation, improve speed, and make exploration evidence easier to review across organizations.",
              "Зорилго нь геологичийн мэргэжлийн дүгнэлтийг орлох биш, харин өгөгдлийн хуваагдлыг бууруулж, ажлын хурдыг нэмэгдүүлэн, хайгуулын нотолгоо мэдээллийг байгууллагуудын хэмжээнд илүү хялбар хянах боломж бүрдүүлэхэд оршино."
            )}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#111]">
                  <th className="w-[160px] pb-4 pr-6 font-semibold text-[#111]">
                    {t("Feature", "Онцлог")}
                  </th>
                  <th className="pb-4 pr-6 font-semibold text-[#6b7280]">
                    Alt AI
                  </th>
                  <th className="pb-4 font-semibold text-[#6b7280]">
                    {t("Traditional", "Уламжлалт")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-[#f8f9fa]" : "bg-white"}
                  >
                    <td className="py-5 pr-6 font-medium text-[#111]">
                      {r.feature}
                    </td>
                    <td className="py-5 pr-6 text-[#374151]">{r.altai}</td>
                    <td className="py-5 text-[#9ca3af]">{r.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
