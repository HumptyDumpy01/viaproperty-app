import { z } from 'zod';

export const leavePropertyReviewSchema = z.object({
  location: z.number({ message: 'The Location should be be a valid number!' }).min(1, 'Location cannot be less than 1.').max(5,
    'Location cannot be higher than 5.'),
  security: z.number({ message: 'The Security should be be a valid number!' }).min(1, 'Security cannot be less than 1.').max(5,
    'Location cannot be higher than 5.'),
  condition: z.number({ message: 'The Condition should be be a valid number!' }).min(1, 'Condition cannot be less than 1.').max(5,
    'Location cannot be higher than 5.'),
  noiseLevel: z.number({ message: 'The NoiseLevel should be be a valid number!' }).min(1, 'NoiseLevel cannot be less than 1.').max(5,
    'Location cannot be higher than 5.'),
  ownership: z.number({ message: 'The Ownership should be be a valid number!' }).min(1, 'Ownership cannot be less than 1.').max(5,
    'Location cannot be higher than 5.'),
  amenities: z.number({ message: 'The Amenities should be be a valid number!' }).min(1, 'Amenities cannot be less than 1.').max(5,
    'Location cannot be higher than 5.'),
  comment: z.string().min(5, 'The review should be at least 5 characters long!').max(1000, 'The review should not exceed 1000 characters!')
});