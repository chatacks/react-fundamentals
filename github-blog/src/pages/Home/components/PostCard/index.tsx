import { PostCardContainer, PostCardContent, PostCardHeader } from './styles';

interface PostCardProps {
  id?: number;
  title: string;
  date: string;
  content: string;
}

export function PostCard({ title, date, content  }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h3>
          {title}
        </h3>

        <span>{date}</span>
      </PostCardHeader>

      <PostCardContent>
        <p>
          {content}
        </p>
      </PostCardContent>
    </PostCardContainer>
  );
};
