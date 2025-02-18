import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export type JWTPayloadDataType = {
  id: string;
  email: string;
  initials: string;
  iat: number;
  exp: number;
}

export const useUserDataOnClient = () => {
  const [userData, setUserData] = useState<JWTPayloadDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const updateUserData = () => {
    const cookieString = document.cookie;
    if (!cookieString) {
      setUserData(null);
      setLoading(false);
      return;
    }
    const tokenCookie = cookieString.split('; ').find(row => row.startsWith('access_token='));
    try {
      if (tokenCookie) {
        const token = tokenCookie.split('=')[1];
        if (token) {
          const decoded = jwtDecode<JWTPayloadDataType>(token);
          setUserData(decoded);
        } else {
          setUserData(null);
        }
      } else {
        setUserData(null);
      }

    } catch (e) {
      // get rid of cookie and redirect to log in
      document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      setUserData(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    updateUserData();
    /* const interval = setInterval(updateUserData, 30_000); // Check for updates every 30 seconds.
     return () => clearInterval(interval);*/
  }, []);

  return { userData, loading };
};