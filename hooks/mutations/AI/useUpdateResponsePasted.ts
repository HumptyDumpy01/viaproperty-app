import { useMutation } from '@apollo/client';
import { UPDATE_RESPONSE_PASTE, UpdateResponsePastedInputType } from '@/graphql/mutations/AI/update-response-paste';

export const useUpdateResponsePasted = () => {
  const [updateResponsePasted, { loading, data, error }] = useMutation(UPDATE_RESPONSE_PASTE);

  const updateResponsePastedProp = async (updateResponsePastedInput: UpdateResponsePastedInputType) => {
    try {
      const response = await updateResponsePasted({ variables: { updateResponsePastedInput } });
      return response;
    } catch (e) {
      return { data: e };
    }
  };

  return {
    updateResponsePastedProp,
    loading,
    data,
    error
  };
};