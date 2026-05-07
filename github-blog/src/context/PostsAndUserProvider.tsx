// import { useMemo } from 'react';.
import { PostsAndUserContext } from './PostsAndUserContext';
// import { useFetch } from '../hooks/useFetch';
interface PostsAndUserProviderProps {
  children: React.ReactNode
}

export function PostsAndUserProvider({ children }: PostsAndUserProviderProps) {
  // const { user, issues } = useFetch();


  // const memoizedValues = useMemo(() => {
  //   return {
  //     user,
  //     issues
  //   };
  // }, [user, issues]);

  return (
    <PostsAndUserContext value={{ result: '' }}>
      {children}
    </PostsAndUserContext>
  );
};
