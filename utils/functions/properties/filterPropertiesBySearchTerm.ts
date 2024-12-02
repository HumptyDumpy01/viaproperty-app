import { PropertyType } from '@/utils/types/PropertyType';

export function filterPropertiesBySearchTerm(searchTerm: string, property: PropertyType): boolean {
  return property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.overall.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.location.country.toLowerCase().includes(searchTerm.toLowerCase());
}