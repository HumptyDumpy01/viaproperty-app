'use client';

import Range from '@/components/UI/Input/Range';
import { useCartSelector } from '@/store/hooks';
import { useEffect, useState } from 'react';
import { PropertyType } from '@/utils/types/PropertyType';

export default function PriceRange() {
  const originalProperties = useCartSelector((state) => state.properties.allPropertiesOriginal);
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(Number.MAX_VALUE);

  useEffect(() => {
    setProperties(originalProperties);

    // find the max and min price
    originalProperties.forEach((property) => {
      const price = Number(property.description.priceAndTaskHistory.price.replaceAll(',', ''));
      if (price > maxPrice) {
        setMaxPrice(price);
      }
      if (price < minPrice) {
        setMinPrice(price);
      }
    });

    // reset min and max if min is higher than max
    if (minPrice > maxPrice) {
      setMinPrice(0);
      setMaxPrice(0);
    }
  }, [originalProperties, maxPrice, minPrice]);

  return (
    <div className={`mt-6`}>
      <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Price range</h2>
      <Range
        metric={`dollars`}
        name={`pricingRange`}
        step={50}
        max={maxPrice}
        maxFormatted={String(Number(maxPrice) + 1000)}
        min={minPrice.toLocaleString(`en-US`)}
      />
    </div>
  );
}