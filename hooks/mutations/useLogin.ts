'use client';

import { useMutation } from '@apollo/client';
import { LOGIN } from '@/graphql/mutations/login';

export const useLogin = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await login({ variables: { email, password } });
      const { accessToken } = response.data.login;
      if (typeof document !== 'undefined') {
        document.cookie = `access_token=${accessToken}; path=/`;
      }
      return response;
    } catch (err) {
      console.error('Error logging in:', err);
      throw err;
    }
  };

  return {
    loginUser,
    loading,
    error,
    data
  };
};