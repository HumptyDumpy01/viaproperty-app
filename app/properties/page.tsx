import FilterProperties from '@/components/Layout/Filter/FilterProperties/FilterProperties';
import SearchResults from '@/components/Layout/Filter/SearchResults/SearchResults';
import Map from '@/components/Layout/Filter/Map/Map';
import Pagination from '@/components/UI/Pagination/Pagination';

export default function Properties() {
  return (
    <main className={`overflow-hidden max-w-[1320px] mx-auto w-full`}>
      <div className={`grid bp-1364:grid-cols-custom-3-cols grid-cols-3 mt-12`}>
        <div
          className={`absolute top-10 left-3 bp-1364:relative bp-1364:top-0 bg-white z-10 pt-6 bp-1364:pt-0 pl-2 bp-1364:pl-0 rounded-xl transition-all
          duration-200 -translate-x-full bp-1364:translate-x-0 opacity-0 bp-1364:opacity-100 pointer-events-none bp-1364:pointer-events-auto`}>
          <FilterProperties />
        </div>
        <div className={`bp-896:col-span-2 bp-1364:col-span-1 col-span-3`}>
          <SearchResults />
        </div>
        <div className={`fixed inset-0 flex justify-center m-auto items-center bp-896:items-start z-10 bp-896:relative 
        bp-896:top-0 bp-896:left-0 bg-white/90 w-full h-full bp-896:w-auto 
        opacity-0 pointer-events-none transition-all duration-200 bp-896:opacity-100 bp-896:pointer-events-auto`}>
          <Map />
        </div>
      </div>
      <Pagination pages={3} showing={6} total={19} />
    </main>
  );
}