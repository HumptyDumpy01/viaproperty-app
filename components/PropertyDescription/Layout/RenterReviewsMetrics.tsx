// 'use client';

import MetricDisplayRatingHero from '@/components/UI/MetricDisplay/MetricDisplayRatingHero';
import HeadingMedium from '@/components/Typography/HeadingMedium';
import MetricDisplayRating from '@/components/UI/MetricDisplay/MetricDisplayRating';

type RenterReviewsMetricsType = {
  ratings: number;
  overallRating: number;
  metrics: {
    location: number, condition: number; ownership: number;
    security: number; noiseLevel: number; amenities: number
  }
  // children: ReactNode;
}

export default function RenterReviewsMetrics({ ratings, overallRating, metrics }: RenterReviewsMetricsType) {
  return (
    <>
      <div className={`mb-20`}>
        <HeadingMedium customClasses={`mb-8`} heading={`Renter Reviews & Ratings`} />
        <MetricDisplayRatingHero overallRating={overallRating} ratingsCount={ratings} />
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
