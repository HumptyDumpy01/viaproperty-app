import { useMutation } from '@apollo/client';
import { UPDATE_USER_PASSWORD, UpdateUserPasswordInputType } from '@/graphql/mutations/update-user-password';

export const useUpdateUserPassword = () => {
  const [updateUserPassword, { loading, data, error }] = useMutation(UPDATE_USER_PASSWORD);

  const changeUserPassword = async (updateUserPasswordInput: UpdateUserPasswordInputType) => {
    try {
      const response = await updateUserPassword({ variables: { updateUserPasswordInput } });
      return response;
    } catch (e) {
      return { data: e };
    }

  };

  return {
    changeUserPassword,
    loading,
    data,
    error
  };

};