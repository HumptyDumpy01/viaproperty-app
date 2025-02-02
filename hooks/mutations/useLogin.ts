'use client';

import { useMutation } from '@apollo/client';
import { LOGIN } from '@/graphql/mutations/login';
import { setAccessTokenCookie } from '@/utils/functions/setAccessTokenCookie';

export const useLogin = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await login({ variables: { email, password } });
      const { accessToken } = response.data.login;
      setAccessTokenCookie(accessToken);
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