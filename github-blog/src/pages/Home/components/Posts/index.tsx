import { useNavigate } from 'react-router';
import { PostCard } from '../PostCard';
import { PostsContainer } from './styles';
import { useFetchIssue } from '../../../../hooks/useFetchIssue';

interface PostsProps {
  onPickTotalItems: (items: number) => void
}

interface Post {
  body: string;
  comments: number;
}

export function Posts({ onPickTotalItems }: PostsProps) {
  const navigate = useNavigate();
  const { issues } = useFetchIssue();
  console.log(issues);


  if (issues) {
    onPickTotalItems(issues.total_count);
  }

  const handleNavigate = (postId: number, { body, comments }: Post) => {
    navigate(`/post/${postId}`, { state: { body, comments } });
  };

  return (
    <PostsContainer>
      {!issues ? (<p>Carregando...</p>) : (issues.items.map(issue => (
        <div
          key={issue.id}
          onClick={() => handleNavigate(
            issue.id,
            { body: issue.body, comments: issue.comments }
          )}
        >
          <PostCard
            body={issue.body}
            date={issue.created_at}
          />
        </div>
      )))}
    </PostsContainer>
  );
};
