import { z } from 'zod';

export const rentPropertySchema = z.object({
  dateRange: z.object({
    from: z.string().datetime(`Please enter a valid rental date(from)`),
    to: z.string().datetime(`Please enter a valid rental date(to)`)
  }),
  totalPrice: z.number().int().min(1, { message: `The total price must be at least 1` }).positive(`The total price must be a positive number`)
});
