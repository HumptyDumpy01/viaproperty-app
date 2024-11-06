import { z } from 'zod';

export const SearchPropertiesViaNavSchema = z.object({
  searchTerm: z.string(),
  propertyFor: z.enum([`rent`, `buy`])
});