import { candidate, election, party } from "@/content/facts";
import { MAIN_SITE, NETWORK } from "@/content/network";
import { site } from "@/content/site";

/** Compact footer: campaign identity + links to the rest of the network (internal linking for SEO). */
export function SiteFooter() {
  const others = NETWORK.filter((s) => s.key !== site.key);
  return (
    <footer className="bg-brown-900 text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-3xl uppercase leading-none">
              {candidate.fullName}
            </p>
            <p className="mt-2 text-sm text-white/60">
              {party.name} · {candidate.office}, {candidate.district} · {election.label}
            </p>
            <a href={MAIN_SITE.url} className="mt-4 inline-block text-sm font-semibold text-gold-400 hover:text-gold-200">
              Visit the main campaign site →
            </a>
          </div>
          <nav aria-label="Campaign network" className="md:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">More from the campaign</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {others.map((s) => (
                <li key={s.key}>
                  <a href={s.url} className="text-white/75 hover:text-gold-400">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-white/10 pt-5 text-xs text-white/45">
          © 2026 Authorised by the {candidate.callName} Campaign Organisation · {party.name}
        </p>
      </div>
    </footer>
  );
}
