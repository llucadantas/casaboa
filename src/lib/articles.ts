import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, getCategorySlug } from '../consts';

export type ArticleEntry = CollectionEntry<'artigos'>;

/**
 * Retorna todos os artigos publicados (draft !== true), ordenados do mais recente ao mais antigo.
 */
export async function getPublishedArticles(): Promise<ArticleEntry[]> {
	const entries = await getCollection('artigos', ({ data }) => !data.draft);
	return entries.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

/**
 * Conta quantos artigos publicados existem em cada categoria.
 */
export function getCategoryCounts(articles: ArticleEntry[]): Record<string, number> {
	const counts: Record<string, number> = {};
	for (const cat of CATEGORIES) {
		counts[cat.name] = 0;
	}
	for (const article of articles) {
		const category = article.data.category;
		counts[category] = (counts[category] ?? 0) + 1;
	}
	return counts;
}

/**
 * Filtra artigos por slug ou nome de categoria.
 */
export function filterArticlesByCategory(
	articles: ArticleEntry[],
	categorySlug: string,
): ArticleEntry[] {
	return articles.filter(
		(article) => getCategorySlug(article.data.category) === categorySlug,
	);
}
