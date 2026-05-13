"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("Home", "Нүүр") },
    { href: "/about", label: t("About Us", "Бидний тухай") },
    { href: "/milestones", label: t("Milestones", "Төлөвлөгөө") },
  ];

  const legalLinks = [
    { label: t("Terms of Service", "Үйлчилгээний нөхцөл"), href: "#" },
    { label: t("Privacy Policy", "Нууцлалын бодлого"), href: "#" },
    { label: t("Cookie Policy", "Күүки бодлого"), href: "#" },
    { label: t("Contact Us", "Холбогдох"), href: "#" },
  ];

  return (
    <footer className="bg-[#111]">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 lg:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-white">Alt AI</p>
            <p className="mt-4 text-sm leading-7 text-[#777]">
              {t(
                "AI-Assisted Mineral Discovery Platform — transforming geological data into actionable exploration insights.",
                "Хиймэл оюун ухаанд суурилсан ашигт малтмалын хайгуулын платформ — геологийн өгөгдлийг бодит хайгуулын шийдвэр болгон хувиргана."
              )}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#555]">
              {t("Navigation", "Навигаци")}
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#999] transition hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="max-w-3xl text-xs leading-6 text-[#555]">
            <span className="font-semibold text-[#777]">
              {t("Legal Disclaimer:", "Хуулийн тайлбар:")}
            </span>{" "}
            {t(
              "Alt AI is an analytical platform for mineral exploration. All geological insights, prospectivity maps, and target recommendations are for informational purposes only and do not constitute investment advice or guarantee discovery outcomes. Mineral exploration carries inherent geological and financial risk. Users should conduct independent due diligence before making exploration or investment decisions.",
              "Alt AI нь ашигт малтмалын хайгуулын аналитик платформ юм. Бүх геологийн дүгнэлт, хэтийн төлөвийн зураглал болон байршлын зөвлөмжүүд нь зөвхөн мэдээллийн зориулалттай бөгөөд хөрөнгө оруулалтын зөвлөгөө эсвэл нөөц илрүүлэх баталгаа болохгүй. Ашигт малтмалын хайгуул нь геологийн болон санхүүгийн эрсдэл дагуулдаг. Хэрэглэгчид хайгуул эсвэл хөрөнгө оруулалтын шийдвэр гаргахаас өмнө бие даасан нарийвчилсан үнэлгээ хийх шаардлагатай."
            )}
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-[#555]">
            {t(
              "© 2026 Alt AI, Inc. All rights reserved.",
              "© 2026 Alt AI, Inc. Бүх эрх хуулиар хамгаалагдсан."
            )}
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-xs text-[#555] transition hover:text-[#999]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
