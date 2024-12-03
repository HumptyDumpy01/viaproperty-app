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
    console.log(`Executing originalProperties: `, originalProperties);

    filterSidebarResults(results);


    console.log(results);
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