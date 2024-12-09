import { z } from 'zod';

export const sellPropertySchema = z.object({
  totalPrice: z.number().int().min(1, `The total price must be at least 1`).positive(`The total price must be a positive number`)
});