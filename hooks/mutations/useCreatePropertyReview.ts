import { useMutation } from '@apollo/client';
import { CREATE_PROPERTY_REVIEW } from '@/graphql/mutations/create-property-review';

export type RatedReviewType = {
  overall: number;
  location: number;
  condition: number;
  security: number;
  noiseLevel: number;
  amenities: number;
  ownership: number;
}

type CreatePropertyReviewType = {
  propertyId: string;
  comment: string;
  rated: RatedReviewType
}

export const useCreatePropertyReview = () => {
  const [createComment, { loading, data, error }] = useMutation(CREATE_PROPERTY_REVIEW);

  const createPropertyReview = async (propertyCommentInput: CreatePropertyReviewType) => {
    try {
      const result = await createComment({ variables: { propertyCommentInput } });
      return result;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    createPropertyReview,
    loading,
    error,
    data
  };

};