import { useNavigate } from 'react-router';
import { PostCard } from '../PostCard';
import { PostsContainer } from './styles';

const posts = [
  {
    id: 1,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
  {
    id: 2,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
  {
    id: 3,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
  {
    id: 4,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
];

export function Posts() {
  const navigate = useNavigate();

  const handleNavigate = (postId: number) => navigate(`/post/${postId}`);

  return (
    <PostsContainer>
      {posts.map(post => (
        <div
          key={post.id}
          onClick={() => handleNavigate(post.id)}
        >
          <PostCard
            title={post.title}
            date={post.date}
            content={post.content}
          />
        </div>
      ))}
    </PostsContainer>
  );
};
