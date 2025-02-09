// 'use client';

/*type OurServicesType = {
  // children: ReactNode;
}*/

import BuyServiceImg from '@/assets/home/our-services/service-buy.png';
import RentServiceImg from '@/assets/home/our-services/service-rent.png';
import SellServiceImg from '@/assets/home/our-services/service-sell.png';
import CommercialServiceImg from '@/assets/home/our-services/service-commercial.png';
import React from 'react';
import CardLink from '@/components/UI/Card/CardLink';
import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';

export default function OurServices(/*{  }: OurServicesType*/) {
  return (
    <>
      <section className={`mb-20`}>
        <div className={`max-w-7xl mx-auto w-full overflow-auto`}>
          <HeadingAndLink
            heading={`Our Services`}
            headingSpan={`we can offer a lot!`}
            linkHref={`/properties`}
            linkLabel={`Explore`}
          />

          <div className={`overflow-x-auto`}>
            <div className={`flex gap-6 w-max`}>
              <CardLink href={`/properties`} heading={`Buy a Property`} metric={1315} metricText={`offers`}
                        srcImg={BuyServiceImg} altImg={`Buy a Property Image`} />
              <CardLink href={`/properties`} heading={`Rent a Property`} metric={2645} metricText={`offers`}
                        srcImg={RentServiceImg} altImg={`Rent a Property Image`} />
              <CardLink href={`/sell`} heading={`Sell a Property`} metric={1} metricText={`offer`}
                        srcImg={SellServiceImg} altImg={`Sell a Property Image`} />
              <CardLink href={`/properties`} heading={`Commercial`} metric={611} metricText={`offers`}
                        srcImg={CommercialServiceImg} altImg={`Commercial Property Image`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
