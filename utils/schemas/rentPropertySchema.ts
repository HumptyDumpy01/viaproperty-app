import { z } from 'zod';

export const rentPropertySchema = z.object({
  dateRange: z.object({
    from: z.string().date(`Please enter a valid rental date(from)`),
    to: z.string().date(`Please enter a valid rental date(to)`)
  }),
  totalPrice: z.number().int().positive()
});
