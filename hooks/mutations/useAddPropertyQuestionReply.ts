import { useMutation } from '@apollo/client';
import { ADD_PROPERTY_QUESTION_REPLY } from '@/graphql/mutations/add-property-question-reply';

type propertyReplyInputType = {
  propertyId: string;
  commentId: string;
  comment: string;
}

export const useAddPropertyQuestionReply = () => {
  const [createReplyOnQuestion, { loading, data, error }] = useMutation(ADD_PROPERTY_QUESTION_REPLY);

  const createQuestionReply = async (propertyReplyInput: propertyReplyInputType) => {
    try {
      const result = await createReplyOnQuestion({ variables: { propertyReplyInput } });
      return result;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    createQuestionReply,
    loading,
    data,
    error
  };
};