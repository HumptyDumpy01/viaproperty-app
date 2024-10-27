'use client';

/*type FilterPropertiesContainerType = {
  // children: ReactNode;
}*/

import FilterProperties from '@/components/Layout/Filter/FilterProperties/FilterProperties';
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { propertiesActions } from '@/store/features/properties';
import CloseLayoutIcon from '@/components/UI/Button/CloseLayoutIcon';

export default function FilterPropertiesContainer(/*{  }: FilterPropertiesContainerType*/) {
  const filterOpen = useCartSelector((state) => state.properties.openFilter);
  const dispatch = useCartDispatch();

  const hiddenFilter = `-translate-x-full opacity-0 pointer-events-none`;
  const showFilter = `translate-x-0 opacity-100 pointer-events-auto`;

  return (
    <>

      <CloseLayoutIcon extraClasses={`bp-1364:opacity-0 bp-1364:pointer-events-none`} fixedPosition={`top-6 right-5`}
                       layoutOpen={filterOpen}
                       dispatch={() => dispatch(propertiesActions.toggleFilter(false))} />
      {filterOpen && (
        <>
          <div onClick={() => dispatch(propertiesActions.toggleFilter(false))}
               className={`z-30 fixed bg-zinc-50/80 h-screen w-screen inset-0 bp-1364:opacity-0 bp-1364:pointer-events-none`}>
          </div>
        </>
      )}
      <div
        className={`absolute top-10 left-0 bp-1364:relative bp-1364:top-0 bg-white z-40 pt-6 bp-1364:pb-0 pb-4 bp-1364:pt-0 px-7 bp-1364:pl-0 rounded-sm bp-1364:rounded-xl transition-all
          duration-200 ${!filterOpen ? hiddenFilter : showFilter} bp-1364:translate-x-0 bp-1364:opacity-100  bp-1364:pointer-events-auto`}>
        <FilterProperties />
      </div>
    </>
  );
}
