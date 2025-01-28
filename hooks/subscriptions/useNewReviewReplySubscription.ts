import { useSubscription } from '@apollo/client';
import { NEW_REVIEW_REPLY_SUBSCRIPTION } from '@/graphql/subscriptions/new-review-reply';

export const useNewReviewReplySubscription = () => {
  const { data, loading, error } = useSubscription(NEW_REVIEW_REPLY_SUBSCRIPTION);
  return {
    newReply: data ? data.newReviewReply : null,
    loading,
    error
  };
};