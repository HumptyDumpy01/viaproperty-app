// 'use client';

import StarIcon from '@/components/UI/Icon/StarIcon';
import { roundNumber } from '@/utils/functions/roundNumber';

type MetricDisplayRatingType = {
  rating: number;
  label: string;
  size?: `md` | `lg`;
  radioButtons?: boolean;
  labelLinear?: `red` | `blue`
  // children: ReactNode;
}

export default function MetricDisplayRating({
                                              rating,
                                              label,
                                              size = `md`,
                                              radioButtons = false,
                                              labelLinear = `red`
                                            }: MetricDisplayRatingType) {
  const roundedRating = roundNumber(rating);

  return (
    <>
      <div className={`flex gap-6 items-center justify-between w-[515px]`}>
        <div className={`flex items-center gap-9`}>
          <h3
            className={`${labelLinear === `red` ? `bg-clip-text text-transparent bg-linear-main-red`
              : `bg-clip-text text-transparent bg-linear-main-dark-blue`} font-bold text-3xl`}>{label}</h3>
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