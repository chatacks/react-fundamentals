import { useLocation } from 'react-router';
import { PostCard } from './components/PostCard';
import { PostContainer } from './styles';
import Markdown from 'react-markdown';

export function Post() {
  const { state } = useLocation();
  console.log(state);


  return (
    <>
      <PostCard
        title={state.title}
        username={state.username}
        date={state.date}
        comments={state.comments}
        htmlUrl={state.htmlUrl}
      />
      <PostContainer>
        <div>
          <Markdown>{state.body}</Markdown>
        </div>
      </PostContainer>
    </>
  );
};
