"use client";

import { FadeIn } from "@/components/shared/fade-in";

import { useLanguage } from "@/contexts/language-context";

export function AboutValues() {
  const { t } = useLanguage();

  const values = [
    {
      label: "01",
      title: t("Uncover Hidden Systems", "Далд системүүдийг илрүүлэх"),
      body: t("We leverage geological data to separate assumptions from reality, providing clear insight into what deposit signatures and exploration patterns consistently lead to discovery.", "Бид геологийн өгөгдлийг ашиглан таамаглал ба бодит байдлыг ялгаж, ямар ордын шинж тэмдэг, хайгуулын хэв шинжүүд тогтмол нээлтэд хүргэдгийг тодорхой харуулдаг."),
    },
    {
      label: "02",
      title: t("Confidence Built on Data", "Өгөгдөлд суурилсан итгэл"),
      body: t("By grounding exploration decisions in AI-analyzed geological data and repeatable patterns, we help teams act with greater clarity and reduce reliance on guesswork.", "Хиймэл оюунаар боловсруулсан геологийн өгөгдөл болон давтагдах хэв шинжүүдэд тулгуурлан, багууд илүү тодорхой ойлголттой шийдвэр гаргаж, таамаглалд найдах байдлыг бууруулна."),
    },
    {
      label: "03",
      title: t("Discovery with Probability", "Магадлалд суурилсан нээлт"),
      body: t("Alt AI uses geological pattern analysis and probabilistic scoring to validate exploration targets, enabling teams to make informed, higher-confidence drill decisions.", "Alt AI нь геологийн хэв шинжийн шинжилгээ болон магадлалын үнэлгээг ашиглан хайгуулын зорилтот бүсүүдийг баталгаажуулж, өрөмдлөгийн илүү өндөр итгэлтэй шийдвэр гаргахад тусалдаг."),
    },
    {
      label: "04",
      title: t("Capital Protected", "Хөрөнг хамгаалах"),
      body: t("Our platform highlights low-probability zones and high-risk geological conditions, helping exploration teams avoid costly drill programs and preserve long-term capital.", "Манай платформ нь магадлал багатай бүсүүд болон өндөр эрсдэлтэй геологийн нөхцлүүдийг тодруулж, хайгуулын багуудыг өндөр зардалтай өрөмдлөгөөс зайлсхийх, урт хугацааны хөрөнгөө хамгаалахад дэмжлэг үзүүлдэг."),
    },
  ];

  return (
    <section className="bg-[#111] py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-brand">
            {t("What We Stand For", "БИДНИЙ ҮНЭТ ЗАРЧМУУД")}
          </p>
          <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-snug text-white md:text-4xl">
            {t("We don't predict deposits. We reveal where the geology points.", "Бид ордуудыг таамагладаггүй. Бид геологи хаашаа зааж байгааг илчилдэг.")}
          </h2>
        </FadeIn>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-16">
          {values.map((v, i) => (
            <FadeIn key={v.label} delay={i * 0.08}>
              <div>
                <span className="text-sm font-medium text-brand">
                  [{v.label}]
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#999]">
                  {v.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
