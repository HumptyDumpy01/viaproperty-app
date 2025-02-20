import { z } from 'zod';

export const generateTextSchema = z.object({
  generationFor: z.enum(['Property Description', 'Property Title', 'Property Location Description'], {
    message: `Please enter the correct generation for property.`
  }),
  tags: z.string({ message: `The tags should be of type "string"` }).trim().min(4, 'The tags should contain from 4 to 1000 chars!').max(1_000, `The tags should contain from 4 to 1000 chars!`),
  tone: z.enum(['Professional', 'Trendy', 'Inviting', 'Minimalist'], { message: `Please specify the tone of generated text.` })
});