import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_NAME } from '../consts';
import { getPublishedArticles } from '../lib/articles';

export async function GET(context) {
	const posts = await getPublishedArticles();
	return rss({
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			categories: [post.data.category],
			link: `/artigos/${post.data.slug}/`,
		})),
	});
}
