import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';
import { useEffect } from 'react';

export const useAuthRedirect = () => {
  const { userData, loading } = useUserDataOnClient();

  useEffect(() => {
    if (!loading && userData) {
      window.location.href = `/`;
    }
  }, [loading, userData]);

  return { userData, loading };
};