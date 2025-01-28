import { useMutation } from '@apollo/client';
import { CREATE_PROPERTY_REVIEW_REPLY } from '@/graphql/mutations/create-property-review-reply';
import { PropertyReplyInputType } from '@/hooks/mutations/useAddPropertyQuestionReply';

export const useCreatePropertyReviewReply = () => {
  const [createReply, { loading, error, data }] = useMutation(CREATE_PROPERTY_REVIEW_REPLY);

  const createPropertyReviewReply = async (propertyReplyInput: PropertyReplyInputType) => {
    try {
      const res = await createReply({ variables: { propertyReplyInput } });
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    createPropertyReviewReply,
    loading,
    error,
    data
  };

};