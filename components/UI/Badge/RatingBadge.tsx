// 'use client';

type RatingBadgeType = {
  rating: number;
  // children: ReactNode;
}

export default function RatingBadge({ rating }: RatingBadgeType) {
  let ratingLabel = null;

  if (rating >= 4.5) {
    ratingLabel = `Excellent`;
  } else if (rating >= 4.0) {
    ratingLabel = `Very Good`;
  } else if (rating >= 3.5) {
    ratingLabel = `Good`;
  } else if (rating >= 3.0) {
    ratingLabel = `Average`;
  }

  return (
    <>
      <div className={`flex items-center gap-2`}>
        <span className={`p-2 bg-blue-100 rounded-md font-semibold text-sm`}>{rating.toFixed(1)}</span>
        <p className={`text-blue-900 font-semibold text-nowrap`}>{ratingLabel}</p>
      </div>
    </>
  );
}
