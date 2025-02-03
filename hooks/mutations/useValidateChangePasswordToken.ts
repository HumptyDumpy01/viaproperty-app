import {
  VALIDATE_CHANGE_PASSWORD_TOKEN,
  ValidateTokenInputType
} from '@/graphql/mutations/validate-change-password-token';
import { useMutation } from '@apollo/client';

export const useValidateChangePasswordToken = () => {
  const [validateToken, { loading, data, error }] = useMutation(VALIDATE_CHANGE_PASSWORD_TOKEN);

  const validateChangePasswordToken = async (validateTokenInput: ValidateTokenInputType) => {
    try {
      const response = await validateToken({ variables: { validateTokenInput } });
      return response;
    } catch (e) {
      return { data: e };
    }

  };

  return {
    validateChangePasswordToken,
    loading,
    data,
    error
  };

};