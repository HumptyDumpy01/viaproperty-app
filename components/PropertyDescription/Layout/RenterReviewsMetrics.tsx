// 'use client';

type RenterReviewsMetricsType = {
  ratings: number;
  overallRating: number;
  metrics: {
    location: number, condition: number; ownership: number;
    security: number; noiseLevel: number; amenities: number
  }
  // children: ReactNode;
}

import HeadingMedium from '@/components/Typography/HeadingMedium';
import StarIcon from '@/components/UI/Icon/StarIcon';
import MetricDisplayRating from '@/components/UI/MetricDisplay/MetricDisplayRating';

export default function RenterReviewsMetrics({ ratings, overallRating, metrics }: RenterReviewsMetricsType) {

  const roundedRating = overallRating % 1 >= 0.5 ? Math.ceil(overallRating) : Math.floor(overallRating);
  return (
    <>
      <div className={`mb-20`}>
        <HeadingMedium customClasses={`mb-8`} heading={`Renter Reviews & Ratings`} />
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
            <p>Based on <span className={`font-medium border-r-zinc-800`}>{ratings} ratings</span></p>
          </div>
        </div>
        <div>
          <div className={`flex items-center gap-y-24`}>
            <div className={`flex flex-col gap-6 items-center`}>
              <div className={`flex gap-24 items-center mr-auto`}>
                <MetricDisplayRating label={`Location`} rating={metrics.location} size={`md`} />
                <MetricDisplayRating label={`Condition`} rating={metrics.condition} size={`md`} />
              </div>

              <div className={`flex gap-24  mr-auto`}>
                <MetricDisplayRating label={`Ownership`} rating={metrics.ownership} size={`md`} />
                <MetricDisplayRating label={`Security`} rating={metrics.security} size={`md`} />
              </div>

              <div className={`flex gap-24  mr-auto`}>
                <MetricDisplayRating label={`Noise Level`} rating={metrics.noiseLevel} size={`md`} />
                <MetricDisplayRating label={`Amenities`} rating={metrics.amenities} size={`md`} />
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
    ;
}
