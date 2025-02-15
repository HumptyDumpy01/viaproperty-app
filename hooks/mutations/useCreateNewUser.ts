import { useMutation } from '@apollo/client';
import { CREATE_NEW_USER, UserInputType } from '@/graphql/mutations/create-new-user';

export const useCreateNewUser = () => {
  const [createUser, { loading, data, error }] = useMutation(CREATE_NEW_USER);

  const createNewUser = async (userInput: UserInputType) => {
    try {
      const response = await createUser({ variables: { userInput } });
      return response;
    } catch (e) {
      return { data: e };
    }
  };

  return {
    createNewUser,
    loading,
    data,
    error
  };

};
