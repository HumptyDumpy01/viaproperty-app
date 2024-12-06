import { sortArrayByNewestDate } from '@/utils/functions/sorting/sortArrayByNewestDate';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';

export function sortActiveReviews(activeFilter: ActiveFilterTypeQuestions,
                                  reviews: any[], setSortedReviews: (reviews: any[]) => void,
                                  copyReviews: any[]) {
  switch (activeFilter) {
    case `Date`:
      setSortedReviews(sortArrayByNewestDate(reviews));
      break;
    case `Most Liked`:
      copyReviews.sort((a, b) => b.likes.length - a.likes.length);
      setSortedReviews([...copyReviews]);
      break;
    case `From Higher Rating`:
      copyReviews.sort((a, b) => b.rated.overall - a.rated.overall);
      setSortedReviews([...copyReviews]);
      break;
    case `From Lower Rating`:
      copyReviews.sort((a, b) => a.rated.overall - b.rated.overall);
      setSortedReviews([...copyReviews]);
      break;

  }
}