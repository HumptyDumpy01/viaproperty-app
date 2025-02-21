import { useMutation } from '@apollo/client';
import {
  UPDATE_RESPONSE_RATING,
  UpdateRatingAiAssistantInputType
} from '@/graphql/mutations/AI/update-response-rating';

export const useUpdateResponseRating = () => {
  const [updateResponseRating, { loading, data, error }] = useMutation(UPDATE_RESPONSE_RATING);

  const rateAIResponse = async function(updateRatingAiAssistantInput: UpdateRatingAiAssistantInputType) {
    try {
      const response = await updateResponseRating({ variables: { updateRatingAiAssistantInput } });
      return response;
    } catch (e) {
      return { data: e };
    }
  };
  return {
    rateAIResponse,
    loading,
    data,
    error
  };
};