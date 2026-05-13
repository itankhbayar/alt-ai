"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";



export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "/", label: t("Home", "Нүүр") },
    { href: "/about", label: t("Company", "Бидний тухай") },
    { href: "/milestones", label: t("Roadmap", "Төлөвлөгөө") },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/[0.06] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="text-lg font-bold tracking-tight text-[#111]">
          ALT+Ai
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-semibold uppercase tracking-[0.12em] transition ${
                pathname === link.href
                  ? "text-[#111]"
                  : "text-[#888] hover:text-[#111]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-black/5 p-1 text-[11px] font-bold uppercase tracking-wider">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 transition-all ${
                lang === "en" ? "bg-white text-black shadow-sm" : "text-black/50 hover:text-black"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("mn")}
              className={`rounded-full px-3 py-1.5 transition-all ${
                lang === "mn" ? "bg-white text-black shadow-sm" : "text-black/50 hover:text-black"
              }`}
            >
              MN
            </button>
          </div>
          <Link
            href="/about"
            className="hidden border border-[#111] px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#111] transition hover:bg-[#111] hover:text-white md:block"
          >
            {t("Contact Us", "Холбогдох")}
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-[#111] transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#111] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#111] transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/[0.06] bg-white px-6 pb-8 pt-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-[#444]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
