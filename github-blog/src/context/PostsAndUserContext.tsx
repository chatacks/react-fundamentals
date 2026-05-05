import { createContext } from 'react';
import type { User } from '../@types/user.type';

interface PostsAndUserContextType {
  user: User | null;
}

export const PostsAndUserContext = createContext({} as PostsAndUserContextType);
