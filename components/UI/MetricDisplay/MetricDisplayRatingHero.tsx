// 'use client';

import { roundNumber } from '@/utils/functions/roundNumber';
import StarIcon from '@/components/UI/Icon/StarIcon';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';

type MetricDisplayRatingHeroType = {
  overallRating: number;
  ratingsCount: number;
  propertyFor: PropertyForType;
  // children: ReactNode;
}

export default function
  MetricDisplayRatingHero({
                            overallRating,
                            ratingsCount,
                            propertyFor
                          }: MetricDisplayRatingHeroType) {
  const roundedRating = roundNumber(overallRating);

  return (
    <>
      <div
        className={`flex bp-480:flex-row mx-auto bp-480:mx-0 flex-col text-center bp-480:text-left items-center gap-6 w-fit border-b-2 border-r-zinc-200 pb-10 mb-11`}>
        <div>
                  <span
                    className={`inline-block text-9xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>{overallRating}</span>
        </div>
        <div className={`flex flex-col gap-2`}>
          <div className={`flex items-center gap-2`}>

            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} size={`lg`} state={index < roundedRating ? `filled` : `empty`} />
              // <StarIcon key={index} size={`md`} state={index < roundedRating ? `filled` : `empty`} />
            ))}
          </div>
          {propertyFor === `rent` && (
            <>
              <p>Based on <span
                className={`font-medium border-r-zinc-800`}>{ratingsCount} ratings</span></p>
            </>
          )}
          {propertyFor === `sell` && (
            <>
              <p>Based on <span
                className={`font-medium border-r-zinc-800`}>landlord&#39;s opinion</span></p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
