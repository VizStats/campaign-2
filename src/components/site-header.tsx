import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { candidate, party } from "@/content/facts";
import { MAIN_SITE } from "@/content/network";

/** Slim header shared by every network site: identity on the left, route to the main site on the right. */
export function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center bg-white shadow-[0_1px_0_rgba(0,0,0,.08)]">
            <Image src="/img/dla-logo.png" alt={`${party.name} logo`} width={312} height={312} className="h-[88%] w-[88%] object-contain" loading="eager" />
          </span>
          <span className="leading-none">
            <span className={`block font-display text-[1.35rem] tracking-wide ${dark ? "text-white" : "text-ink"}`}>
              {candidate.firstName} {candidate.middleName}
            </span>
            <span className={`block text-[0.6rem] font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/60" : "text-mute"}`}>
              {party.name}
            </span>
          </span>
        </div>
        <a
          href={MAIN_SITE.url}
          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${dark ? "text-gold-400 hover:text-gold-200" : "text-brown-700 hover:text-ink"}`}
        >
          <span className="hidden sm:inline">Main campaign site</span>
          <span className="sm:hidden">Main site</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
