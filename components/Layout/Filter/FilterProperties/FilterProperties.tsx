'use client';

/*type FilterType = {
  // children: ReactNode;
}*/

import PropertyType from '@/components/Layout/Filter/FilterProperties/PropertyType';
import SearchingFor from '@/components/Layout/Filter/FilterProperties/SearchingFor';
import PriceRange from '@/components/Layout/Filter/FilterProperties/PriceRange';
import QuantityFilter from '@/components/Layout/Filter/FilterProperties/QuantityFilter';
import PropertyAreaRange from '@/components/Layout/Filter/FilterProperties/PropertyAreaRange';
import AdditionalConveniences from '@/components/Layout/Filter/FilterProperties/AdditionalConveniences';
import FilterHeading from '@/components/Layout/Filter/FilterProperties/FilterHeading';
import { FormEvent } from 'react';

export default function FilterProperties(/*{  }: FilterType*/) {

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries());

    // resetting the form
    currObject.reset();
    // output
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
