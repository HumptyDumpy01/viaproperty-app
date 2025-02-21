import { GenerationForType } from '@/components/AI/modals/AIModal';

export function convertToLocalStorageName(property: GenerationForType) {
  switch (property) {
    case 'Property Description':
      return `propertyDescription`;
    case 'Property Title':
      return `title`;
    case 'Property Location Description':
      return `locationDescription`;
  }
}