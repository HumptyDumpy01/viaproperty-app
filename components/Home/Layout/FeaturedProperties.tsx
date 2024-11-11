'use client';

import { useFetchProperties } from '@/hooks/useFetchProperties';
import CardSlider from '@/components/Layout/Slider/CardSlider';
import CardProperty from '@/components/UI/Card/CardProperty';
import React from 'react';
import { PropertyType } from '@/utils/types/PropertyType';
import { calculateDaysPassed } from '@/utils/functions/calculateDaysPassed';
import CardPropertySkeleton from '@/components/UI/Skeletons/CardPropertySkeleton';

type FeaturedPropertiesType = {
  headingLabel: string;
  headingSpan: string;
  headingHref: string;
  // children: ReactNode;
}

export default function FeaturedProperties({ headingLabel, headingHref, headingSpan }: FeaturedPropertiesType) {
  const { loading, error, data } = useFetchProperties();
  console.log(`Executing data: `, data);
  return (
    <>
      <section className={`mb-20`}>
        <CardSlider showHeading heading={headingLabel} headingSpan={headingSpan}
                    linkHref={headingHref} linkLabel={`see all`}>
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
            const trimmedTitle = item.title.length > 40 ? item.title.slice(0, 40) + `..` : item.title;
            const trimmedDescr = item.description.overall.length > 70 ? item.description.overall.slice(0, 70) + `..` : item.description.overall;
            return (
              <>
                <CardProperty
                  href={`properties/${item.id}`}
                  heading={trimmedTitle}
                  altImg={`${item.title} Image`}
                  srcImg={item.images[0]}
                  createdAt={calculateDaysPassed(item.createdAt)} type={item.propertyFor}
                  paragraph={trimmedDescr}
                  total={item.description.priceAndTaskHistory.price.toString()} />
              </>
            );
          })}
        </CardSlider>
      </section>
    </>
  );
}
