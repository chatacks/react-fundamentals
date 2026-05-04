import { Link } from 'react-router';
import { PostCardContainer, PostCardContent, PostCardHeader } from './styles';
import { ArrowSquareUpRightIcon, CalendarDotsIcon, CaretLeftIcon, ChatCircleIcon, GithubLogoIcon } from '@phosphor-icons/react';

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardContent>
        <PostCardHeader>
          <Link to="/">
            <CaretLeftIcon size={14}/>
            <span>voltar</span>
          </Link>

          <a
            href="https://www.github.com/chatacks"
            target="_blank"
            rel="noreferrer"
          >
            <span>ver no github</span>
            <ArrowSquareUpRightIcon size={14} />
          </a>
        </PostCardHeader>

        <div>
          <h2>JavaScript data types and data structures</h2>
          <div>
            <div>
              <GithubLogoIcon size={18} weight="duotone" />
              <span>chatacks</span>
            </div>
            <div>
              <CalendarDotsIcon size={18} weight="duotone" />
              <span>Há 1 dia</span>
            </div>
            <div>
              <ChatCircleIcon size={18} weight="duotone" />
              <span>5 comentários</span>
            </div>
          </div>
        </div>
      </PostCardContent>
    </PostCardContainer>
  );
};
