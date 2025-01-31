// 'use client';

import { capitalizeAndSplitWords } from '@/utils/functions/capitalizeAndSplitWords';
import BadgeTagWithIcon from '@/components/UI/Badge/BadgeTagWithIcon';
import BadgeTag from '@/components/UI/Badge/BadgeTag';

type PropertyConveniencesType = {
  wifi: boolean;
  sqftSize: number;
  beds: number;
  livingRooms: number;
  bathrooms: number;
  bedrooms: number;
  parkingSpaces: number;
  fullKitchen: boolean;
  additionalConveniences: string[];
  // children: ReactNode;
}

export default function
  PropertyConveniences({
                         wifi,
                         beds,
                         bathrooms,
                         livingRooms,
                         bedrooms,
                         sqftSize,
                         parkingSpaces,
                         fullKitchen,
                         additionalConveniences
                       }: PropertyConveniencesType) {
  return (
    <>
      <div className={`flex gap-6 overflow-y-auto max-h-8 pb-3 w-full scrollbar-hide mb-5`}>
        {wifi && (
          <BadgeTagWithIcon icon={`wifi`} label={`Wi-Fi`} />
        )}
        <BadgeTag abbreviation={`sqft`} metric={`Size`} number={sqftSize} />
        <BadgeTag metric={`Beds`} number={beds} />
        <BadgeTag metric={`Bathrooms`} number={bathrooms} />
        <BadgeTag metric={`Living Rooms`} number={livingRooms} />
        <BadgeTag metric={`Bedrooms`} number={bedrooms} />
        <BadgeTag metric={`Parking Spaces`} number={parkingSpaces} />
        {fullKitchen && (
          <>
            <BadgeTag metric={`Full Kitchen`} />
          </>
        )}
        {additionalConveniences.map(function(convenience, index) {
          return (
            <BadgeTag key={index} metric={capitalizeAndSplitWords(convenience)} />
          );
        })}

      </div>
    </>
  );
}
