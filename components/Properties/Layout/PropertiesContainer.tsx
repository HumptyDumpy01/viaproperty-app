// 'use client';

/*type PropertiesContainerType = {
  // children: ReactNode;
}*/

import FilterPropertiesContainer from '@/components/Properties/Layout/FilterPropertiesContainer';
import SearchResultsContainer from '@/components/Properties/Layout/SearchResultsContainer';
import MapContainer from '@/components/Properties/Layout/MapContainer';
import ReduxProvider from '@/components/Layout/Provider/ReduxProvider';

export default function PropertiesContainer(/*{  }: PropertiesContainerType*/) {
  return (
    <div>
      <div className={`grid bp-1364:grid-cols-properties grid-cols-3 mt-12`}>
        <ReduxProvider>
          <FilterPropertiesContainer />
          <SearchResultsContainer />
          <MapContainer />
        </ReduxProvider>
      </div>
    </div>
  );
}
