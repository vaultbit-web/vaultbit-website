import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_URL, SITE_NAME } from '~/data/organization';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const now = Date.now();
  const posts = (
    await getCollection(
      'newsletter',
      ({ data }) => !data.draft && (!data.dropDate || data.dropDate.getTime() <= now),
    )
  ).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${SITE_NAME} · Newsletter`,
    description:
      'Artículos técnicos sobre custodia, herencia y fiscalidad de criptoactivos en España, escritos por Daniel Brosed Giral.',
    site: context.site ?? SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/newsletter/${post.slug}`,
      author: post.data.author,
      categories: post.data.keywords ?? [],
    })),
    customData: `<language>es-ES</language>`,
    stylesheet: false,
  });
}
