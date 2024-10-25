// 'use client';

type MetricDisplayRatingHeroType = {
  overallRating: number;
  ratingsCount: number;
  // children: ReactNode;
}

import StarIcon from '@/components/UI/Icon/StarIcon';

export default function MetricDisplayRatingHero({overallRating, ratingsCount}: MetricDisplayRatingHeroType) {
  const roundedRating = overallRating % 1 >= 0.5 ? Math.ceil(overallRating) : Math.floor(overallRating);

  return (
    <>
      <div className={`flex items-center gap-6 w-fit border-b-2 border-r-zinc-200 pb-10 mb-11`}>
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
          <p>Based on <span className={`font-medium border-r-zinc-800`}>{ratingsCount} ratings</span></p>
        </div>
      </div>
    </>
  );
}
