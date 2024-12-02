import { z } from 'zod';

export const searchTermSchema = z.object({
  searchTerm: z.string().min(1).max(500, {
    message: `Search term must be between 1 and 500 characters!`
  })
});
