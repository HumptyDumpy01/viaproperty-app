// 'use client';

type PropertyConveniencesType = {
  wifi: boolean;
  sqftSize: number;
  beds: number;
  showers: number;
  baths: number;
  bedrooms: number;
  fullKitchen: boolean;
  // children: ReactNode;
}

import BadgeTagWithIcon from '@/components/UI/Badge/BadgeTagWithIcon';
import BadgeTag from '@/components/UI/Badge/BadgeTag';

export default function
  PropertyConveniences({
                         wifi,
                         beds,
                         baths,
                         showers,
                         bedrooms,
                         sqftSize,
                         fullKitchen
                       }: PropertyConveniencesType) {
  return (
    <>
      <div className={`flex gap-6 overflow-y-auto max-h-8 pb-3 w-full scrollbar-thin mb-5`}>
        {wifi && (
          <BadgeTagWithIcon icon={`wifi`} label={`Wi-Fi`} />
        )}
        <BadgeTag abbreviation={`sqft`} metric={`Size`} number={sqftSize} />
        <BadgeTag metric={`Beds`} number={beds} />
        <BadgeTag metric={`Showers`} number={showers} />
        <BadgeTag metric={`Baths`} number={baths} />
        <BadgeTag metric={`Bedrooms`} number={bedrooms} />
        {fullKitchen && (
          <>
            <BadgeTag metric={`Full Kitchen`} />
          </>
        )}
      </div>
    </>
  );
}
