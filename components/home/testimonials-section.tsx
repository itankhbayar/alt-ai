"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t(
        "Use Alt AI to screen concessions, prioritize field campaigns, and communicate why a target should move into the next stage of work.",
        "Alt AI-г ашиглан лицензийн талбайг үнэлж, хээрийн ажлыг эрэмбэлж, зорилтот бүс дараагийн шатанд шилжих шалтгааныг тодорхой тайлбарла."
      ),
      name: t("Exploration Companies", "Хайгуулын компаниуд"),
      role: t("Operational use case", "Үйл ажиллагааны хэрэглээ"),
    },
    {
      quote: t(
        "Review structured maps and English-ready summaries that make technical evidence easier to discuss across ministries, agencies, and project stakeholders.",
        "Яамд, агентлагууд болон төслийн оролцогчид хооронд техникийн мэдээллийг илүү ойлгомжтой хэлэлцэхэд туслах бүтэцтэй зураглал, англи хэл дээрх товч тайланг ашиглах."
      ),
      name: t("Government and Public Bodies", "Төрийн байгууллагууд"),
      role: t("Oversight and coordination", "Хяналт, зохицуулалт"),
    },
    {
      quote: t(
        "Translate complex geological work into visuals and reporting that support financing, strategic partnerships, and informed decision-making.",
        "Нарийн төвөгтэй геологийн мэдээллийг дүрслэл болон тайлан болгон хөрвүүлж, санхүүжилт, түншлэл, шийдвэр гаргалтыг дэмжих."
      ),
      name: t("Investors and Strategic Partners", "Хөрөнгө оруулагчид ба стратегийн түншүүд"),
      role: t("Communication and diligence", "Харилцаа ба үнэлгээ"),
    },
  ];

  return (
    <section className="section-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("Who It Is For", "ХЭНД ЗОРИУЛСАН БЭ")}
          </p>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#111] md:text-5xl">
            {t("Different stakeholders can read the same story.", "Өөр өөр оролцогчид нэг ижил ойлголтыг авах боломжтой.")}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#6b7280]">
            {t(
              "Alt AI is designed to keep technical rigor intact while making outputs easier to understand for people who do not work inside geological datasets every day.",
              "Alt AI нь техникийн нарийвчлалыг хадгалсан хэвээр, геологийн өгөгдөлтэй өдөр тутам ажилладаггүй хүмүүст ч ойлгомжтой байхаар бүтээгдсэн."
            )}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <p className="text-sm leading-7 text-[#374151]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-[#e5e7eb] pt-6">
                  <p className="text-sm font-semibold text-[#111]">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-[#6b7280]">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
