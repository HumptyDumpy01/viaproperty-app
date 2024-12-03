'use client';

import FormSearch from '@/components/Layout/Form/FormSearch';
import SearchResultsMetrics from '@/components/Layout/Filter/SearchResults/SearchResultsMetrics';
import ReduxProvider from '@/components/Layout/Provider/ReduxProvider';
import { useFetchProperties } from '@/hooks/useFetchProperties';
import CardPropertyHorizontalSkeleton from '@/components/UI/Skeletons/CardPropertyHorizontalSkeleton';
import { PropertyType } from '@/utils/types/PropertyType';
import CardPropertyHorizontal from '@/components/UI/Card/CardPropertyHorizontal';
import { useEffect, useRef, useState } from 'react';
import Pagination from '@/components/UI/Pagination/Pagination';
import { filterPropertiesBySearchTerm } from '@/utils/functions/properties/filterPropertiesBySearchTerm';
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { propertiesActions } from '@/store/features/properties';

export default function SearchResults() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const itemsPerPage = 5;

  const filterOptions = { limit: 999 };
  const { loading, error, data } = useFetchProperties(filterOptions);

  const properties = useCartSelector((state) => state.properties.properties);

  const dispatch = useCartDispatch();

  const [totalProperties, setTotalProperties] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data) {
      // this one is needed for filtering manipulations in other places of the application
      dispatch(propertiesActions.setAllPropertiesOriginal(data.properties));

      dispatch(propertiesActions.setProperties(data.properties));
      setTotalProperties(data.properties.length);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm && data) {
      const filteredProperties = data.properties.filter((property: PropertyType) => {
        return filterPropertiesBySearchTerm(searchTerm, property);
      });

      dispatch(propertiesActions.setProperties(filteredProperties));
      setTotalProperties(filteredProperties.length);
      setCurrentPage(1);
    }
  }, [searchTerm, data]);

  const totalPages = Math.ceil(totalProperties / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProperties = properties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  function handleResetFilter() {
    setSearchTerm(undefined);
    setCurrentPage(1);
    dispatch(propertiesActions.setProperties(data.properties));
    setTotalProperties(data.properties.length);
    inputRef.current!.value = ``;
  }


  return (
    <>
      <div className={`bp-620:mx-11 mx-6`}>
        <h3 className={`bg-clip-text text-transparent bg-linear-main-red mb-6 text-3xl font-bold`}>
          Search any property you&#39;d like!
        </h3>
        <ReduxProvider>
          <FormSearch inputRef={inputRef} setSearchTerm={setSearchTerm} loading={loading} />
        </ReduxProvider>
        <SearchResultsMetrics
          loading={loading}
          properties={properties}
          handleResetFilter={handleResetFilter}
          results={loading ? `...` : totalProperties.toString()}
        />
        <div className={`flex flex-col gap-9`}>
          {loading && (
            <>
              <CardPropertyHorizontalSkeleton />
              <CardPropertyHorizontalSkeleton />
              <CardPropertyHorizontalSkeleton />
            </>
          )}
          {error && (
            <p className={`text-lg text-zinc-500`}>An error occurred. Please try again later</p>
          )}
          {paginatedProperties && paginatedProperties.length === 0 && !loading && (
            <>
              <p className={`text-lg text-zinc-500`}>No results found</p>
              <button
                onClick={() => handleResetFilter()}
                className={`text-lg text-zinc-500 underline w-fit`}>Reset search
              </button>
            </>
          )}
          {paginatedProperties && paginatedProperties.map((property: PropertyType) => (
            <CardPropertyHorizontal
              key={property.id}
              btnLink={{
                href: `/properties/${property.id}`,
                label: `See Details`
              }}
              type={property.propertyFor === `rent` ? `rent` : `sell`}
              createdAt={property.createdAt}
              heading={property.title}
              paragraph={property.description.overall}
              imgAlt={property.title}
              imgSrc={property.images[0]}
              price={property.description.priceAndTaskHistory.price}
            />
          ))}
        </div>
        <Pagination pages={totalPages} showing={paginatedProperties.length} total={totalProperties}
                    onPageChange={handlePageChange} currentPage={currentPage} />
      </div>
    </>
  );
}