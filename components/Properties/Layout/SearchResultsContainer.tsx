// 'use client';

/*type SearchResultsContainerType = {
  // children: ReactNode;
}*/

import SearchResults from '@/components/Layout/Filter/SearchResults/SearchResults';

export default function SearchResultsContainer(/*{  }: SearchResultsContainerType*/) {
  return (
    <>
      <div className={`bp-896:col-span-2 bp-1364:col-span-1 col-span-3`}>
        <SearchResults />
      </div>
    </>
  );
}
