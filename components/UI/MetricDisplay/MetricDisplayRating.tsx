// 'use client';

import StarIcon from '@/components/UI/Icon/StarIcon';

type MetricDisplayRatingType = {
  rating: number;
  label: string;
  size?: `md` | `lg`;
  // children: ReactNode;
}

export default function MetricDisplayRating({ rating, label, size = `md` }: MetricDisplayRatingType) {
  const roundedRating = rating % 1 >= 0.5 ? Math.ceil(rating) : Math.floor(rating);

  return (
    <>
      <div className={`flex gap-6 items-center justify-between w-[515px]`}>
        <div className={`flex items-center gap-9`}>
          <h3 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-3xl`}>{label}</h3>
          <div className={`flex gap-2`}>
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} size={size} state={index < roundedRating ? `filled` : `empty`} />
            ))}
          </div>
        </div>
        <div>
          <span
            className={`inline-block text-4xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>{rating.toFixed(1)}</span>
        </div>
      </div>
    </>
  );
}