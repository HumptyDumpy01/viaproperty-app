import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Please enter a valid email!'),
  initials: z.string().min(2, 'The initials should be from 2 to 100 chars long!').max(100, 'The initials should be from 2 to 100 chars long!'),
  password: z.string().min(8,
    `The password should be at least 8 characters!`).max(100,
    `The password should be less than 100 characters!`).regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'The password should have at least 1 upper, 1 lower case letter, and 1 special character.'),
  confirmPassword: z.string(),
  authMethod: z.enum(['code', 'password', '2FA'], { message: `The auth method can be rather code, password or 2FA.` })
}).refine((data) => data.password === data.confirmPassword, {
  message: `The passwords do not match!`,
  path: [`confirmPassword`]
});