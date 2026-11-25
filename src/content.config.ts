import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_NAMES, DEFAULT_AUTHOR } from './consts';

const artigos = defineCollection({
	loader: glob({ base: './src/content/artigos', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(5, 'O título deve ter pelo menos 5 caracteres.'),
			description: z
				.string()
				.min(10, 'A descrição resumida deve ter pelo menos 10 caracteres.'),
			slug: z
				.string()
				.regex(
					/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
					'O slug deve conter apenas letras minúsculas, números e hífens.',
				),
			category: z.enum(CATEGORY_NAMES),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			cover: z.union([image(), z.string()]),
			coverAlt: z
				.string()
				.min(5, 'Informe o texto alternativo (coverAlt) da imagem de capa.'),
			tags: z.array(z.string()).default([]),
			featured: z.boolean().default(false),
			author: z.string().default(DEFAULT_AUTHOR),
			draft: z.boolean().default(false),
			products: z
				.array(
					z.object({
						name: z.string().min(2),
						image: z.union([image(), z.string()]),
						imageAlt: z.string().optional(),
						description: z.string().min(5),
						url: z.string().url('Informe uma URL válida para o produto.'),
						price: z.string().optional(),
						highlight: z.string().optional(),
						category: z.string().optional(),
					}),
				)
				.optional(),
		}),
});

export const collections = { artigos };
