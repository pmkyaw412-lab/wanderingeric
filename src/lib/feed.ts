import { getCollection, type CollectionEntry } from 'astro:content';

export type FeedEntry = CollectionEntry<'feed'>;
export type FeedType = FeedEntry['data']['type'];

/** URL segment for each type: /vlogs/…, /writing/…, etc. */
export const SEGMENT: Record<FeedType, string> = {
  vlog: 'vlogs',
  writing: 'writing',
  project: 'projects',
  reading: 'reading',
  hobby: 'hobbies',
};

/** The little uppercase tag on each card. */
export const LABEL: Record<FeedType, string> = {
  vlog: 'Vlog',
  writing: 'Writing',
  project: 'Project',
  reading: 'Reading',
  hobby: 'Hobby',
};

/** All published entries, newest first. Drafts are hidden in production builds. */
export async function getFeed(): Promise<FeedEntry[]> {
  const all = await getCollection('feed', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return all.sort((a, b) => +b.data.date - +a.data.date);
}

export const hrefFor = (entry: FeedEntry) =>
  `/${SEGMENT[entry.data.type]}/${entry.id}/`;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

export const fmtDateLong = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

/** ~200 wpm reading time from a Markdown body. */
export function readingTime(body: string | undefined): string {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}
