import { z } from 'zod';

export const confirmPasswordSchema = z.object({
  password: z.string(),
  confirmPassword: z.string().regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, `The new password should have at least 8 chars, 1 upper, 1 lower case letter, and 1 special character.`)
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match!',
  path: ['confirmPassword']
});