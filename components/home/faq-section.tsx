"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function FaqSection() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: t(
        "What problem does Alt AI solve in plain English?",
        "Alt AI ямар асуудлыг энгийнээр шийддэг вэ?"
      ),
      a: t(
        "Alt AI helps teams turn large amounts of geological information into clearer exploration decisions. Instead of reviewing disconnected datasets separately, users can work with one structured system that supports targeting, interpretation, and reporting.",
        "Alt AI нь их хэмжээний геологийн мэдээллийг илүү ойлгомжтой хайгуулын шийдвэр болгон хувиргахад тусалдаг. Хоорондоо салангид өгөгдлүүдийг тус тусад нь шинжлэхийн оронд хэрэглэгчид бай тодорхойлох, тайлбар хийх, тайлагнах процессыг дэмждэг нэг цэгийн систем дээр ажиллах боломжтой."
      ),
    },
    {
      q: t(
        "Can this be useful for government or public-sector stakeholders?",
        "Энэ нь төрийн байгууллага болон нийтийн салбарт хэрэгтэй юу?"
      ),
      a: t(
        "Yes. The platform is designed to present technical findings in clearer English, with maps, summaries, and visuals that can support communication across ministries, agencies, regulators, and strategic partners.",
        "Тийм. Энэхүү платформ нь техникийн үр дүнг илүү ойлгомжтой байдлаар, газрын зураг, хураангуй болон дүрслэлийн хамт үзүүлэхээр бүтээгдсэн бөгөөд яам, агентлаг, зохицуулагч байгууллага болон стратегийн түншүүдтэй харилцахад дэмжлэг үзүүлнэ."
      ),
    },
    {
      q: t(
        "How does the platform remain transparent?",
        "Платформ хэрхэн ил тод байдлаа хадгалдаг вэ?"
      ),
      a: t(
        "The goal is to make outputs explainable, not mysterious. Teams can review the datasets, workflows, and geological context behind a target rather than relying on a black-box score alone.",
        "Зорилго нь үр дүнг ойлгомжтой байлгах бөгөөд “хар хайрцаг” мэт нууцлаг систем болгохгүй байх юм. Багууд зөвхөн оноонд найдах бус тухайн байршлын ар дахь өгөгдөл, ажлын урсгал болон геологийн үндэслэлийг хянах боломжтой."
      ),
    },
    {
      q: t(
        "What types of data can Alt AI work with?",
        "Alt AI ямар төрлийн өгөгдөлтэй ажиллах вэ?"
      ),
      a: t(
        "The platform is intended to work across common exploration datasets including mapping, drill hole databases, geochemistry, geophysics, and remote sensing layers.",
        "Платформ нь газрын зураглал, өрөмдлөгийн өгөгдлийн сан, геохими, геофизик болон алсын зайн тандалтын мэдээлэл зэрэг нийтлэг хайгуулын өгөгдлүүдтэй ажиллах зориулалттай."
      ),
    },
    {
      q: t(
        "Do users need machine-learning expertise?",
        "Хэрэглэгчид machine learning-ийн мэдлэгтэй байх шаардлагатай юу?"
      ),
      a: t(
        "No. The experience is meant to be readable for geologists and understandable for non-technical reviewers. AI supports the workflow, but the final interpretation remains in human hands.",
        "Үгүй. Энэхүү систем нь геологичдод ойлгомжтой бөгөөд техникийн бус оролцогчдод ч уншиж ойлгоход хялбар байхаар бүтээгдсэн. AI нь ажлын урсгалыг дэмждэг ч эцсийн тайлбар, шийдвэр нь хүний гарт үлдэнэ."
      ),
    },
  ];

  return (
    <section className="section-surface py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("Frequently Asked", "Түгээмэл асуултууд")}
          </p>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#111] md:text-5xl">
            {t(
              "Questions decision-makers usually ask first.",
              "Шийдвэр гаргагчдын хамгийн түрүүнд асуудаг асуултууд."
            )}
          </h2>
        </FadeIn>

        <div className="mt-16 divide-y divide-[#e5e7eb]">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-base font-medium text-[#111]">
                  {faq.q}
                </span>
                <span className="shrink-0 text-xl font-light text-[#6b7280]">
                  {openIdx === i ? "\u2212" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <p className="pb-6 text-sm leading-7 text-[#6b7280]">
                  {faq.a}
                </p>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
