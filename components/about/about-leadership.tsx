"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { useLanguage } from "@/contexts/language-context";

const team = [
  { name: "A. Anand", role: "ML Engineer", initials: "" },
  { name: "O. Usukhbayar", role: "Fullstack developer", initials: "" },
  { name: "E. Tugs-Erdene", role: "Backend Engineer", initials: "" },
  { name: "B. Ariunbaatar", role: "Geophysicist", initials: "" },
  { name: "N. Byambatsogt", role: "Geologist", initials: "" },
];

export function AboutLeadership() {
  const { t } = useLanguage();

  const founders = [
    {
      name: "B. Batbayr",
      title: "Founder & CEO",
      initials: "",
      quote: t(
        "We built Alt AI to understand what the geology remembers — and to help exploration teams see what data reveals.",
        "Alt AI-г бид геологийн 'санаж буй' мэдээллийг ойлгож, өгөгдөл юу илэрхийлж байгааг хайгуулын багуудад харахад туслах зорилгоор бүтээсэн."
      ),
    },
    {
      name: "B. Sodbayr",
      title: "Managing Partner",
      initials: "",
      quote: t(
        "Our story began with one goal — to understand why certain geological formations host mineral deposits and others don't.",
        "Манай аялал нэг зорилгоос эхэлсэн — яагаад зарим геологийн тогтоц ашигт малтмал агуулдаг, харин зарим нь агуулдаггүйг ойлгох."
      ),
    },
  ];

  return (
    <section className="bg-white py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-brand">
            Leadership
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {founders.map((f, i) => (
            <FadeIn key={f.name} delay={i * 0.12}>
              <div>
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#e5e7eb]">
                  <span className="text-xl font-bold text-[#999]">
                    {f.initials}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#111]">
                  {f.name}
                </h3>
                <p className="mt-1 text-sm text-[#777]">{f.title}</p>
                <p className="mt-4 text-base leading-7 text-[#555]">
                  &ldquo;{f.quote}&rdquo;
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-32">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#111]">Core Team</h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.06}>
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e5e7eb]">
                    <span className="text-sm font-bold text-[#999]">
                      {member.initials}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#111]">
                    {member.name}
                  </p>
                  <p className="mt-1 text-xs text-[#777]">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
