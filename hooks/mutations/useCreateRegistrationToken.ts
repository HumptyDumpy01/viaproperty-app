import { useMutation } from '@apollo/client';
import { CREATE_REGISTRATION_TOKEN, CreateRegistrationTokenType } from '@/graphql/mutations/create-registration-token';

export const useCreateRegistrationToken = () => {
  const [createRegistrationToken, { loading, data, error }] = useMutation(CREATE_REGISTRATION_TOKEN);

  const generateRegistrationToken = async (createRegistrationTokenInput: CreateRegistrationTokenType) => {
    try {
      const response = await createRegistrationToken({ variables: { createRegistrationTokenInput } });
      return response;
    } catch (e) {
      console.log(e);
      return { data: e };
    }
  };

  return {
    generateRegistrationToken,
    loading,
    data,
    error
  };

};