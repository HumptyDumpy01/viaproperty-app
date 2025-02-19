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

export const propertyAreaSchema = z.object({
  property: z.string().min(1).max(4)
}).refine((arg) => {
  return Number(arg.property) >= 5 && Number(arg.property) <= 10000;
});

export const propertyPriceSchema = z.object({
  property: z.string()
});