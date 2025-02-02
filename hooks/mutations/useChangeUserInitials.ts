import { useMutation } from '@apollo/client';
import { CHANGE_USER_INITIALS } from '@/graphql/mutations/change-user-initials';

export const useChangeUserInitials = () => {
  const [changeUserInitials, { loading, data, error }] = useMutation(CHANGE_USER_INITIALS);

  const updateUserInitials = async (updatedInitials: string) => {
    try {
      const response = await changeUserInitials({ variables: { updatedInitials } });
      return response;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    updateUserInitials,
    data,
    error,
    loading
  };

};