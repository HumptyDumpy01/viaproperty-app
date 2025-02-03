import { z } from 'zod';

export const enterTokenSchema = z.object({
  token: z.string().length(6, 'Enter a valid token without any extra spaces.')
});