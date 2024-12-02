'use client';

import FormSearch from '@/components/Layout/Form/FormSearch';
import SearchResultsMetrics from '@/components/Layout/Filter/SearchResults/SearchResultsMetrics';
import ReduxProvider from '@/components/Layout/Provider/ReduxProvider';
import { useFetchProperties } from '@/hooks/useFetchProperties';
import CardPropertyHorizontalSkeleton from '@/components/UI/Skeletons/CardPropertyHorizontalSkeleton';
import { PropertyType } from '@/utils/types/PropertyType';
import CardPropertyHorizontal from '@/components/UI/Card/CardPropertyHorizontal';
import { useEffect, useState } from 'react';
import Pagination from '@/components/UI/Pagination/Pagination';

export default function SearchResults() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { loading, error, data } = useFetchProperties();

  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [totalProperties, setTotalProperties] = useState(0);

  useEffect(() => {
    if (data) {
      setProperties(data.properties);
      setTotalProperties(data.properties.length);
    }
  }, [data]);

  const totalPages = Math.ceil(totalProperties / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProperties = properties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div className={`bp-620:mx-11 mx-6`}>
        <h3 className={`bg-clip-text text-transparent bg-linear-main-red mb-6 text-3xl font-bold`}>
          Search any property you&#39;d like!
        </h3>
        <ReduxProvider>
          <FormSearch loading={loading} />
        </ReduxProvider>
        <SearchResultsMetrics results={loading ? `...` : totalProperties.toString()} />
        <div className={`flex flex-col gap-9`}>
          {loading && (
            <>
              <CardPropertyHorizontalSkeleton />
              <CardPropertyHorizontalSkeleton />
              <CardPropertyHorizontalSkeleton />
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