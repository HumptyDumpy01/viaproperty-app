import { useMutation } from '@apollo/client';
import { UNLIKE_PROPERTY_REVIEW } from '@/graphql/mutations/unlike-property-review';

export const useUnlikePropertyReview = () => {
  const [unlikePropertyReview, { loading, error, data }] = useMutation(UNLIKE_PROPERTY_REVIEW);

  const unlikeReview = async (reviewId: string) => {
    try {
      const result = await unlikePropertyReview({ variables: { reviewId } });
      return result;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    unlikeReview,
    loading,
    error,
    data
  };

};