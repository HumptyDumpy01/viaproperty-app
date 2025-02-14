import { useSubscription } from '@apollo/client';
import { NEW_REPLY_SUBSCRIPTION } from '@/graphql/subscriptions/new-question-reply';

export const useNewQuestionReplySubscription = () => {
  const { data, loading, error } = useSubscription(NEW_REPLY_SUBSCRIPTION);

  return {
    newReply: data ? data.newReply : null,
    loading,
    error
  };
};