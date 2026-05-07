import { createContext } from 'react';
// import type { User } from '../@types/user.type';
// import type { Issues } from '../@types/issues.type';

interface PostsAndUserContextType {
  // user: User | null;
  // issues: Issues | null;
  result: ''
}

export const PostsAndUserContext = createContext({} as PostsAndUserContextType);
