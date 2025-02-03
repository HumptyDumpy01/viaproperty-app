import { z } from 'zod';

export const changeAuthMethodSchema = z.object({
  selectedAuthMethod: z.enum(['code', '2FA', 'password'], { message: 'The auth method can only be code, 2FA or password.' })
});