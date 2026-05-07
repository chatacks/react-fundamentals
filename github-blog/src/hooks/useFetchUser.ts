import { useEffect, useState } from 'react';
import type { User } from '../@types/user.type';
import { api } from '../lib/axios';

export const useFetchUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/users/chatacks');
        setUser(response.data);
      } catch (error) {
        console.error('ocorreu um error', error);
      }
    };

    fetchUser();
  }, []);

  return { user };
};
