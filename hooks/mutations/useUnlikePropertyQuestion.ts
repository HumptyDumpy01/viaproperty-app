import { useMutation } from '@apollo/client';
import { UNLIKE_PROPERTY_QUESTION } from '@/graphql/mutations/unlike-property-question';

export const useUnlikePropertyQuestion = () => {
  const [unlikeQuestion, { loading, data, error }] = useMutation(UNLIKE_PROPERTY_QUESTION);

  const unlikePropertyQuestion = async (questionId: string) => {
    try {
      const res = await unlikeQuestion({ variables: { questionId } });
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    unlikePropertyQuestion,
    loading,
    error,
    data
  };
};