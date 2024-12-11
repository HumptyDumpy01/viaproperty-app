import { useMutation } from '@apollo/client';
import { LOGIN } from '@/graphql/login';


export const useLogin = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const loginUser = async (email: string, password: string) => {
    try {
      await login({ variables: { email, password } });
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  return {
    loginUser,
    loading,
    error,
    data
  };
};