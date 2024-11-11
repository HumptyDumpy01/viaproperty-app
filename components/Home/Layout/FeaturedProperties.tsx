'use client';

import { useFetchProperties } from '@/hooks/useFetchProperties';
import CardSlider from '@/components/Layout/Slider/CardSlider';
import CardProperty from '@/components/UI/Card/CardProperty';
import React from 'react';
import { PropertyType } from '@/utils/types/PropertyType';
import { calculateDaysPassed } from '@/utils/functions/calculateDaysPassed';
import CardPropertySkeleton from '@/components/UI/Skeletons/CardPropertySkeleton';
import { trimString } from '@/utils/functions/trimString';

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
            const trimmedTitle = trimString(item.title, 40);
            const trimmedDescr = trimString(item.description.overall, 70);
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
