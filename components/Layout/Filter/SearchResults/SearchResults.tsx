'use client';

/*type SearchResultsType = {
  // children: ReactNode;
}*/

import FormSearch from '@/components/Layout/Form/FormSearch';
import CardPropertyHorizontal from '@/components/UI/Card/CardPropertyHorizontal';
import SearchResultsMetrics from '@/components/Layout/Filter/SearchResults/SearchResultsMetrics';
import ReduxProvider from '@/components/Layout/Provider/ReduxProvider';
import { useFetchProperties } from '@/hooks/useFetchProperties';
import { PropertyType } from '@/utils/types/PropertyType';

export default function SearchResults(/*{  }: SearchResultsType*/) {
  const filterOptions = { limit: 999 };
  const { loading, error, data } = useFetchProperties(filterOptions);

  if (loading) return <p>Loading...</p>;

  console.log(`Executing data: `, data);

  return (
    <>
      <div className={`bp-620:mx-11 mx-6`}>
        <h3 className={`bg-clip-text text-transparent bg-linear-main-red mb-6
          text-3xl font-bold`}>Search any property you&#39;d
          like!</h3>
        <ReduxProvider>
          <FormSearch />
        </ReduxProvider>
        <SearchResultsMetrics results={data.properties.length} />
        <div className={`flex flex-col gap-9`}>
          {data.properties.map(function(property: PropertyType) {
            return (
              <>
                <CardPropertyHorizontal
                  btnLink={{
                    href: `/properties/${property.id}`,
                    label: `See Details`
                  }}
                  type={property.propertyFor === `rent` ? `rent` : `buy`}
                  createdAt={property.createdAt}
                  heading={property.title}
                  paragraph={property.description.overall} imgAlt={property.title}
                  imgSrc={property.images[0]}
                  price={property.description.priceAndTaskHistory.price}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
