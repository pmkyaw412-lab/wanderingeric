/**
 * ✏️ YOUR SITE, ONE FILE.
 * Everything personal lives here — edit this file and the whole site updates.
 */

export const SITE = {
  name: 'Wandering Eric',
  author: 'Eric',
  // Shows in search results and link previews:
  description:
    "Eric — civil engineering master's student at Osaka University, researching welding deformation through simulation. EJU Math tutor, and the person behind Wandering Eric.",
  // The small line above your name on the homepage:
  locationLine: 'Osaka, Japan — 34.7°N · 135.5°E',
  // The intro under your name. First sentence is dark, the rest is soft grey.
  ledeStrong:
    "Hey — I'm Eric. By day I'm a master's student in civil engineering at Osaka University, simulating how welding deforms steel.",
  ledeSoft:
    'After hours I teach EJU Math and run Wandering Eric on Facebook. This site is where it all comes together.',
  // The italic sign-off in the footer:
  signOff: 'Struck an arc in Osaka — 2026',
};

/** The "Now" strip under the hero. Keep items short; 3–5 feels right. */
export const NOW: string[] = [
  'internship & job hunting (28卒)',
  'prepping for the Class-2 Architect exam (二級建築士)',
  'running welding-deformation simulations',
];

/** Footer links. Delete a line to hide it. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/p/Wandering-Eric-61559440529169/' },
  { label: 'Email', href: 'mailto:pmkyawclass@gmail.com' },
  // Want more later? Copy a line, e.g.:
  // { label: 'Instagram', href: 'https://instagram.com/yourname' },
];

/** The About section on the homepage. */
export const ABOUT = {
  pull:
    "Somewhere between the simulation queue and the train window — that's where most of this gets made.",
  paragraphs: [
    "I'm Eric, a civil engineering student at Osaka University, in the first year of my master's (M1). My research is on welding and welding deformation — I build simulations of how a weld's heat pulls steel out of shape, and how to predict and control it. The colors a weld leaves behind as it cools became this site's palette, straw to temper-blue.",
    'Outside the lab, I teach EJU Math part-time and run Wandering Eric, the Facebook page where my vlogs and wanderings live. Right now the calendar is full of internship applications, job hunting, and prep for the Class-2 Architect licence (二級建築士) — and this site is the one place where all of it sits together.',
  ],
  /** The little spec-sheet card. */
  specs: [
    { term: 'Based in', detail: 'Osaka, Japan' },
    { term: 'Studying', detail: 'M1, Civil Engineering, Osaka University' },
    { term: 'Researching', detail: 'Welding deformation & simulation' },
    { term: 'Teaching', detail: 'EJU Math, part-time' },
    { term: 'Aiming for', detail: 'Class-2 Architect licence (二級建築士)' },
  ],
};
