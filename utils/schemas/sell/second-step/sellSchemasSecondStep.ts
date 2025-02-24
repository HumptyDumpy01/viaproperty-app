import { z } from 'zod';

export const tagSchema = z.object({
  tag: z.string().min(1, `Please provide a tag between 1 to 100 characters.`).max(100, `Please provide a tag between 1 to 100 characters.`)
});

export const tagsSchema = z.object({
  tags: z.array(z.string()).max(10)
}).refine(({ tags }) => new Set(tags).size === tags.length, { message: `Each tag must be unique.` });

export const discountSchema = z.object({
  property: z.string().min(1).max(3)
}).refine(({ property: discount }) => {
  return !isNaN(Number(discount)) && Number(discount) >= 1 && Number(discount) <= 100;
});