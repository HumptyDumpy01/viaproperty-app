import { z } from 'zod';

export const propertyQuestionSchema = z.object({
  comment: z.string().min(1, `Your question should not be empty!`).max(700, `Your question should not exceed 700 characters!`)
});
