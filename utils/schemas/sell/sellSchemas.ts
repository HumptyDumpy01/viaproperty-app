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
