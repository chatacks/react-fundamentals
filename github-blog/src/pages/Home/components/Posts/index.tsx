import { useNavigate } from 'react-router';
import { PostCard } from '../PostCard';
import { PostsContainer } from './styles';
import { useFetchIssue } from '../../../../hooks/useFetchIssue';

interface PostsProps {
  onPickTotalItems: (items: number) => void
}

interface Post {
  body: string;
  title: string;
  comments: number;
  date: string;
  username: string;
  htmlUrl: string;
}

export function Posts({ onPickTotalItems }: PostsProps) {
  const navigate = useNavigate();
  const { issues } = useFetchIssue();

  if (issues) {
    onPickTotalItems(issues.total_count);
  }

  const handleNavigate = (postId: number, postInfos: Post) => {
    navigate(`/post/${postId}`,
      { state: postInfos }
    );
  };

  return (
    <PostsContainer>
      {!issues ? (<p>Carregando...</p>) : (issues.items.map(issue => (
        <div
          key={issue.id}
          onClick={() => handleNavigate(
            issue.id,
            {
              body: issue.body,
              title: issue.title,
              comments: issue.comments,
              date: issue.created_at,
              username: issue.user.login,
              htmlUrl: issue.html_url
            }
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
