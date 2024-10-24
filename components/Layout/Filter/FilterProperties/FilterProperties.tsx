// 'use client';

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

export default function FilterProperties(/*{  }: FilterType*/) {
  return (
    <>
      <div>
        <FilterHeading />
        <PropertyType />
        <SearchingFor />
        <PriceRange />
        <QuantityFilter />
        <PropertyAreaRange />
        <AdditionalConveniences />
      </div>
    </>
  );
}
