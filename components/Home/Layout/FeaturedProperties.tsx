'use client';

import { useFetchProperties } from '@/hooks/queries/useFetchProperties';
import CardSlider from '@/components/Layout/Slider/CardSlider';
import React from 'react';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import CardPropertySkeleton from '@/components/UI/Skeletons/CardPropertySkeleton';
import { trimString } from '@/utils/functions/trimString';
import { PropertyType } from '@/utils/types/PropertyType';
import { calculateDaysPassed } from '@/utils/functions/calculateDaysPassed';
import CardProperty from '@/components/UI/Card/CardProperty';

type FeaturedPropertiesType = {
  headingLabel: string;
  headingSpan: string;
  headingHref: string;
  filter?: object;
  // children: ReactNode;
}

export default function FeaturedProperties({ headingLabel, headingHref, headingSpan, filter }: FeaturedPropertiesType) {
  const filterOptions = filter ? filter : { tags: [`featured`], limit: 22 };
  const { loading, error, data } = useFetchProperties(filterOptions);
  return (
    <>
      <section className={`mb-20`}>
        <CardSlider showHeading heading={headingLabel} headingSpan={headingSpan}
                    linkHref={headingHref} linkLabel={`see all`}>
          {!loading && error && (
            <>
              <ErrorMessage
                errorMessage={error ? error.message : `Something went wrong!.. Please, reload the page or contact our support team..`} />
            </>
          )}
          {loading && (
            <>
              <CardPropertySkeleton />
              <CardPropertySkeleton />
              <CardPropertySkeleton />
              <CardPropertySkeleton />
              <CardPropertySkeleton />
              <CardPropertySkeleton />
              <CardPropertySkeleton />
            </>
          )}

          {!loading && data.properties && data.properties.map(function(item: PropertyType) {
            const trimmedTitle = trimString(item.title, 40);
            const trimmedDescr = trimString(item.description.overall, 70);
            return (
              <CardProperty
                key={item.id}
                href={`/properties/${item.id}`}
                heading={trimmedTitle}
                altImg={`${item.title} Image`}
                srcImg={item.images[0]}
                createdAt={calculateDaysPassed(item.createdAt)} type={item.propertyFor}
                paragraph={trimmedDescr}
                total={item.description.priceAndTaskHistory.price.toString()} />
            );
          })}
        </CardSlider>
      </section>
    </>
  );
}
