/**
 * ✏️ YOUR SITE, ONE FILE.
 * Everything personal lives here — edit this file and the whole site updates.
 */

export const SITE = {
  name: 'Wandering Eric',
  author: 'Eric',
  // Shows in search results and link previews:
  description:
    'Eric — a materials student in Osaka. Welding, small tools, and the wandering in between.',
  // The small line above your name on the homepage:
  locationLine: 'Osaka, Japan — 34.7°N · 135.5°E',
  // The intro under your name. First sentence is dark, the rest is soft grey.
  ledeStrong: "Hey — I'm Eric. By day I weld steel and measure how it fails.",
  ledeSoft:
    'The rest of the time I build small tools and wander Kansai with a camera rolling. It all ends up here.',
  // The italic sign-off in the footer:
  signOff: 'Struck an arc in Osaka — 2026',
};

/** The "Now" strip under the hero. Keep items short; 3–5 feels right. */
export const NOW: string[] = [
  'finishing my welding thesis',
  'job-hunting for spring 2028',
  'learning to color-grade footage',
  'reading Shop Class as Soulcraft',
];

/** Footer links. Replace the # with your real URLs (or delete a line to hide it). */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'YouTube', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Email', href: 'mailto:hello@example.com' },
];

/** The About section on the homepage. */
export const ABOUT = {
  pull:
    "Somewhere between the lab bench and the train window — that's where most of this gets made.",
  paragraphs: [
    "I'm Eric, a materials student in Osaka. My thesis is about how steel behaves when it's pushed to the point of failure, and the heat-tint a weld leaves behind is honestly my favorite palette — it's the one running through this site, straw to temper-blue.",
    "When I'm not in the lab I build small, quiet tools, mostly to keep my own life in order. And lately I carry a camera everywhere, filming the ordinary parts of wandering around Kansai. This site is where the welding, the building, and the walking all sit in one place.",
  ],
  /** The little spec-sheet card. */
  specs: [
    { term: 'Based in', detail: 'Osaka, Japan' },
    { term: 'Studying', detail: 'Welding, and how steel fails' },
    { term: 'Building', detail: 'Small tools for money & lab life' },
    { term: 'Carrying', detail: 'A camera and a roll of Portra' },
  ],
};
