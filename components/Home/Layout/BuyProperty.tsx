'use client';

import { PropertyType } from '@/utils/types/PropertyType';
import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import CardPropertyTwo from '@/components/UI/Card/CardPropertyTwo';
import React from 'react';
import { useFetchProperties } from '@/hooks/queries/useFetchProperties';
import { trimString } from '@/utils/functions/trimString';
import CardPropertyTwoSkeleton from '@/components/UI/Skeletons/CardPropertyTwoSkeleton';

type BuyPropertyType = {
  filter?: object;
  // children: ReactNode;
}

export default function BuyProperty({ filter }: BuyPropertyType) {
  const filterOptions = filter ? filter : { tags: [`sell`], limit: 4 };
  const { loading, error, data } = useFetchProperties(filterOptions);
  return (
    <>
      <section className={`mb-24`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <HeadingAndLink heading={`Buy Your Dream!`} headingSpan={`want to buy a property?`}
                          linkLabel={`see all`} linkHref={`/properties?type=buy`} />
          <div className={`flex gap-7 bp-790:flex-nowrap flex-wrap items-center justify-center`}>
            {loading && (
              <>
                <CardPropertyTwoSkeleton />
                <CardPropertyTwoSkeleton />
                <CardPropertyTwoSkeleton />
                <CardPropertyTwoSkeleton />
              </>
            )}
            {(!loading && !error && data) && data?.properties?.map((property: PropertyType) => (
              <>
                <CardPropertyTwo
                  srcImg={property.images[0]}
                  altImg={property.title}
                  href={`/properties/${property.id}`}
                  total={property.description.priceAndTaskHistory.price}
                  location={property.description.location.city}
                  paragraph={trimString(property.description.overall, 100)}
                  btnLinkHref={`/properties/${property.id}`}
                  btnLinkLabel={`See More`}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
