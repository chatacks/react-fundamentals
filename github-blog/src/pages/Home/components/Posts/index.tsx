import { PostCard } from '../PostCard';
import { PostsContainer } from './styles';

export function Posts() {
  return (
    <PostsContainer>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostsContainer>
  );
};
