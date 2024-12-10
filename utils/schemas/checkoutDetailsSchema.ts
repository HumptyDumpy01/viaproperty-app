import { z } from 'zod';

export const checkoutDetailsSchema = z.object({
  firstName: z.string().min(1, `First Name should not be empty!`).max(100, `First Name should not exceed 100 characters!`),
  lastName: z.string().min(2, `Last Name should not empty!`).max(100, `Last Name should not exceed 100 characters!`),
  email: z.string().email(`Please enter a valid email address!`),
  phoneNumber: z.string().min(10, `Phone number should be at least 10 characters!`).max(15, `Phone number should not exceed 15 characters!`)
});
