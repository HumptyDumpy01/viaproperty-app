import { z } from 'zod';

export const searchTermSchema = z.object({
  searchTerm: z.string().min(2).max(500, {
    message: `Search term must be between 2 and 500 characters!`
  })
});
