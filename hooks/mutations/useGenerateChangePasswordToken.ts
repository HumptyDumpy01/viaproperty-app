import { useMutation } from '@apollo/client';
import { GENERATE_CHANGE_PASSWORD_TOKEN } from '@/graphql/mutations/create-change-password-token';

class CreateChangePasswordTokenInputType {
}

export const useGenerateChangePasswordToken = () => {
  const [createChangePasswordToken, { loading, data, error }] = useMutation(GENERATE_CHANGE_PASSWORD_TOKEN);

  const generateChangePasswordToken = async (createChangePasswordTokenInput: CreateChangePasswordTokenInputType) => {
    try {
      const res = await createChangePasswordToken({ variables: { createChangePasswordTokenInput } });
      return res;
    } catch (e) {
      console.error('error:', e);
      return { data: e };
    }
  };

  return {
    generateChangePasswordToken,
    loading,
    error,
    data
  };

};