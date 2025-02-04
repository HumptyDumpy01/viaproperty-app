'use client';

import PropertyType from '@/components/Layout/Filter/FilterProperties/PropertyType';
import SearchingFor from '@/components/Layout/Filter/FilterProperties/SearchingFor';
import PriceRange from '@/components/Layout/Filter/FilterProperties/PriceRange';
import QuantityFilter from '@/components/Layout/Filter/FilterProperties/QuantityFilter';
import PropertyAreaRange from '@/components/Layout/Filter/FilterProperties/PropertyAreaRange';
import AdditionalConveniences from '@/components/Layout/Filter/FilterProperties/AdditionalConveniences';
import FilterHeading from '@/components/Layout/Filter/FilterProperties/FilterHeading';
import { FormEvent } from 'react';
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { filterSidebarResults } from '@/utils/functions/properties/filterSidebarResults';
import { propertiesActions } from '@/store/features/properties';

export type FilterPropertiesType = {
  propertyTypes?: string | string[];
  sell?: string;
  rent?: string;
  pricingRange?: number;
  beds?: number;
  bathrooms?: number;
  areaRange?: number;
  parkingSlot?: string;
  elevator?: string;
  fireplace?: string;
  outdoorSpace?: string;
  smartHomeFeatures?: string;
  garden?: string;
  propertyFor?: string[];
  additionalConveniences?: string[];
};

export default function FilterProperties() {
  const dispatch = useCartDispatch();
  const originalProperties = useCartSelector((state) => state.properties.allPropertiesOriginal);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as FilterPropertiesType;

    filterSidebarResults(results);

    let filteredProperties = [...originalProperties];

    if (results.propertyTypes) {
      const propertyTypesArray = Array.isArray(results.propertyTypes) ? results.propertyTypes : [results.propertyTypes];
      filteredProperties = filteredProperties.filter(property =>
        // @ts-ignore
        propertyTypesArray.some(type => property.tags.includes(type))
      );
    }

    if (results.propertyFor) {
      filteredProperties = filteredProperties.filter(property =>
        results.propertyFor!.includes(property.propertyFor)
      );
    }

    if (results.pricingRange) {
      filteredProperties = filteredProperties.filter(property =>
        Number(property.description.priceAndTaskHistory.price.replaceAll(`,`, ``)) <= results.pricingRange!
      );
    }

    if (results.beds) {
      filteredProperties = filteredProperties.filter(property =>
        property.propertyHas!.beds >= results.beds!
      );
    }

    if (results.bathrooms) {
      filteredProperties = filteredProperties.filter(property =>
        property.propertyHas!.bathrooms >= results.bathrooms!
      );
    }

    if (results.areaRange) {
      filteredProperties = filteredProperties.filter(property =>
        property.propertyArea <= results.areaRange!
      );
    }

    if (results.additionalConveniences) {
      // find all properties that include any of the additional conveniences
      filteredProperties = filteredProperties.filter(property =>
        // @ts-ignore
        results.additionalConveniences!.some(convenience => property.additionalConveniences.includes(convenience))
      );
    }

    dispatch(propertiesActions.setProperties(filteredProperties));
    dispatch(propertiesActions.setCurrentPage(1)); // Reset to the first page
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FilterHeading />
        <PropertyType />
        <SearchingFor />
        <PriceRange />
        <QuantityFilter />
        <PropertyAreaRange />
        <AdditionalConveniences />
      </form>
    </>
  );
}