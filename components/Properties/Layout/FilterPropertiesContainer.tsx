// 'use client';

/*type FilterPropertiesContainerType = {
  // children: ReactNode;
}*/

import FilterProperties from '@/components/Layout/Filter/FilterProperties/FilterProperties';

export default function FilterPropertiesContainer(/*{  }: FilterPropertiesContainerType*/) {
  return (
    <>
      <div
        className={`absolute top-10 left-3 bp-1364:relative bp-1364:top-0 bg-white z-10 pt-6 bp-1364:pt-0 pl-2 bp-1364:pl-0 rounded-xl transition-all
          duration-200 -translate-x-full bp-1364:translate-x-0 opacity-0 bp-1364:opacity-100 pointer-events-none bp-1364:pointer-events-auto`}>
        <FilterProperties />
      </div>
    </>
  );
}
