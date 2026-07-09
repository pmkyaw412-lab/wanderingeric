import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getFeed, hrefFor, LABEL } from '../lib/feed';

export async function GET(context) {
  const feed = await getFeed();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: feed.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      link: hrefFor(entry),
      description:
        'description' in entry.data && entry.data.description
          ? entry.data.description
          : `${LABEL[entry.data.type]} — ${entry.data.title}`,
    })),
  });
}
