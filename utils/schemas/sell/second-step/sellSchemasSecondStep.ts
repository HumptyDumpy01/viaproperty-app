import { z } from 'zod';

export const tagSchema = z.object({
  tag: z.string().min(1, `Please provide a tag between 1 to 100 characters.`).max(100, `Please provide a tag between 1 to 100 characters.`)
});