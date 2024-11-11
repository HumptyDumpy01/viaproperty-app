'use client';

import React from 'react';
import { useFetchProperties } from '@/hooks/useFetchProperties';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import { CldImage } from 'next-cloudinary';
import ButtonGoTo from '@/components/UI/Button/ButtonGoTo';
import { trimString } from '@/utils/functions/trimString';
import CallToAction from '@/components/Layout/Cta/CallToAction';
import Image from 'next/image';
import LoadingBlockImg1 from '@/assets/watermarks/loading-block-1.png';
import LoadingBlockImg2 from '@/assets/watermarks/loading-block-2.png';
import LoadingBlockImg3 from '@/assets/watermarks/loading-block-3.png';
import Badge from '@/components/UI/Badge/Badge';

type HeroSecondColType = {
  filter?: object;
  // children: ReactNode;
}

export default function HeroSecondCol({ filter }: HeroSecondColType) {
  const filterOptions = filter ? filter : { onSale: { isOnSale: true }, limit: 2 };
  const { loading, error, data } = useFetchProperties(filterOptions);

  return (
    <>
      {(!loading && error) && (
        <>
          <div className={`flex items-center justify-center ml-12`}>
            <ErrorMessage
              errorMessage={`Error loading properties!.. Please, try to reload the page or contact our support team..`} />
          </div>
        </>
      )}
      <div className={`grid grid-cols-3 gap-6`}>
        {(!loading && data.properties.length > 0) && function() {
          return (
            <>
              <div className={`self-center bp-1235:self-end w-28 h-72 relative`}>
                <CldImage fill className={`object-cover rounded-2xl ml-28 mr-12`} src={data.properties[0].images[0]}
                          alt={data.properties[0].title}
                />
              </div>

              <div className={`relative`}>
                <CldImage
                  width={300}
                  height={200}
                  className={`object-cover w-full h-full rounded-3xl`}
                  src={data.properties[0].images[1]}
                  alt={data.properties[0].title} />
                <ButtonGoTo href={`/properties/${data.properties[0].id}`} type={`white`} absolute />
                <div className={`hidden bp-790:flex`}>
                  <Badge
                    city={data.properties[0].description.location.city}
                    absolute
                    price={data.properties[0].description.priceAndTaskHistory.price}
                    title={trimString(data.properties[0].title, 15)} />
                </div>
              </div>

              <div className={`relative`}>
                <div className={`relative`}>
                  <CldImage
                    width={300}
                    height={200}
                    className={`object-cover w-full h-full rounded-3xl`}
                    src={data.properties[1].images[0]}
                    alt={data.properties[1].title} />
                  <div className={`hidden bp-790:flex`}>
                    <Badge city={data.properties[1].description.location.city}
                           absolute price={data.properties[1].description.priceAndTaskHistory.price}
                           title={trimString(data.properties[1].title, 15)} />
                  </div>
                  <ButtonGoTo href={`/properties/${data.properties[1].id}`} type={`red`} absolute />
                </div>
                <div className={`hidden bp-1235:block`}>
                  <CallToAction href={`/properties?filter=onSale`} span={`on sale!`} buttonLabel={`See More`}
                                message={`Fantastic properties on sale!`} />
                </div>
              </div>
            </>
          );
        }()}
        {loading && !error && (
          <>

            <div className={`self-center bp-1235:self-end`}>
              <Image className={`object-fit ml-auto rounded-2xl`} src={LoadingBlockImg1} alt={`Hero Image 1`} />
            </div>
            <div className={`relative`}>
              <Image className={`object-cover w-full h-full rounded-3xl`} src={LoadingBlockImg2}
                     alt={`Hero Image 2`} />
            </div>
            <div className={`relative`}>
              <div className={`relative`}>
                <Image src={LoadingBlockImg3} alt={`Hero Image 3`} />
              </div>
              <div className={`hidden bp-1235:block`}>
                <CallToAction href={`/properties?filter=onSale`} span={`on sale!`} buttonLabel={`See More`}
                              message={`Fantastic properties on sale!`} />
              </div>
            </div>
          </>

        )}
      </div>
    </>
  );
}