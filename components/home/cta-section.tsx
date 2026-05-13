"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="section-dark py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl"
        >
          {t(
            "Build a clearer digital foundation for mineral discovery in Mongolia.",
            "Монголын хайгуулын дижитал суурь"
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#9ca3af]"
        >
          {t(
            "Alt AI is designed to help exploration teams move faster while making technical outputs easier to explain to executives, public institutions, and long-term strategic partners.",
            "Alt AI нь хайгуулын багуудыг илүү хурдан ажиллахад туслахын зэрэгцээ техникийн үр дүнг удирдлага, төрийн байгууллага болон урт хугацааны стратегийн түншүүдэд ойлгомжтой тайлбарлах боломжийг бүрдүүлдэг."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-white px-10 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111]"
          >
            {t("Contact Us", "Холбогдох")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
