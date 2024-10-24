import FilterProperties from '@/components/Layout/Filter/FilterProperties/FilterProperties';
import SearchResults from '@/components/Layout/Filter/SearchResults/SearchResults';
import Map from '@/components/Layout/Filter/Map/Map';
import Pagination from '@/components/UI/Pagination/Pagination';

export default function Properties() {
  return (
    <main className={`overflow-hidden max-w-[1320px] mx-auto w-full`}>
      <div className={`grid grid-cols-custom-3-cols mt-12`}>
        <FilterProperties />
        <SearchResults />
        <Map />
      </div>
      <Pagination pages={3} showing={6} total={19} />
    </main>
  );
}