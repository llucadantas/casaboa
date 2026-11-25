export interface CategoryInfo {
	name: CategoryName;
	slug: string;
	description: string;
}

export const CATEGORY_NAMES = [
	'Conforto',
	'Organização',
	'Decoração',
	'Tecnologia',
	'Cozinha',
	'Limpeza',
	'Iluminação',
	'Climatização',
] as const;

export type CategoryName = (typeof CATEGORY_NAMES)[number];

export const CATEGORIES: readonly CategoryInfo[] = [
	{
		name: 'Conforto',
		slug: 'conforto',
		description:
			'Têxteis macios, mantas, almofadas e escolhas que trazem acolhimento e bem-estar para o dia a dia.',
	},
	{
		name: 'Organização',
		slug: 'organizacao',
		description:
			'Cestos, bandejas e soluções discretas para manter cada cômodo funcional, leve e em ordem.',
	},
	{
		name: 'Decoração',
		slug: 'decoracao',
		description:
			'Objetos afetivos, materiais naturais e peças atemporais para compor ambientes com calma.',
	},
	{
		name: 'Tecnologia',
		slug: 'tecnologia',
		description:
			'Dispositivos discretos e automações práticas que simplificam a rotina sem poluir o ambiente.',
	},
	{
		name: 'Cozinha',
		slug: 'cozinha',
		description:
			'Utensílios funcionais, duráveis e bem desenhados para tornar o preparo das refeições mais prazeroso.',
	},
	{
		name: 'Limpeza',
		slug: 'limpeza',
		description:
			'Equipamentos ágeis e acessórios inteligentes que deixam a manutenção da casa mais simples.',
	},
	{
		name: 'Iluminação',
		slug: 'iluminacao',
		description:
			'Luminárias, pontos de luz indireta e lâmpadas de tom quente que transformam a atmosfera do lar.',
	},
	{
		name: 'Climatização',
		slug: 'climatizacao',
		description:
			'Conforto térmico, umidificação e qualidade do ar para respirar, trabalhar e descansar melhor.',
	},
];

export function getCategorySlug(name: string): string {
	const found = CATEGORIES.find(
		(c) => c.name.toLowerCase() === name.trim().toLowerCase(),
	);
	if (found) return found.slug;
	return name
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
	return CATEGORIES.find((c) => c.slug === slug);
}

export const SITE_NAME = 'CasaBoa';
export const SITE_TAGLINE = 'Pequenas escolhas, uma casa melhor.';
export const SITE_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const SITE_DESCRIPTION =
	'Descubra produtos, ideias e detalhes que transformam sua casa em um lugar ainda mais confortável, organizado e gostoso de viver.';
export const SITE_DOMAIN = 'casaboa.blog.br';
export const SITE_URL = 'https://casaboa.blog.br';
export const SITE_EMAIL = 'contato@casaboa.blog.br';
export const DEFAULT_AUTHOR = 'Redação CasaBoa';

export const NAV_LINKS = [
	{ label: 'Início', href: '/' },
	{ label: 'Artigos', href: '/artigos/' },
	{ label: 'Categorias', href: '/categorias/' },
	{ label: 'Sobre', href: '/sobre/' },
] as const;
