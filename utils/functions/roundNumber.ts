export function roundNumber(rating: number) {
  const roundedRating = rating % 1 >= 0.5 ? Math.ceil(rating) : Math.floor(rating);
  return roundedRating;
}