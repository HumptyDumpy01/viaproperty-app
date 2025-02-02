import { z } from 'zod';

export const changeUserInitialsSchema = z.object({
  enteredUserInitials: z.string().min(2, `The Initials should be at least 2 to 100 chars long!`).max(100, `The Initials should be at least 2 to 100 chars long!`)
});