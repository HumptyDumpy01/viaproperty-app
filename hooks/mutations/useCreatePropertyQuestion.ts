import { useMutation } from '@apollo/client';
import { CREATE_QUESTION } from '@/graphql/mutations/property-question';

export const useCreatePropertyQuestion = () => {
  const [createPropertyQuestion, { loading, error, data }] = useMutation(CREATE_QUESTION);

  const createQuestion = async (propertyQuestionInput: any) => {
    try {
      const result = await createPropertyQuestion({ variables: { propertyQuestionInput } });
      return result;
    } catch (err) {
      console.error('Error creating property question:', err);
    }
  };

  return {
    createQuestion,
    loading,
    error,
    data
  };
};
