import { Link } from 'react-router';
import { PostCardContainer, PostCardContent, PostCardHeader } from './styles';
import { ArrowSquareUpRightIcon, CalendarDotsIcon, CaretLeftIcon, ChatCircleIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostCardProps {
  title: string;
  username: string;
  date: string;
  comments: number;
  htmlUrl: string;
}

export function PostCard({ title, username, date, comments, htmlUrl }: PostCardProps) {
  const formattedDateWithSufix = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR
  });

  return (
    <PostCardContainer>
      <PostCardContent>
        <PostCardHeader>
          <Link to="/">
            <CaretLeftIcon size={14}/>
            <span>voltar</span>
          </Link>

          <a
            href={htmlUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>ver no github</span>
            <ArrowSquareUpRightIcon size={14} />
          </a>
        </PostCardHeader>

        <div>
          <h2>{title}</h2>
          <div>
            <div>
              <GithubLogoIcon size={18} weight="duotone" />
              <span>{username}</span>
            </div>
            <div>
              <CalendarDotsIcon size={18} weight="duotone" />
              <span>{formattedDateWithSufix}</span>
            </div>
            <div>
              <ChatCircleIcon size={18} weight="duotone" />
              <span>
                {comments > 1 ?
                  `${comments} comentários` : `${comments} comentário`
                }
              </span>
            </div>
          </div>
        </div>
      </PostCardContent>
    </PostCardContainer>
  );
};
