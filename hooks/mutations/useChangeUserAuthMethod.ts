import { useMutation } from '@apollo/client';
import { CHANGE_USER_AUTH_METHOD } from '@/graphql/mutations/change-user-auth-method';
import { AuthMethodType } from '@/components/AccountSettings/Settings/MyProfile/Security';

type changeUserAuthMethodInputType = {
  authMethod: AuthMethodType;
};

export const useChangeUserAuthMethod = () => {
  const [changeUserAuthMethod, { loading, data, error }] = useMutation(CHANGE_USER_AUTH_METHOD);

  const updateUserAuthMethod = async (changeUserAuthMethodInput: changeUserAuthMethodInputType) => {
    try {
      const response = await changeUserAuthMethod({ variables: { changeUserAuthMethodInput } });
      return response;
    } catch (e) {
      return { data: e };
    }
  };

  return {
    updateUserAuthMethod,
    loading,
    data,
    error
  };

};