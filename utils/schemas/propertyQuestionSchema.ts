import { z } from 'zod';

export const propertyQuestionSchema = z.object({
  comment: z.string().min(5, `Your question should be at least 5 characters!`).max(1000, `Your question should not exceed 1000 characters!`)
});
