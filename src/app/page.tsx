import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/ui/reveal";
import { candidate, commitments, election, party } from "@/content/facts";
import { MAIN_SITE } from "@/content/network";
import { site } from "@/content/site";

const mainHref = `${MAIN_SITE.url}${site.mainSitePath}`;
const fullName = `${candidate.honorific} ${candidate.fullName}`;

// All four commitments, each as its title plus one short line (12 words or fewer) restating facts.ts.
const stands = [
  { ...commitments.youth, line: "Skills, empowerment and real, paying jobs for our young people." },
  { ...commitments.women, line: "Education, skills and financial independence, so women can support their homes." },
  { ...commitments.justice, line: "Defending the oppressed and speaking for those who have no voice." },
  { ...commitments.governance, line: "Sincere, accountable, transparent leadership that delivers results." },
];

const headline = "block font-display uppercase text-[length:min(23vw,26svh)] lg:text-[length:min(14vw,25svh,12rem)]";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${site.url}/#commitments`,
  name: `What ${candidate.callName} stands for`,
  itemListElement: stands.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: `${c.title} (${c.audience})` })),
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Screen 1: the poster lead line, her name, the portrait */}
        <section aria-labelledby="hero-title" className="relative min-h-svh overflow-hidden bg-paper">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[38%] bg-gold-400 lg:block" />

          <div className="relative mx-auto grid min-h-svh max-w-[1400px] grid-rows-[1fr_auto] px-5 sm:px-8 lg:grid-cols-12 lg:grid-rows-[1fr]">
            <Reveal y={0} className="flex flex-col justify-center pb-12 pt-[7rem] lg:col-span-7 lg:pb-20 lg:pr-8">
              <h1 id="hero-title">
                <span className={`${headline} text-ink`}>Jobs,</span>{" "}
                <span className={`${headline} text-brown-700`}>
                  Not{" "}
                  <span className="relative inline-block text-ink/40">
                    Guns
                    <span
                      aria-hidden="true"
                      className="absolute -inset-x-[0.06em] top-[0.31em] block h-[0.12em] -rotate-3 bg-brown-700"
                    />
                  </span>
                </span>
                <span className="sr-only"> — </span>
                <span className="mt-8 block max-w-md font-serif text-2xl leading-snug text-ink sm:text-3xl">
                  {fullName}
                </span>
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed text-mute">
                {party.name} candidate for {candidate.office}, {candidate.district}.
              </p>

              <a
                href="#stands"
                className="mt-10 inline-flex items-center gap-2 self-start text-sm font-semibold text-brown-700 hover:text-ink"
              >
                What she stands for
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </Reveal>

            {/* Portrait: shown whole, standing on the bottom edge of the screen */}
            <div className="relative -mx-5 h-[24rem] bg-gold-400 sm:-mx-8 sm:h-[30rem] lg:col-span-5 lg:mx-0 lg:h-auto lg:bg-transparent">
              <div className="absolute inset-x-0 bottom-0 top-8 lg:top-[6rem]">
                <Image
                  src="/img/portrait-suit.webp"
                  alt={`${fullName}, ${party.name} Senate candidate for ${candidate.district}`}
                  fill
                  preload
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 340px, 270px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Screen 2: all four commitments, then the call to action */}
        <section id="stands" aria-labelledby="stands-title" className="flex min-h-svh items-center bg-cream">
          <div className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 lg:py-28">
            <Reveal y={0}>
              <h2 id="stands-title" className="font-display text-[clamp(2.75rem,6vw,4.5rem)] uppercase text-brown-900">
                What she stands for
              </h2>
            </Reveal>

            <ul className="mt-12 grid gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-16">
              {stands.map((c, i) => (
                <Reveal as="li" y={0} delay={i * 0.08} key={c.title} className="border-t-2 border-gold-400 pt-5">
                  <p className="text-sm text-mute">{c.audience}</p>
                  <h3 className="mt-1 font-serif text-2xl text-brown-900 sm:text-[1.75rem]">{c.title}</h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-ink/80">{c.line}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal
              y={0}
              className="mt-20 flex flex-col gap-6 border-t border-brown-900/15 pt-10 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="font-display text-[clamp(2rem,4vw,3rem)] uppercase text-brown-900">
                Vote on {election.label}
              </p>
              <a href={mainHref} className="btn self-start bg-brown-900 text-white hover:bg-brown-700 sm:self-auto">
                Read more on the main site
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
