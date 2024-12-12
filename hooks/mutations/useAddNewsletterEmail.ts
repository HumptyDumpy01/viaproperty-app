import { useMutation } from '@apollo/client';
import { ADD_NEWSLETTER_EMAIL } from '@/graphql/mutations/newsletter';

export const useAddNewsletterEmail = () => {
  const [addNewsletterEmail, { loading, error, data }] = useMutation(ADD_NEWSLETTER_EMAIL);

  const addEmail = async (email: string) => {
    try {
      await addNewsletterEmail({ variables: { email } });
    } catch (err) {
      console.error('Error adding email to newsletter:', err);
    }
  };

  return {
    addEmail,
    loading,
    error,
    data
  };
};
