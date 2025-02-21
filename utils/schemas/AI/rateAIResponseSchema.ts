import { z } from 'zod';

export const rateAIResponseSchema = z.object({
  id: z.string().uuid(`The id is not provided correctly.`),
  rated: z.number().min(1).max(5)
});