'use client';

/*type PropertyAreaRangeType = {
  // children: ReactNode;
}*/

import Range from '@/components/UI/Input/Range';
import { useCartSelector } from '@/store/hooks';

export default function PropertyAreaRange(/*{  }: PropertyAreaRangeType*/) {
  const properties = useCartSelector((state) => state.properties.allPropertiesOriginal);
  console.log(`Executing properties: `, properties);


  // find the max and min area
  let maxArea = 0;
  let minArea = 0;
  properties.forEach((property) => {
    if (property.propertyArea > maxArea) {
      maxArea = property.propertyArea;
    }
    if (property.propertyArea < minArea) {
      minArea = property.propertyArea;
    }
  });

  return (
    <>
      <div className={`mt-6`}>
        <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Property area range</h2>
        <Range metric={`sqft`} name={`areaRange`} step={5} max={maxArea} maxFormatted={String(maxArea)}
               min={minArea} />
      </div>
    </>
  );
}
