import Pagination from '@/components/UI/Pagination/Pagination';
import FilterPropertiesContainer from '@/components/Properties/Layout/FilterPropertiesContainer';
import SearchResultsContainer from '@/components/Properties/Layout/SearchResultsContainer';
import MapContainer from '@/components/Properties/Layout/MapContainer';

export default function Properties() {
  return (
    <main className={`overflow-hidden max-w-[1320px] mx-auto w-full`}>
      <div className={`grid bp-1364:grid-cols-custom-3-cols grid-cols-3 mt-12`}>
        <FilterPropertiesContainer />
        <SearchResultsContainer />
        <MapContainer />
      </div>
      <Pagination pages={3} showing={6} total={19} />
    </main>
  );
}