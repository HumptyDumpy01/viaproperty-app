// 'use client';

/*type PropertiesContainerType = {
  // children: ReactNode;
}*/

import FilterPropertiesContainer from '@/components/Properties/Layout/FilterPropertiesContainer';
import SearchResultsContainer from '@/components/Properties/Layout/SearchResultsContainer';
import MapContainer from '@/components/Properties/Layout/MapContainer';
import Pagination from '@/components/UI/Pagination/Pagination';

export default function PropertiesContainer(/*{  }: PropertiesContainerType*/) {
  return (
    <div>
      <div className={`grid bp-1364:grid-cols-custom-3-cols grid-cols-3 mt-12`}>
        <FilterPropertiesContainer />
        <SearchResultsContainer />
        <MapContainer />
      </div>
      <Pagination pages={3} showing={6} total={19} />
    </div>
  );
}
