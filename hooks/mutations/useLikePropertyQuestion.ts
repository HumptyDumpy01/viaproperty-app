import { useMutation } from '@apollo/client';
import { LIKE_PROPERTY_QUESTION } from '@/graphql/mutations/like-property-question';

export const useLikePropertyQuestion = () => {
  const [likeQuestion, { loading, data, error }] = useMutation(LIKE_PROPERTY_QUESTION);

  const likePropertyQuestion = async (questionId: string) => {
    try {
      const res = await likeQuestion({ variables: { questionId } });
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    likePropertyQuestion,
    loading,
    error,
    data
  };

};