import { z } from 'zod';

export const SearchpropetriesViaNavSchema = z.object({
  searchTerm: z.string(),
  propertyFor: z.enum([`rent`, `sell`])
});