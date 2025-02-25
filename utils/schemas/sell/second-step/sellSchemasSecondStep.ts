import { z } from 'zod';

export const tagSchema = z.object({
  tag: z.string().trim().min(1, `Please provide a tag between 1 to 100 characters.`).max(100, `Please provide a tag between 1 to 100 characters.`)
});

export const tagsSchema = z.object({
  tags: z.array(z.string().trim()).max(10)
}).refine(({ tags }) => new Set(tags).size === tags.length, { message: `Each tag must be unique.` });

export const discountSchema = z.object({
  property: z.string().trim().min(1).max(3)
}).refine(({ property: discount }) => {
  return !isNaN(Number(discount)) && Number(discount) >= 1 && Number(discount) <= 100;
});

export const featureHeadingSchema = z.object({
  property: z.string().trim().min(2, 'The heading for your feature should be from 2 to 100 characters long.').max(100, 'The heading for your feature should be from 2 to 100 characters long.')
});

export const featureShortDescriptionSchema = z.object({
  property: z.string().trim().min(5, 'The description for your feature should be from 5 to 1000 characters long.').max(1_000, 'The description for your feature should be from 5 to 1000 characters long.')
});
