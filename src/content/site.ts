import { NETWORK } from "./network";

// Per-site SEO + identity. Each project in the network edits ONLY this file's values.
const KEY = "youth";

export const site = {
  key: KEY,
  // Canonical URL of this deployment. Set NEXT_PUBLIC_SITE_URL in the host once the domain is known.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? NETWORK.find((s) => s.key === KEY)?.url ?? "http://localhost:3000",
  // <title>: keep under ~60 characters, lead with the topic people search for.
  title: "Jobs, Not Guns — Rev. Aneni Opoli for Rivers West Senate",
  // Meta description: 140–160 characters, unique to this site.
  description:
    "Jobs, not guns: Rev. Aneni Opoli of the Democratic Leadership Alliance for Rivers West Senate, 16 January 2027. Youth, women, justice and truthful governance.",
  keywords: [
    "Jobs not guns",
    "Rivers West youth jobs",
    "Aneni Opoli youth",
    "women empowerment Rivers West",
    "justice for the less privileged Rivers State",
    "good governance Rivers West",
    "Rivers West Senate 2027",
    "Aneni Opoli Senate 2027",
  ],
  // One short line printed on the social share image.
  ogLine: "Jobs, not guns — Rivers West Senate 2027",
  // Where the main call-to-action sends people on the main campaign site.
  mainSitePath: "/#agenda",
};
