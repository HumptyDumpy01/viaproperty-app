'use client';

/*type PriceRangeType = {
  // children: ReactNode;
}*/

import Range from '@/components/UI/Input/Range';
import { useCartSelector } from '@/store/hooks';

export default function PriceRange(/*{  }: PriceRangeType*/) {
  const originalProperties = useCartSelector((state) => state.properties.allPropertiesOriginal);

  // find the max and min price
  let maxPrice = 0;
  let minPrice = Number.MAX_VALUE;
  originalProperties.forEach((property) => {
    const price = Number(property.description.priceAndTaskHistory.price.replaceAll(`,`, ``));
    if (price > maxPrice) {
      maxPrice = price;
    }
    if (price < minPrice) {
      minPrice = price;
    }
  });

  // reset min and max if min is higher than max
  if (minPrice > maxPrice) {
    minPrice = 0;
    maxPrice = 0;
  }

  return (
    <>
      <div className={`mt-6`}>
        <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Price range</h2>
        <Range metric={`dollars`} name={`pricingRange`} step={50} max={maxPrice}
               maxFormatted={maxPrice.toLocaleString(`en-US`)}
               min={minPrice.toLocaleString(`en-US`)} />
      </div>
    </>
  );
}