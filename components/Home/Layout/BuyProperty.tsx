// 'use client';

/*type BuyPropertyType = {
  // children: ReactNode;
}*/

import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import CardPropertyTwo from '@/components/UI/Card/CardPropertyTwo';
import BuyProperty1 from '@/assets/home/buy-property/buy-1.png';
import BuyProperty2 from '@/assets/home/buy-property/buy-2.png';
import BuyProperty3 from '@/assets/home/buy-property/buy-3.png';
import BuyProperty4 from '@/assets/home/buy-property/buy-4.png';
import React from 'react';

export default function BuyProperty(/*{  }: BuyPropertyType*/) {
  return (
    <>
      <section className={`mb-24`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <HeadingAndLink heading={`Buy Your Dream!`} headingSpan={`want to buy a property?`}
                          linkLabel={`see all`} linkHref={`/properties?type=buy`} />
          <div className={`flex gap-7`}>
            <CardPropertyTwo
              srcImg={BuyProperty1}
              altImg={`Property 1`}
              href={`/properties/1`}
              total={`1,315`}
              location={`New York`}
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus.`}
              btnLinkHref={`/properties/1`}
              btnLinkLabel={`See More`}
            />
            <CardPropertyTwo
              srcImg={BuyProperty2}
              altImg={`Property 2`}
              href={`/properties/2`}
              total={`2,645`}
              location={`Los Angeles`}
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus.`}
              btnLinkHref={`/properties/2`}
              btnLinkLabel={`See More`}
            />
            <CardPropertyTwo
              srcImg={BuyProperty3}
              altImg={`Property 3`}
              href={`/properties/3`}
              total={`1,315`}
              location={`New York`}
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus.`}
              btnLinkHref={`/properties/3`}
              btnLinkLabel={`See More`}
            />
            <CardPropertyTwo
              srcImg={BuyProperty4}
              altImg={`Property 4`}
              href={`/properties/4`}
              total={`2,645`}
              location={`Los Angeles`}
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus.`}
              btnLinkHref={`/properties/4`}
              btnLinkLabel={`See More`}
            />

          </div>
        </div>
      </section>
    </>
  );
}
