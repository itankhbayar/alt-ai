"use client";

import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

export function AboutCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111] py-40">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <FadeIn>
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            {t("Start discovering.", "Хайгуулaa эхлүүл.")}
          </h2>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-block border border-white px-10 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111]"
            >
              {t("Book a demo now", "Демо уулзалт захиалах")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
