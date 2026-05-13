"use client";

import { FadeIn } from "@/components/shared/fade-in";
import {
  ThreadBranchToContent,
  THREAD_SPINE_END_Y,
} from "./thread-connector";
import { useLanguage } from "@/contexts/language-context";



const statusColor: Record<string, string> = {
  "In Progress": "bg-brand text-white",
  Upcoming: "border border-brand text-brand",
  Planned: "border border-[#d1d5db] text-[#777]",
};

export function MilestonesTimeline() {
  const { lang, t } = useLanguage();

  const getStatusText = (status: string) => {
    switch (status) {
      case "In Progress": return t("In Progress", "Явагдаж байна");
      case "Upcoming": return t("Upcoming", "Удахгүй");
      case "Planned": return t("Planned", "Төлөвлөсөн");
      default: return status;
    }
  };

  const getQuarterText = (q: string) => {
    if (lang === "en") return q;
    // Basic replacements for Q1, Q2, etc. (e.g., Q1 2027 -> 2027 оны 1-р улирал)
    return q
      .replace("Q1", "1-р улирал")
      .replace("Q2", "2-р улирал")
      .replace("Q3", "3-р улирал")
      .replace("Q4", "4-р улирал")
      .replace("Q2–Q3", "2–3-р улирал")
      .replace("Q3–Q4", "3–4-р улирал")
      .replace(/(\d-р улирал) (\d{4})/, "$2 оны $1");
  };

  const milestones = [
    {
      quarter: "Q2 2026",
      status: "In Progress",
      title: t("Research & Data Foundation", "Судалгаа ба Өгөгдлийн Суурь"),
      details: t(
        "Assemble geoscience and ML team. Begin collecting and digitizing public geological datasets — drill hole databases, geochemical surveys, geophysical grids, and satellite imagery.",
        "Геошинжлэх ухаан болон машин сургалтын багийг бүрдүүлэх. Нийтийн геологийн өгөгдлүүдийг цуглуулах, дижитал хэлбэрт оруулах — өрөмдлөгийн мэдээллийн сан, геохимийн судалгаа, геофизикийн зураглал, хиймэл дагуулын зураг."
      ),
    },
    {
      quarter: "Q3–Q4 2026",
      status: "Upcoming",
      title: t("Data Pipeline & Storage Infrastructure", "Өгөгдлийн Дамжуулалт ба Хадгалалтын Дэд Бүтэц"),
      details: t(
        "Build secure cloud-based data infrastructure with advanced indexing for geospatial data. Design ETL pipelines to ingest, clean, and normalize heterogeneous geological datasets.",
        "Геоорон зайн өгөгдөлд зориулсан дэвшилтэт индексчлэл бүхий найдвартай үүлэн дэд бүтцийг байгуулах. Төрөл бүрийн геологийн өгөгдлийг оруулах, цэвэрлэх, нэгтгэх ETL урсгалуудыг боловсруулах."
      ),
    },
    {
      quarter: "Q1 2027",
      status: "Planned",
      title: t("First AI Model Prototypes", "Анхны Хиймэл Оюуны Загварууд"),
      details: t(
        "Train initial deep-learning models for orogenic gold and porphyry copper systems. Develop computer vision pipeline for drill core analysis. Build internal validation framework.",
        "Оороген алт болон порфир зэсийн системд зориулсан анхны гүн сургалтын загваруудыг сургах. Өрөмдлөгийн цөмийн шинжилгээнд зориулсан компьютер харааны шийдэл боловсруулах. Дотоод баталгаажуулалтын систем байгуулах."
      ),
    },
    {
      quarter: "Q2–Q3 2027",
      status: "Planned",
      title: t("Platform MVP & Beta Testing", "Платформын MVP ба Бета Туршилт"),
      details: t(
        "Build web platform with prospectivity mapping, target ranking, and interactive visualization. Launch closed beta with 3–5 exploration partners. Iterate on geoscientist feedback.",
        "Хайгуулын боломжийн зураглал, зорилтот бүсийн зэрэглэл, интерактив дүрслэл бүхий веб платформ хөгжүүлэх. 3–5 түнштэй хаалттай бета туршилт эхлүүлэх. Геологичдын саналд үндэслэн сайжруулах."
      ),
    },
    {
      quarter: "Q4 2027",
      status: "Planned",
      title: t("Model Expansion & Accuracy Tuning", "Загварын Өргөтгөл ба Нарийвчлалын Сайжруулалт"),
      details: t(
        "Expand to 8–10 mineral system models. Integrate anonymized partner data to improve prediction accuracy. Add deposit-type-specific training layers.",
        "8–10 төрлийн ашигт малтмалын системийн загвар болгон өргөжүүлэх. Түншүүдийн нэргүйжүүлсэн өгөгдлийг нэгтгэн нарийвчлалыг нэмэгдүүлэх. Ордын төрөл тус бүрт зориулсан сургалтын давхаргууд нэмэх."
      ),
    },
    {
      quarter: "Q1 2028",
      status: "Planned",
      title: t("Alt Present & Reporting Suite", "Alt Present ба Тайлангийн Систем"),
      details: t(
        "Launch interactive geological presentation tool for investor communication. Add automated technical report generation, exportable maps, and drill target summaries.",
        "Хөрөнгө оруулагчдад зориулсан интерактив геологийн танилцуулгын хэрэгсэл нэвтрүүлэх. Автомат техникийн тайлан, экспортлох боломжтой зураглал, өрөмдлөгийн зорилтот бүсийн тойм нэмэх."
      ),
    },
    {
      quarter: "Q2 2028",
      status: "Planned",
      title: t("Public Launch & Scale", "Нээлт ба Өргөжилт"),
      details: t(
        "Open platform to the broader exploration market. Expand dataset coverage beyond Mongolia to Central Asian geological belts. Onboard enterprise clients with dedicated support.",
        "Платформыг өргөн хүрээний хайгуулын зах зээлд нээх. Монголын хүрээнээс давж Төв Азийн геологийн бүсүүд рүү өгөгдлийн хамрах хүрээг тэлэх. Байгууллагын хэрэглэгчдийг тусгай дэмжлэгтэйгээр нэвтрүүлэх."
      ),
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="relative">
          {/* Continuous spine — same x as SVG path (w-12 → center = left-6) */}
          <div
            className="pointer-events-none absolute left-6 top-2 bottom-2 w-[1.25px] -translate-x-1/2 bg-[#d1d5db]"
            aria-hidden
          />
          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <FadeIn key={m.quarter} delay={i * 0.08}>
                <div className="relative flex gap-5 pb-16 last:pb-0 md:gap-7">
                  <div className="relative min-h-[1.5rem] w-12 shrink-0 overflow-hidden">
                    <ThreadBranchToContent />
                    {/* Node centered on spine above the arc bend */}
                    <div className="absolute left-1/2 top-[9px] z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand bg-white shadow-[0_0_0_4px_#fff]" />
                    {/* Last item: hide global spine below the elbow (no dangling tail) */}
                    {i === milestones.length - 1 ? (
                      <div
                        className="pointer-events-none absolute left-1/2 z-[5] w-2 -translate-x-1/2 bg-white"
                        style={{
                          top: `${THREAD_SPINE_END_Y}px`,
                          bottom: 0,
                        }}
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <div className="relative z-10 min-w-0 flex-1 bg-white pt-0.5">
                    <h3 className="text-lg font-bold leading-snug text-[#111]">
                      {m.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-[#111]">
                        {getQuarterText(m.quarter)}
                      </span>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                          statusColor[m.status] ?? ""
                        }`}
                      >
                        {getStatusText(m.status)}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#555]">
                      {m.details}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
