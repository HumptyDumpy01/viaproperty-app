import { FilterPropertiesType } from '@/components/Layout/Filter/FilterProperties/FilterProperties';

export function filterSidebarResults(results: FilterPropertiesType) {
  // if a property type is an empty string, remove it from the object
  if (results.propertyTypes === '') {
    delete results.propertyTypes;
  }

  // if area range is not an empty string, convert it to number
  if (results.areaRange) {
    results.areaRange = Number(results.areaRange);
  }

  // if pricing range is not empty string, convert it to number
  if (results.pricingRange) {
    results.pricingRange = Number(results.pricingRange);
  }

  // if you see such keys as buy or rent, or both, transform them into an array
  if (results.sell && results.rent) {
    results.propertyFor = ['sell', 'rent'];
    delete results.sell;
    delete results.rent;
  } else if (results.sell) {
    results.propertyFor = ['sell'];
    delete results.sell;
  } else if (results.rent) {
    results.propertyFor = ['rent'];
    delete results.rent;
  } else if (!results.sell && !results.rent) {
    // add both
    results.propertyFor = ['sell', 'rent'];
  }

  // if beds or bathrooms is empty, remove them from the object
  if (Number(results.beds) === 0) {
    delete results.beds;
  } else {
    // convert beds to number
    results.beds = Number(results.beds);
  }
  if (Number(results.bathrooms) === 0) {
    delete results.bathrooms;
  } else {
    // convert bathrooms to number
    results.bathrooms = Number(results.bathrooms);
  }

  if (results.propertyTypes && typeof results.propertyTypes === 'string') {
    results.propertyTypes = results.propertyTypes.split(',');
  }

  // if you encounter such keys as Parking slot, Elevator, Fireplace, Outdoor Space, Smart Home Features, Garden
  // gather them into an array
  const additionalConveniences = ['parkingSlot', 'elevator', 'fireplace', 'outdoorSpace', 'smartHomeFeatures', 'garden'];

  // @ts-ignore
  results.additionalConveniences = additionalConveniences.filter((key) => results[key] === 'on').map((key) => key);
  // if additionalConveniences is an empty string, remove it from the object
  if (results.additionalConveniences.length === 0) {
    delete results.additionalConveniences;
  }
}