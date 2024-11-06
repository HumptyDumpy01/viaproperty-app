import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email({ message: `Please enter a valid email address` })
});
