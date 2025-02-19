import { z } from 'zod';

export const titleSchema = z.object({
  property: z.string().trim().min(5).max(100)
});

export const descriptionSchema = z.object({
  property: z.string().trim().min(5).max(700)
});

export const propertyForSchema = z.object({
  property: z.enum([`rent`, `sell`])
});

export const imagesSchema = z.object({
  property: z.array(z.object({ index: z.number().max(5), src: z.string() })).nonempty().min(2).max(6)
});