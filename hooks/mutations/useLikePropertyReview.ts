import { useMutation } from '@apollo/client';
import { LIKE_PROPERTY_REVIEW } from '@/graphql/mutations/like-property-review';

export const useLikePropertyReview = () => {
  const [likePropertyReview, { loading, error, data }] = useMutation(LIKE_PROPERTY_REVIEW);

  const likeReview = async (reviewId: string) => {
    try {
      const result = await likePropertyReview({ variables: { reviewId } });
      return result;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    likeReview,
    loading,
    error,
    data
  };

};