import { useEffect, useMemo, useState } from 'react';
import { PostsAndUserContext } from './PostsAndUserContext';
import { api } from '../lib/axios';
import type { User } from '../@types/user.type';

interface PostsAndUserProviderProps {
  children: React.ReactNode
}

export function PostsAndUserProvider({ children }: PostsAndUserProviderProps) {
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

  const memoizedValues = useMemo(() => {
    return {
      user
    };
  }, [user]);


  return (
    <PostsAndUserContext value={memoizedValues}>
      {children}
    </PostsAndUserContext>
  );
};
