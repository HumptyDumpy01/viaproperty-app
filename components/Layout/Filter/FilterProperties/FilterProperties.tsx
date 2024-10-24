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

export default function FilterProperties(/*{  }: FilterType*/) {
  return (
    <>
      <div>
        <div className={`flex items-center justify-between mb-5`}>
          <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-3xl`}>Filters</h1>
          <button className={`text-zinc-600`}>Clear Filters</button>
        </div>
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
